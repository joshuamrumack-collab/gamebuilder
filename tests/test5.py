import os
import asyncio, os as _os
ROOT=_os.path.dirname(_os.path.dirname(_os.path.abspath(__file__)))
CHROME=_os.environ.get('CHROME')
from playwright.async_api import async_playwright
URL='file://'+ROOT+'/index.html'
OUT=_os.path.join(ROOT,'tests','shots5'); os.makedirs(OUT,exist_ok=True)
async def ev(page,js): return await page.evaluate(js)
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(**({'executable_path':CHROME} if CHROME else {}),args=['--no-sandbox'])
        ctx=await b.new_context(viewport={'width':1366,'height':768},accept_downloads=True)
        page=await ctx.new_page(); errs=[]
        page.on('pageerror',lambda e: errs.append('pageerror: '+str(e)))
        page.on('console',lambda m: errs.append('console: '+m.text) if m.type=='error' else None)
        await page.goto(URL); await ev(page,'localStorage.clear()'); await page.reload(); await page.wait_for_timeout(400)
        # gallery of everything rendered by the engine
        data=await ev(page,"""(()=>{
          const ids=Object.keys(GB.SPRITES), cols=16, cell=72;
          const tiles=Object.keys(GB.TILES), bgs=Object.keys(GB.BGS);
          const rows=Math.ceil(ids.length/cols), trows=Math.ceil(tiles.length/cols);
          const c=document.createElement('canvas'); c.width=cols*cell; c.height=(rows+trows)*cell+Math.ceil(bgs.length/4)*130+40;
          const g=c.getContext('2d'); g.fillStyle='#bfe6ff'; g.fillRect(0,0,c.width,c.height); g.imageSmoothingEnabled=false;
          ids.forEach((id,k)=>{const im=GB.spriteCanvas(id); const s=im.width>32?1:2; const w=im.width*s/ (im.width>32?1:1);
            const dw=im.width>32?64:64; g.drawImage(im,(k%cols)*cell+(cell-dw)/2,Math.floor(k/cols)*cell+4,dw,dw);});
          tiles.forEach((id,k)=>{g.drawImage(GB.tileCanvas(+id,true),(k%cols)*cell+4,(rows+Math.floor(k/cols))*cell+4,64,64);});
          bgs.forEach((k,i)=>{const bc=document.createElement('canvas');bc.width=320;bc.height=120;GB.drawBackground(bc.getContext('2d'),k,0,0,320,120,0);g.drawImage(bc,(i%4)*(c.width/4)+4,(rows+trows)*cell+20+Math.floor(i/4)*130,c.width/4-8,120);g.fillStyle='#222';g.font='bold 14px sans-serif';g.fillText(k,(i%4)*(c.width/4)+10,(rows+trows)*cell+36+Math.floor(i/4)*130);});
          return c.toDataURL();
        })()""")
        import base64
        open(f'{OUT}/gallery.png','wb').write(base64.b64decode(data.split(',')[1]))
        print('sprites', await ev(page,'Object.keys(GB.SPRITES).length'), 'tiles', await ev(page,'Object.keys(GB.TILES).length'), 'bgs', await ev(page,'Object.keys(GB.BGS).length'))
        # picker
        await page.click('#tabObjects'); await page.click('.obj-btn:nth-child(1)'); await page.wait_for_timeout(200)
        await page.screenshot(path=f'{OUT}/picker.png')
        await page.fill('#inspector input[type=search]','dra'); await page.wait_for_timeout(200)
        print('search dra results:', await ev(page,"document.querySelectorAll('#inspector details.piccat .sprites button').length"))
        # boss in play: give slime the dragon picture and place
        await ev(page,"(()=>{})()")
        await page.click('.obj-btn:nth-child(5)')  # slime? check
        nm=await ev(page,"document.querySelector('#inspector input[type=text]').value")
        await page.fill('#inspector input[type=search]','dragon'); await page.wait_for_timeout(150)
        await page.click('#inspector details.piccat .sprites button'); await page.wait_for_timeout(200)
        print('object',nm,'now uses', await ev(page,"JSON.parse(localStorage.getItem('gb2d-project-v1')||'{}').objects"))
        await page.wait_for_timeout(500)
        await page.click('#btnPlay'); await page.wait_for_timeout(600)
        await ev(page,"(()=>{const g=GB.current;const s=g.ents.find(e=>e.sprite==='dragon');if(s){g.player.x=s.x-120;g.player.y=s.y+s.h-g.player.h;g.player.inv=999;}})()")
        await page.wait_for_timeout(300)
        await page.screenshot(path=f'{OUT}/boss_play.png')
        await page.keyboard.press('Escape')
        # draw my own version of a big boss
        await page.click('#inspector .tb.add-btn'); await page.wait_for_timeout(200)
        print('painter size for boss:', await ev(page,"document.querySelectorAll('#ptSizeRow .chip.on')[0].textContent"))
        await page.click('#ptCancel')
        # new tile + background in level
        await page.click('#btnSettings'); await page.wait_for_timeout(200)
        await page.locator('#inspector label').filter(has_text='Background').locator('select').select_option('forest'); await page.wait_for_timeout(300)
        await page.click('#tabTiles'); await page.wait_for_timeout(100)
        await page.screenshot(path=f'{OUT}/forest_tiles.png')
        print('ERRORS:', errs or 'none')
        await b.close()
asyncio.run(main())
