(function(){
"use strict";
var GB=window.GB, T=GB.T;
var STORE_KEY='gb2d-project-v1';

/* ====================== TEXT (English / Swedish) ====================== */
var TXT={
 en:{appName:'Game Builder 2D',play:'Play',stop:'Stop',undo:'Undo',redo:'Redo',new:'New',open:'Open',save:'Save',export:'Export game',tools:'Tools',paint:'Paint',erase:'Erase',move:'Move',tiles:'Tiles',objects:'Objects',gameSettings:'Game settings',settingsShort:'Settings',helpShort:'Help',rules:'Rules',help:'How it works',grid:'Grid',zoom:'Zoom',
  newTitle:'Start a new game',newHint:'Your current game is replaced. Save it first if you want to keep it.',tplStarter:'Platformer: Coin Run (2 levels)',tplTop:'Top-down: Gem Garden adventure',tplArcade:'Arcade: Meteor Dodge',tplEmpty:'Empty platformer',tplTopEmpty:'Empty top-down map',cancel:'Cancel',
  newObject:'+ New empty object',objName:'Name',picture:'Picture',cards:'Behavior cards',addCard:'+ Add a card…',deleteObj:'Delete object',noCards:'No cards yet. Add one to give this object a behavior.',
  settingsTitle:'Game',gName:'Game name',author:'Made by',authorPh:'Your name',gameType:'Game type',gt_platformer:'Platformer (side view, jump)',gt_topdown:'Top-down (seen from above)',gt_arcade:'Arcade (one fixed screen)',
  controls:'Controls',ctlArrows:'Arrow keys / WASD',ctlOne:'One button (auto-run)',lives:'Lives',infinite:'Unlimited',timeLimit:'Time limit',noLimit:'No time limit',sec:'s',speed:'Game speed',sound:'Sound effects',
  builder:'Builder level',b1:'1 – Cards only',b2:'2 – Cards and rules',b3:'3 – Rules, variables and conditions',dys:'Easy-read font',access:'Accessibility',
  levelTitle:'This level',levelName:'Level name',background:'Background',levelW:'Width (tiles)',levelH:'Height (tiles)',dupLevel:'Duplicate',delLevel:'Delete level',delLevelConfirm:'Click again to delete',addLevel:'Add a level',level:'Level',moveLeft:'Move left',moveRight:'Move right',
  bg_day:'Sunny day',bg_sunset:'Sunset',bg_night:'Night',bg_cave:'Cave',bg_snow:'Snow',bg_space:'Space',bg_grass:'Grass (top-down)',bg_sand:'Sand (top-down)',bg_dungeon:'Dungeon floor (top-down)',bg_sea:'Sea (top-down)',
  tile_ground:'Ground',tile_stone:'Stone',tile_brick:'Bricks',tile_platform:'Platform',tile_ice:'Ice',tile_grass:'Grass',tile_flower:'Flower',tile_bush:'Bush',tile_water:'Water',tile_lawn:'Lawn',tile_path:'Path',tile_wall:'Wall',tile_floor:'Wood floor',tile_lava:'Lava',tile_tree:'Tree',tile_sand:'Sand',tile_snow:'Snowy ground',tile_cave:'Cave rock',tile_metal:'Metal',tile_planks:'Wood wall',tile_glass:'Glass',tile_candy:'Candy',tile_cloud:'Cloud',tile_bridge:'Bridge',tile_carpet:'Carpet',tile_checker:'Checker floor',tile_cobble:'Cobblestones',tile_sandfloor:'Sand floor',tile_hedge:'Hedge',tile_gold:'Gold block',tile_castle:'Castle wall',tile_vines:'Vines',tile_thorns:'Thorns',bg_forest:'Forest',bg_beach:'Beach',bg_candy:'Candy land',bg_desert:'Desert',bg_castle:'Castle at night',bg_snowfield:'Snow (top-down)',bg_woodfloor:'Wood floor (top-down)',bg_stonefloor:'Stone floor (top-down)',cat_mine:'My drawings',cat_hero:'Heroes',cat_npc:'People',cat_animal:'Animals',cat_enemy:'Enemies',cat_boss:'Bosses (big)',cat_item:'Items',cat_prop:'Things',cat_fx:'Shots',searchPics:'Search pictures…',
  card_player:'Player',card_patrol:'Patrol',card_chase:'Chase',card_wander:'Wander',card_float:'Float',card_bounce:'Bounce',card_mover:'Move straight',card_solid:'Solid',card_collectible:'Collectible',card_hurts:'Hurts on touch',card_stompable:'Can be stomped',card_health:'Health',card_shooter:'Shooter',card_breakable:'Breakable',card_spring:'Spring',card_extralife:'Extra life',card_key:'Key',card_lock:'Lock',card_checkpoint:'Checkpoint',card_teleport:'Teleporter',card_talk:'Talk',card_spawner:'Spawner',card_invisible:'Invisible',card_goal:'Goal',
  desc_player:'Moved with the controls. Only one object can be the player.',desc_patrol:'Walks back and forth and turns at walls.',desc_chase:'Moves toward the player when the player comes close.',desc_wander:'Walks around in random directions.',desc_float:'Floats up and down (or sideways) in the air.',desc_bounce:'Flies diagonally and bounces off walls, like a ball.',desc_mover:'Moves in one direction and disappears when it leaves the level. Good for meteors and cars.',desc_solid:'Blocks movement, like a wall.',desc_collectible:'Disappears when the player touches it and gives points.',desc_hurts:'The player loses a life when touching it.',desc_stompable:'The player can defeat it by jumping on top.',desc_health:'Needs several hits before it is defeated.',desc_shooter:'Shoots. On the player: press X (platformer) or Space (top-down). On others: shoots by itself.',desc_breakable:'Breaks when shot, or when the player jumps into it from below.',desc_spring:'Launches the player high when jumped on.',desc_extralife:'Gives the player one more life.',desc_key:'The player picks it up. Keys open Locks.',desc_lock:'Blocks the way until the player brings a Key.',desc_checkpoint:'The player starts here again after losing a life.',desc_teleport:'Sends the player to the next copy of this object.',desc_talk:'Shows a speech bubble when the player comes close.',desc_spawner:'Creates copies of another object again and again.',desc_invisible:'Not shown in the game, but still works. Good for secret zones.',desc_goal:'Touching it finishes the level.',
  set_speed:'Speed',set_jump:'Jump height',set_doubleJump:'Double jump',set_edges:'Turn at edges',set_vertical:'Up and down',set_range:'Sees (tiles)',set_distance:'Distance',set_sideways:'Sideways',set_direction:'Direction',set_points:'Points',set_bounce:'Bounce',set_hp:'Hits needed',set_projectile:'Shoots',set_rate:'Fire rate',set_hits:'Hits needed',set_strength:'Strength',set_text:'Text',set_object:'Object',set_interval:'Every (s)',set_max:'Max at once',set_spread:'Spread (tiles)',
  opt_down:'Down',opt_up:'Up',opt_left:'Left',opt_right:'Right',opt_facing:'Where it faces',opt_player:'At the player',opt_fireball:'Fireball',opt_laser:'Laser',opt_star:'Star',opt_snowball:'Snowball',
  statusHint:'Click or drag to paint. Right-click erases.',saved:'Saved in this browser',exported:'Game exported – open the HTML file to play.',savedFile:'Project file saved.',opened:'Project opened.',badFile:'That file could not be opened.',onePlayer:'Only one player per level – moved it here.',confirmDel:'Click again to delete it and all its copies',noPlayerWarn:'Tip: give an object the Player card first.',readAloud:'Read aloud',copies:'copies in this level',none:'—',
  drawNew:'🎨 Draw a new object',drawOwn:'🎨 Draw my own version',editDrawing:'✏️ Edit drawing',
  ptTitle:'Draw an object',ptPen:'Pen',ptFill:'Fill',ptPick:'Pick colour',ptMirror:'Mirror',ptFlip:'Flip',ptClear:'Clear',ptColours:'Colours',ptOwn:'Own colour',ptFrames:'Animation frames (up to 4)',ptSpeed:'Animation speed',ptWhat:'What is it?',ptSave:'Use this drawing',ptEmpty:'Draw something first!',ptAddFrame:'Add frame (copy of this one)',ptDelFrame:'Delete this frame',myDrawing:'My drawing',
  type_keep:'🔒 Keep its cards',type_player:'🎮 Player character',type_enemy:'👾 Walking enemy',type_chaser:'🎯 Enemy that chases',type_flyer:'🦇 Flying enemy',type_shooterEnemy:'🔫 Enemy that shoots',type_item:'⭐ Item to collect',type_box:'📦 Box / wall (solid)',type_hazard:'💥 Danger (hurts)',type_spring:'🦘 Spring',type_npc:'💬 Character that talks',type_goal:'🏁 Goal',type_decor:'🌸 Decoration (does nothing)',
  rulesTitle:'Rules',rulesHint:'Rules are sentences: When something happens, then do something. They work in every level.',rulesLocked:'Rules are turned off. Choose builder level 2 or 3 in Game settings.',newRule:'+ New rule',examples:'Quick start – click to add:',
  ex1:'When all coins are collected → show a message and go to the next level',ex2:'Every second → add 1 to the score',ex3:'When the score reaches 10 → show “Great!” and play a sound',
  when:'WHEN',andIf:'AND IF',then:'THEN',addAction:'+ add what happens…',ruleOn:'On',always:'(always)',
  tr_start:'the level starts',tr_touch:'something touches something',tr_key:'a key is pressed',tr_every:'every few seconds',tr_var:'a number reaches a value',tr_allgone:'all copies of an object are gone',tr_click:'an object is clicked or tapped',tr_timeup:'the time runs out',
  ac_addvar:'Change a number by…',ac_setvar:'Set a number to…',ac_text:'Show a message',ac_destroy:'Remove an object',ac_spawn:'Create an object',ac_sound:'Play a sound',ac_shake:'Shake the screen',ac_hurt:'Player loses a life',ac_nextlevel:'Go to the next level',ac_gotolevel:'Go to a level',ac_restart:'Restart this level',ac_win:'Win the game',ac_gameover:'Game over',
  thePlayer:'The player',touches:'touches',seconds:'seconds',sayFor:'for (seconds)',
  dt_other:'the touched/clicked one',dt_self:'the one that touched',dt_all:'all copies of…',wh_top:'at the top of the screen',wh_random:'at a random free spot',wh_player:'next to the player',wh_other:'where the touched one is',
  v_score:'Score',v_lives:'Lives',v_time:'Time left',v_keys:'Keys',variables:'Your own numbers (variables)',varName:'name',varStart:'start',varShow:'show',addVar:'+ New number',varHint:'Use {name} in a message to show a number, e.g. “Score: {score}”.',
  snd_coin:'Coin',snd_jump:'Jump',snd_win:'Fanfare',snd_hurt:'Ouch',snd_stomp:'Stomp',snd_spring:'Boing',snd_life:'Power-up',snd_laser:'Laser',snd_hit:'Hit',snd_explosion:'Boom',snd_key:'Key',snd_door:'Door',
  close:'Close',
  card_path:'Path',card_pushable:'Pushable',desc_path:'Moves back and forth along a straight path. Add Solid to make a moving platform the player can ride.',desc_pushable:'The player can push it. In platform games it falls down holes.',set_dx:'Tiles sideways',set_dy:'Tiles up/down',
  fill:'Fill',rect:'Rectangle',fillTiles:'Fill works with tiles – pick a tile first.',
  drawTile:'🎨 Draw a tile',editTile:'✏️ Edit this tile',ptTileTitle:'Draw a tile',ptWhatTile:'What kind of tile?',
  kind_solid:'🧱 Solid ground',kind_platform:'🪵 Platform (jump up through)',kind_decor:'🌸 Decoration (walk past)',kind_hazard:'🔥 Danger (lava, thorns)',kind_water:'💧 Water',kind_ice:'🧊 Ice (slippery)',kind_wall:'🌲 Blocks only seen from above',
  ptImport:'🖼 Import picture',ptImportHint:'The picture is shrunk to fit the drawing grid.',
  music:'Music',musicOn:'Background music',mus_none:'No music',mus_happy:'Happy',mus_adventure:'Adventure',mus_spooky:'Spooky',mus_space:'Space',mus_calm:'Calm',mus_boss:'Boss fight',
  tr_destroyed:'an object is defeated or collected',tr_message:'a message is received',
  ac_send:'Send a message',ac_effect:'Show an effect',ac_picture:'Change picture',ac_moveto:'Move the player to…',ac_music:'Change the music',
  msgName:'message name',fx_confetti:'Confetti',fx_explosion:'Explosion',fx_sparkle:'Sparkles',fx_hearts:'Hearts',fx_smoke:'Smoke',at_player:'at the player',at_other:'at the touched one',at_self:'at the one that touched',pic_player:'the player',
  dupObj:'Duplicate',copyName:'copy',liveNumbers:'Live numbers',playHint:'P pause · M mute music · Esc stop',
  card_quiz:'Quiz question',desc_quiz:'Asks a question when the player touches it. A right answer gives points and removes it.',set_question:'Question',set_a1:'Answer 1',set_a2:'Answer 2',set_a3:'Answer 3',set_a4:'Answer 4 (optional)',set_correct:'Right answer',set_wrongHurts:'Wrong answer costs a life',set_who:'Which player',opt_p1:'Player 1 (arrows)',opt_p2:'Player 2 (WASD)',opt_1:'Answer 1',opt_2:'Answer 2',opt_3:'Answer 3',opt_4:'Answer 4',
  type_quiz:'❓ Quiz question',tile_ladder:'Ladder',kind_ladder:'🪜 Ladder (climb)',
  gt_fp:'3D first-person (walk inside a top-down map)',tplFP:'3D: Maze of Riddles',ctlScan:'Switch scanning (one switch)',ctlDwell:'Dwell buttons (eye tracking / mouse hover)',scanSpeed:'Scanning speed',
  extraPics:'Extra pictures (optional)',pic_walk:'When moving',pic_jump:'When jumping / falling',pic_hurt:'When hurt',sameAsMain:'(same as main picture)',
  bigSprite:'Big (32×32, two tiles)',normalSprite:'Normal (16×16)',
  sounds:'Sounds',recordSnd:'🎤 Record',stopRec:'⏹ Stop',uploadSnd:'📁 Upload sound',micNA:'The microphone is not available here. Try Upload, or open the tool from GitHub Pages.',sndTooBig:'That sound file is too big (max 300 KB).',useFor:'Use my sound for',defaultSnd:'(built-in sound)',sfx_jump:'Jump',sfx_coin:'Collect',sfx_hurt:'Ouch',sfx_win:'Win',sfx_stomp:'Defeat enemy',sfx_laser:'Shoot',sfx_key:'Key / question',sfx_life:'Extra life',
  addStory:'Add a story screen',storyScene:'Story screen',storyText:'Story text',storyPic:'Picture',none2:'(no picture)',storyHint:'Story screens show a picture and text. Players press a key to continue.',noPaintStory:'This is a story screen – edit it in the panel to the right.',
  ac_ask:'Ask a question with choices',askQ:'Question',choiceN:'Choice',sendsMsg:'sends message',
  teacher:'Teacher',teacherHint:'Set a challenge and lock the builder level. Students see the challenge at the top left.',challengeTitle:'Challenge title',challengeText:'What should students do?',challengeSteps:'Checklist (one step per line)',lockBuilder:'Lock builder level and teacher settings',pinSet:'Teacher PIN (to unlock later)',pinAsk:'Teacher PIN',unlock:'Unlock',wrongPin:'Wrong PIN',locked:'🔒 Locked by teacher',challenge:'Challenge',
  reflTitle:'Before you share your game',reflHint:'Answer in a few words. Your answers are saved in the project file for your teacher.',refl1:'What is your game about?',refl2:'What did you make or change yourself?',refl3:'What was hard, and how did you solve it?',exportNow:'Export game',skip:'Skip',
  artPack:'Art pack',artPackHint:'Import PNG files named after a picture (fox.png, coin.png, slime.png …) or a tile (tile_ground.png, tile_wall.png …). Matching pictures are replaced everywhere. Other files become new pictures. A wide image is cut into animation frames.',importArt:'🖼 Import art files',artDone:'Imported pictures:',resetArt:'Remove imported art',
  bigUI:'Large buttons',readUI:'Read buttons aloud',remixHint:'Open also accepts exported game files (.html) – remix a friend’s game!',
  helpHTML:'<h2>How it works</h2><h3>1. Build the level</h3><ul><li>Pick <b>Tiles</b> and paint with the mouse. Right-click erases.</li><li>Pick <b>Objects</b> and click to place them. <b>Move</b> drags them.</li></ul><h3>2. Give objects behaviors</h3><ul><li>Click an object in the shelf. In the panel on the right you add <b>cards</b> like Player, Patrol, Collectible or Hurts on touch.</li><li>Change the sliders to tune speed, jump height and more.</li></ul><h3>3. Draw your own</h3><ul><li><b>Draw a new object</b> opens the drawing tool. Draw up to 4 frames to animate it.</li><li>Choose <b>What is it?</b> and the right cards are added for you.</li></ul><h3>4. Rules (builder level 2+)</h3><ul><li><b>When</b> something happens, <b>then</b> do something. Example: When the player touches the Door, go to the next level.</li></ul><h3>5. Levels</h3><ul><li>Use the tabs under the level to add more levels. A Goal finishes the level and opens the next one.</li></ul><h3>6. Play and share</h3><ul><li><b>Play</b> tests the game. <b>Esc</b> stops.</li><li><b>Export game</b> makes one HTML file that anyone can play.</li><li><b>Save</b> keeps the project file so you can keep working later.</li></ul><h3>New in 0.4</h3><ul><li><b>Quiz question</b> card and the rule <b>Ask a question with choices</b> – make learning games and stories with choices.</li><li><b>📖+</b> adds a story screen between levels.</li><li><b>Sounds</b> in Game settings: record or upload your own sounds.</li><li><b>Player 2</b>: give a second object the Player card and choose Player 2 (WASD + F).</li><li><b>3D first-person</b> game type: walk inside your top-down map.</li><li><b>Ladder</b> tile for climbing, <b>Big</b> 32×32 drawings and extra pictures for walking, jumping and getting hurt.</li><li><b>Teacher</b> section: challenges, checklist and a locked builder level.</li></ul><h3>Shortcuts</h3><p><kbd>P</kbd> paint · <kbd>E</kbd> erase · <kbd>M</kbd> move · <kbd>F</kbd> fill · <kbd>R</kbd> rectangle · <kbd>Ctrl</kbd>+<kbd>Z</kbd> undo · <kbd>Ctrl</kbd>+<kbd>Y</kbd> redo</p>'},
 sv:{appName:'Spelbyggaren 2D',play:'Spela',stop:'Stopp',undo:'Ångra',redo:'Gör om',new:'Ny',open:'Öppna',save:'Spara',export:'Exportera spel',tools:'Verktyg',paint:'Måla',erase:'Sudda',move:'Flytta',tiles:'Block',objects:'Objekt',gameSettings:'Spelinställningar',settingsShort:'Inställningar',helpShort:'Hjälp',rules:'Regler',help:'Så funkar det',grid:'Rutnät',zoom:'Zoom',
  newTitle:'Börja ett nytt spel',newHint:'Ditt nuvarande spel ersätts. Spara det först om du vill behålla det.',tplStarter:'Plattformsspel: Myntjakten (2 banor)',tplTop:'Ovanifrån: Ädelstensträdgården',tplArcade:'Arkad: Meteorregn',tplEmpty:'Tomt plattformsspel',tplTopEmpty:'Tom karta ovanifrån',cancel:'Avbryt',
  newObject:'+ Nytt tomt objekt',objName:'Namn',picture:'Bild',cards:'Beteendekort',addCard:'+ Lägg till ett kort…',deleteObj:'Ta bort objekt',noCards:'Inga kort än. Lägg till ett för att ge objektet ett beteende.',
  settingsTitle:'Spelet',gName:'Spelets namn',author:'Gjort av',authorPh:'Ditt namn',gameType:'Speltyp',gt_platformer:'Plattformsspel (från sidan, hoppa)',gt_topdown:'Ovanifrån',gt_arcade:'Arkad (en skärm)',
  controls:'Kontroller',ctlArrows:'Piltangenter / WASD',ctlOne:'En knapp (springer själv)',lives:'Liv',infinite:'Obegränsat',timeLimit:'Tidsgräns',noLimit:'Ingen tidsgräns',sec:'s',speed:'Spelhastighet',sound:'Ljudeffekter',
  builder:'Byggnivå',b1:'1 – Bara kort',b2:'2 – Kort och regler',b3:'3 – Regler, variabler och villkor',dys:'Lättläst typsnitt',access:'Tillgänglighet',
  levelTitle:'Den här banan',levelName:'Banans namn',background:'Bakgrund',levelW:'Bredd (block)',levelH:'Höjd (block)',dupLevel:'Kopiera',delLevel:'Ta bort banan',delLevelConfirm:'Klicka igen för att ta bort',addLevel:'Lägg till en bana',level:'Bana',moveLeft:'Flytta vänster',moveRight:'Flytta höger',
  bg_day:'Solig dag',bg_sunset:'Solnedgång',bg_night:'Natt',bg_cave:'Grotta',bg_snow:'Snö',bg_space:'Rymden',bg_grass:'Gräs (ovanifrån)',bg_sand:'Sand (ovanifrån)',bg_dungeon:'Fängelsehåla (ovanifrån)',bg_sea:'Hav (ovanifrån)',
  tile_ground:'Mark',tile_stone:'Sten',tile_brick:'Tegel',tile_platform:'Plattform',tile_ice:'Is',tile_grass:'Gräs',tile_flower:'Blomma',tile_bush:'Buske',tile_water:'Vatten',tile_lawn:'Gräsmatta',tile_path:'Stig',tile_wall:'Mur',tile_floor:'Trägolv',tile_lava:'Lava',tile_tree:'Träd',tile_sand:'Sand',tile_snow:'Snötäckt mark',tile_cave:'Grottsten',tile_metal:'Metall',tile_planks:'Trävägg',tile_glass:'Glas',tile_candy:'Godis',tile_cloud:'Moln',tile_bridge:'Bro',tile_carpet:'Matta',tile_checker:'Rutigt golv',tile_cobble:'Kullersten',tile_sandfloor:'Sandgolv',tile_hedge:'Häck',tile_gold:'Guldblock',tile_castle:'Slottsmur',tile_vines:'Rankor',tile_thorns:'Taggar',bg_forest:'Skog',bg_beach:'Strand',bg_candy:'Godisland',bg_desert:'Öken',bg_castle:'Slott på natten',bg_snowfield:'Snö (ovanifrån)',bg_woodfloor:'Trägolv (ovanifrån)',bg_stonefloor:'Stengolv (ovanifrån)',cat_mine:'Mina teckningar',cat_hero:'Hjältar',cat_npc:'Människor',cat_animal:'Djur',cat_enemy:'Fiender',cat_boss:'Bossar (stora)',cat_item:'Saker',cat_prop:'Föremål',cat_fx:'Skott',searchPics:'Sök bilder…',
  card_player:'Spelare',card_patrol:'Patrullera',card_chase:'Jaga',card_wander:'Vandra',card_float:'Sväva',card_bounce:'Studsa',card_mover:'Åk rakt',card_solid:'Fast',card_collectible:'Samlas in',card_hurts:'Skadar vid beröring',card_stompable:'Kan trampas på',card_health:'Hälsa',card_shooter:'Skjuter',card_breakable:'Går sönder',card_spring:'Studsmatta',card_extralife:'Extraliv',card_key:'Nyckel',card_lock:'Lås',card_checkpoint:'Kontrollpunkt',card_teleport:'Teleport',card_talk:'Prata',card_spawner:'Skapare',card_invisible:'Osynlig',card_goal:'Mål',
  desc_player:'Styrs med kontrollerna. Bara ett objekt kan vara spelaren.',desc_patrol:'Går fram och tillbaka och vänder vid väggar.',desc_chase:'Går mot spelaren när spelaren kommer nära.',desc_wander:'Går runt åt slumpvisa håll.',desc_float:'Svävar upp och ner (eller i sidled).',desc_bounce:'Flyger snett och studsar mot väggar, som en boll.',desc_mover:'Åker åt ett håll och försvinner när det lämnar banan. Bra för meteorer och bilar.',desc_solid:'Stoppar rörelse, som en vägg.',desc_collectible:'Försvinner när spelaren rör det och ger poäng.',desc_hurts:'Spelaren förlorar ett liv vid beröring.',desc_stompable:'Spelaren kan besegra det genom att hoppa på det.',desc_health:'Tål flera träffar innan det besegras.',desc_shooter:'Skjuter. På spelaren: tryck X (plattform) eller mellanslag (ovanifrån). På andra: skjuter av sig självt.',desc_breakable:'Går sönder när det blir skjutet eller när spelaren hoppar in i det underifrån.',desc_spring:'Skjuter upp spelaren högt.',desc_extralife:'Ger spelaren ett liv till.',desc_key:'Spelaren plockar upp den. Nycklar öppnar Lås.',desc_lock:'Spärrar vägen tills spelaren har en Nyckel.',desc_checkpoint:'Spelaren börjar här igen efter att ha förlorat ett liv.',desc_teleport:'Skickar spelaren till nästa kopia av objektet.',desc_talk:'Visar en pratbubbla när spelaren kommer nära.',desc_spawner:'Skapar kopior av ett annat objekt om och om igen.',desc_invisible:'Syns inte i spelet men fungerar ändå. Bra för hemliga zoner.',desc_goal:'Den som når hit klarar banan.',
  set_speed:'Fart',set_jump:'Hopphöjd',set_doubleJump:'Dubbelhopp',set_edges:'Vänd vid kanter',set_vertical:'Upp och ner',set_range:'Ser (block)',set_distance:'Sträcka',set_sideways:'I sidled',set_direction:'Riktning',set_points:'Poäng',set_bounce:'Studs',set_hp:'Träffar som behövs',set_projectile:'Skjuter',set_rate:'Skjuttakt',set_hits:'Träffar som behövs',set_strength:'Styrka',set_text:'Text',set_object:'Objekt',set_interval:'Var (s)',set_max:'Max samtidigt',set_spread:'Spridning (block)',
  opt_down:'Ner',opt_up:'Upp',opt_left:'Vänster',opt_right:'Höger',opt_facing:'Dit den tittar',opt_player:'Mot spelaren',opt_fireball:'Eldklot',opt_laser:'Laser',opt_star:'Stjärna',opt_snowball:'Snöboll',
  statusHint:'Klicka eller dra för att måla. Högerklick suddar.',saved:'Sparat i webbläsaren',exported:'Spelet exporterat – öppna HTML-filen för att spela.',savedFile:'Projektfilen sparades.',opened:'Projektet öppnades.',badFile:'Filen kunde inte öppnas.',onePlayer:'Bara en spelare per bana – den flyttades hit.',confirmDel:'Klicka igen för att ta bort det och alla kopior',noPlayerWarn:'Tips: ge ett objekt kortet Spelare först.',readAloud:'Läs upp',copies:'kopior på banan',none:'—',
  drawNew:'🎨 Rita ett nytt objekt',drawOwn:'🎨 Rita min egen version',editDrawing:'✏️ Ändra teckningen',
  ptTitle:'Rita ett objekt',ptPen:'Penna',ptFill:'Fyll',ptPick:'Välj färg',ptMirror:'Spegla',ptFlip:'Vänd',ptClear:'Rensa',ptColours:'Färger',ptOwn:'Egen färg',ptFrames:'Animationsrutor (upp till 4)',ptSpeed:'Animationsfart',ptWhat:'Vad är det?',ptSave:'Använd teckningen',ptEmpty:'Rita något först!',ptAddFrame:'Lägg till ruta (kopia av denna)',ptDelFrame:'Ta bort rutan',myDrawing:'Min teckning',
  type_keep:'🔒 Behåll korten',type_player:'🎮 Spelfigur',type_enemy:'👾 Fiende som går',type_chaser:'🎯 Fiende som jagar',type_flyer:'🦇 Flygande fiende',type_shooterEnemy:'🔫 Fiende som skjuter',type_item:'⭐ Sak att samla',type_box:'📦 Låda / vägg (fast)',type_hazard:'💥 Fara (skadar)',type_spring:'🦘 Studsmatta',type_npc:'💬 Figur som pratar',type_goal:'🏁 Mål',type_decor:'🌸 Dekoration (gör inget)',
  rulesTitle:'Regler',rulesHint:'Regler är meningar: När något händer, gör då något. De gäller på alla banor.',rulesLocked:'Regler är avstängda. Välj byggnivå 2 eller 3 under Spelinställningar.',newRule:'+ Ny regel',examples:'Snabbstart – klicka för att lägga till:',
  ex1:'När alla mynt är insamlade → visa ett meddelande och gå till nästa bana',ex2:'Varje sekund → lägg till 1 poäng',ex3:'När poängen når 10 → visa ”Snyggt!” och spela ett ljud',
  when:'NÄR',andIf:'OCH OM',then:'DÅ',addAction:'+ lägg till vad som händer…',ruleOn:'På',always:'(alltid)',
  tr_start:'banan börjar',tr_touch:'något rör vid något',tr_key:'en tangent trycks ner',tr_every:'med några sekunders mellanrum',tr_var:'ett tal når ett värde',tr_allgone:'alla kopior av ett objekt är borta',tr_click:'ett objekt klickas på',tr_timeup:'tiden tar slut',
  ac_addvar:'Ändra ett tal med…',ac_setvar:'Sätt ett tal till…',ac_text:'Visa ett meddelande',ac_destroy:'Ta bort ett objekt',ac_spawn:'Skapa ett objekt',ac_sound:'Spela ett ljud',ac_shake:'Skaka skärmen',ac_hurt:'Spelaren förlorar ett liv',ac_nextlevel:'Gå till nästa bana',ac_gotolevel:'Gå till en bana',ac_restart:'Börja om banan',ac_win:'Vinn spelet',ac_gameover:'Game over',
  thePlayer:'Spelaren',touches:'rör vid',seconds:'sekunder',sayFor:'i (sekunder)',
  dt_other:'den som blev rörd/klickad',dt_self:'den som rörde',dt_all:'alla kopior av…',wh_top:'högst upp på skärmen',wh_random:'på en slumpvis ledig plats',wh_player:'bredvid spelaren',wh_other:'där den rörda är',
  v_score:'Poäng',v_lives:'Liv',v_time:'Tid kvar',v_keys:'Nycklar',variables:'Egna tal (variabler)',varName:'namn',varStart:'start',varShow:'visa',addVar:'+ Nytt tal',varHint:'Skriv {namn} i ett meddelande för att visa ett tal, t.ex. ”Poäng: {score}”.',
  snd_coin:'Mynt',snd_jump:'Hopp',snd_win:'Fanfar',snd_hurt:'Aj',snd_stomp:'Tramp',snd_spring:'Boing',snd_life:'Kraft',snd_laser:'Laser',snd_hit:'Träff',snd_explosion:'Pang',snd_key:'Nyckel',snd_door:'Dörr',
  close:'Stäng',
  card_path:'Bana',card_pushable:'Går att knuffa',desc_path:'Åker fram och tillbaka längs en rak bana. Lägg till Fast så blir det en hiss som spelaren kan åka på.',desc_pushable:'Spelaren kan knuffa den. I plattformsspel ramlar den ner i hål.',set_dx:'Block i sidled',set_dy:'Block upp/ner',
  fill:'Fyll',rect:'Rektangel',fillTiles:'Fyll fungerar med block – välj ett block först.',
  drawTile:'🎨 Rita ett block',editTile:'✏️ Ändra blocket',ptTileTitle:'Rita ett block',ptWhatTile:'Vilken sorts block?',
  kind_solid:'🧱 Fast mark',kind_platform:'🪵 Plattform (hoppa upp genom)',kind_decor:'🌸 Dekoration (gå förbi)',kind_hazard:'🔥 Fara (lava, taggar)',kind_water:'💧 Vatten',kind_ice:'🧊 Is (halt)',kind_wall:'🌲 Spärrar bara ovanifrån',
  ptImport:'🖼 Importera bild',ptImportHint:'Bilden krymps så att den passar rutnätet.',
  music:'Musik',musicOn:'Bakgrundsmusik',mus_none:'Ingen musik',mus_happy:'Glad',mus_adventure:'Äventyr',mus_spooky:'Läskig',mus_space:'Rymd',mus_calm:'Lugn',mus_boss:'Bossfight',
  tr_destroyed:'ett objekt besegras eller samlas in',tr_message:'ett meddelande tas emot',
  ac_send:'Skicka ett meddelande',ac_effect:'Visa en effekt',ac_picture:'Byt bild',ac_moveto:'Flytta spelaren till…',ac_music:'Byt musik',
  msgName:'meddelandets namn',fx_confetti:'Konfetti',fx_explosion:'Explosion',fx_sparkle:'Gnistor',fx_hearts:'Hjärtan',fx_smoke:'Rök',at_player:'vid spelaren',at_other:'vid den rörda',at_self:'vid den som rörde',pic_player:'spelaren',
  dupObj:'Kopiera',copyName:'kopia',liveNumbers:'Tal just nu',playHint:'P paus · M stäng av musik · Esc stopp',
  card_quiz:'Quizfråga',desc_quiz:'Ställer en fråga när spelaren rör den. Rätt svar ger poäng och tar bort den.',set_question:'Fråga',set_a1:'Svar 1',set_a2:'Svar 2',set_a3:'Svar 3',set_a4:'Svar 4 (valfritt)',set_correct:'Rätt svar',set_wrongHurts:'Fel svar kostar ett liv',set_who:'Vilken spelare',opt_p1:'Spelare 1 (pilar)',opt_p2:'Spelare 2 (WASD)',opt_1:'Svar 1',opt_2:'Svar 2',opt_3:'Svar 3',opt_4:'Svar 4',
  type_quiz:'❓ Quizfråga',tile_ladder:'Stege',kind_ladder:'🪜 Stege (klättra)',
  gt_fp:'3D förstaperson (gå inne i en karta ovanifrån)',tplFP:'3D: Gåtornas labyrint',ctlScan:'Skanning med kontakt (en kontakt)',ctlDwell:'Titta-knappar (ögonstyrning / muspekare)',scanSpeed:'Skanningsfart',
  extraPics:'Extra bilder (valfritt)',pic_walk:'När den rör sig',pic_jump:'När den hoppar / faller',pic_hurt:'När den skadas',sameAsMain:'(samma som huvudbilden)',
  bigSprite:'Stor (32×32, två block)',normalSprite:'Normal (16×16)',
  sounds:'Ljud',recordSnd:'🎤 Spela in',stopRec:'⏹ Stopp',uploadSnd:'📁 Ladda upp ljud',micNA:'Mikrofonen är inte tillgänglig här. Prova Ladda upp, eller öppna verktyget från GitHub Pages.',sndTooBig:'Ljudfilen är för stor (max 300 kB).',useFor:'Använd mitt ljud till',defaultSnd:'(inbyggt ljud)',sfx_jump:'Hopp',sfx_coin:'Samla',sfx_hurt:'Aj',sfx_win:'Vinst',sfx_stomp:'Besegra fiende',sfx_laser:'Skjuta',sfx_key:'Nyckel / fråga',sfx_life:'Extraliv',
  addStory:'Lägg till en berättelseskärm',storyScene:'Berättelseskärm',storyText:'Berättelsetext',storyPic:'Bild',none2:'(ingen bild)',storyHint:'Berättelseskärmar visar en bild och text. Spelaren trycker på en tangent för att fortsätta.',noPaintStory:'Det här är en berättelseskärm – ändra den i panelen till höger.',
  ac_ask:'Ställ en fråga med val',askQ:'Fråga',choiceN:'Val',sendsMsg:'skickar meddelande',
  teacher:'Lärare',teacherHint:'Ge eleverna en utmaning och lås byggnivån. Eleverna ser utmaningen uppe till vänster.',challengeTitle:'Utmaningens rubrik',challengeText:'Vad ska eleverna göra?',challengeSteps:'Checklista (ett steg per rad)',lockBuilder:'Lås byggnivå och lärarinställningar',pinSet:'Lärar-PIN (för att låsa upp senare)',pinAsk:'Lärar-PIN',unlock:'Lås upp',wrongPin:'Fel PIN',locked:'🔒 Låst av läraren',challenge:'Utmaning',
  reflTitle:'Innan du delar ditt spel',reflHint:'Svara med några ord. Svaren sparas i projektfilen till din lärare.',refl1:'Vad handlar ditt spel om?',refl2:'Vad har du gjort eller ändrat själv?',refl3:'Vad var svårt, och hur löste du det?',exportNow:'Exportera spel',skip:'Hoppa över',
  artPack:'Grafikpaket',artPackHint:'Importera PNG-filer som heter som en bild (fox.png, coin.png, slime.png …) eller ett block (tile_ground.png, tile_wall.png …). Matchande bilder byts ut överallt. Andra filer blir nya bilder. En bred bild delas upp i animationsrutor.',importArt:'🖼 Importera bildfiler',artDone:'Importerade bilder:',resetArt:'Ta bort importerad grafik',
  bigUI:'Stora knappar',readUI:'Läs upp knappar',remixHint:'Öppna tar också emot exporterade spel (.html) – remixa en kompis spel!',
  helpHTML:'<h2>Så funkar det</h2><h3>1. Bygg banan</h3><ul><li>Välj <b>Block</b> och måla med musen. Högerklick suddar.</li><li>Välj <b>Objekt</b> och klicka för att placera dem. <b>Flytta</b> drar dem.</li></ul><h3>2. Ge objekten beteenden</h3><ul><li>Klicka på ett objekt i hyllan. I panelen till höger lägger du till <b>kort</b> som Spelare, Patrullera, Samlas in eller Skadar vid beröring.</li><li>Dra i reglagen för fart, hopphöjd med mera.</li></ul><h3>3. Rita egna saker</h3><ul><li><b>Rita ett nytt objekt</b> öppnar ritverktyget. Rita upp till 4 rutor för att animera.</li><li>Välj <b>Vad är det?</b> så läggs rätt kort till åt dig.</li></ul><h3>4. Regler (byggnivå 2+)</h3><ul><li><b>När</b> något händer, <b>då</b> händer något. Exempel: När spelaren rör vid Dörren, gå till nästa bana.</li></ul><h3>5. Banor</h3><ul><li>Använd flikarna under banan för att lägga till fler banor. Ett Mål klarar banan och öppnar nästa.</li></ul><h3>6. Spela och dela</h3><ul><li><b>Spela</b> testar spelet. <b>Esc</b> stoppar.</li><li><b>Exportera spel</b> gör en HTML-fil som alla kan spela.</li><li><b>Spara</b> sparar projektfilen så att du kan jobba vidare sen.</li></ul><h3>Nytt i 0.4</h3><ul><li>Kortet <b>Quizfråga</b> och regeln <b>Ställ en fråga med val</b> – gör lärospel och berättelser med val.</li><li><b>📖+</b> lägger till en berättelseskärm mellan banorna.</li><li><b>Ljud</b> under Spelinställningar: spela in eller ladda upp egna ljud.</li><li><b>Spelare 2</b>: ge ett till objekt kortet Spelare och välj Spelare 2 (WASD + F).</li><li>Speltypen <b>3D förstaperson</b>: gå runt inne i din karta.</li><li>Blocket <b>Stege</b> för att klättra, <b>stora</b> 32×32-teckningar och extra bilder för gå, hoppa och skadas.</li><li>Avsnittet <b>Lärare</b>: utmaningar, checklista och låst byggnivå.</li></ul><h3>Kortkommandon</h3><p><kbd>P</kbd> måla · <kbd>E</kbd> sudda · <kbd>M</kbd> flytta · <kbd>F</kbd> fyll · <kbd>R</kbd> rektangel · <kbd>Ctrl</kbd>+<kbd>Z</kbd> ångra · <kbd>Ctrl</kbd>+<kbd>Y</kbd> gör om</p>'}
};

var S={project:null,lang:'en',tool:'paint',brush:{kind:'tile',id:1},sel:null,panel:'settings',tab:'tiles',zoom:1,grid:true,undo:[],redo:[],game:null,hover:null,drag:null,stroke:false,sceneIdx:0};
function t(k){return (TXT[S.lang]&&TXT[S.lang][k])||TXT.en[k]||k;}
function $(id){return document.getElementById(id);}
function el(tag,attrs,kids){var e=document.createElement(tag);if(attrs)for(var k in attrs){var v=attrs[k];if(v===undefined||v===null)continue;if(k==='class')e.className=v;else if(k==='text')e.textContent=v;else if(k.slice(0,2)==='on')e.addEventListener(k.slice(2),v);else e.setAttribute(k,v);}(kids||[]).forEach(function(c){if(c)e.appendChild(typeof c==='string'?document.createTextNode(c):c);});return e;}
function toast(msg){var x=$('toast');x.textContent=msg;x.classList.add('on');clearTimeout(toast._t);toast._t=setTimeout(function(){x.classList.remove('on');},2400);}
function uid(){return 'o'+Math.random().toString(36).slice(2,8);}
function clone(o){return JSON.parse(JSON.stringify(o));}
function scene(){var sc=S.project.scenes;if(S.sceneIdx>=sc.length)S.sceneIdx=sc.length-1;if(S.sceneIdx<0)S.sceneIdx=0;return sc[S.sceneIdx];}
function mode(){return S.project.settings.gameType||'platformer';}
function isPlat(){return mode()==='platformer';}
function builder(){return +S.project.settings.builder||1;}
function firstObj(pred){var ks=Object.keys(S.project.objects);for(var i=0;i<ks.length;i++){if(!pred||pred(S.project.objects[ks[i]]))return ks[i];}return '';}
function hasCard(o,type){return !!(o&&o.cards.some(function(c){return c.type===type;}));}
function isPlayerObj(id){return hasCard(S.project.objects[id],'player');}
function whoOf(id){var o=S.project.objects[id];if(!o)return null;var c=o.cards.filter(function(c){return c.type==='player';})[0];return c?((c.settings&&c.settings.who)||'p1'):null;}
function modeOK(m){return !m||(m==='platformer'?isPlat():!isPlat());}

/* ====================== TEMPLATES ====================== */
function card(type,settings){return {type:type,settings:settings||{}};}
function grid(W,H,fill){return new Array(W*H).fill(fill||0);}
function L(en,sv){return S.lang==='sv'?sv:en;}
function platObjects(){
  return {
    hero:{name:L('Hero','Hjälte'),sprite:'fox',cards:[card('player')]},
    hero2:{name:L('Player 2','Spelare 2'),sprite:'cat',cards:[card('player',{who:'p2'})]},
    coin:{name:L('Coin','Mynt'),sprite:'coin',cards:[card('collectible',{points:1})]},
    gem:{name:L('Gem','Ädelsten'),sprite:'gem',cards:[card('collectible',{points:5})]},
    slime:{name:L('Slime','Slemklump'),sprite:'slime',cards:[card('patrol',{speed:2}),card('hurts'),card('stompable')]},
    beetle:{name:L('Beetle','Skalbagge'),sprite:'beetle',cards:[card('patrol',{speed:4}),card('hurts'),card('stompable'),card('health',{hp:2})]},
    bat:{name:L('Bat','Fladdermus'),sprite:'bat',cards:[card('float',{distance:2,speed:3}),card('hurts'),card('stompable')]},
    spikes:{name:L('Spikes','Spikar'),sprite:'spikes',cards:[card('hurts')]},
    crate:{name:L('Crate','Låda'),sprite:'crate',cards:[card('solid'),card('breakable',{hits:1})]},
    spring:{name:L('Spring','Fjäder'),sprite:'spring',cards:[card('spring',{strength:7})]},
    heart:{name:L('Heart','Hjärta'),sprite:'heart',cards:[card('extralife')]},
    check:{name:L('Checkpoint','Kontrollpunkt'),sprite:'checkflag',cards:[card('checkpoint')]},
    lift:{name:L('Lift','Hiss'),sprite:'lift',cards:[card('path',{dx:2,dy:0,speed:2}),card('solid')]},
    flag:{name:L('Flag','Flagga'),sprite:'flag',cards:[card('goal')]}
  };
}
function topObjects(){
  return {
    hero:{name:L('Hero','Hjälte'),sprite:'fox',cards:[card('player',{speed:5}),card('shooter',{projectile:'star',direction:'facing',rate:5})]},
    gem:{name:L('Gem','Ädelsten'),sprite:'gem',cards:[card('collectible',{points:10})]},
    wizard:{name:L('Wizard','Trollkarl'),sprite:'wizard',cards:[card('talk',{text:L('Find all 3 gems to open the gate! Press Space to throw stars.','Hitta alla 3 ädelstenar för att öppna grinden! Tryck mellanslag för att kasta stjärnor.')}),card('solid')]},
    skeleton:{name:L('Skeleton','Skelett'),sprite:'skeleton',cards:[card('chase',{speed:3,range:6}),card('hurts'),card('health',{hp:2})]},
    slime:{name:L('Slime','Slemklump'),sprite:'slime',cards:[card('wander',{speed:2}),card('hurts'),card('health',{hp:1})]},
    gate:{name:L('Gate','Grind'),sprite:'lock',cards:[card('solid')]},
    key:{name:L('Key','Nyckel'),sprite:'key',cards:[card('key')]},
    door:{name:L('Locked door','Låst dörr'),sprite:'door',cards:[card('lock')]},
    heart:{name:L('Heart','Hjärta'),sprite:'heart',cards:[card('extralife')]},
    portal:{name:L('Portal','Portal'),sprite:'portal',cards:[card('goal')]},
    rock:{name:L('Rock','Sten'),sprite:'rock',cards:[card('solid')]},
    riddle:{name:L('Riddle stone','Gåtsten'),sprite:'star',cards:[card('quiz',{question:L('Which animal is a mammal?','Vilket djur är ett däggdjur?'),a1:L('Shark','Haj'),a2:L('Dolphin','Delfin'),a3:L('Frog','Groda'),a4:'',correct:'2',points:10})]},
    boulder:{name:L('Boulder','Stenblock'),sprite:'crate',cards:[card('pushable')]}
  };
}
function arcadeObjects(){
  return {
    ship:{name:L('Ship','Skepp'),sprite:'ship',cards:[card('player',{speed:6}),card('shooter',{projectile:'laser',direction:'up',rate:6})]},
    meteor:{name:L('Meteor','Meteor'),sprite:'meteor',cards:[card('mover',{direction:'down',speed:3}),card('hurts'),card('health',{hp:1})]},
    star:{name:L('Star','Stjärna'),sprite:'star',cards:[card('mover',{direction:'down',speed:2}),card('collectible',{points:10})]},
    alien:{name:L('Alien','Utomjording'),sprite:'alien',cards:[card('bounce',{speed:3}),card('hurts'),card('health',{hp:3}),card('shooter',{projectile:'fireball',direction:'player',rate:2})]},
    meteorMaker:{name:L('Meteor maker','Meteorskapare'),sprite:'meteor',cards:[card('spawner',{object:'meteor',interval:1,max:10,spread:10}),card('invisible')]},
    starMaker:{name:L('Star maker','Stjärnskapare'),sprite:'star',cards:[card('spawner',{object:'star',interval:4,max:2,spread:10}),card('invisible')]}
  };
}
function baseSettings(type,name){return {name:name,author:'',gameType:type,controls:'arrows',lives:3,timeLimit:0,speed:100,sound:true,builder:2,lang:S.lang};}
function newProject(kind){
  var p, W, H, tiles, inst, sc;
  function set(x,y,id){if(x>=0&&x<W&&y>=0&&y<H)tiles[y*W+x]=id;}
  function rect(x0,y0,x1,y1,id){for(var y=y0;y<=y1;y++)for(var x=x0;x<=x1;x++)set(x,y,id);}
  function put(o,x,y){inst.push({obj:o,x:x*T,y:y*T});}
  function ground(x0,x1,top){rect(x0,top,x1,H-1,1);}
  function start(w,h){W=w;H=h;tiles=grid(W,H);inst=[];}
  function done(name,bg,music){return {name:name,w:W,h:H,bg:bg,music:music||'none',tiles:tiles,instances:inst};}
  if(kind==='topdown'||kind==='topempty'){
    p={format:1,settings:baseSettings('topdown',kind==='topdown'?L('Gem Garden','Ädelstensträdgården'):L('My adventure','Mitt äventyr')),objects:topObjects(),sprites:{},tiles:{},sounds:{},overrides:{},tileOverrides:{},teacher:{},rules:[],variables:[],scenes:[]};
    start(kind==='topdown'?30:24,kind==='topdown'?18:14);
    rect(0,0,W-1,H-1,10);
    rect(0,0,W-1,0,12);rect(0,H-1,W-1,H-1,12);rect(0,0,0,H-1,12);rect(W-1,0,W-1,H-1,12);
    if(kind==='topempty'){put('hero',2,2);p.scenes.push(done(L('Level 1','Bana 1'),'grass','calm'));p.rules=[];return p;}
    rect(19,1,19,16,12); set(19,8,10); set(19,9,10);
    rect(1,9,10,9,12); set(5,9,10);
    rect(1,7,18,7,11); rect(5,7,5,8,11);
    rect(12,3,15,5,9);
    [[8,2],[9,14],[14,12],[16,15],[3,5],[17,3],[11,11]].forEach(function(q){set(q[0],q[1],15);});
    [[7,4],[13,14],[2,15]].forEach(function(q){set(q[0],q[1],7);});
    rect(20,1,28,16,13); rect(25,7,27,10,11);
    put('hero',2,2); put('wizard',5,2); put('key',2,4);
    put('gate',19,8); put('gate',19,9); put('door',5,9);
    put('gem',3,13); put('gem',16,2); put('gem',11,15);
    put('slime',10,5); put('slime',14,10); put('skeleton',7,14); put('skeleton',24,4); put('skeleton',24,13);
    put('heart',8,12); put('rock',16,9); put('rock',9,5); put('boulder',14,7); put('riddle',17,12);
    put('portal',26,8);
    p.scenes.push(done(L('The garden','Trädgården'),'grass','adventure'));
    p.rules=[
      {on:true,when:{type:'start'},do:[{type:'text',text:L('Find the 3 gems!','Hitta de 3 ädelstenarna!'),sec:3}]},
      {on:true,when:{type:'allgone',obj:'gem'},do:[{type:'text',text:L('The gate is open! Go east.','Grinden är öppen! Gå österut.'),sec:4},{type:'destroy',target:'all',obj:'gate'},{type:'sound',sound:'win'}]}
    ];
    return p;
  }
  if(kind==='fp'){
    p={format:1,settings:baseSettings('fp',L('Maze of Riddles','Gåtornas labyrint')),objects:{
      hero:{name:L('Explorer','Upptäckare'),sprite:'knight',cards:[card('player',{speed:5}),card('shooter',{projectile:'star',direction:'facing',rate:4})]},
      gem:{name:L('Gem','Ädelsten'),sprite:'gem',cards:[card('collectible',{points:10})]},
      skeleton:{name:L('Skeleton','Skelett'),sprite:'skeleton',cards:[card('chase',{speed:2,range:5}),card('hurts'),card('health',{hp:2})]},
      ghost:{name:L('Ghost','Spöke'),sprite:'ghost',cards:[card('wander',{speed:2}),card('hurts'),card('float',{distance:1,speed:2})]},
      key:{name:L('Key','Nyckel'),sprite:'key',cards:[card('key')]},
      door:{name:L('Locked door','Låst dörr'),sprite:'door',cards:[card('lock')]},
      sphinx:{name:L('Riddle','Gåta'),sprite:'wizard',cards:[card('quiz',{question:L('What is 7 × 6?','Vad är 7 × 6?'),a1:'36',a2:'42',a3:'48',a4:'',correct:'2',points:20})]},
      heart:{name:L('Heart','Hjärta'),sprite:'heart',cards:[card('extralife')]},
      portal:{name:L('Exit','Utgång'),sprite:'portal',cards:[card('goal')]}
    },sprites:{},tiles:{},sounds:{},overrides:{},tileOverrides:{},teacher:{},rules:[],variables:[],scenes:[]};
    start(20,16);
    var maze=['####################','#..#.....#.........#','#..#.###.#.######..#','#....#...#......#..#','####.#.#####.##.#..#','#....#.....#..#.#..#','#.####.###.#..#.##.#','#.#......#.#..#....#','#.#.####.#.####.####','#...#....#......#..#','###.#.#########.#..#','#...#.#.......#.#..#','#.###.#.#####.#.#..#','#.....#.....#......#','#.#####.###.########','####################'];
    maze.forEach(function(row,y){for(var x=0;x<20;x++){if(row[x]==='#')set(x,y,(x+y)%7===0?3:12);}});
    put('hero',1,1); put('gem',8,1); put('gem',1,9); put('gem',17,12); put('key',2,11);
    put('door',15,13); put('skeleton',7,5); put('skeleton',13,11); put('ghost',17,3);
    put('sphinx',5,13); put('heart',10,13); put('portal',17,9);
    p.scenes.push(done(L('The maze','Labyrinten'),'dungeon','spooky'));
    p.rules=[{on:true,when:{type:'start'},do:[{type:'text',text:L('Find the gems and the exit! Arrows walk and turn.','Hitta ädelstenarna och utgången! Pilarna går och svänger.'),sec:4}]}];
    return p;
  }
  if(kind==='arcade'){
    p={format:1,settings:baseSettings('arcade',L('Meteor Dodge','Meteorregn')),objects:arcadeObjects(),sprites:{},tiles:{},sounds:{},overrides:{},tileOverrides:{},teacher:{},rules:[],variables:[],scenes:[]};
    p.settings.timeLimit=60;
    start(20,12);
    put('ship',9,10); put('alien',4,3); put('meteorMaker',10,0); put('starMaker',10,0);
    p.scenes.push(done(L('Space','Rymden'),'space','space'));
    p.rules=[
      {on:true,when:{type:'start'},do:[{type:'text',text:L('Survive for 60 seconds!','Överlev i 60 sekunder!'),sec:3}]},
      {on:true,when:{type:'every',sec:1},do:[{type:'addvar',var:'score',amount:1}]},
      {on:true,when:{type:'timeup'},do:[{type:'win'}]}
    ];
    return p;
  }
  p={format:1,settings:baseSettings('platformer',kind==='empty'?L('My game','Mitt spel'):L('Coin Run','Myntjakten')),objects:platObjects(),sprites:{},tiles:{},sounds:{},overrides:{},tileOverrides:{},teacher:{},rules:[],variables:[],scenes:[]};
  start(60,12);
  if(kind==='empty'){ground(0,W-1,10);put('hero',2,9);p.scenes.push(done(L('Level 1','Bana 1'),'day','happy'));return p;}
  ground(0,17,10); ground(21,37,10); ground(41,59,10);
  rect(12,7,15,7,4); rect(24,6,27,6,4);
  set(30,9,2);set(31,9,2);set(31,8,2);set(32,9,2);set(32,8,2);set(32,7,2);
  rect(46,6,49,6,3); rect(50,9,53,9,5);
  [3,8,23,35,44,56].forEach(function(x){set(x,9,6);}); [5,26,43,55].forEach(function(x){set(x,9,7);}); [16,36].forEach(function(x){set(x,9,8);});
  put('hero',2,9);
  [12,13,14,15].forEach(function(x){put('coin',x,6);}); [24,25,26,27].forEach(function(x){put('coin',x,5);}); [18,19,20].forEach(function(x){put('coin',x,7);});
  put('gem',32,5); put('gem',47,4);
  put('slime',11,9); put('slime',34,9); put('slime',45,9); put('bat',22,5); put('bat',40,6);
  put('spikes',28,9); put('crate',38,9); put('spring',42,9); put('heart',48,5); put('check',29,9); put('flag',57,9);
  p.scenes.push(done(L('Sunny hills','Soliga kullar'),'day','happy'));
  start(44,12);
  ground(0,9,10); ground(13,22,10); ground(26,43,10);
  rect(10,10,12,11,14); rect(23,11,25,11,14);
  rect(5,6,8,6,3); rect(15,5,18,5,3); rect(29,7,31,7,3); rect(34,5,36,5,4);
  rect(38,8,39,9,2);
  put('hero',1,9); put('beetle',7,9); put('beetle',20,9); put('beetle',33,9);
  put('bat',12,6); put('bat',24,7);
  [5,6,7,8].forEach(function(x){put('coin',x,5);}); [15,16,17,18].forEach(function(x){put('coin',x,4);});
  put('gem',35,4); put('check',22,9); put('crate',27,9); put('crate',27,8); put('spikes',30,9); put('flag',42,9);
  put('lift',10,9);
  p.scenes.push(done(L('Lava bridge','Lavabron'),'sunset','adventure'));
  p.scenes.push({name:L('The end','Slut'),story:true,storyText:L('You made it home with all the coins. Thanks for playing!','Du kom hem med alla mynten. Tack för att du spelade!'),storySprite:'fox',w:20,h:12,bg:'night',music:'calm',tiles:grid(20,12),instances:[]});
  p.rules=[
    {on:true,when:{type:'start'},do:[{type:'text',text:L('Reach the flag!','Ta dig till flaggan!'),sec:2}]},
    {on:true,when:{type:'var',var:'score',op:'>=',val:20},do:[{type:'text',text:L('20 points – awesome!','20 poäng – grymt!'),sec:2},{type:'sound',sound:'life'}]}
  ];
  return p;
}
function migrate(p){
  if(!p||p.format!==1||!p.settings||!p.objects||!p.scenes||!p.scenes.length) return null;
  var s=p.settings;
  s.gameType=s.gameType||'platformer'; if(s.builder===undefined) s.builder=2; if(s.timeLimit===undefined) s.timeLimit=0;
  p.rules=p.rules||[]; p.variables=p.variables||[]; p.sprites=p.sprites||{}; p.tiles=p.tiles||{}; p.sounds=p.sounds||{}; p.overrides=p.overrides||{}; p.tileOverrides=p.tileOverrides||{}; p.teacher=p.teacher||{};
  p.scenes.forEach(function(sc,i){ sc.name=sc.name||('Level '+(i+1)); sc.bg=sc.bg||s.background||'day'; sc.instances=sc.instances||[]; });
  return p;
}

/* ====================== SAVE / UNDO ====================== */
function persist(){
  clearTimeout(persist._t);
  persist._t=setTimeout(function(){try{localStorage.setItem(STORE_KEY,JSON.stringify(S.project));$('saveState').textContent='✓ '+t('saved');}catch(e){$('saveState').textContent='';}},400);
}
function snapshot(){S.undo.push(JSON.stringify({p:S.project,i:S.sceneIdx}));if(S.undo.length>60)S.undo.shift();S.redo=[];updateUndo();}
function restore(str){var o=JSON.parse(str);S.project=o.p;S.sceneIdx=o.i||0;afterLoad();}
function undo(){if(!S.undo.length)return;S.redo.push(JSON.stringify({p:S.project,i:S.sceneIdx}));restore(S.undo.pop());}
function redo(){if(!S.redo.length)return;S.undo.push(JSON.stringify({p:S.project,i:S.sceneIdx}));restore(S.redo.pop());}
function updateUndo(){$('btnUndo').disabled=!S.undo.length;$('btnRedo').disabled=!S.redo.length;}
function changed(){persist();renderStage();}
function edit(fn,rerender){snapshot();fn();persist();if(rerender)renderAll();}
function afterLoad(){
  if(S.sel&&!S.project.objects[S.sel]){S.sel=null;if(S.panel==='object')S.panel='settings';}
  if(S.brush.kind==='obj'&&!S.project.objects[S.brush.id])S.brush={kind:'tile',id:tileOrder()[0]};
  $('projName').value=S.project.settings.name||'';
  renderAll(); persist();
}

/* ====================== IMAGES ====================== */
var imgCache={};
function refreshSprites(){var p=S.project;p.sprites=p.sprites||{};p.tiles=p.tiles||{};GB.setCustomSprites(p.sprites,p.overrides);GB.setCustomTiles(p.tiles,p.tileOverrides);imgCache={};}
function customTileIds(){return Object.keys(S.project.tiles||{}).map(Number).sort(function(a,b){return a-b;});}
function tileName(id){var c=S.project.tiles&&S.project.tiles[id];if(c)return c.name||'#'+id;var d=GB.TILES[id];return d?t('tile_'+d.key):'#'+id;}
function spriteURL(id){return imgCache['s'+id]||(imgCache['s'+id]=GB.spriteCanvas(id).toDataURL());}
function tileURL(id){return imgCache['t'+id]||(imgCache['t'+id]=GB.tileCanvas(+id,isPlat()&&[1,9,14,17,18].indexOf(+id)>=0).toDataURL());}
var CATS=['mine','hero','npc','animal','enemy','boss','item','prop','fx'];
function spriteCat(id){if(S.project.sprites&&S.project.sprites[id])return 'mine';var b=GB.SPRITES[id];return (b&&b.cat)||'prop';}
function allSpriteIds(){return Object.keys(S.project.sprites||{}).concat(Object.keys(GB.SPRITES));}
function groupedOpts(sel,extraFirst){
  sel.innerHTML=''; if(extraFirst) sel.appendChild(el('option',{value:extraFirst[0],text:extraFirst[1]}));
  CATS.forEach(function(c){var ids=allSpriteIds().filter(function(id){return spriteCat(id)===c;});if(!ids.length)return;var og=el('optgroup',{label:t('cat_'+c)});ids.forEach(function(id){og.appendChild(el('option',{value:id,text:spriteName(id)}));});sel.appendChild(og);});
}
function picSelect(val,onch,extraFirst){var s=el('select');groupedOpts(s,extraFirst);s.value=val||'';s.addEventListener('change',function(){onch(s.value);});return s;}
function picturePicker(current,onPick){
  var box=el('div'), q=el('input',{type:'search',placeholder:t('searchPics'),style:'width:100%;padding:8px;border:1px solid var(--line);border-radius:8px;min-height:38px;margin-bottom:6px'});
  var list=el('div'); box.appendChild(q); box.appendChild(list);
  function draw(){
    list.innerHTML=''; var term=q.value.trim().toLowerCase(), curCat=spriteCat(current);
    CATS.forEach(function(c){
      var ids=allSpriteIds().filter(function(id){return spriteCat(id)===c&&(!term||spriteName(id).toLowerCase().indexOf(term)>=0||id.indexOf(term)>=0);});
      if(!ids.length) return;
      var d=el('details',{class:'piccat'}); if(term||c===curCat) d.setAttribute('open','');
      d.appendChild(el('summary',{text:t('cat_'+c)+' ('+ids.length+')'}));
      var grd=el('div',{class:'sprites'});
      ids.forEach(function(s){grd.appendChild(el('button',{class:current===s?'on':'',title:spriteName(s),'aria-label':spriteName(s),onclick:function(){onPick(s);}},[el('img',{src:spriteURL(s),alt:''})]));});
      d.appendChild(grd); list.appendChild(d);
    });
  }
  q.addEventListener('input',draw); draw();
  return box;
}
function spriteName(id){var c=S.project.sprites&&S.project.sprites[id];if(c)return c.name||id;var b=GB.SPRITES[id];return b?(b.name[S.lang]||b.name.en):id;}
function tileOrder(){return (isPlat()?[1,17,18,19,2,3,32,20,21,31,22,23,4,24,25,5,16,6,7,8,33,9,14,34,15,12]:[10,11,13,28,29,26,27,12,32,30,9,15,14,34,2,3,21,20,31,22,6,7,8,33,1,5,17,18]).concat(customTileIds());}

/* ====================== STAGE ====================== */
var cv=$('editCanvas'), g=cv.getContext('2d');
function renderStoryPreview(sc){
  var W=GB.VW, H=GB.VH;
  if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}
  cv.style.width=(W*S.zoom)+'px'; cv.style.height=(H*S.zoom)+'px';
  g.imageSmoothingEnabled=false;
  GB.drawBackground(g,sc.bg||'night',0,0,W,H,0);
  g.fillStyle='rgba(20,22,40,.35)'; g.fillRect(0,0,W,H);
  var top=24;
  if(sc.storySprite){var img=GB.spriteCanvas(sc.storySprite),s=Math.min(4,128/img.height);g.drawImage(img,Math.round(W/2-img.width*s/2),top,Math.round(img.width*s),Math.round(img.height*s));top+=img.height*s+12;}
  g.textAlign='center'; g.fillStyle='#fff'; g.font='800 26px system-ui,sans-serif'; if(sc.name){g.fillText(sc.name,W/2,top+24);top+=40;}
  g.fillStyle='rgba(255,255,255,.95)'; g.fillRect(40,top,W-80,Math.max(60,H-top-40));
  g.fillStyle='#222034'; g.textAlign='left'; g.font='600 16px system-ui,sans-serif';
  var words=String(sc.storyText||'').split(/\s+/), line='', y=top+28;
  words.forEach(function(w){var tt=line?line+' '+w:w; if(g.measureText(tt).width>W-120&&line){g.fillText(line,60,y);y+=22;line=w;}else line=tt;}); if(line) g.fillText(line,60,y);
}
function renderStage(){
  var sc=scene(), W=sc.w*T, H=sc.h*T, plat=isPlat();
  if(sc.story){renderStoryPreview(sc);return;}
  if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}
  cv.style.width=(W*S.zoom)+'px'; cv.style.height=(H*S.zoom)+'px';
  g.imageSmoothingEnabled=false;
  GB.drawBackground(g,sc.bg,0,0,W,H,0);
  for(var y=0;y<sc.h;y++)for(var x=0;x<sc.w;x++){
    var id=sc.tiles[y*sc.w+x]; if(!id) continue;
    var above=y>0?sc.tiles[(y-1)*sc.w+x]:0;
    g.drawImage(GB.tileCanvas(id,plat&&above!=id),x*T,y*T);
  }
  sc.instances.forEach(function(i){
    var o=S.project.objects[i.obj]; if(!o) return;
    g.globalAlpha=hasCard(o,'invisible')?0.45:1;
    g.drawImage(GB.spriteCanvas(o.sprite),i.x,i.y);
    g.globalAlpha=1;
    if(S.sel===i.obj){g.strokeStyle='#2f7de1';g.lineWidth=2;g.strokeRect(i.x+1,i.y+1,T-2,T-2);}
    if(hasCard(o,'player')){g.fillStyle='#2fa84f';g.fillRect(i.x+T-10,i.y,10,10);g.fillStyle='#fff';g.font='bold 9px sans-serif';g.textAlign='center';g.fillText('P',i.x+T-5,i.y+8);}
    if(hasCard(o,'spawner')){g.fillStyle='#9b5de5';g.fillRect(i.x,i.y,10,10);g.fillStyle='#fff';g.font='bold 9px sans-serif';g.textAlign='center';g.fillText('+',i.x+5,i.y+8);}
  });
  if(S.grid){
    g.strokeStyle='rgba(34,32,52,.12)';g.lineWidth=1;g.beginPath();
    for(x=0;x<=sc.w;x++){g.moveTo(x*T+0.5,0);g.lineTo(x*T+0.5,H);}
    for(y=0;y<=sc.h;y++){g.moveTo(0,y*T+0.5);g.lineTo(W,y*T+0.5);}
    g.stroke();
    g.strokeStyle='rgba(47,125,225,.55)';g.setLineDash([6,4]);
    if(mode()==='arcade') g.strokeRect(Math.max(0,(W-GB.VW)/2)+0.5,Math.max(0,(H-GB.VH)/2)+0.5,Math.min(W,GB.VW)-1,Math.min(H,GB.VH)-1);
    else g.strokeRect(0.5,0.5,Math.min(W,GB.VW)-1,Math.min(H,GB.VH)-1);
    g.setLineDash([]);
  }
  if(S.rectA&&S.rectB){
    var rx=Math.min(S.rectA.x,S.rectB.x)*T, ry=Math.min(S.rectA.y,S.rectB.y)*T, rw=(Math.abs(S.rectA.x-S.rectB.x)+1)*T, rh=(Math.abs(S.rectA.y-S.rectB.y)+1)*T;
    g.fillStyle=erasing?'rgba(217,67,74,.25)':'rgba(47,125,225,.25)'; g.fillRect(rx,ry,rw,rh);
    g.strokeStyle=erasing?'#d9434a':'#2f7de1'; g.lineWidth=2; g.strokeRect(rx+1,ry+1,rw-2,rh-2);
  }
  if(S.hover){
    var hx=S.hover.x*T,hy=S.hover.y*T;
    g.globalAlpha=0.55;
    if(S.tool==='paint'||S.tool==='rect'||S.tool==='fill'){
      if(S.brush.kind==='tile') g.drawImage(GB.tileCanvas(S.brush.id,plat&&(S.brush.id===1)),hx,hy);
      else if(S.project.objects[S.brush.id]) g.drawImage(GB.spriteCanvas(S.project.objects[S.brush.id].sprite),hx,hy);
    }
    g.globalAlpha=1;
    g.strokeStyle=S.tool==='erase'?'#d9434a':'#222034';g.lineWidth=2;g.strokeRect(hx+1,hy+1,T-2,T-2);
  }
}
function cellFromEvent(e){
  var r=cv.getBoundingClientRect(), sc=scene();
  var x=Math.floor((e.clientX-r.left)/r.width*sc.w), y=Math.floor((e.clientY-r.top)/r.height*sc.h);
  if(x<0||y<0||x>=sc.w||y>=sc.h) return null; return {x:x,y:y};
}
function instAt(c){var sc=scene();for(var i=sc.instances.length-1;i>=0;i--){var n=sc.instances[i];if(Math.floor(n.x/T)===c.x&&Math.floor(n.y/T)===c.y)return i;}return -1;}
function floodFill(c,erase){
  var sc=scene(); if(sc.story){toast(t('noPaintStory'));return;}
  if(S.brush.kind!=='tile'&&!erase){toast(t('fillTiles'));return;}
  var to=erase?0:S.brush.id, from=sc.tiles[c.y*sc.w+c.x]; if(from===to) return;
  var st=[c.y*sc.w+c.x], seen={}, n=0;
  while(st.length&&n<20000){var k=st.pop(); if(seen[k]||sc.tiles[k]!==from) continue; seen[k]=1; sc.tiles[k]=to; n++; var x=k%sc.w,y=Math.floor(k/sc.w);
    if(x>0)st.push(k-1); if(x<sc.w-1)st.push(k+1); if(y>0)st.push(k-sc.w); if(y<sc.h-1)st.push(k+sc.w);}
}
function rectCells(a,b){var r=[];for(var y=Math.min(a.y,b.y);y<=Math.max(a.y,b.y);y++)for(var x=Math.min(a.x,b.x);x<=Math.max(a.x,b.x);x++)r.push({x:x,y:y});return r;}
function applyRect(a,b,erase){
  var sc=scene(); if(sc.story){toast(t('noPaintStory'));return;}
  rectCells(a,b).forEach(function(c){
    if(erase){var i=instAt(c); if(i>=0) sc.instances.splice(i,1); else sc.tiles[c.y*sc.w+c.x]=0; return;}
    if(S.brush.kind==='tile') sc.tiles[c.y*sc.w+c.x]=S.brush.id;
    else if(instAt(c)<0&&!isPlayerObj(S.brush.id)) sc.instances.push({obj:S.brush.id,x:c.x*T,y:c.y*T});
  });
}
function applyAt(c,erase){
  var sc=scene();
  if(sc.story){toast(t('noPaintStory'));return;}
  if(erase||S.tool==='erase'){var i=instAt(c); if(i>=0) sc.instances.splice(i,1); else sc.tiles[c.y*sc.w+c.x]=0; return;}
  if(S.tool!=='paint') return;
  if(S.brush.kind==='tile'){sc.tiles[c.y*sc.w+c.x]=S.brush.id;return;}
  if(instAt(c)>=0) return;
  var id=S.brush.id;
  if(isPlayerObj(id)){var w=whoOf(id),had=sc.instances.some(function(n){return whoOf(n.obj)===w;});sc.instances=sc.instances.filter(function(n){return whoOf(n.obj)!==w;});if(had&&!S.moved)toast(t('onePlayer'));}
  sc.instances.push({obj:id,x:c.x*T,y:c.y*T});
}
var lastCell=null, erasing=false;
cv.addEventListener('contextmenu',function(e){e.preventDefault();});
cv.addEventListener('pointerdown',function(e){
  var c=cellFromEvent(e); if(!c) return;
  try{cv.setPointerCapture(e.pointerId);}catch(_){}
  snapshot(); erasing=e.button===2; S.moved=false;
  if(S.tool==='move'&&!erasing){var i=instAt(c); if(i>=0){S.drag=i;S.sel=scene().instances[i].obj;S.panel='object';renderInspector();renderShelf();}}
  else if(S.tool==='fill'){floodFill(c,erasing);}
  else if(S.tool==='rect'){S.rectA=c;S.rectB=c;}
  else applyAt(c,erasing);
  S.stroke=true; lastCell=c; changed();
});
cv.addEventListener('pointermove',function(e){
  var c=cellFromEvent(e); S.hover=c;
  if(S.stroke&&c&&(!lastCell||c.x!==lastCell.x||c.y!==lastCell.y)){
    S.moved=true;
    if(S.tool==='move'&&S.drag!=null&&!erasing){var n=scene().instances[S.drag]; if(n&&instAt(c)<0){n.x=c.x*T;n.y=c.y*T;}}
    else if(S.tool==='rect'){S.rectB=c;}
    else if(S.tool==='fill'){}
    else applyAt(c,erasing);
    lastCell=c; changed();
  } else renderStage();
  $('status').textContent=c?('x '+c.x+', y '+c.y):'';
});
function endStroke(){if(S.stroke&&S.tool==='rect'&&S.rectA){applyRect(S.rectA,S.rectB||S.rectA,erasing);S.rectA=S.rectB=null;changed();}
  if(S.stroke){S.stroke=false;S.drag=null;lastCell=null;renderShelf();if(S.panel==='object')renderInspector();}}
cv.addEventListener('pointerup',endStroke); cv.addEventListener('pointercancel',endStroke);
cv.addEventListener('pointerleave',function(){S.hover=null;renderStage();});

/* ====================== LEVEL TABS ====================== */
function renderSceneTabs(){
  var box=$('sceneTabs'); box.innerHTML='';
  S.project.scenes.forEach(function(sc,i){
    box.appendChild(el('button',{class:i===S.sceneIdx?'on':'','aria-pressed':i===S.sceneIdx,title:sc.story?t('storyScene'):sc.name,onclick:function(){S.sceneIdx=i;S.hover=null;if(S.panel==='object'&&!S.sel)S.panel='settings';renderAll();}},[(i+1)+'. '+(sc.story?'📖 ':'')+(sc.name||t('level'))]));
  });
  box.appendChild(el('button',{title:t('addLevel'),'aria-label':t('addLevel'),onclick:addLevel},['+']));
  box.appendChild(el('button',{title:t('addStory'),'aria-label':t('addStory'),onclick:addStory},['📖+']));
}
function blankScene(w,h,name){
  var tiles=grid(w,h), m=mode(), i, bg;
  if(m==='platformer'){for(i=(h-2)*w;i<w*h;i++)tiles[i]=1;bg='day';}
  else if(m==='topdown'||m==='fp'){tiles.fill(m==='fp'?0:10);for(var x=0;x<w;x++){tiles[x]=12;tiles[(h-1)*w+x]=12;}for(var y=0;y<h;y++){tiles[y*w]=12;tiles[y*w+w-1]=12;}bg='grass';}
  else bg='space';
  if(m==='fp') bg='dungeon';
  var inst=[], pid=firstObj(function(o){return hasCard(o,'player');});
  if(pid){var px=m==='arcade'?Math.floor(w/2):2, py=m==='platformer'?h-3:(m==='arcade'?h-2:2);inst.push({obj:pid,x:px*T,y:py*T});}
  return {name:name,w:w,h:h,bg:bg,music:m==='arcade'?'space':(m==='topdown'?'adventure':'happy'),tiles:tiles,instances:inst};
}
function addStory(){
  edit(function(){S.project.scenes.splice(S.sceneIdx+1,0,{name:S.lang==='sv'?'Berättelse':'Story',story:true,storyText:S.lang==='sv'?'Det var en gång…':'Once upon a time…',storySprite:'',w:20,h:12,bg:'night',music:'calm',tiles:new Array(240).fill(0),instances:[]});S.sceneIdx++;S.panel='settings';S.sel=null;},true);
}
function addLevel(){
  edit(function(){var sc=scene();S.project.scenes.push(blankScene(sc.w,sc.h,t('level')+' '+(S.project.scenes.length+1)));S.sceneIdx=S.project.scenes.length-1;S.panel='settings';S.sel=null;},true);
}

/* ====================== SHELF ====================== */
function renderShelf(){
  var box=$('shelf'); box.innerHTML='';
  $('tabTiles').classList.toggle('on',S.tab==='tiles'); $('tabObjects').classList.toggle('on',S.tab==='objects');
  if(S.tab==='tiles'){
    var gr=el('div',{class:'grid'});
    tileOrder().forEach(function(id){
      var on=S.brush.kind==='tile'&&S.brush.id===id;
      gr.appendChild(el('button',{class:'tile-btn'+(on?' on':''),'aria-pressed':on,onclick:function(){S.brush={kind:'tile',id:id};if(S.tool==='erase'||S.tool==='move')setTool('paint');renderShelf();}},[el('img',{src:tileURL(id),alt:''}),tileName(id)]));
    });
    box.appendChild(gr);
    box.appendChild(el('button',{class:'tb add-btn primary',onclick:function(){openPainter(null,{tile:true});}},[t('drawTile')]));
    if(S.brush.kind==='tile'&&S.project.tiles[S.brush.id]) box.appendChild(el('button',{class:'tb add-btn',onclick:function(){openPainter(null,{tile:true,tileId:S.brush.id});}},[t('editTile')]));
  }else{
    var gr2=el('div',{class:'grid'});
    Object.keys(S.project.objects).forEach(function(id){
      var o=S.project.objects[id], on=S.brush.kind==='obj'&&S.brush.id===id;
      var icons=o.cards.map(function(c){return (GB.CARD_DEFS[c.type]||{}).icon||'';}).join('');
      gr2.appendChild(el('button',{class:'obj-btn'+(on?' on':''),'aria-pressed':on,title:o.name,onclick:function(){S.brush={kind:'obj',id:id};S.sel=id;S.panel='object';if(S.tool!=='rect')setTool('paint');renderShelf();renderInspector();renderStage();updateSideButtons();}},[el('img',{src:spriteURL(o.sprite),alt:''}),o.name,el('span',{class:'cards',text:icons})]));
    });
    box.appendChild(gr2);
    box.appendChild(el('button',{class:'tb add-btn primary',onclick:function(){openPainter(null);}},[t('drawNew')]));
    box.appendChild(el('button',{class:'tb add-btn',onclick:addObject},[t('newObject')]));
  }
}
function addObject(){
  edit(function(){var id=uid();S.project.objects[id]={name:(S.lang==='sv'?'Objekt ':'Object ')+(Object.keys(S.project.objects).length+1),sprite:'star',cards:[]};S.brush={kind:'obj',id:id};S.sel=id;S.panel='object';S.tab='objects';},true);
}
function setTool(tl){S.tool=tl;document.querySelectorAll('[data-tool]').forEach(function(b){var on=b.getAttribute('data-tool')===tl;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});}
function updateSideButtons(){
  $('btnSettings').classList.toggle('on',S.panel==='settings');
  $('btnRules').classList.toggle('on',S.panel==='rules');
  $('btnRules').disabled=builder()<2; $('btnRules').title=builder()<2?t('rulesLocked'):'';
}

/* ====================== INSPECTOR ====================== */
function say(text){try{var u=new SpeechSynthesisUtterance(text);u.lang=S.lang==='sv'?'sv-SE':'en-GB';speechSynthesis.cancel();speechSynthesis.speak(u);}catch(e){}}
function field(label,input){return el('label',{class:'field'},[el('span',{text:label}),input]);}
function selectEl(opts,val,onch,cls){var s=el('select',{class:cls});opts.forEach(function(o){var op=el('option',{value:o[0],text:o[1]});if(String(o[0])===String(val))op.selected=true;s.appendChild(op);});s.addEventListener('change',function(){onch(s.value);});return s;}
function numEl(val,onch,min,max,step){var i=el('input',{type:'number',value:val,min:min,max:max,step:step||1});i.addEventListener('change',function(){onch(+i.value);});return i;}
function textEl(val,onch,ph){var i=el('input',{type:'text',value:val||'',placeholder:ph||''});i.addEventListener('change',function(){onch(i.value);});return i;}
function objOpts(withPlayer){var o=withPlayer?[['__player',t('thePlayer')]]:[];Object.keys(S.project.objects).forEach(function(id){o.push([id,S.project.objects[id].name]);});return o;}
function renderInspector(){
  var box=$('inspector'); box.innerHTML='';
  updateSideButtons();
  if(S.panel==='rules'){renderRules(box);return;}
  var o=S.panel==='object'&&S.sel&&S.project.objects[S.sel];
  if(!o){renderSettings(box);return;}
  var id=S.sel, sec=el('div',{class:'sec'});
  sec.appendChild(el('h3',{text:t('objects')}));
  sec.appendChild(field(t('objName'),textEl(o.name,function(v){edit(function(){o.name=v||o.name;});renderShelf();})));
  sec.appendChild(el('div',{class:'field'},[el('span',{text:t('picture')})]));
  sec.appendChild(picturePicker(o.sprite,function(s){edit(function(){o.sprite=s;},true);}));
  sec.appendChild(el('button',{class:'tb add-btn',onclick:function(){openPainter(id);}},[GB.isCustom(o.sprite)?t('editDrawing'):t('drawOwn')]));
  var count=scene().instances.filter(function(n){return n.obj===id;}).length;
  sec.appendChild(el('p',{class:'hint',text:count+' '+t('copies')}));

  var ex=el('details',{class:'extra'}); if(o.states&&(o.states.walk||o.states.jump||o.states.hurt)) ex.setAttribute('open','');
  ex.appendChild(el('summary',{text:t('extraPics')}));
  ['walk','jump','hurt'].forEach(function(k){
    ex.appendChild(field(t('pic_'+k),picSelect((o.states&&o.states[k])||'',function(v){edit(function(){o.states=o.states||{};if(v)o.states[k]=v;else delete o.states[k];});},['',t('sameAsMain')])));
  });
  sec.appendChild(ex);
  box.appendChild(sec);

  var cs=el('div',{class:'sec'});
  cs.appendChild(el('h3',{text:t('cards')}));
  if(!o.cards.length) cs.appendChild(el('p',{class:'hint',text:t('noCards')}));
  o.cards.forEach(function(c,ci){
    var def=GB.CARD_DEFS[c.type]; if(!def) return;
    var cd=el('div',{class:'card'});
    cd.appendChild(el('div',{class:'card-head'},[el('span',{class:'ic',text:def.icon}),el('span',{text:t('card_'+c.type)}),
      el('button',{class:'say',title:t('readAloud'),'aria-label':t('readAloud'),onclick:function(){say(t('card_'+c.type)+'. '+t('desc_'+c.type));}},['🔊']),
      el('button',{class:'x','aria-label':'Remove',onclick:function(){edit(function(){o.cards.splice(ci,1);},true);}},['×'])]));
    cd.appendChild(el('p',{text:t('desc_'+c.type)}));
    c.settings=c.settings||{};
    Object.keys(def.settings).forEach(function(k){
      var sd=def.settings[k]; if(!modeOK(sd.mode)) return;
      var val=c.settings[k]!==undefined?c.settings[k]:sd.def, ctl;
      if(sd.bool){
        ctl=el('input',{type:'checkbox'}); ctl.checked=!!val;
        ctl.addEventListener('change',function(){edit(function(){c.settings[k]=ctl.checked;});});
        cd.appendChild(el('label',{class:'setting'},[el('span',{text:t('set_'+k)}),ctl,el('span')]));
      }else if(sd.options){
        ctl=selectEl(sd.options.map(function(v){return [v,t('opt_'+v)];}),val,function(v){edit(function(){c.settings[k]=v;});});
        cd.appendChild(el('label',{class:'setting'},[el('span',{text:t('set_'+k)}),ctl,el('span')]));
      }else if(sd.objects){
        ctl=selectEl([['',t('none')]].concat(objOpts(false).filter(function(x){return x[0]!==id;})),val,function(v){edit(function(){c.settings[k]=v;});});
        cd.appendChild(el('label',{class:'setting'},[el('span',{text:t('set_'+k)}),ctl,el('span')]));
      }else if(sd.text){
        cd.appendChild(field(t('set_'+k),textEl(val,function(v){edit(function(){c.settings[k]=v;});})));
      }else{
        var rg=el('input',{type:'range',min:sd.min,max:sd.max,step:1,value:val}), out=el('output',{text:String(val)});
        rg.addEventListener('input',function(){out.textContent=rg.value;});
        rg.addEventListener('change',function(){edit(function(){c.settings[k]=+rg.value;});});
        cd.appendChild(el('label',{class:'setting'},[el('span',{text:t('set_'+k)}),rg,out]));
      }
    });
    cs.appendChild(cd);
  });
  var have={}; o.cards.forEach(function(c){have[c.type]=1;});
  var add=el('select',{class:'addcard','aria-label':t('addCard')});
  add.appendChild(el('option',{value:'',text:t('addCard')}));
  Object.keys(GB.CARD_DEFS).forEach(function(k){ if(!have[k]&&modeOK(GB.CARD_DEFS[k].mode)) add.appendChild(el('option',{value:k,text:GB.CARD_DEFS[k].icon+'  '+t('card_'+k)})); });
  add.addEventListener('change',function(){
    var v=add.value; if(!v) return;
    edit(function(){
      o.cards.push(card(v));
    },true);
  });
  cs.appendChild(add);
  box.appendChild(cs);
  var ds=el('div',{class:'sec lvl-actions'});
  ds.appendChild(el('button',{class:'tb',onclick:function(){
    edit(function(){var nid=uid(), c=clone(o); c.name=o.name+' ('+t('copyName')+')'; S.project.objects[nid]=c; S.sel=nid; S.brush={kind:'obj',id:nid};},true);
  }},['⧉ '+t('dupObj')]));
  ds.appendChild(el('button',{class:'tb danger',onclick:function(){
    var b=this;
    if(!b.dataset.armed){b.dataset.armed='1';b.textContent='⚠ '+t('confirmDel');setTimeout(function(){if(b.isConnected){delete b.dataset.armed;b.textContent='🗑 '+t('deleteObj');}},4000);return;}
    edit(function(){
      delete S.project.objects[id];
      S.project.scenes.forEach(function(sc){sc.instances=sc.instances.filter(function(n){return n.obj!==id;});});
      S.sel=null;S.panel='settings';
      if(S.brush.kind==='obj'&&S.brush.id===id) S.brush={kind:'tile',id:tileOrder()[0]};
    },true);
  }},['🗑 '+t('deleteObj')]));
  box.appendChild(ds);
}
function renderSettings(box){
  var st=S.project.settings, sec=el('div',{class:'sec'});
  sec.appendChild(el('h3',{text:t('settingsTitle')}));
  sec.appendChild(field(t('gName'),textEl(st.name,function(v){edit(function(){st.name=v;});$('projName').value=v;})));
  sec.appendChild(field(t('author'),textEl(st.author,function(v){edit(function(){st.author=v;});},t('authorPh'))));
  sec.appendChild(field(t('gameType'),selectEl([['platformer',t('gt_platformer')],['topdown',t('gt_topdown')],['arcade',t('gt_arcade')],['fp',t('gt_fp')]],st.gameType,function(v){
    edit(function(){
      st.gameType=v;
      S.project.scenes.forEach(function(sc){var flat=!!(GB.BGS[sc.bg]&&GB.BGS[sc.bg].flat);
        if(v==='platformer'&&flat) sc.bg='day';
        else if(v==='topdown'&&!flat) sc.bg='grass';
        else if(v==='fp') sc.bg='dungeon';
        else if(v==='arcade'&&sc.bg!=='space'&&sc.bg!=='night') sc.bg='space';});
      S.brush={kind:'tile',id:tileOrder()[0]};
    },true);
  })));
  var ctl=[['arrows',t('ctlArrows')]]; if(isPlat()) ctl.push(['onebutton',t('ctlOne')]); ctl.push(['scan',t('ctlScan')],['dwell',t('ctlDwell')]);
  sec.appendChild(field(t('controls'),selectEl(ctl,st.controls||'arrows',function(v){edit(function(){st.controls=v;},true);})));
  if(st.controls==='scan') sec.appendChild(field(t('scanSpeed'),selectEl([[0.8,'0.8 s'],[1.2,'1.2 s'],[1.8,'1.8 s'],[2.5,'2.5 s'],[3.5,'3.5 s']],st.scanSpeed||1.2,function(v){edit(function(){st.scanSpeed=+v;});})));
  sec.appendChild(field(t('lives'),selectEl([[1,'1'],[3,'3'],[5,'5'],[0,t('infinite')]],st.lives,function(v){edit(function(){st.lives=+v;});})));
  sec.appendChild(field(t('timeLimit'),selectEl([[0,t('noLimit')],[30,'30 '+t('sec')],[60,'60 '+t('sec')],[90,'90 '+t('sec')],[120,'120 '+t('sec')],[180,'180 '+t('sec')]],st.timeLimit||0,function(v){edit(function(){st.timeLimit=+v;});})));
  var bsel=selectEl([[1,t('b1')],[2,t('b2')],[3,t('b3')]],st.builder||1,function(v){edit(function(){st.builder=+v;},true);});
  if(isLocked()) bsel.disabled=true;
  sec.appendChild(field(t('builder')+(isLocked()?' '+t('locked'):''),bsel));
  box.appendChild(sec);

  var lv=el('div',{class:'sec'}), sc=scene();
  lv.appendChild(el('h3',{text:(sc.story?t('storyScene'):t('levelTitle'))+' ('+(S.sceneIdx+1)+'/'+S.project.scenes.length+')'}));
  if(sc.story){
    lv.appendChild(el('p',{class:'hint',style:'margin:0 0 8px',text:t('storyHint')}));
    lv.appendChild(field(t('levelName'),textEl(sc.name,function(v){edit(function(){sc.name=v;});renderSceneTabs();renderStage();})));
    var ta=el('textarea',{rows:5,style:'width:100%;padding:8px;border:1px solid var(--line);border-radius:8px;font:inherit'}); ta.value=sc.storyText||'';
    ta.addEventListener('change',function(){edit(function(){sc.storyText=ta.value;});renderStage();});
    lv.appendChild(field(t('storyText'),ta));
    lv.appendChild(field(t('storyPic'),picSelect(sc.storySprite||'',function(v){edit(function(){sc.storySprite=v;});renderStage();},['',t('none2')])));
  }
  if(!sc.story){
  lv.appendChild(field(t('levelName'),textEl(sc.name,function(v){edit(function(){sc.name=v;});renderSceneTabs();})));
  var bgs=Object.keys(GB.BGS).filter(function(k){var flat=!!GB.BGS[k].flat;return isPlat()?!flat:(mode()==='arcade'?true:true);});
  lv.appendChild(field(t('background'),selectEl(bgs.map(function(k){return [k,t('bg_'+k)];}),sc.bg,function(v){edit(function(){sc.bg=v;});renderStage();})));
  lv.appendChild(field(t('music'),selectEl(['none'].concat(Object.keys(GB.MUSIC)).map(function(k){return [k,t('mus_'+k)];}),sc.music||'none',function(v){edit(function(){sc.music=v;});previewMusic(v);})));
  function size(label,key,min,max){var i=el('input',{type:'range',min:min,max:max,step:1,value:sc[key]}),out=el('output',{text:String(sc[key])});i.addEventListener('input',function(){out.textContent=i.value;});i.addEventListener('change',function(){snapshot();resize(key==='w'?+i.value:sc.w,key==='h'?+i.value:sc.h);persist();});return el('label',{class:'setting'},[el('span',{text:label}),i,out]);}
  lv.appendChild(size(t('levelW'),'w',20,200)); lv.appendChild(size(t('levelH'),'h',12,60));
  }else{
    lv.appendChild(field(t('background'),selectEl(Object.keys(GB.BGS).map(function(k){return [k,t('bg_'+k)];}),sc.bg,function(v){edit(function(){sc.bg=v;});renderStage();})));
    lv.appendChild(field(t('music'),selectEl(['none'].concat(Object.keys(GB.MUSIC)).map(function(k){return [k,t('mus_'+k)];}),sc.music||'none',function(v){edit(function(){sc.music=v;});previewMusic(v);})));
  }
  var acts=el('div',{class:'lvl-actions'});
  acts.appendChild(el('button',{class:'tb',onclick:function(){edit(function(){var c=clone(scene());c.name=(c.name||'')+' 2';S.project.scenes.splice(S.sceneIdx+1,0,c);S.sceneIdx++;},true);}},['⧉ '+t('dupLevel')]));
  if(S.sceneIdx>0) acts.appendChild(el('button',{class:'tb','aria-label':t('moveLeft'),title:t('moveLeft'),onclick:function(){edit(function(){var a=S.project.scenes,i=S.sceneIdx;var x=a[i];a[i]=a[i-1];a[i-1]=x;S.sceneIdx--;},true);}},['◀']));
  if(S.sceneIdx<S.project.scenes.length-1) acts.appendChild(el('button',{class:'tb','aria-label':t('moveRight'),title:t('moveRight'),onclick:function(){edit(function(){var a=S.project.scenes,i=S.sceneIdx;var x=a[i];a[i]=a[i+1];a[i+1]=x;S.sceneIdx++;},true);}},['▶']));
  if(S.project.scenes.length>1) acts.appendChild(el('button',{class:'tb danger',onclick:function(){
    var b=this; if(!b.dataset.armed){b.dataset.armed='1';b.textContent='⚠ '+t('delLevelConfirm');setTimeout(function(){if(b.isConnected){delete b.dataset.armed;b.textContent='🗑 '+t('delLevel');}},4000);return;}
    edit(function(){S.project.scenes.splice(S.sceneIdx,1);S.sceneIdx=Math.max(0,S.sceneIdx-1);},true);
  }},['🗑 '+t('delLevel')]));
  lv.appendChild(acts);
  box.appendChild(lv);

  var ac=el('div',{class:'sec'});
  ac.appendChild(el('h3',{text:t('access')}));
  ac.appendChild(field(t('speed'),selectEl([[100,'100%'],[85,'85%'],[70,'70%'],[50,'50%']],st.speed||100,function(v){edit(function(){st.speed=+v;});})));
  var snd=el('input',{type:'checkbox'}); snd.checked=st.sound!==false; snd.addEventListener('change',function(){edit(function(){st.sound=snd.checked;});});
  ac.appendChild(el('label',{class:'row field'},[snd,el('span',{text:t('sound')})]));
  var mus=el('input',{type:'checkbox'}); mus.checked=st.music!==false; mus.addEventListener('change',function(){edit(function(){st.music=mus.checked;});});
  ac.appendChild(el('label',{class:'row field'},[mus,el('span',{text:t('musicOn')})]));
  var dys=el('input',{type:'checkbox'}); dys.checked=document.body.classList.contains('dyslexic'); dys.addEventListener('change',function(){document.body.classList.toggle('dyslexic',dys.checked);try{localStorage.setItem('gb2d-dys',dys.checked?'1':'');}catch(e){}});
  ac.appendChild(el('label',{class:'row field'},[dys,el('span',{text:t('dys')})]));
  [['bigUI','big-ui'],['readUI','read-ui']].forEach(function(pr){
    var cb=el('input',{type:'checkbox'}); cb.checked=document.body.classList.contains(pr[1]);
    cb.addEventListener('change',function(){document.body.classList.toggle(pr[1],cb.checked);try{localStorage.setItem('gb2d-'+pr[1],cb.checked?'1':'');}catch(e){}});
    ac.appendChild(el('label',{class:'row field'},[cb,el('span',{text:t(pr[0])})]));
  });
  box.appendChild(ac);
  box.appendChild(renderSounds());
  box.appendChild(renderArtPack());
  box.appendChild(renderTeacher());
}
function resize(w,h){
  var sc=scene(), nt=grid(w,h), dy=isPlat()?h-sc.h:0, fill=mode()==='topdown'?10:0;
  if(fill) nt.fill(fill);
  for(var y=0;y<sc.h;y++)for(var x=0;x<Math.min(w,sc.w);x++){var ny=y+dy; if(ny>=0&&ny<h) nt[ny*w+x]=sc.tiles[y*sc.w+x];}
  sc.instances=sc.instances.map(function(n){return {obj:n.obj,x:n.x,y:n.y+dy*T};}).filter(function(n){return n.x<w*T&&n.y>=0&&n.y<h*T;});
  sc.tiles=nt; sc.w=w; sc.h=h; changed(); renderInspector();
}

/* ====================== SOUNDS ====================== */
var SFX_KEYS=['jump','coin','hurt','win','stomp','laser','key','life'];
var rec=null;
function playData(data){try{var a=new Audio(data);a.play();}catch(e){}}
function addSound(name,data){
  edit(function(){var id='snd_'+uid();S.project.sounds[id]={name:name,data:data};},true);
}
function renderSounds(){
  var sec=el('div',{class:'sec'}), snd=S.project.sounds||{};
  sec.appendChild(el('h3',{text:t('sounds')}));
  Object.keys(snd).forEach(function(id){
    var s=snd[id];
    sec.appendChild(el('div',{class:'var-row'},[
      textEl(s.name,function(v){edit(function(){s.name=v||s.name;});}),
      el('button',{class:'tb',title:'▶','aria-label':'Play',onclick:function(){playData(s.data);}},['▶']),
      el('span'),
      el('button',{class:'x','aria-label':'Remove',onclick:function(){edit(function(){delete S.project.sounds[id];var m=S.project.settings.sfxMap||{};Object.keys(m).forEach(function(k){if(m[k]===id)delete m[k];});},true);}},['×'])]));
  });
  var row=el('div',{class:'lvl-actions'});
  row.appendChild(el('button',{class:'tb',id:'btnRec',onclick:function(){
    var b=this;
    if(rec){try{rec.stop();}catch(e){}return;}
    if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia||!window.MediaRecorder){toast(t('micNA'));return;}
    navigator.mediaDevices.getUserMedia({audio:true}).then(function(stream){
      var chunks=[]; rec=new MediaRecorder(stream); b.textContent=t('stopRec');
      rec.ondataavailable=function(ev){if(ev.data&&ev.data.size)chunks.push(ev.data);};
      rec.onstop=function(){
        stream.getTracks().forEach(function(tr){tr.stop();}); rec=null; b.textContent=t('recordSnd');
        var blob=new Blob(chunks,{type:chunks[0]&&chunks[0].type||'audio/webm'}), fr=new FileReader();
        fr.onload=function(){addSound((S.lang==='sv'?'Inspelning ':'Recording ')+(Object.keys(S.project.sounds).length+1),fr.result);};
        fr.readAsDataURL(blob);
      };
      rec.start(); setTimeout(function(){if(rec&&rec.state==='recording')rec.stop();},3000);
    }).catch(function(){toast(t('micNA'));});
  }},[t('recordSnd')]));
  var up=el('input',{type:'file',accept:'audio/*',style:'display:none'});
  up.addEventListener('change',function(){
    var f=up.files[0]; up.value=''; if(!f) return;
    if(f.size>300*1024){toast(t('sndTooBig'));return;}
    var fr=new FileReader(); fr.onload=function(){addSound(f.name.replace(/\.[^.]+$/,'').slice(0,24),fr.result);}; fr.readAsDataURL(f);
  });
  row.appendChild(up);
  row.appendChild(el('button',{class:'tb',onclick:function(){up.click();}},[t('uploadSnd')]));
  sec.appendChild(row);
  if(Object.keys(snd).length){
    var st=S.project.settings; st.sfxMap=st.sfxMap||{};
    sec.appendChild(el('div',{class:'lbl',style:'font-weight:700;font-size:13px;margin:10px 0 4px',text:t('useFor')}));
    var opts=[['',t('defaultSnd')]].concat(Object.keys(snd).map(function(id){return [id,snd[id].name];}));
    SFX_KEYS.forEach(function(k){
      sec.appendChild(el('label',{class:'setting'},[el('span',{text:t('sfx_'+k)}),selectEl(opts,st.sfxMap[k]||'',function(v){edit(function(){if(v)st.sfxMap[k]=v;else delete st.sfxMap[k];});if(v)playData(snd[v].data);}),el('span')]));
    });
  }
  return sec;
}

/* ====================== ART PACK ====================== */
function loadImage(file){return new Promise(function(res,rej){var u=URL.createObjectURL(file),im=new Image();im.onload=function(){res(im);setTimeout(function(){URL.revokeObjectURL(u);},100);};im.onerror=function(){rej();URL.revokeObjectURL(u);};im.src=u;});}
function imgToFrames(im){
  var h=im.height, w=im.width, n=(w>h&&w%h===0)?Math.min(4,w/h):1, fw=n>1?h:w;
  var N=Math.max(fw,h)<=16?16:32, out=[];
  for(var f=0;f<n;f++){
    var c=document.createElement('canvas'); c.width=c.height=N; var gg=c.getContext('2d');
    var s=Math.min(N/fw,N/h), dw=Math.max(1,Math.round(fw*s)), dh=Math.max(1,Math.round(h*s));
    gg.imageSmoothingEnabled=Math.max(fw,h)>N; gg.drawImage(im,f*fw,0,fw,h,Math.floor((N-dw)/2),N-dh,dw,dh);
    var d=gg.getImageData(0,0,N,N).data, px=new Array(N*N).fill(null);
    for(var i=0;i<N*N;i++){if(d[i*4+3]>=128)px[i]=hex(d[i*4],d[i*4+1],d[i*4+2]);}
    out.push(px);
  }
  return {size:N,frames:out};
}
function renderArtPack(){
  var sec=el('div',{class:'sec'}), p=S.project;
  sec.appendChild(el('h3',{text:t('artPack')}));
  sec.appendChild(el('p',{class:'hint',style:'margin:0 0 8px',text:t('artPackHint')}));
  var inp=el('input',{type:'file',accept:'image/png,image/*',multiple:'',style:'display:none'});
  inp.addEventListener('change',function(){
    var files=[].slice.call(inp.files); inp.value=''; if(!files.length) return;
    var done=[];
    Promise.all(files.map(function(f){return loadImage(f).then(function(im){return {f:f,im:im};},function(){return null;});})).then(function(list){
      edit(function(){
        p.overrides=p.overrides||{}; p.tileOverrides=p.tileOverrides||{};
        list.forEach(function(it){
          if(!it) return;
          var stem=it.f.name.replace(/\.[^.]+$/,'').toLowerCase().replace(/[^a-z0-9_\-]/g,''), r=imgToFrames(it.im);
          if(stem.indexOf('tile_')===0){
            var key=stem.slice(5), tid=Object.keys(GB.TILES).filter(function(k){return GB.TILES[k].key===key;})[0];
            if(tid){p.tileOverrides[tid]={px:r.frames[0]};done.push(stem);return;}
          }
          var sid='c_'+uid(); p.sprites[sid]={name:stem,frames:r.frames,fps:6,size:r.size,scale:r.size===32?1:2};
          if(GB.SPRITES[stem]) p.overrides[stem]=sid;
          done.push(stem);
        });
      },true);
      toast(t('artDone')+' '+done.length);
    });
  });
  sec.appendChild(inp);
  var row=el('div',{class:'lvl-actions'});
  row.appendChild(el('button',{class:'tb',onclick:function(){inp.click();}},[t('importArt')]));
  if(Object.keys(p.overrides||{}).length||Object.keys(p.tileOverrides||{}).length)
    row.appendChild(el('button',{class:'tb danger',onclick:function(){edit(function(){p.overrides={};p.tileOverrides={};},true);}},[t('resetArt')]));
  sec.appendChild(row);
  return sec;
}

/* ====================== TEACHER ====================== */
var unlocked=false;
function isLocked(){var tc=S.project.teacher||{};return !!(tc.lock&&!unlocked);}
function renderTeacher(){
  var sec=el('div',{class:'sec'}), tc=S.project.teacher=S.project.teacher||{};
  sec.appendChild(el('h3',{text:t('teacher')}));
  if(isLocked()){
    var pin=el('input',{type:'password',inputmode:'numeric',style:'padding:8px;border:1px solid var(--line);border-radius:8px;min-height:40px;width:100%'});
    sec.appendChild(el('p',{class:'hint',style:'margin:0 0 6px',text:t('locked')}));
    sec.appendChild(field(t('pinAsk'),pin));
    sec.appendChild(el('button',{class:'tb',onclick:function(){if(String(pin.value)===String(tc.pin||'')){unlocked=true;renderInspector();}else toast(t('wrongPin'));}},[t('unlock')]));
    return sec;
  }
  sec.appendChild(el('p',{class:'hint',style:'margin:0 0 8px',text:t('teacherHint')}));
  var ch=tc.challenge=tc.challenge||{};
  sec.appendChild(field(t('challengeTitle'),textEl(ch.title,function(v){edit(function(){ch.title=v;});renderChallenge();})));
  var ta=el('textarea',{rows:3,style:'width:100%;padding:8px;border:1px solid var(--line);border-radius:8px;font:inherit'}); ta.value=ch.text||'';
  ta.addEventListener('change',function(){edit(function(){ch.text=ta.value;});renderChallenge();});
  sec.appendChild(field(t('challengeText'),ta));
  var ts=el('textarea',{rows:4,style:'width:100%;padding:8px;border:1px solid var(--line);border-radius:8px;font:inherit'}); ts.value=(ch.steps||[]).join('\n');
  ts.addEventListener('change',function(){edit(function(){ch.steps=ts.value.split('\n').map(function(x){return x.trim();}).filter(Boolean);ch.done=[];});renderChallenge();});
  sec.appendChild(field(t('challengeSteps'),ts));
  sec.appendChild(field(t('pinSet'),textEl(tc.pin,function(v){edit(function(){tc.pin=v.replace(/\D/g,'').slice(0,8);});})));
  var lk=el('input',{type:'checkbox'}); lk.checked=!!tc.lock;
  lk.addEventListener('change',function(){edit(function(){tc.lock=lk.checked;});unlocked=!lk.checked?false:true;});
  sec.appendChild(el('label',{class:'row field'},[lk,el('span',{text:t('lockBuilder')})]));
  return sec;
}
function renderChallenge(){
  var box=$('challengeBox'); if(!box) return; box.innerHTML='';
  var ch=(S.project.teacher||{}).challenge;
  if(!ch||!(ch.title||ch.text||(ch.steps&&ch.steps.length))){box.style.display='none';return;}
  box.style.display='';
  box.appendChild(el('div',{class:'ch-title',text:'🎯 '+(ch.title||t('challenge'))}));
  if(ch.text) box.appendChild(el('p',{class:'hint',style:'margin:4px 0',text:ch.text}));
  ch.done=ch.done||[];
  (ch.steps||[]).forEach(function(stp,i){
    var cb=el('input',{type:'checkbox'}); cb.checked=!!ch.done[i];
    cb.addEventListener('change',function(){ch.done[i]=cb.checked;persist();});
    box.appendChild(el('label',{class:'row ch-step'},[cb,el('span',{text:stp})]));
  });
}

/* ====================== REFLECTION ====================== */
function askReflection(then){
  var m=$('reflModal'), b=$('reflBox'), r=S.project.reflection=S.project.reflection||{};
  b.innerHTML='';
  b.appendChild(el('h2',{text:t('reflTitle')}));
  b.appendChild(el('p',{class:'hint',text:t('reflHint')}));
  var areas={};
  ['refl1','refl2','refl3'].forEach(function(k){
    var ta=el('textarea',{rows:2,style:'width:100%;padding:8px;border:1px solid var(--line);border-radius:8px;font:inherit'}); ta.value=r[k]||''; areas[k]=ta;
    b.appendChild(field(t(k),ta));
  });
  function close(save){
    if(save){edit(function(){Object.keys(areas).forEach(function(k){r[k]=areas[k].value.trim();});});}
    m.classList.remove('on'); then();
  }
  b.appendChild(el('div',{class:'pt-actions'},[el('button',{class:'tb',onclick:function(){close(false);}},[t('skip')]),el('button',{class:'tb primary',onclick:function(){close(true);}},['⬇ '+t('exportNow')])]));
  m.classList.add('on');
}

/* ====================== RULES ====================== */
var TRIGGERS=['touch','start','key','every','var','allgone','destroyed','click','message','timeup'];
var ACTIONS=['addvar','setvar','text','ask','destroy','spawn','effect','picture','moveto','sound','music','shake','hurt','send','nextlevel','gotolevel','restart','win','gameover'];
var EFFECTS=['confetti','explosion','sparkle','hearts','smoke'];
var KEYS=[['Space','Space'],['Enter','Enter'],['KeyX','X'],['KeyZ','Z'],['KeyQ','Q'],['KeyE','E'],['KeyR','R'],['ArrowUp','↑'],['ArrowDown','↓'],['ArrowLeft','←'],['ArrowRight','→'],['Digit1','1'],['Digit2','2'],['Digit3','3']];
var SOUNDS=['coin','jump','win','hurt','stomp','spring','life','laser','hit','explosion','key','door'];
var OPS=[['>=','≥'],['<=','≤'],['=','='],['>','>'],['<','<']];
function varOpts(){
  var v=[['score',t('v_score')],['lives',t('v_lives')],['time',t('v_time')],['keys',t('v_keys')]];
  (S.project.variables||[]).forEach(function(x){if(x.name)v.push([x.name,x.name]);});
  return v;
}
function triggerDefaults(type){
  var f=firstObj();
  return {touch:{type:type,a:'__player',b:f},key:{type:type,key:'Space'},every:{type:type,sec:1},var:{type:type,var:'score',op:'>=',val:10},allgone:{type:type,obj:f},destroyed:{type:type,obj:f},click:{type:type,obj:f},message:{type:type,name:'go'}}[type]||{type:type};
}
function actionDefaults(type){
  var f=firstObj();
  return {addvar:{type:type,var:'score',amount:1},setvar:{type:type,var:'score',value:0},text:{type:type,text:S.lang==='sv'?'Hej!':'Hello!',sec:3},destroy:{type:type,target:'other',obj:f},spawn:{type:type,obj:f,where:'top'},sound:{type:type,sound:'coin'},gotolevel:{type:type,scene:0},send:{type:type,name:'go'},effect:{type:type,kind:'confetti',where:'player'},picture:{type:type,target:'other',obj:f,sprite:'star'},moveto:{type:type,obj:f},music:{type:type,music:'boss'},ask:{type:type,text:S.lang==='sv'?'Vilken väg?':'Which way?',c1:S.lang==='sv'?'Vänster':'Left',m1:'left',c2:S.lang==='sv'?'Höger':'Right',m2:'right'}}[type]||{type:type};
}
function triggerParams(w,rerender){
  var box=el('div');
  function upd(k){return function(v){edit(function(){w[k]=v;});};}
  if(w.type==='touch'){
    box.appendChild(selectEl(objOpts(true),w.a,upd('a')));
    box.appendChild(el('div',{class:'hint',style:'margin:0 0 4px',text:t('touches')}));
    box.appendChild(selectEl(objOpts(false),w.b,upd('b')));
  }else if(w.type==='key') box.appendChild(selectEl(KEYS,w.key,upd('key')));
  else if(w.type==='every') box.appendChild(el('div',{class:'pair'},[numEl(w.sec,upd('sec'),0.2,60,0.5),el('span',{class:'hint',style:'margin:8px 0 0',text:t('seconds')})]));
  else if(w.type==='var'){box.appendChild(selectEl(varOpts(),w.var,upd('var')));box.appendChild(el('div',{class:'pair'},[selectEl(OPS,w.op,upd('op')),numEl(w.val,upd('val'))]));}
  else if(w.type==='allgone'||w.type==='click'||w.type==='destroyed') box.appendChild(selectEl(objOpts(false),w.obj,upd('obj')));
  else if(w.type==='message') box.appendChild(textEl(w.name,upd('name'),t('msgName')));
  return box;
}
function actionParams(a){
  var box=el('div');
  function upd(k,re){return function(v){edit(function(){a[k]=v;},re);};}
  if(a.type==='addvar') box.appendChild(el('div',{class:'pair'},[selectEl(varOpts(),a.var,upd('var')),numEl(a.amount,upd('amount'))]));
  else if(a.type==='setvar') box.appendChild(el('div',{class:'pair'},[selectEl(varOpts(),a.var,upd('var')),numEl(a.value,upd('value'))]));
  else if(a.type==='text'){box.appendChild(textEl(a.text,upd('text')));box.appendChild(el('div',{class:'pair'},[el('span',{class:'hint',style:'margin:8px 0 0',text:t('sayFor')}),numEl(a.sec,upd('sec'),1,20)]));}
  else if(a.type==='destroy'){box.appendChild(selectEl([['other',t('dt_other')],['self',t('dt_self')],['all',t('dt_all')]],a.target,upd('target',true)));if(a.target==='all')box.appendChild(selectEl(objOpts(false),a.obj,upd('obj')));}
  else if(a.type==='spawn'){box.appendChild(selectEl(objOpts(false),a.obj,upd('obj')));box.appendChild(selectEl([['top',t('wh_top')],['random',t('wh_random')],['player',t('wh_player')],['other',t('wh_other')]],a.where,upd('where')));}
  else if(a.type==='sound'){var so=S.project.sounds||{};box.appendChild(selectEl(SOUNDS.map(function(s){return [s,t('snd_'+s)];}).concat(Object.keys(so).map(function(id){return [id,'🎤 '+so[id].name];})),a.sound,upd('sound')));}
  else if(a.type==='ask'){
    box.appendChild(textEl(a.text,upd('text'),t('askQ')));
    [1,2,3,4].forEach(function(i){box.appendChild(el('div',{class:'pair'},[textEl(a['c'+i],upd('c'+i),t('choiceN')+' '+i),textEl(a['m'+i],upd('m'+i),t('sendsMsg'))]));});
  }
  else if(a.type==='send') box.appendChild(textEl(a.name,upd('name'),t('msgName')));
  else if(a.type==='effect'){box.appendChild(selectEl(EFFECTS.map(function(k){return [k,t('fx_'+k)];}),a.kind,upd('kind')));box.appendChild(selectEl([['player',t('at_player')],['other',t('at_other')],['self',t('at_self')]],a.where,upd('where')));}
  else if(a.type==='picture'){
    box.appendChild(selectEl([['other',t('dt_other')],['self',t('dt_self')],['player',t('pic_player')],['all',t('dt_all')]],a.target,upd('target',true)));
    if(a.target==='all') box.appendChild(selectEl(objOpts(false),a.obj,upd('obj')));
    box.appendChild(picSelect(a.sprite,upd('sprite')));
  }
  else if(a.type==='moveto') box.appendChild(selectEl(objOpts(false),a.obj,upd('obj')));
  else if(a.type==='music') box.appendChild(selectEl(['none'].concat(Object.keys(GB.MUSIC)).map(function(k){return [k,t('mus_'+k)];}),a.music,upd('music')));
  else if(a.type==='gotolevel') box.appendChild(selectEl(S.project.scenes.map(function(sc,i){return [i,(i+1)+'. '+sc.name];}),a.scene,function(v){edit(function(){a.scene=+v;});}));
  return box;
}
function renderRules(box){
  var sec=el('div',{class:'sec'});
  sec.appendChild(el('h3',{text:t('rulesTitle')}));
  if(builder()<2){sec.appendChild(el('p',{class:'hint',text:t('rulesLocked')}));box.appendChild(sec);return;}
  sec.appendChild(el('p',{class:'hint',style:'margin:0 0 8px',text:t('rulesHint')}));
  var ex=el('div',{class:'examples'}); ex.appendChild(el('span',{class:'hint',style:'margin:0',text:t('examples')}));
  ex.appendChild(el('button',{onclick:function(){
    var coin=firstObj(function(o){return hasCard(o,'collectible');})||firstObj();
    edit(function(){S.project.rules.push({on:true,when:{type:'allgone',obj:coin},do:[{type:'text',text:S.lang==='sv'?'Allt insamlat!':'All collected!',sec:2},{type:'nextlevel'}]});},true);
  }},[t('ex1')]));
  ex.appendChild(el('button',{onclick:function(){edit(function(){S.project.rules.push({on:true,when:{type:'every',sec:1},do:[{type:'addvar',var:'score',amount:1}]});},true);}},[t('ex2')]));
  ex.appendChild(el('button',{onclick:function(){edit(function(){S.project.rules.push({on:true,when:{type:'var',var:'score',op:'>=',val:10},do:[{type:'text',text:S.lang==='sv'?'Snyggt!':'Great!',sec:2},{type:'sound',sound:'life'}]});},true);}},[t('ex3')]));
  sec.appendChild(ex);
  box.appendChild(sec);

  if(builder()>=3){
    var vs=el('div',{class:'sec'});
    vs.appendChild(el('h3',{text:t('variables')}));
    (S.project.variables||[]).forEach(function(v,vi){
      var show=el('input',{type:'checkbox',title:t('varShow'),'aria-label':t('varShow')}); show.checked=!!v.show;
      show.addEventListener('change',function(){edit(function(){v.show=show.checked;});});
      vs.appendChild(el('div',{class:'var-row'},[
        textEl(v.name,function(x){edit(function(){v.name=x.replace(/[^\wåäöÅÄÖ]/g,'').slice(0,16);},true);},t('varName')),
        numEl(v.start||0,function(x){edit(function(){v.start=x;});}),
        el('label',{class:'row',style:'font-size:12px'},[show,t('varShow')]),
        el('button',{class:'x','aria-label':'Remove',onclick:function(){edit(function(){S.project.variables.splice(vi,1);},true);}},['×'])]));
    });
    vs.appendChild(el('button',{class:'tb add-btn',onclick:function(){edit(function(){S.project.variables.push({name:(S.lang==='sv'?'tal':'number')+(S.project.variables.length+1),start:0,show:true});},true);}},[t('addVar')]));
    vs.appendChild(el('p',{class:'hint',text:t('varHint')}));
    box.appendChild(vs);
  }

  var rs=el('div',{class:'sec'});
  S.project.rules.forEach(function(r,ri){
    var rc=el('div',{class:'rule'+(r.on===false?' off':'')});
    var on=el('input',{type:'checkbox','aria-label':t('ruleOn')}); on.checked=r.on!==false;
    on.addEventListener('change',function(){edit(function(){r.on=on.checked;},true);});
    rc.appendChild(el('div',{class:'rule-head'},[on,el('span',{text:'#'+(ri+1)}),el('button',{class:'x','aria-label':'Remove',onclick:function(){edit(function(){S.project.rules.splice(ri,1);},true);}},['×'])]));
    rc.appendChild(el('div',{class:'lbl when',text:t('when')}));
    rc.appendChild(selectEl(TRIGGERS.map(function(x){return [x,t('tr_'+x)];}),r.when.type,function(v){edit(function(){r.when=triggerDefaults(v);},true);}));
    rc.appendChild(triggerParams(r.when));
    if(builder()>=3){
      r.cond=r.cond||{};
      rc.appendChild(el('div',{class:'lbl if',text:t('andIf')}));
      rc.appendChild(selectEl([['',t('always')]].concat(varOpts()),r.cond.var||'',function(v){edit(function(){r.cond.var=v;if(!r.cond.op){r.cond.op='>=';r.cond.val=1;}},true);}));
      if(r.cond.var) rc.appendChild(el('div',{class:'pair'},[selectEl(OPS,r.cond.op,function(v){edit(function(){r.cond.op=v;});}),numEl(r.cond.val,function(v){edit(function(){r.cond.val=v;});})]));
    }
    rc.appendChild(el('div',{class:'lbl then',text:t('then')}));
    r.do=r.do||[];
    r.do.forEach(function(a,ai){
      var row=el('div',{class:'act'});
      var left=el('div');
      left.appendChild(selectEl(ACTIONS.map(function(x){return [x,t('ac_'+x)];}),a.type,function(v){edit(function(){r.do[ai]=actionDefaults(v);},true);}));
      left.appendChild(actionParams(a));
      row.appendChild(left);
      row.appendChild(el('button',{class:'x','aria-label':'Remove',onclick:function(){edit(function(){r.do.splice(ai,1);},true);}},['×']));
      rc.appendChild(row);
    });
    rc.appendChild(selectEl([['',t('addAction')]].concat(ACTIONS.map(function(x){return [x,t('ac_'+x)];})),'',function(v){if(v)edit(function(){r.do.push(actionDefaults(v));},true);}));
    rs.appendChild(rc);
  });
  rs.appendChild(el('button',{class:'tb add-btn primary',onclick:function(){edit(function(){S.project.rules.push({on:true,when:triggerDefaults('touch'),do:[actionDefaults('addvar')]});},true);}},[t('newRule')]));
  box.appendChild(rs);
}

/* ====================== PAINTER ====================== */
var TYPES={
  keep:null,
  player:[card('player')],
  enemy:[card('patrol'),card('hurts'),card('stompable')],
  chaser:[card('chase'),card('hurts'),card('health',{hp:2})],
  flyer:[card('float'),card('hurts'),card('stompable')],
  shooterEnemy:[card('shooter',{direction:'player',rate:2}),card('hurts'),card('health',{hp:2})],
  item:[card('collectible')],
  box:[card('solid')],
  hazard:[card('hurts')],
  spring:[card('spring')],
  npc:[card('talk'),card('solid')],
  quiz:[card('quiz')],
  goal:[card('goal')],
  decor:[]
};
var PALETTE=['#222034','#ffffff','#d8dee9','#a7b0be','#5d6676','#000000','#e5484d','#a62a2f',
             '#ff8fab','#f28c28','#b8621b','#ffd23f','#d99a00','#a8f08f','#5ac54f','#2f8a3b',
             '#7fe3ff','#4c8bf5','#2b5bb8','#9b5de5','#5f2f9e','#c48a54','#7a4a24','#f6d5b0'];
var PE=null, ptCv=$('ptCanvas'), ptG=ptCv.getContext('2d'), CELL=20;
function blank(n){n=n||(PE&&PE.size)||16;return new Array(n*n).fill(null);}
function tilePixels(id){
  var c=GB.tileCanvas(id,isPlat()&&(id===1||id===9||id===14)), x=document.createElement('canvas'); x.width=x.height=32;
  var g3=x.getContext('2d'); g3.drawImage(c,0,0); var d=g3.getImageData(0,0,32,32).data, out=blank();
  for(var j=0;j<16;j++)for(var i=0;i<16;i++){var k=((j*2)*32+i*2)*4; if(d[k+3]>=128) out[j*16+i]=hex(d[k],d[k+1],d[k+2]);}
  return out;
}
function hex(r,g4,b){return '#'+[r,g4,b].map(function(v){return ('0'+v.toString(16)).slice(-2);}).join('');}
function openPainter(objId,opts){
  opts=opts||{};
  var o=objId&&S.project.objects[objId];
  PE={size:16,scale:2,objId:objId,spriteId:null,frames:[blank(16)],cur:0,tool:'pen',color:'#222034',mirror:false,fps:6,type:objId?'keep':'player',hist:[],down:false,tileMode:!!opts.tile,tileId:opts.tileId||null,kind:'solid'};
  if(PE.tileMode){
    PE.size=16;
    var ct=PE.tileId&&S.project.tiles[PE.tileId];
    if(ct){PE.frames=[ct.px.slice()];PE.kind=ct.kind||'solid';PE.name=ct.name;}
    else{PE.name=S.lang==='sv'?'Mitt block':'My tile'; if(S.brush.kind==='tile'){PE.frames=[tilePixels(S.brush.id)];var d=GB.tileDef(S.brush.id)||{};PE.kind=d.hazard?'hazard':d.water?'water':d.oneway?'platform':d.slippery?'ice':d.solid?'solid':d.solidTop?'wall':'decor';}}
  }else if(o){
    PE.name=o.name;
    if(GB.isCustom(o.sprite)){var c=S.project.sprites[o.sprite];PE.spriteId=o.sprite;PE.frames=c.frames.map(function(f){return f.slice();});PE.fps=c.fps||6;PE.size=c.size||16;PE.scale=c.scale||2;}
    else{var bp=GB.spritePixels(o.sprite);PE.frames=[bp];PE.size=Math.round(Math.sqrt(bp.length));PE.scale=2;}
  }else PE.name=t('myDrawing');
  $('ptTitle').textContent=t(PE.tileMode?'ptTileTitle':'ptTitle');
  $('ptWhatLbl').textContent=t(PE.tileMode?'ptWhatTile':'ptWhat');
  $('ptAnim').style.display=PE.tileMode?'none':'';
  $('ptSizeRow').style.display=PE.tileMode?'none':'';
  $('ptName').value=PE.name; $('ptFps').value=PE.fps; $('ptFpsOut').textContent=PE.fps;
  renderPainterUI(); $('painter').classList.add('on'); drawPainter();
  var tick=0;
  PE.timer=setInterval(function(){if(!PE)return;tick++;drawPreview(Math.floor(tick*PE.fps/20)%PE.frames.length);},50);
}
function closePainter(){if(PE)clearInterval(PE.timer);PE=null;$('painter').classList.remove('on');}
function setPainterSize(n){
  if(n===PE.size) return;
  PE.hist.push(PE.frames.map(function(f){return f.slice();}));
  PE.frames=PE.frames.map(function(f){
    var o=PE.size, out=new Array(n*n).fill(null);
    for(var y=0;y<n;y++)for(var x=0;x<n;x++){ if(n>o){var sx=Math.floor(x*o/n),sy=Math.floor(y*o/n);out[y*n+x]=f[sy*o+sx];} else {out[y*n+x]=f[(y*2)*o+x*2];} }
    return out;
  });
  PE.size=n; PE.scale=2; renderPainterUI(); drawPainter();
}
function renderPainterUI(){
  var sr=$('ptSizeRow'); sr.innerHTML='';
  [16,32].forEach(function(n){sr.appendChild(el('button',{class:'chip'+(PE.size===n?' on':''),type:'button','aria-pressed':PE.size===n,onclick:function(){setPainterSize(n);}},[n===16?t('normalSprite'):t('bigSprite')]));});
  document.querySelectorAll('[data-pt]').forEach(function(b){var on=b.getAttribute('data-pt')===PE.tool;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});
  $('ptMirror').classList.toggle('on',PE.mirror);
  var pal=$('ptPalette'); pal.innerHTML='';
  PALETTE.forEach(function(c){pal.appendChild(el('button',{class:PE.color===c&&PE.tool!=='eraser'?'on':'',style:'background:'+c,'aria-label':c,onclick:function(){PE.color=c;if(PE.tool==='eraser'||PE.tool==='pick')PE.tool='pen';renderPainterUI();}}));});
  var fr=$('ptFrames'); fr.innerHTML='';
  PE.frames.forEach(function(f,i){
    var c=el('canvas',{width:PE.size,height:PE.size,class:i===PE.cur?'on':'',title:String(i+1),'aria-label':'Frame '+(i+1),tabindex:0});
    var cg=c.getContext('2d'), N=PE.size; f.forEach(function(col,k){if(col){cg.fillStyle=col;cg.fillRect(k%N,Math.floor(k/N),1,1);}});
    c.addEventListener('click',function(){PE.cur=i;renderPainterUI();drawPainter();});
    fr.appendChild(c);
  });
  if(PE.frames.length<4) fr.appendChild(el('button',{class:'tb',title:t('ptAddFrame'),'aria-label':t('ptAddFrame'),onclick:function(){PE.frames.splice(PE.cur+1,0,PE.frames[PE.cur].slice());PE.cur++;renderPainterUI();drawPainter();}},['+']));
  if(PE.frames.length>1) fr.appendChild(el('button',{class:'tb',title:t('ptDelFrame'),'aria-label':t('ptDelFrame'),onclick:function(){PE.frames.splice(PE.cur,1);PE.cur=Math.max(0,PE.cur-1);renderPainterUI();drawPainter();}},['🗑']));
  var ty=$('ptTypes'); ty.innerHTML='';
  if(PE.tileMode){
    Object.keys(GB.TILE_KINDS).forEach(function(k){
      ty.appendChild(el('button',{class:PE.kind===k?'on':'','aria-pressed':PE.kind===k,onclick:function(){PE.kind=k;renderPainterUI();}},[t('kind_'+k)]));
    });
    return;
  }
  Object.keys(TYPES).forEach(function(k){
    if(k==='keep'&&!PE.objId) return;
    if(k==='spring'&&!isPlat()) return;
    ty.appendChild(el('button',{class:PE.type===k?'on':'','aria-pressed':PE.type===k,onclick:function(){PE.type=k;renderPainterUI();}},[t('type_'+k)]));
  });
}
function drawPainter(){
  var g2=ptG, f=PE.frames[PE.cur], i, N=PE.size; CELL=320/N;
  for(i=0;i<N*N;i++){var x=i%N,y=Math.floor(i/N);g2.fillStyle=(x+y)%2?'#f1f1f1':'#ffffff';g2.fillRect(x*CELL,y*CELL,CELL,CELL);}
  if(PE.cur>0){g2.globalAlpha=0.22;PE.frames[PE.cur-1].forEach(function(c,k){if(c){g2.fillStyle=c;g2.fillRect((k%N)*CELL,Math.floor(k/N)*CELL,CELL,CELL);}});g2.globalAlpha=1;}
  f.forEach(function(c,k){if(c){g2.fillStyle=c;g2.fillRect((k%N)*CELL,Math.floor(k/N)*CELL,CELL,CELL);}});
  g2.strokeStyle='rgba(0,0,0,.08)';g2.lineWidth=1;g2.beginPath();
  for(i=0;i<=N;i++){g2.moveTo(i*CELL+0.5,0);g2.lineTo(i*CELL+0.5,320);g2.moveTo(0,i*CELL+0.5);g2.lineTo(320,i*CELL+0.5);}
  g2.stroke();
  if(PE.mirror){g2.strokeStyle='rgba(47,125,225,.6)';g2.setLineDash([4,4]);g2.beginPath();g2.moveTo(160.5,0);g2.lineTo(160.5,320);g2.stroke();g2.setLineDash([]);}
}
function drawPreview(fi){
  var pv=$('ptPreview'), pg=pv.getContext('2d'), N=PE.size; if(pv.width!==N){pv.width=pv.height=N;} pg.clearRect(0,0,N,N);
  (PE.frames[fi]||[]).forEach(function(c,k){if(c){pg.fillStyle=c;pg.fillRect(k%N,Math.floor(k/N),1,1);}});
}
function ptCell(e){var N=PE.size,r=ptCv.getBoundingClientRect();var x=Math.floor((e.clientX-r.left)/r.width*N),y=Math.floor((e.clientY-r.top)/r.height*N);return (x<0||y<0||x>=N||y>=N)?null:{x:x,y:y};}
function ptApply(c){
  var N=PE.size, f=PE.frames[PE.cur], idx=c.y*N+c.x;
  if(PE.tool==='pick'){if(f[idx]){PE.color=f[idx];$('ptColor').value=f[idx];}PE.tool='pen';renderPainterUI();return;}
  if(PE.tool==='fill'){
    var from=f[idx], to=PE.color; if(from===to) return;
    var st=[idx], seen={};
    while(st.length){var k=st.pop(); if(seen[k]||f[k]!==from) continue; seen[k]=1; f[k]=to; var x=k%N,y=Math.floor(k/N);
      if(x>0)st.push(k-1); if(x<N-1)st.push(k+1); if(y>0)st.push(k-N); if(y<N-1)st.push(k+N);}
    return;
  }
  var val=PE.tool==='eraser'?null:PE.color;
  f[idx]=val; if(PE.mirror) f[c.y*N+(N-1-c.x)]=val;
}
ptCv.addEventListener('pointerdown',function(e){
  var c=ptCell(e); if(!c||!PE) return; e.preventDefault();
  try{ptCv.setPointerCapture(e.pointerId);}catch(_){}
  PE.hist.push(PE.frames.map(function(f){return f.slice();})); if(PE.hist.length>40)PE.hist.shift();
  PE.down=true; ptApply(c); drawPainter();
});
ptCv.addEventListener('pointermove',function(e){if(!PE||!PE.down||PE.tool==='fill'||PE.tool==='pick')return;var c=ptCell(e);if(c){ptApply(c);drawPainter();}});
function ptUp(){if(PE&&PE.down){PE.down=false;renderPainterUI();}}
ptCv.addEventListener('pointerup',ptUp); ptCv.addEventListener('pointercancel',ptUp);
document.querySelectorAll('[data-pt]').forEach(function(b){b.addEventListener('click',function(){PE.tool=b.getAttribute('data-pt');renderPainterUI();});});
$('ptMirror').addEventListener('click',function(){PE.mirror=!PE.mirror;renderPainterUI();drawPainter();});
$('ptFlip').addEventListener('click',function(){PE.hist.push(PE.frames.map(function(f){return f.slice();}));var N=PE.size,f=PE.frames[PE.cur],n=blank(N);for(var i=0;i<N*N;i++)n[Math.floor(i/N)*N+(N-1-i%N)]=f[i];PE.frames[PE.cur]=n;renderPainterUI();drawPainter();});
$('ptUndo').addEventListener('click',function(){if(!PE.hist.length)return;PE.frames=PE.hist.pop();PE.cur=Math.min(PE.cur,PE.frames.length-1);renderPainterUI();drawPainter();});
$('ptClear').addEventListener('click',function(){PE.hist.push(PE.frames.map(function(f){return f.slice();}));PE.frames[PE.cur]=blank();renderPainterUI();drawPainter();});
$('ptColor').addEventListener('input',function(){PE.color=this.value;if(PE.tool!=='fill')PE.tool='pen';renderPainterUI();});
$('ptFps').addEventListener('input',function(){PE.fps=+this.value;$('ptFpsOut').textContent=this.value;});
$('ptCancel').addEventListener('click',closePainter);
$('ptImportBtn').addEventListener('click',function(){$('ptImport').click();});
$('ptImport').addEventListener('change',function(){
  var f=this.files[0]; this.value=''; if(!f||!PE) return;
  var url=URL.createObjectURL(f), img=new Image();
  img.onload=function(){
    var N=PE.size, c=document.createElement('canvas'); c.width=c.height=N; var g5=c.getContext('2d');
    var s=Math.min(N/img.width,N/img.height), w=Math.max(1,Math.round(img.width*s)), h=Math.max(1,Math.round(img.height*s));
    g5.imageSmoothingEnabled=true; g5.drawImage(img,Math.floor((N-w)/2),Math.floor((N-h)/2),w,h);
    var d=g5.getImageData(0,0,N,N).data, out=blank(N);
    for(var i=0;i<N*N;i++){ if(d[i*4+3]>=128) out[i]=hex(d[i*4],d[i*4+1],d[i*4+2]); }
    PE.hist.push(PE.frames.map(function(fr){return fr.slice();})); PE.frames[PE.cur]=out; renderPainterUI(); drawPainter();
    URL.revokeObjectURL(url);
  };
  img.onerror=function(){toast(t('badFile'));URL.revokeObjectURL(url);};
  img.src=url;
});
$('ptSave').addEventListener('click',function(){
  if(!PE.frames.some(function(f){return f.some(function(c){return c;});})){toast(t('ptEmpty'));return;}
  var name=($('ptName').value||t('myDrawing')).slice(0,30), oid=PE.objId;
  if(PE.tileMode){
    edit(function(){
      var ids=customTileIds(), tid=PE.tileId||(ids.length?ids[ids.length-1]+1:100);
      S.project.tiles[tid]={name:name,px:PE.frames[0].slice(),kind:PE.kind};
      S.brush={kind:'tile',id:+tid}; S.tab='tiles';
    });
    if(S.tool==='erase'||S.tool==='move') setTool('paint'); closePainter(); renderAll(); return;
  }
  edit(function(){
    var sid=PE.spriteId||('c_'+uid());
    S.project.sprites[sid]={name:name,frames:PE.frames.map(function(f){return f.slice();}),fps:PE.fps,size:PE.size,scale:PE.scale};
    var cards=TYPES[PE.type]?clone(TYPES[PE.type]):null;
    if(oid){var o=S.project.objects[oid];o.sprite=sid;o.name=name;if(cards)o.cards=cards;}
    else{oid=uid();S.project.objects[oid]={name:name,sprite:sid,cards:cards||[]};}
    S.brush={kind:'obj',id:oid}; S.sel=oid; S.panel='object'; S.tab='objects';
  });
  setTool('paint'); closePainter(); renderAll();
});

/* ====================== PLAY / FILES ====================== */
var preview=null;
function previewMusic(name){
  try{
    if(preview){preview.stop();preview=null;}
    if(!name||name==='none') return;
    var dummy=document.createElement('canvas');
    var proj={settings:{music:true,sound:true},objects:{},sprites:S.project.sprites,tiles:S.project.tiles,rules:[],scenes:[{w:20,h:12,tiles:new Array(240).fill(0),instances:[],music:name}]};
    preview=new GB.Game(dummy,proj,{skipTitle:true}); preview.audioInit();
    setTimeout(function(){if(preview){preview.stop();preview=null;}},4000);
  }catch(e){}
}
function play(){
  var sc=scene();
  if(!sc.instances.some(function(n){return isPlayerObj(n.obj);})) toast(t('noPlayerWarn'));
  $('playOverlay').classList.add('on');
  var pc=$('playCanvas'), proj=clone(S.project); proj.settings.lang=S.lang;
  S.game=new GB.Game(pc,proj,{lang:S.lang,skipTitle:true,startScene:S.sceneIdx});
  pc.focus();
  clearInterval(S.varTimer);
  S.varTimer=setInterval(function(){
    var gm=S.game; if(!gm) return;
    var parts=[t('v_score')+' '+gm.score,t('v_lives')+' '+(gm.infinite?'∞':gm.lives),t('v_keys')+' '+gm.keysHeld];
    if(+S.project.settings.timeLimit>0) parts.push(t('v_time')+' '+Math.ceil(gm.timeLeft));
    Object.keys(gm.vars||{}).forEach(function(k){parts.push(k+' '+gm.vars[k]);});
    $('playVars').textContent=(builder()>=3?t('liveNumbers')+': ':'')+parts.join(' · ');
  },200);
}
function stopPlay(){clearInterval(S.varTimer);if(S.game){S.game.stop();S.game=null;refreshSprites();}$('playOverlay').classList.remove('on');$('btnPlay').focus();}
var DL=null;
try{ if(window.claude&&typeof window.claude.use==='function') window.claude.use('downloads').then(function(d){DL=d;}).catch(function(){}); }catch(e){}
function download(name,text,type){
  if(DL){ return DL.save({filename:name,data:text}).then(function(){return true;},function(){toast(S.lang==='sv'?'Nedladdningen avbröts.':'Download was cancelled.');return false;}); }
  var blob=new Blob([text],{type:type}), a=document.createElement('a');
  a.href=URL.createObjectURL(blob); a.download=name; document.body.appendChild(a); a.click();
  setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},1000);
  return true;
}
function safeName(){return (S.project.settings.name||'game').replace(/[^a-z0-9åäö_\- ]/gi,'').trim().replace(/\s+/g,'-')||'game';}
function exportGame(){
  var rt=$('gb-runtime').textContent, proj=clone(S.project); proj.settings.lang=S.lang;
  var data=JSON.stringify(proj).replace(/</g,'\\u003c');
  var refl=proj.reflection||{}, about=['refl1','refl2','refl3'].map(function(k){return refl[k]?t(k)+' '+refl[k]:'';}).filter(Boolean).join(' | ').replace(/[<>&"]/g,'').replace(/--/g,'-');
  var title=(proj.settings.name||'Game').replace(/[<>&"]/g,'');
  var html='<!DOCTYPE html>\n<html lang="'+S.lang+'">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>'+title+'</title>\n'+
    '<meta name="generator" content="Game Builder 2D">\n'+(about?'<meta name="description" content="'+about+'">\n':'')+'<style>html,body{margin:0;height:100%;background:#14162a;display:flex;align-items:center;justify-content:center;overflow:hidden}canvas{image-rendering:pixelated;outline:none;touch-action:none}</style>\n</head>\n<body>\n<canvas id="game" tabindex="0"></canvas>\n'+
    '<script>'+rt+'<\/script>\n<script>GB.boot(document.getElementById("game"),'+data+');<\/script>\n</body>\n</html>\n';
  Promise.resolve(download(safeName()+'.html',html,'text/html')).then(function(ok){if(ok!==false)toast(t('exported'));});
}
function saveFile(){Promise.resolve(download(safeName()+'.gbproj',JSON.stringify(S.project),'application/json')).then(function(ok){if(ok!==false)toast(t('savedFile'));});}
$('fileOpen').addEventListener('change',function(){
  var f=this.files[0]; if(!f) return; var rd=new FileReader();
  rd.onload=function(){try{
    var txt=String(rd.result), m=txt.indexOf('GB.boot(document.getElementById("game"),'), raw=txt;
    if(m>=0){raw=txt.slice(m+'GB.boot(document.getElementById("game"),'.length);raw=raw.slice(0,raw.lastIndexOf(');'));}
    var p=migrate(JSON.parse(raw)); if(!p) throw 0; snapshot(); S.project=p; S.sceneIdx=0; afterLoad(); toast(t('opened'));}catch(e){toast(t('badFile'));}};
  rd.readAsText(f); this.value='';
});

/* ====================== LANGUAGE / RENDER ====================== */
function applyLang(){
  document.documentElement.lang=S.lang;
  document.querySelectorAll('[data-t]').forEach(function(n){n.textContent=t(n.getAttribute('data-t'));});
  $('btnLang').textContent=S.lang==='en'?'SV':'EN';
  $('status').textContent=''; $('saveState').textContent='';
}
function renderAll(){refreshSprites();applyLang();renderChallenge();renderSceneTabs();renderShelf();renderInspector();renderStage();updateUndo();setTool(S.tool);}
function openHelp(){
  var b=$('helpBox'); b.innerHTML=t('helpHTML');
  b.appendChild(el('div',{class:'pt-actions'},[el('button',{class:'tb primary',onclick:function(){$('helpModal').classList.remove('on');}},[t('close')])]));
  $('helpModal').classList.add('on');
}

/* ====================== WIRE UP ====================== */
$('btnPlay').addEventListener('click',play);
$('btnStop').addEventListener('click',stopPlay);
$('btnUndo').addEventListener('click',undo);
$('btnRedo').addEventListener('click',redo);
$('btnSave').addEventListener('click',saveFile);
$('btnOpen').addEventListener('click',function(){$('fileOpen').click();});
$('btnExport').addEventListener('click',function(){askReflection(exportGame);});
$('btnNew').addEventListener('click',function(){$('newModal').classList.add('on');});
$('btnHelp').addEventListener('click',openHelp);
$('helpModal').addEventListener('click',function(e){if(e.target===this)this.classList.remove('on');});
document.querySelectorAll('[data-new]').forEach(function(b){b.addEventListener('click',function(){
  var k=b.getAttribute('data-new'); $('newModal').classList.remove('on'); if(k==='cancel') return;
  snapshot(); S.project=newProject(k); S.sceneIdx=0; S.sel=null; S.panel='settings'; S.brush={kind:'tile',id:tileOrder()[0]}; S.tab='tiles'; afterLoad();
});});
$('btnLang').addEventListener('click',function(){S.lang=S.lang==='en'?'sv':'en';S.project.settings.lang=S.lang;try{localStorage.setItem('gb2d-lang',S.lang);}catch(e){}renderAll();persist();});
$('btnSettings').addEventListener('click',function(){S.panel='settings';S.sel=null;renderInspector();renderStage();});
$('btnRules').addEventListener('click',function(){S.panel='rules';renderInspector();});
$('tabTiles').addEventListener('click',function(){S.tab='tiles';renderShelf();});
$('tabObjects').addEventListener('click',function(){S.tab='objects';renderShelf();});
document.querySelectorAll('[data-tool]').forEach(function(b){b.addEventListener('click',function(){setTool(b.getAttribute('data-tool'));});});
$('chkGrid').addEventListener('change',function(){S.grid=this.checked;renderStage();});
$('selZoom').addEventListener('change',function(){S.zoom=+this.value;renderStage();});
$('projName').addEventListener('change',function(){var v=this.value;edit(function(){S.project.settings.name=v;});if(S.panel==='settings')renderInspector();});
document.addEventListener('keydown',function(e){
  if(S.game){ if(e.key==='Escape') stopPlay(); return; }
  if(PE){ if(e.key==='Escape') closePainter(); else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault();$('ptUndo').click();} return; }
  if($('newModal').classList.contains('on')||$('helpModal').classList.contains('on')){ if(e.key==='Escape'){$('newModal').classList.remove('on');$('helpModal').classList.remove('on');} return; }
  var tag=(e.target.tagName||'').toLowerCase(); if(tag==='input'||tag==='select'||tag==='textarea') return;
  if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='z'){e.preventDefault(); if(e.shiftKey)redo(); else undo();}
  else if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==='y'){e.preventDefault();redo();}
  else if(e.ctrlKey||e.metaKey||e.altKey) return;
  else if(e.key==='p'||e.key==='P') setTool('paint');
  else if(e.key==='e'||e.key==='E') setTool('erase');
  else if(e.key==='m'||e.key==='M') setTool('move');
  else if(e.key==='f'||e.key==='F') setTool('fill');
  else if(e.key==='r'||e.key==='R') setTool('rect');
});

/* ====================== START ====================== */
try{S.lang=localStorage.getItem('gb2d-lang')||'en';}catch(e){}
try{if(localStorage.getItem('gb2d-dys'))document.body.classList.add('dyslexic');}catch(e){}
try{if(localStorage.getItem('gb2d-big-ui'))document.body.classList.add('big-ui');if(localStorage.getItem('gb2d-read-ui'))document.body.classList.add('read-ui');}catch(e){}
/* Read-aloud mode: speak the label of whatever button or field gets focus or is hovered */
(function(){
  var last=null, tmr=null;
  function label(n){
    var x=n.closest('button,label,select,input,summary,[role=tab]'); if(!x) return null;
    var txt=x.getAttribute('aria-label')||x.getAttribute('title')||x.textContent||'';
    if(x.tagName==='SELECT'&&x.selectedOptions&&x.selectedOptions[0]) txt=(x.closest('label')?x.closest('label').querySelector('span').textContent+': ':'')+x.selectedOptions[0].textContent;
    return {el:x,text:txt.replace(/\s+/g,' ').trim()};
  }
  function speakFor(n){
    if(!document.body.classList.contains('read-ui')) return;
    var l=label(n); if(!l||!l.text||l.el===last) return; last=l.el;
    document.querySelectorAll('[data-speaking]').forEach(function(x){x.removeAttribute('data-speaking');});
    l.el.setAttribute('data-speaking','');
    say(l.text.slice(0,160));
  }
  document.addEventListener('focusin',function(e){speakFor(e.target);});
  document.addEventListener('mouseover',function(e){clearTimeout(tmr);var tg=e.target;tmr=setTimeout(function(){speakFor(tg);},450);});
})();
var saved=null; try{saved=migrate(JSON.parse(localStorage.getItem(STORE_KEY)));}catch(e){}
S.project=saved||newProject('starter');
S.brush={kind:'tile',id:tileOrder()[0]};
$('projName').value=S.project.settings.name||'';
renderAll();
})();
