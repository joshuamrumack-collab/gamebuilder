import os
import asyncio, os as _os
ROOT=_os.path.dirname(_os.path.dirname(_os.path.abspath(__file__)))
CHROME=_os.environ.get('CHROME')
from playwright.async_api import async_playwright
URL='file://'+ROOT+'/index.html'
OUT=_os.path.join(ROOT,'tests','shots2'); os.makedirs(OUT,exist_ok=True)

async def new_template(page, kind):
    await page.click('#btnNew'); await page.click(f'[data-new={kind}]'); await page.wait_for_timeout(250)

async def state(page, js):
    return await page.evaluate(js)

async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(**({'executable_path':CHROME} if CHROME else {}),args=['--no-sandbox'])
        ctx=await b.new_context(viewport={'width':1366,'height':768},accept_downloads=True)
        page=await ctx.new_page(); errs=[]
        page.on('pageerror',lambda e: errs.append('pageerror: '+str(e)))
        page.on('console',lambda m: errs.append('console: '+m.text) if m.type=='error' else None)
        await page.goto(URL); await page.evaluate('localStorage.clear()'); await page.reload(); await page.wait_for_timeout(400)
        await page.screenshot(path=f'{OUT}/01_platformer_editor.png')

        # --- platformer: play, reach flag -> level 2
        await page.click('#btnPlay'); await page.wait_for_timeout(300)
        print('plat start msg:', await state(page,"GB.current.msg&&GB.current.msg.text"))
        await page.evaluate("(()=>{const g=GB.current,f=g.ents.find(e=>e.cards.goal);g.player.x=f.x-30;g.player.y=f.y;g.inv=999})()")
        await page.keyboard.down('ArrowRight'); await page.wait_for_timeout(500); await page.keyboard.up('ArrowRight')
        print('after flag 1:', await state(page,"GB.current.state"))
        await page.wait_for_timeout(2000)
        print('scene now:', await state(page,"[GB.current.state,GB.current.sceneIdx]"))
        await page.screenshot(path=f'{OUT}/02_plat_level2.png')
        # breakable crate from below & checkpoint
        await page.evaluate("(()=>{const g=GB.current;g.score=19})()")
        await page.evaluate("(()=>{const g=GB.current;const c=g.ents.find(e=>e.cards.coin||e.cards.collectible);g.player.x=c.x;g.player.y=c.y;})()")
        await page.wait_for_timeout(200)
        print('var rule (score>=20) msg:', await state(page,"GB.current.msg&&GB.current.msg.text"))
        await page.keyboard.press('Escape'); await page.wait_for_timeout(200)

        # level tabs
        await page.click('#sceneTabs button:nth-child(2)'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/03_level2_editor.png')

        # --- rules panel
        await page.click('#btnRules'); await page.wait_for_timeout(200)
        await page.click('.examples button:nth-of-type(1)'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/04_rules.png')
        print('rules count:', await state(page,"JSON.parse(localStorage.getItem('gb2d-project-v1')||'{}').rules?.length"))

        # --- top-down
        await new_template(page,'topdown')
        await page.screenshot(path=f'{OUT}/05_topdown_editor.png')
        await page.click('#btnPlay'); await page.wait_for_timeout(400)
        await page.keyboard.down('ArrowRight'); await page.keyboard.down('ArrowDown'); await page.wait_for_timeout(400)
        await page.keyboard.up('ArrowDown'); await page.keyboard.press('Space'); await page.wait_for_timeout(300); await page.keyboard.up('ArrowRight')
        print('topdown: player', await state(page,"(()=>{const p=GB.current.player;return [Math.round(p.x),Math.round(p.y)]})()"), 'projectiles', await state(page,"GB.current.ents.filter(e=>e.proj).length"))
        await page.screenshot(path=f'{OUT}/06_topdown_play.png')
        # key -> door
        await page.evaluate("(()=>{const g=GB.current;const k=g.ents.find(e=>e.cards.key);g.player.x=k.x;g.player.y=k.y;g.player.inv=9999})()")
        await page.wait_for_timeout(100)
        print('keys held:', await state(page,"GB.current.keysHeld"))
        await page.evaluate("(()=>{const g=GB.current;const d=g.ents.find(e=>e.cards.lock);g.player.x=d.x+d.w/2-10;g.player.y=d.y-g.player.h-1;})()")
        await page.keyboard.down('ArrowDown'); await page.wait_for_timeout(300); await page.keyboard.up('ArrowDown')
        print('door open:', await state(page,"!GB.current.ents.some(e=>e.alive&&e.cards.lock)"), 'keys', await state(page,"GB.current.keysHeld"))
        # collect gems -> gate destroyed by rule
        await page.evaluate("(()=>{const g=GB.current;g.ents.filter(e=>e.cards.collectible).forEach(e=>{e.x=g.player.x;e.y=g.player.y;})})()")
        await page.wait_for_timeout(300)
        print('gates left:', await state(page,"GB.current.ents.filter(e=>e.alive&&e.obj==='gate').length"), 'msg:', await state(page,"GB.current.msg&&GB.current.msg.text"))
        await page.screenshot(path=f'{OUT}/07_topdown_gate.png')
        # talk bubble near wizard
        await page.evaluate("(()=>{const g=GB.current;const w=g.ents.find(e=>e.cards.talk);g.player.x=w.x+40;g.player.y=w.y;})()")
        await page.wait_for_timeout(300)
        await page.screenshot(path=f'{OUT}/08_talk.png')
        await page.keyboard.press('Escape')

        # --- arcade
        await new_template(page,'arcade')
        await page.click('#btnPlay'); await page.wait_for_timeout(2500)
        await page.keyboard.down('Space'); await page.keyboard.down('ArrowLeft'); await page.wait_for_timeout(800); await page.keyboard.up('ArrowLeft'); await page.keyboard.up('Space')
        print('arcade: score', await state(page,"GB.current.score"), 'meteors', await state(page,"GB.current.ents.filter(e=>e.alive&&e.obj==='meteor').length"), 'time', await state(page,"Math.ceil(GB.current.timeLeft)"))
        await page.screenshot(path=f'{OUT}/09_arcade.png')
        await page.evaluate("GB.current.timeLeft=0.05; GB.current.inv=999")
        await page.wait_for_timeout(300)
        print('arcade timeup ->', await state(page,"GB.current.state"))
        await page.keyboard.press('Escape')

        # --- builder level 3 + variables
        await page.click('#btnSettings'); await page.wait_for_timeout(100)
        await page.select_option('#inspector .sec:first-child label:last-of-type select', '3')
        await page.wait_for_timeout(200)
        await page.click('#btnRules'); await page.wait_for_timeout(200)
        await page.click('text=+ New number'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/10_rules_l3.png', full_page=False)

        # --- painter still works
        await page.click('#tabObjects'); await page.click('text=Draw a new object'); await page.wait_for_timeout(200)
        bx=await page.locator('#ptCanvas').bounding_box()
        await page.mouse.click(bx['x']+100,bx['y']+100); await page.click('#ptSave'); await page.wait_for_timeout(200)

        # --- swedish + export
        await page.click('#btnLang'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/11_swedish.png')
        await page.click('#btnExport'); await page.wait_for_timeout(200)
        async with page.expect_download() as d: await page.click('#reflBox .tb.primary')
        dl=await d.value; path=_os.path.join(ROOT,'tests','exported2.html'); await dl.save_as(path)
        gpg=await ctx.new_page(); gpg.on('pageerror',lambda e: errs.append('export: '+str(e)))
        await gpg.goto('file://'+path); await gpg.wait_for_timeout(400); await gpg.keyboard.press('Space'); await gpg.wait_for_timeout(1200)
        await gpg.screenshot(path=f'{OUT}/12_export.png')
        print('export size', os.path.getsize(path))
        # help
        await page.click('#btnHelp'); await page.wait_for_timeout(200); await page.screenshot(path=f'{OUT}/13_help.png')
        print('ERRORS:', errs or 'none')
        await b.close()
asyncio.run(main())
