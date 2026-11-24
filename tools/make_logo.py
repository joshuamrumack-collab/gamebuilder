import base64
import asyncio, os as _os
ROOT=_os.path.dirname(_os.path.dirname(_os.path.abspath(__file__)))
CHROME=_os.environ.get('CHROME')
from playwright.async_api import async_playwright
JS = r"""
(() => {
const FONT={G:['.###.','#...#','#....','#.###','#...#','#...#','.###.'],A:['.###.','#...#','#...#','#####','#...#','#...#','#...#'],
M:['#...#','##.##','#.#.#','#.#.#','#...#','#...#','#...#'],E:['#####','#....','#....','####.','#....','#....','#####'],
B:['####.','#...#','#...#','####.','#...#','#...#','####.'],U:['#...#','#...#','#...#','#...#','#...#','#...#','.###.'],
I:['#####','..#..','..#..','..#..','..#..','..#..','#####'],L:['#....','#....','#....','#....','#....','#....','#####'],
D:['####.','#...#','#...#','#...#','#...#','#...#','####.'],R:['####.','#...#','#...#','####.','#.#..','#..#.','#...#'],
'2':['.###.','#...#','....#','...#.','..#..','.#...','#####']};
function word(g,text,x,y,u,top,bottom){
  const chars=[...text]; const adv=6*u;
  [['#14162a',3],['#222034',0]].forEach(([col,off],pass)=>{
    chars.forEach((ch,ci)=>{const gl=FONT[ch]; if(!gl) return;
      gl.forEach((row,ry)=>[...row].forEach((c,rx)=>{ if(c!=='#') return;
        const px=x+ci*adv+rx*u, py=y+ry*u; g.fillStyle=col;
        g.fillRect(px-2+(pass===0?off:0),py-2+(pass===0?off:0),u+4,u+4);}));});
  });
  chars.forEach((ch,ci)=>{const gl=FONT[ch]; if(!gl) return;
    gl.forEach((row,ry)=>[...row].forEach((c,rx)=>{ if(c!=='#') return;
      const px=x+ci*adv+rx*u, py=y+ry*u; g.fillStyle=ry<3?top:bottom; g.fillRect(px,py,u,u);
      if(ry===0){g.fillStyle='rgba(255,255,255,.55)';g.fillRect(px,py,u,1);} }));});
  return chars.length*adv-u;
}
function scene(W,H,groundRow){
  const c=document.createElement('canvas'); c.width=W; c.height=H; const g=c.getContext('2d'); g.imageSmoothingEnabled=false;
  GB.drawBackground(g,'day',40,0,W,H,0);
  const gy=H-groundRow*32;
  for(let x=0;x<W;x+=32){ g.drawImage(GB.tileCanvas(1,true),x,gy); for(let y=gy+32;y<H;y+=32) g.drawImage(GB.tileCanvas(1,false),x,y); }
  return [c,g,gy];
}
// ---- banner 600x200 logical -> 1200x400
let [c,g,gy]=scene(600,200,1);
const spr=(id,x,y,s=1,flip=false)=>{const im=GB.spriteCanvas(id); g.save(); if(flip){g.translate(x+im.width*s,y);g.scale(-1,1);g.drawImage(im,0,0,im.width*s,im.height*s);} else g.drawImage(im,x,y,im.width*s,im.height*s); g.restore();};
[[1,6],[2,6],[3,6]].forEach(([tx])=>{});
for(let i=0;i<4;i++) g.drawImage(GB.tileCanvas(4,false),230+i*32,gy-58);
spr('coin',246,gy-96); spr('coin',278,gy-100); spr('coin',310,gy-96);
spr('fox',70,gy-64,2);
spr('slime',520,gy-32);
g.drawImage(GB.tileCanvas(7,false),170,gy-32); g.drawImage(GB.tileCanvas(6,false),400,gy-32); g.drawImage(GB.tileCanvas(8,false),560,gy-32);
spr('star',22,14); spr('gem',556,14);
const u=5, tw=12*6*u-u, tx=Math.round((600-tw)/2)+20;
word(g,'GAME',tx,32,u,'#ffd23f','#f28c28');
word(g,'BUILDER',tx+5*6*u,32,u,'#ffd23f','#f28c28');
// 2D badge
const bx=tx+tw-58, by=32+7*u+12;
g.fillStyle='#14162a'; g.fillRect(bx-3+3,by-3+3,72+6,46+6);
g.fillStyle='#222034'; g.fillRect(bx-3,by-3,72+6,46+6);
g.fillStyle='#e5484d'; g.fillRect(bx,by,72,46); g.fillStyle='#ff8a8d'; g.fillRect(bx,by,72,3);
word(g,'2D',bx+10,by+8,4,'#ffffff','#ffe1e1');
const big=document.createElement('canvas'); big.width=1200; big.height=400; const bg=big.getContext('2d'); bg.imageSmoothingEnabled=false; bg.drawImage(c,0,0,1200,400);
// ---- icon 128 -> 512
let [ic,ig,igy]=scene(128,128,1);
ig.drawImage(GB.spriteCanvas('fox'),32,igy-64,64,64);
ig.drawImage(GB.spriteCanvas('coin'),88,20); ig.drawImage(GB.spriteCanvas('star'),12,16);
const icon=document.createElement('canvas'); icon.width=512; icon.height=512; const icg=icon.getContext('2d'); icg.imageSmoothingEnabled=false;
icg.drawImage(ic,0,0,512,512);
const fav=document.createElement('canvas'); fav.width=64; fav.height=64; const fg=fav.getContext('2d'); fg.imageSmoothingEnabled=false; fg.drawImage(ic,0,0,64,64);
// ---- square logo 200 -> 800 (Google Sites)
let [sq,sg,sgy]=scene(200,200,1);
g=sg;
const su=4, w1=4*6*su-su, w2=7*6*su-su;
word(sg,'GAME',Math.round((200-w1)/2),14,su,'#ffd23f','#f28c28');
word(sg,'BUILDER',Math.round((200-w2)/2),14+7*su+10,su,'#ffd23f','#f28c28');
const qx=112, qy=88;
sg.fillStyle='#14162a'; sg.fillRect(qx,qy,64,40); sg.fillStyle='#222034'; sg.fillRect(qx-3,qy-3,64,40);
sg.fillStyle='#e5484d'; sg.fillRect(qx,qy,58,34); sg.fillStyle='#ff8a8d'; sg.fillRect(qx,qy,58,2);
word(sg,'2D',qx+9,qy+6,3,'#ffffff','#ffe1e1');
sg.drawImage(GB.spriteCanvas('fox'),18,sgy-64,64,64);
sg.drawImage(GB.spriteCanvas('coin'),92,sgy-40); sg.drawImage(GB.spriteCanvas('slime'),150,sgy-32);
sg.drawImage(GB.tileCanvas(7,false),118,sgy-32);
const sqb=document.createElement('canvas'); sqb.width=800; sqb.height=800; const sbg=sqb.getContext('2d'); sbg.imageSmoothingEnabled=false; sbg.drawImage(sq,0,0,800,800);
const sqs=document.createElement('canvas'); sqs.width=400; sqs.height=400; const ssg=sqs.getContext('2d'); ssg.imageSmoothingEnabled=false; ssg.drawImage(sq,0,0,400,400);
return [big.toDataURL(), icon.toDataURL(), fav.toDataURL(), sqb.toDataURL(), sqs.toDataURL()];
})()
"""
async def main():
    async with async_playwright() as p:
        b=await p.chromium.launch(**({'executable_path':CHROME} if CHROME else {}),args=['--no-sandbox'])
        pg=await b.new_page(); await pg.goto('file://'+ROOT+'/index.html'); await pg.wait_for_timeout(300)
        out=await pg.evaluate(JS)
        for name,d in zip(['logo-wide.png','icon-512.png','favicon-64.png','logo-square-800.png','logo-square-400.png'],out):
            open(''+ROOT+'/assets/'+name,'wb').write(base64.b64decode(d.split(',')[1]))
        await b.close()
asyncio.run(main())
print('done')
