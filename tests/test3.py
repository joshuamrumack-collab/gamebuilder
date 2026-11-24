import os
import asyncio, os as _os
ROOT=_os.path.dirname(_os.path.dirname(_os.path.abspath(__file__)))
CHROME=_os.environ.get('CHROME')
from playwright.async_api import async_playwright
URL='file://'+ROOT+'/index.html'
OUT=_os.path.join(ROOT,'tests','shots3'); os.makedirs(OUT,exist_ok=True)
async def ev(page,js): return await page.evaluate(js)
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(**({'executable_path':CHROME} if CHROME else {}),args=['--no-sandbox','--autoplay-policy=no-user-gesture-required'])
        ctx=await b.new_context(viewport={'width':1366,'height':768},accept_downloads=True)
        page=await ctx.new_page(); errs=[]
        page.on('pageerror',lambda e: errs.append('pageerror: '+str(e)))
        page.on('console',lambda m: errs.append('console: '+m.text) if m.type=='error' else None)
        await page.goto(URL); await ev(page,'localStorage.clear()'); await page.reload(); await page.wait_for_timeout(400)
        await page.screenshot(path=f'{OUT}/01_editor.png')

        # rectangle tool: paint stone block area
        cv=await page.locator('#editCanvas').bounding_box()
        await page.click('#tabTiles'); await page.click('.tile-btn:nth-child(2)')
        await page.click('[data-tool=rect]')
        await page.mouse.move(cv['x']+3*32+5,cv['y']+3*32+5); await page.mouse.down()
        await page.mouse.move(cv['x']+6*32+5,cv['y']+4*32+5); await page.mouse.up()
        print('rect stone tiles:', await ev(page,"JSON.parse(localStorage.getItem('gb2d-project-v1')||'null')"), '(checked below)')
        await page.wait_for_timeout(500)
        cnt=await ev(page,"(()=>{const p=JSON.parse(localStorage.getItem('gb2d-project-v1'));const s=p.scenes[0];let n=0;for(let y=3;y<=4;y++)for(let x=3;x<=6;x++)if(s.tiles[y*s.w+x]===2)n++;return n})()")
        print('rect filled cells (expect 8):', cnt)
        # fill tool: fill the sky region bounded? fill an empty area with bricks -> many tiles; then undo
        await page.click('.tile-btn:nth-child(3)'); await page.click('[data-tool=fill]')
        await page.mouse.click(cv['x']+1*32+5,cv['y']+1*32+5); await page.wait_for_timeout(500)
        filled=await ev(page,"(()=>{const p=JSON.parse(localStorage.getItem('gb2d-project-v1'));return p.scenes[0].tiles.filter(t=>t===3).length})()")
        print('fill bricks count:', filled)
        await page.click('#btnUndo'); await page.wait_for_timeout(500)
        print('after undo bricks:', await ev(page,"(()=>{const p=JSON.parse(localStorage.getItem('gb2d-project-v1'));return p.scenes[0].tiles.filter(t=>t===3).length})()"))

        # draw a custom tile
        await page.click('text=Draw a tile'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/02_tile_painter.png')
        await page.click('#ptTypes button:nth-child(4)')  # hazard
        await page.click('#ptSave'); await page.wait_for_timeout(700)
        print('custom tiles:', await ev(page,"Object.keys(JSON.parse(localStorage.getItem('gb2d-project-v1')||'{}').tiles||{})"))
        await page.click('[data-tool=paint]')
        await page.mouse.click(cv['x']+8*32+5,cv['y']+9*32+5)
        await page.wait_for_timeout(300)
        await page.screenshot(path=f'{OUT}/03_custom_tile_placed.png')

        # image import into painter
        import base64
        png=base64.b64decode('iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAJklEQVR42mP8z8Dwn4EIwMRAJGAcVUhPhf+BFP8nRgOq4ahCOioEACdCCAqgqVYNAAAAAElFTkSuQmCC')
        open('/tmp/test.png','wb').write(png)
        await page.click('#tabObjects'); await page.click('text=Draw a new object'); await page.wait_for_timeout(200)
        await page.set_input_files('#ptImport','/tmp/test.png'); await page.wait_for_timeout(400)
        await page.screenshot(path=f'{OUT}/04_import.png')
        await page.click('#ptCancel')

        # level 2 moving platform test
        await page.click('#sceneTabs button:nth-child(2)'); await page.wait_for_timeout(200)
        await page.click('#btnPlay'); await page.wait_for_timeout(500)
        print('ERRS SO FAR', errs)
        r=await ev(page,"(()=>{const g=GB.current,l=g.ents.find(e=>e.cards.path);g.player.x=l.x+4;g.player.y=l.y-g.player.h-2;g.player.vy=0;g.player.inv=9999;return Math.round(l.x)})()")
        await page.wait_for_timeout(1200)
        r2=await ev(page,"(()=>{const g=GB.current,l=g.ents.find(e=>e.cards.path);return [Math.round(l.x),Math.round(g.player.x),g.player.standOn===l]})()")
        print('lift start x',r,'-> lift/player/riding',r2)
        # pause
        await page.keyboard.press('KeyP'); await page.wait_for_timeout(200)
        print('paused:', await ev(page,"GB.current.paused"))
        await page.screenshot(path=f'{OUT}/05_paused.png')
        await page.keyboard.press('KeyP')
        await page.keyboard.press('Escape'); await page.wait_for_timeout(200)

        # top-down pushable
        await page.click('#btnNew'); await page.click('[data-new=topdown]'); await page.wait_for_timeout(300)
        await page.click('#btnPlay'); await page.wait_for_timeout(400)
        bx=await ev(page,"(()=>{const g=GB.current,b=g.ents.find(e=>e.cards.pushable);g.player.x=b.x-g.player.w-2;g.player.y=b.y+(b.h-g.player.h)/2;g.player.inv=9999;return Math.round(b.x)})()")
        await page.keyboard.down('ArrowRight'); await page.wait_for_timeout(600); await page.keyboard.up('ArrowRight')
        print('boulder pushed from',bx,'to', await ev(page,"Math.round(GB.current.ents.find(e=>e.cards.pushable).x)"))
        await page.keyboard.press('Escape')

        # rules: destroyed trigger + message + effect + picture
        await page.click('#btnRules'); await page.wait_for_timeout(200)
        await ev(page,"""(()=>{})()""")
        await page.click('text=+ New rule'); await page.wait_for_timeout(200)
        # set the last rule via UI selects: trigger destroyed, obj slime ; actions
        rules=page.locator('#inspector .rule')
        n=await rules.count(); last=rules.nth(n-1)
        await last.locator('select').nth(0).select_option('destroyed'); await page.wait_for_timeout(150)
        last=page.locator('#inspector .rule').nth(n-1)
        await last.locator('select').nth(1).select_option('slime'); await page.wait_for_timeout(150)
        last=page.locator('#inspector .rule').nth(n-1)
        await last.locator('.act select').nth(0).select_option('send'); await page.wait_for_timeout(150)
        last=page.locator('#inspector .rule').nth(n-1)
        await last.locator('.act input[type=text]').fill('boom'); await last.locator('.act input[type=text]').press('Tab')
        await page.click('text=+ New rule'); await page.wait_for_timeout(200)
        last=page.locator('#inspector .rule').nth(n)
        await last.locator('select').nth(0).select_option('message'); await page.wait_for_timeout(150)
        last=page.locator('#inspector .rule').nth(n)
        await last.locator('input[type=text]').first.fill('boom'); await last.locator('input[type=text]').first.press('Tab'); await page.wait_for_timeout(150)
        last=page.locator('#inspector .rule').nth(n)
        await last.locator('.act select').nth(0).select_option('effect'); await page.wait_for_timeout(150)
        await page.screenshot(path=f'{OUT}/06_rules_new.png')
        await page.click('#btnPlay'); await page.wait_for_timeout(300)
        await ev(page,"(()=>{const g=GB.current,s=g.ents.find(e=>e.obj==='slime');g.kill(s,true);})()")
        await page.wait_for_timeout(150)
        print('particles after message+effect:', await ev(page,"GB.current.particles.length"))
        await page.screenshot(path=f'{OUT}/07_effect.png')
        print('play vars text:', await page.inner_text('#playVars'))
        await page.keyboard.press('Escape')

        # music selector present
        await page.click('#btnSettings'); await page.wait_for_timeout(200)
        print('music select value:', await ev(page,"[...document.querySelectorAll('#inspector select')].map(s=>s.value).join(',')"))

        # export & play exported with best score
        await page.click('#btnExport'); await page.wait_for_timeout(200)
        async with page.expect_download() as d: await page.click('#reflBox .tb.primary')
        dl=await d.value; path=_os.path.join(ROOT,'tests','exported3.html'); await dl.save_as(path)
        gp=await ctx.new_page(); gp.on('pageerror',lambda e: errs.append('export: '+str(e)))
        await gp.goto('file://'+path); await gp.wait_for_timeout(300); await gp.keyboard.press('Space'); await gp.wait_for_timeout(300)
        await ev(gp,"(()=>{const g=GB.current;g.score=42;g.state='over';})()"); await gp.wait_for_timeout(300)
        print('exported best:', await ev(gp,"[GB.current.best,GB.current.newBest]"))
        await gp.screenshot(path=f'{OUT}/08_export_best.png')
        print('ERRORS:', errs or 'none')
        await b.close()
asyncio.run(main())
