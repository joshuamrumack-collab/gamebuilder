import os, struct, math, base64
import asyncio, os as _os
ROOT=_os.path.dirname(_os.path.dirname(_os.path.abspath(__file__)))
CHROME=_os.environ.get('CHROME')
from playwright.async_api import async_playwright
URL='file://'+ROOT+'/index.html'
OUT=_os.path.join(ROOT,'tests','shots4'); os.makedirs(OUT,exist_ok=True)
async def ev(page,js): return await page.evaluate(js)

def make_wav(path):
    sr=8000; n=sr//4
    data=b''.join(struct.pack('<h',int(8000*math.sin(2*math.pi*440*i/sr))) for i in range(n))
    hdr=b'RIFF'+struct.pack('<I',36+len(data))+b'WAVEfmt '+struct.pack('<IHHIIHH',16,1,1,sr,sr*2,2,16)+b'data'+struct.pack('<I',len(data))
    open(path,'wb').write(hdr+data)

async def main():
    make_wav('/tmp/beep.wav')
    # 32x32 fox replacement png (solid purple square) via canvas in page later
    async with async_playwright() as p:
        b=await p.chromium.launch(**({'executable_path':CHROME} if CHROME else {}),args=['--no-sandbox','--autoplay-policy=no-user-gesture-required'])
        ctx=await b.new_context(viewport={'width':1366,'height':768},accept_downloads=True)
        page=await ctx.new_page(); errs=[]
        page.on('pageerror',lambda e: errs.append('pageerror: '+str(e)))
        page.on('console',lambda m: errs.append('console: '+m.text) if m.type=='error' else None)
        await page.goto(URL); await ev(page,'localStorage.clear()'); await page.reload(); await page.wait_for_timeout(400)
        async def new(kind):
            await page.click('#btnNew'); await page.click(f'[data-new={kind}]'); await page.wait_for_timeout(300)

        # ---------- 3D first person
        await new('fp')
        await page.screenshot(path=f'{OUT}/01_fp_editor.png')
        await page.click('#btnPlay'); await page.wait_for_timeout(500)
        await page.keyboard.down('ArrowDown'); await page.wait_for_timeout(200); await page.keyboard.up('ArrowDown')
        await page.keyboard.down('ArrowRight'); await page.wait_for_timeout(500); await page.keyboard.up('ArrowRight')
        await page.keyboard.down('ArrowUp'); await page.wait_for_timeout(500); await page.keyboard.up('ArrowUp')
        print('fp: angle', round(await ev(page,'GB.current.ang'),2), 'player', await ev(page,'[Math.round(GB.current.player.x),Math.round(GB.current.player.y)]'))
        await page.screenshot(path=f'{OUT}/02_fp_play.png')
        # face a skeleton to see sprites
        await ev(page,"(()=>{const g=GB.current,s=g.ents.find(e=>e.obj==='skeleton');g.player.x=s.x-70;g.player.y=s.y;g.ang=0;g.player.inv=999;})()")
        await page.wait_for_timeout(150); await page.screenshot(path=f'{OUT}/03_fp_sprite.png')
        # quiz in fp
        await ev(page,"(()=>{const g=GB.current,s=g.ents.find(e=>e.cards.quiz);g.player.x=s.x;g.player.y=s.y;})()")
        await page.wait_for_timeout(200)
        print('fp quiz open:', await ev(page,'!!GB.current.ask'), await ev(page,'GB.current.ask&&GB.current.ask.q'))
        await page.screenshot(path=f'{OUT}/04_fp_quiz.png')
        sc0=await ev(page,'GB.current.score')
        await page.keyboard.press('Digit2'); await page.wait_for_timeout(200)
        print('quiz answered right: score', sc0,'->', await ev(page,'GB.current.score'), 'msg', await ev(page,'GB.current.msg&&GB.current.msg.text'))
        await page.keyboard.press('Escape')

        # ---------- top-down quiz wrong answer
        await new('topdown')
        await page.click('#btnPlay'); await page.wait_for_timeout(300)
        await ev(page,"(()=>{const g=GB.current,s=g.ents.find(e=>e.cards.quiz);g.player.x=s.x;g.player.y=s.y;})()")
        await page.wait_for_timeout(200)
        await page.keyboard.press('Digit1'); await page.wait_for_timeout(200)
        print('wrong answer msg:', await ev(page,'GB.current.msg&&GB.current.msg.text'), 'riddle still there:', await ev(page,"GB.current.ents.some(e=>e.alive&&e.cards.quiz)"))
        await page.keyboard.press('Escape')

        # ---------- platformer: story end + 2 players + ladder
        await new('starter')
        tabs=await ev(page,"[...document.querySelectorAll('#sceneTabs button')].map(b=>b.textContent)")
        print('tabs:', tabs)
        await page.click('#sceneTabs button:nth-child(3)'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/05_story_editor.png')
        await page.click('#sceneTabs button:nth-child(2)'); await page.wait_for_timeout(200)
        await page.click('#btnPlay'); await page.wait_for_timeout(300)
        await ev(page,"(()=>{const g=GB.current,f=g.ents.find(e=>e.cards.goal);g.player.x=f.x;g.player.y=f.y;})()")
        await page.wait_for_timeout(2200)
        print('after level 2 goal:', await ev(page,"[GB.current.state,GB.current.sceneIdx]"))
        await page.screenshot(path=f'{OUT}/06_story_play.png')
        await page.keyboard.press('Space'); await page.wait_for_timeout(200)
        print('after story key:', await ev(page,"GB.current.state"))
        await page.keyboard.press('Escape')
        # place player 2 and a ladder in level 1
        await page.click('#sceneTabs button:nth-child(1)'); await page.wait_for_timeout(200)
        cv=await page.locator('#editCanvas').bounding_box()
        await page.click('#tabObjects'); await page.click('.obj-btn:nth-child(2)')  # hero2
        await page.mouse.click(cv['x']+4*32+10,cv['y']+9*32+10)
        await page.click('#tabTiles')
        await page.click('.tile-btn:nth-child(6)')  # ladder (order: 1,2,3,4,5,16)
        for yy in range(6,10): await page.mouse.click(cv['x']+7*32+10,cv['y']+yy*32+10)
        await page.wait_for_timeout(200)
        await page.click('#btnPlay'); await page.wait_for_timeout(300)
        print('players:', await ev(page,"GB.current.players.map(p=>p.obj)"))
        x2=await ev(page,"Math.round(GB.current.players[1].x)")
        await page.keyboard.down('KeyD'); await page.wait_for_timeout(400); await page.keyboard.up('KeyD')
        print('p2 moved with D:', x2,'->', await ev(page,"Math.round(GB.current.players[1].x)"))
        await page.screenshot(path=f'{OUT}/07_two_players.png')
        await ev(page,"(()=>{const g=GB.current,p=g.player;p.x=7*32+5;p.y=9*32+4;p.vx=0;p.vy=0;})()")
        await page.keyboard.down('ArrowUp'); await page.wait_for_timeout(700); await page.keyboard.up('ArrowUp')
        print('ladder climb y:', await ev(page,"[Math.round(GB.current.player.y),GB.current.player.climbing]"))
        await page.keyboard.press('Escape')

        # ---------- sounds upload + map
        await page.click('#btnSettings'); await page.wait_for_timeout(200)
        inp=page.locator('#inspector input[type=file][accept="audio/*"]')
        await inp.set_input_files('/tmp/beep.wav'); await page.wait_for_timeout(500)
        print('sounds:', await ev(page,"Object.keys(JSON.parse(localStorage.getItem('gb2d-project-v1')).sounds||{}).length"))
        # map jump to it
        sel=page.locator('#inspector .sec label.setting select').first
        opts=await sel.evaluate("s=>[...s.options].map(o=>o.value)")
        await sel.select_option(opts[1]); await page.wait_for_timeout(500)
        print('sfxMap:', await ev(page,"JSON.stringify(JSON.parse(localStorage.getItem('gb2d-project-v1')).settings.sfxMap)"))

        # ---------- art pack import: make 32x32 png named fox.png
        png=await ev(page,"(()=>{const c=document.createElement('canvas');c.width=64;c.height=32;const g=c.getContext('2d');g.fillStyle='#9b5de5';g.fillRect(4,4,24,26);g.fillStyle='#ffd23f';g.fillRect(36,8,24,22);return c.toDataURL().split(',')[1]})()")
        open('/tmp/fox.png','wb').write(base64.b64decode(png))
        await page.locator('#inspector input[type=file][accept="image/png,image/*"]').set_input_files('/tmp/fox.png'); await page.wait_for_timeout(600)
        print('overrides:', await ev(page,"JSON.stringify(JSON.parse(localStorage.getItem('gb2d-project-v1')).overrides)"))
        await page.screenshot(path=f'{OUT}/08_artpack.png')

        # ---------- teacher challenge + lock
        await page.fill('#inspector .sec:last-child input[type=text]','Make it harder'); await page.keyboard.press('Tab')
        tas=page.locator('#inspector .sec:last-child textarea')
        await tas.nth(0).fill('Add 3 more enemies and a quiz question.'); await tas.nth(0).press('Tab')
        await tas.nth(1).fill('Place 3 slimes\nAdd a Quiz card\nTest your game'); await tas.nth(1).press('Tab')
        await page.wait_for_timeout(300)
        await page.screenshot(path=f'{OUT}/09_teacher.png')
        print('challenge visible:', await ev(page,"document.getElementById('challengeBox').style.display!=='none'"), await ev(page,"document.querySelectorAll('#challengeBox .ch-step').length"))

        # ---------- big sprite drawing
        await page.click('#tabObjects'); await page.click('text=Draw a new object'); await page.wait_for_timeout(200)
        await page.click('#ptSizeRow button:nth-child(2)'); await page.wait_for_timeout(100)
        bx=await page.locator('#ptCanvas').bounding_box()
        await page.click('[data-pt=fill]'); await page.mouse.click(bx['x']+100,bx['y']+100)
        await page.screenshot(path=f'{OUT}/10_big_painter.png')
        await page.click('#ptTypes button:nth-child(2)'); await page.click('#ptSave'); await page.wait_for_timeout(300)
        await page.click('[data-tool=paint]'); await page.mouse.click(cv['x']+20*32+10,cv['y']+7*32+10); await page.wait_for_timeout(200)
        print('big sprite size:', await ev(page,"(()=>{const p=JSON.parse(localStorage.getItem('gb2d-project-v1'));const s=Object.values(p.sprites).find(s=>s.size===32);return s&&[s.size,s.scale]})()"))

        # ---------- rule ask with choices -> message -> text
        await page.click('#btnRules'); await page.wait_for_timeout(200)
        await ev(page,"""(()=>{})()""")
        await page.click('text=+ New rule'); await page.wait_for_timeout(150)
        rules=page.locator('#inspector .rule'); n=await rules.count()
        await rules.nth(n-1).locator('select').nth(0).select_option('start'); await page.wait_for_timeout(150)
        await page.locator('#inspector .rule').nth(n-1).locator('.act select').nth(0).select_option('ask'); await page.wait_for_timeout(150)
        await page.click('text=+ New rule'); await page.wait_for_timeout(150)
        await page.locator('#inspector .rule').nth(n).locator('select').nth(0).select_option('message'); await page.wait_for_timeout(150)
        r=page.locator('#inspector .rule').nth(n)
        await r.locator('input[type=text]').first.fill('right'); await r.locator('input[type=text]').first.press('Tab'); await page.wait_for_timeout(150)
        await page.locator('#inspector .rule').nth(n).locator('.act select').nth(0).select_option('text'); await page.wait_for_timeout(150)
        await page.screenshot(path=f'{OUT}/11_ask_rule.png')
        await page.click('#sceneTabs button:nth-child(1)')
        await page.click('#btnPlay'); await page.wait_for_timeout(400)
        print('ask open at start:', await ev(page,"GB.current.ask&&GB.current.ask.choices"))
        await page.screenshot(path=f'{OUT}/12_ask_play.png')
        await page.keyboard.press('ArrowDown'); await page.keyboard.press('Enter'); await page.wait_for_timeout(300)
        print('after choosing Right -> msg:', await ev(page,"GB.current.msg&&GB.current.msg.text"))
        await page.keyboard.press('Escape')

        # ---------- scan controls + dwell
        await page.click('#btnSettings'); await page.wait_for_timeout(200)
        ctl=page.locator('#inspector .sec:first-child label').filter(has_text='Controls').locator('select')
        await ctl.select_option('scan'); await page.wait_for_timeout(200)
        await page.click('#btnPlay'); await page.wait_for_timeout(1500)
        await ev(page,"GB.current.ask=null")
        idx=await ev(page,"GB.current.scanIdx")
        await page.wait_for_timeout(1400)
        print('scan idx moves:', idx,'->', await ev(page,"GB.current.scanIdx"))
        await page.screenshot(path=f'{OUT}/13_scan.png')
        await page.keyboard.press('Escape')
        ctl=page.locator('#inspector .sec:first-child label').filter(has_text='Controls').locator('select')
        await ctl.select_option('dwell'); await page.wait_for_timeout(200)
        await page.click('#btnPlay'); await page.wait_for_timeout(400)
        await ev(page,"GB.current.ask=null")
        btn=await ev(page,"(()=>{const b=GB.current.touchButtons().right;return [b.x,b.y]})()")
        pc=await page.locator('#playCanvas').bounding_box()
        x0=await ev(page,"Math.round(GB.current.player.x)")
        await page.mouse.move(pc['x']+btn[0]/640*pc['width'],pc['y']+btn[1]/360*pc['height']); await page.wait_for_timeout(1200)
        print('dwell moved player:', x0,'->', await ev(page,"Math.round(GB.current.player.x)"))
        await page.screenshot(path=f'{OUT}/14_dwell.png')
        await page.keyboard.press('Escape')

        # ---------- export with reflection, then remix open
        await page.click('#btnExport'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/15_reflection.png')
        tas=page.locator('#reflBox textarea')
        await tas.nth(0).fill('A fox collecting coins')
        async with page.expect_download() as d: await page.click('#reflBox .tb.primary')
        dl=await d.value; path=_os.path.join(ROOT,'tests','exported4.html'); await dl.save_as(path)
        html=open(path).read()
        print('export has description meta:', 'name="description"' in html, 'size', len(html))
        gp=await ctx.new_page(); gp.on('pageerror',lambda e: errs.append('export: '+str(e)))
        await gp.goto('file://'+path); await gp.wait_for_timeout(300); await gp.keyboard.press('Space'); await gp.wait_for_timeout(600)
        await gp.screenshot(path=f'{OUT}/16_export_play.png')
        await new('arcade')
        await page.set_input_files('#fileOpen',path); await page.wait_for_timeout(500)
        print('remix opened name:', await ev(page,"document.getElementById('projName').value"), 'scenes', await ev(page,"document.querySelectorAll('#sceneTabs button').length"))
        # big ui
        await page.click('#btnSettings')
        print('ERRORS:', errs or 'none')
        await b.close()
asyncio.run(main())
