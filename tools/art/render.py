"""Render sprite definitions (same algorithm as the game's runtime) into a contact sheet."""
import sys, importlib
from PIL import Image, ImageDraw, ImageFont

PAL = {'k':'#222034','o':'#f28c28','O':'#b8621b','w':'#ffffff','W':'#d8dee9','g':'#5ac54f','G':'#2f8a3b','l':'#a8f08f','y':'#ffd23f','Y':'#d99a00','r':'#e5484d','R':'#a62a2f','b':'#4c8bf5','B':'#2b5bb8','c':'#7fe3ff','n':'#c48a54','N':'#7a4a24','s':'#a7b0be','S':'#5d6676','p':'#ff8fab','v':'#9b5de5','V':'#5f2f9e','f':'#f6d5b0',
       'F':'#c68a5b','H':'#8a5a3c','t':'#ffb13b','z':'#ff6b2c','m':'#c9673f','e':'#3d7fe0','i':'#bfefff','P':'#c9a3f0','C':'#fff3c4','a':'#2ec4b6','A':'#16867c','x':'#3a3f5c','d':'#4a2c1a'}

def pixels(rects, N):
    px = [None]*(N*N)
    for x, y, w, h, c in rects:
        for j in range(y, y+h):
            for i in range(x, x+w):
                if 0 <= i < N and 0 <= j < N:
                    px[j*N+i] = c
    out = px[:]
    for j in range(N):
        for i in range(N):
            if px[j*N+i]: continue
            for dx, dy in ((1,0),(-1,0),(0,1),(0,-1)):
                a, b = i+dx, j+dy
                if 0 <= a < N and 0 <= b < N and px[b*N+a] and px[b*N+a] != 'k':
                    out[j*N+i] = 'k'; break
    return out

def sprite_img(entry, scale=4):
    sid, en, sv, cat, hit, rects = entry[:6]
    N = entry[6] if len(entry) > 6 else 16
    px = pixels(rects, N)
    im = Image.new('RGBA', (N*scale, N*scale), (0,0,0,0))
    d = ImageDraw.Draw(im)
    for j in range(N):
        for i in range(N):
            c = px[j*N+i]
            if c:
                d.rectangle([i*scale, j*scale, (i+1)*scale-1, (j+1)*scale-1], fill=PAL.get(c, c))
    return im

def sheet(entries, path, cols=10, cell=96):
    rows = (len(entries)+cols-1)//cols
    im = Image.new('RGB', (cols*cell, rows*(cell+16)), '#bfe6ff')
    d = ImageDraw.Draw(im)
    for k, e in enumerate(entries):
        N = e[6] if len(e) > 6 else 16
        sc = 4 if N == 16 else 2
        s = sprite_img(e, sc)
        x = (k % cols)*cell + (cell - s.width)//2
        y = (k // cols)*(cell+16) + (cell - s.height)//2
        im.paste(s, (x, y), s)
        d.text(((k % cols)*cell+4, (k//cols)*(cell+16)+cell), e[0][:15], fill='#222034')
    im.save(path)

if __name__ == '__main__':
    mod = importlib.import_module(sys.argv[1])
    sheet(mod.ART, sys.argv[2])
    print('rendered', len(mod.ART))
