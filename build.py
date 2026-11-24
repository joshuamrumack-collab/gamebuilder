import sys
s=open('src/shell.html').read()
rt=open('src/runtime.js').read()
ed=open('src/editor.js').read()
assert '</script' not in rt.lower() and '</script' not in ed.lower()
s=s.replace('/*RUNTIME*/',rt).replace('/*EDITOR*/',ed)
open('index.html','w').write(s)
print('built', len(s))
