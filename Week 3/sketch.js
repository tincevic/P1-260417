// sound and graphics
let img;
let img2;
let img3;

// sound
let music;
let win;
let chalk;

// graphics
let maskGraphics;
let mG2;
let mG3;

// real shit!!
let xo; // 1 is X, 2 is O
let startXO; // who starts next round?
let debugActive = false; // debug menu

// square codes. 1 is X, 2 is O
let sq1 = 0;
let sq2 = 0;
let sq3 = 0;
let sq4 = 0;
let sq5 = 0;
let sq6 = 0;
let sq7 = 0;
let sq8 = 0;
let sq9 = 0;

let started = false;
let ended = false;
let newStartDet = false;
let xScore = 0;
let oScore = 0;
let winC; // win condition
let winX; // win for X
let winO; // win for O
let winProc = false; // has anyone won?
let menu = {x:1510,y:250}; // coordinates of colour menu
let menuAct = false; // colour selection menu active
let colPlr1; // colour of player X
let colPlr2; // colour of player O
let IDplr1 = 1; // colour ID
let IDplr2 = 2;
let selection; // does X or O change their colour?

function preload() {
  img = loadImage('/../Assets/hout.jpg'); // load wood texture 1
  img2 = loadImage('/../Assets/houtach.jpg'); // load wood texture 2
  img3 = loadImage('/../Assets/hout.jpg'); // load wood texture 1 for other object
  music = loadSound('/../Assets/song.mp3'); // music
  chalk = loadSound('/../Assets/chalk.mp3'); // click sound
  win = loadSound('/../Assets/win.mp3'); // win sound
}
function setup() {
  createCanvas(1600,900);
  
  maskGraphics = createGraphics(1200,1200); // everything from here until img.mask(maskGraphics); is for graphics creation (a.k.a. placing images of the wood)
  maskGraphics.fill(255);
  maskGraphics.noStroke();
  maskGraphics.square(600,250,400,20);
  mG2 = createGraphics(1600,900);
  mG2.fill(255);
  mG2.noStroke();
  mG2.rect(0,0,1600,900);
  mG3 = createGraphics(1200,1200);
  mG3.fill(255);
  mG3.noStroke();
  mG3.square(800,250,400);
  img3.mask(mG3);
  img2.mask(mG2);
  img.mask(maskGraphics);
  startXO = 1; // who starts?
  xo = 1; // 1 = x, 2 = o
  chalk.setVolume(0.3); // too loud
  music.setVolume(0.3); // too loud
  winC = false; // nobody's winning on move 0
  winX = false;
  winO = false;
  colPlr1 = color(255); // default. can be changed
  colPlr2 = color(60); // default. can be changed
  selection = 1;
}

function draw() {
  image(img2,0,0); // background
  background(0,70); // darker!
  noStroke();

  // coffee - random extra
  fill(0,100);
  circle(1215,390,250);
  rect(1200,200,30,100,5);
  fill(200);
  circle(1200,400,250);
  rect(1185,210,30,100,5);
  fill(45,20,4);
  stroke(199,191,178);
  strokeWeight(4);
  circle(1200,400,220);

  // hover handling and board
  stroke(69,33,4);
  strokeWeight(15);
  square(600,250,400,20);
  image(img,0,0);
  stroke(69,33,4);
  strokeWeight(4);
  
  // hover
  checkHover(615,265,725,375,sq1); // repetitive, in other function. basically, if your mouse is above the coordinates of the box, the box becomes a bit darker.
  checkHover(745,265,855,375,sq2);
  checkHover(875,265,985,375,sq3);
  checkHover(615,395,725,505,sq4);
  checkHover(745,395,855,505,sq5);
  checkHover(875,395,985,505,sq6);
  checkHover(615,525,725,635,sq7);
  checkHover(745,525,855,635,sq8);
  checkHover(875,525,985,635,sq9);

  noStroke();
  fill(180,180,0,120);
  circle(865,385,10); // ✨ flair
  circle(735,385,10);
  circle(865,515,10);
  circle(735,515,10);
  fill(0,0,0,120);

  // watch-a out-a for the-a spaghetti

  // start button
  if (!started || ended) { // start button, if game isn't ongoing
    rect(500,750,600,100,20);
    fill(255);
    textSize(50);
    noStroke();
    textFont("Monospace");
    if (!started) {
      text("Start!",720,817.5);
    } else if (ended) {
      text("Play!",740,817.5);
      if (startXO === 1 && !newStartDet) {
        xo = 2;
        startXO = 2;
        newStartDet = true;
      } else if (startXO === 2 && !newStartDet) {
        xo = 1;
        startXO = 1;
        newStartDet = true;
      }
    }
  }

  if (started) {
    if (xo === 1) { // draw X for signifying turn
      noStroke();
      push();
      translate(100,600); // enable rotation
      textSize(450);
      textFont("Monospace");
      textStyle(BOLD);
      angleMode(DEGREES);
      rotate(15);
      fill(50,50,50,220);
      text("X",15,0)
      fill(color(colPlr1),230);
      text("X",0,0);
      pop();
    } else if (xo === 2) { // draw O for signifying turn
      noStroke();
      push();
      translate(100,600); // enable rotation
      textSize(450);
      textFont("Monospace");
      textStyle(BOLD);
      angleMode(DEGREES);
      rotate(15);
      fill(50,50,50,220);
      text("O",15,0)
      fill(color(colPlr2),230);
      text("O",0,0);
      pop();
    }

  drawCnShape(sq1,630,280); // repetitive; moved to other function. this draws a shape associated with who selects which box.
  drawCnShape(sq2,760,280);
  drawCnShape(sq3,890,280);
  drawCnShape(sq4,630,410);
  drawCnShape(sq5,760,410);
  drawCnShape(sq6,890,410);
  drawCnShape(sq7,630,540);
  drawCnShape(sq8,760,540);
  drawCnShape(sq9,890,540);
  } else if (started !== true && started !== false) {
    textSize(200);
    text("ERROR!",800,850); // this will likely never be activated but just in case...
  }

  // check if someone has won by checking specific selected boxes. it is done this way because standard tic tac toe only has 8 ways to win. defined in other function
  checkWin(sq1,sq2,sq3,625,320,975,320);
  checkWin(sq4,sq5,sq6,625,450,975,450);
  checkWin(sq7,sq8,sq9,625,580,975,580);
  checkWin(sq1,sq4,sq7,670,280,670,620);
  checkWin(sq2,sq5,sq8,800,280,800,620);
  checkWin(sq3,sq6,sq9,930,280,930,620);
  checkWin(sq3,sq5,sq7,970,280,630,620);
  checkWin(sq1,sq5,sq9,630,280,970,620);
  if (sq1 !== 0 && sq2 !== 0 && sq3 !== 0 && sq4 !== 0 && sq5 !== 0 && sq6 !== 0 && sq7 !== 0 && sq8 !== 0 && sq9 !== 0) { // check for draw
    ended = true;
  }
  if (winC && !winProc) { // has someone won?
    win.setVolume(3);
    win.play(); // only non-copyrighted piece of this project
    if (winX) {
      xScore += 1;
      winX = false;
      winProc = true; // win processed, this doesn't repeat
    } else if (winO) {
      oScore += 1;
      winO = false;
      winProc = true; // win processed, this doesn't repeat
    }
    winC = false; // win processed, this doesn't repeat
  }
  stroke(200);
  strokeWeight(5);
  textSize(50);
  textFont("Monospace"); // don't need to shuffle coordinates
  fill(colPlr1);
  text("x "+xScore,678,220); // shows colour of X and their score
  fill(255);
  text(" : ",758,220); // divider
  fill(colPlr2);
  text(oScore+" o",838,220); // shows colour of O and their score
  textSize(20);
  stroke(200);
  strokeWeight(2);
  if (!winC && started && !ended) { // checks if the game is ongoing or who has won
    fill(255);
    text("Ongoing...",750,175);
  } else if (winO) {
    fill(colPlr2); 
    text("O wins!",765,175);
  } else if (winX) {
    fill(colPlr1);
    text("X wins!",765,175);
  } else if (ended) {
    fill(255);
    text("Draw!",775,175);
  }

  // colour selection
  image(img3,menu.x-800,0);
  stroke(69,33,4);
  strokeWeight(5);
  fill(0,0);
  rect(menu.x,menu.y,400,400)
  fill(0,0,0,100);
  rect(menu.x,menu.y,80,400);
  drawClrSelect(255,255,255,200,200,200,100,20,1); // white
  drawClrSelect(60,60,60,30,30,30,200,20,2); // black
  drawClrSelect(180,20,20,170,10,10,300,20,3); // red
  drawClrSelect(20,20,180,10,10,170,100,120,4); // blue
  drawClrSelect(20,180,20,10,170,10,200,120,5); // green
  drawClrSelect(180,180,20,170,170,10,300,120,6); // yellow
  drawClrSelect(230,160,20,185,120,10,150,220,7); // orange
  drawClrSelect(180,40,180,170,10,170,250,220,8); // purple

  if (selection === 1) { // is X changing their colour? highlight if yes
    stroke(255);
    strokeWeight(12.5);
  } else {
    stroke(200);
    strokeWeight(7.5);
  }
  line(menu.x+180,menu.y+350,menu.x+200,menu.y+370);
  line(menu.x+200,menu.y+350,menu.x+180,menu.y+370);
  if (selection === 2) { // is O changing their colour? highlight if yes
    stroke(255);
    strokeWeight(12.5);
  } else {
    stroke(200);
    strokeWeight(7.5);
  }
  fill(0,0);
  circle(menu.x+290,menu.y+360,30);
  if (colPlr1.toString() === colPlr2.toString()) { // do both players use the same colour? reset one if yes
    if (colPlr2.toString() == color(60).toString()) { // is black the selected colour? use white instead if yes
      colPlr2 = color(255);
    } else {
      colPlr2 = color(60);
    }
  }

  if (debugActive) { // debug menu. activated by pressing d on the keyboard. no practical use for player
    textSize(20);
    fill(255);
    noStroke();
    textFont("Arial");
    text("welcome 2 the dawn debug menu",10,20);
    rect(142.5,12.5,53,2.5);
    text("whose turn: "+xo,10,40);
    text("squares: "+sq1+","+sq2+","+sq3+","+sq4+","+sq5+","+sq6+","+sq7+","+sq8+","+sq9,10,60)
    text("who starts the round: "+startXO,10,80);
    text("win x: "+winX,10,100);
    text("win o: "+winO,10,120);
    text("colour menu active: "+menuAct,10,140);
  }
}

function keyPressed() {
  if (key === 'd') { // open debug menu
    if (!debugActive) {
      debugActive = true;
    } else {
      debugActive = false;
    }
  }
}   

function mouseClicked() {
  if (!menuAct && mouseX >= 1510 && mouseY >= 250 && mouseY <= 650) { // open colour menu
    menuAct = true;
    p5.tween.manager
    .addTween(menu,'myTween')
    .addMotion('x',1200,1500,'easeInOutQuad') 
    .startTween();
  } else if (menuAct && mouseX >= 1200 && mouseY >= 250 && mouseY <= 650 && mouseX <= 1300) { // close colour menu
    menuAct = false;
    p5.tween.manager
    .addTween(menu,'myTween')
    .addMotion('x',1510,1500,'easeInOutQuad') 
    .startTween();
  }
  if (menuAct) {
    if ((mouseX >= menu.x+180 && mouseY >= menu.y+350) && (mouseX <= menu.x+200 && mouseY <= menu.y+370)) { // switch who changes colours
      if (selection !== 1) {
        selection = 1;
      }
    } else if ((mouseX >= menu.x+275 && mouseY >= menu.y+345) && (mouseX <= menu.x+305 && mouseY <= menu.y+385)) {
      if (selection !== 2) {
        selection = 2;
      }
    }
    // colour selection 2: electric boogaloo
    setColor(100,180,20,100,1,255,255,255);
    setColor(200,280,20,100,2,60,60,60);
    setColor(300,380,20,100,3,180,20,20);
    setColor(100,180,120,200,4,20,20,180);
    setColor(200,280,120,200,5,20,180,20);
    setColor(300,380,120,200,6,180,180,20);
    setColor(150,230,220,300,7,230,160,20);
    setColor(250,330,220,300,8,180,40,180);
  }

  if (!ended) {
    // place symbol if box selected
    sq1 = beginDraw(615,265,725,375,sq1);
    sq2 = beginDraw(745,265,855,375,sq2);
    sq3 = beginDraw(875,265,985,375,sq3);
    sq4 = beginDraw(615,395,725,505,sq4);
    sq5 = beginDraw(745,395,855,505,sq5);
    sq6 = beginDraw(875,395,985,505,sq6);
    sq7 = beginDraw(615,525,725,635,sq7);
    sq8 = beginDraw(745,525,855,635,sq8);
    sq9 = beginDraw(875,525,985,635,sq9);
  }
  if (((mouseX >= 500 && mouseY >= 750) && (mouseX <= 1100 && mouseY <= 850)) && (started === false || ended)) { // start game
    if (started === false) {
    userStartAudio();
    music.loop();
    started = true;
    } else {
      ended = false;
      newStartDet = false;
    }
    resetBoard();
  }
}


function changeTurn() {
  if (xo === 2) { // simple turn switching
      xo = 1;
    } else {
      xo = 2;
    }
}

function resetBoard() { // reset board when game (re)starting
  sq1 = 0;
  sq2 = 0;
  sq3 = 0;
  sq4 = 0;
  sq5 = 0;
  sq6 = 0;
  sq7 = 0;
  sq8 = 0;
  sq9 = 0;
  winC = false;
  winO = false;
  winX = false;
  winProc = false;
}

function checkWin(a,b,c,d,e,f,g) { // check for win condition
  if (((a === 1) && (b === 1) && (c === 1))) { // a, b, and c are the squares defined in draw();
    ended = true;
    winC = true;
    winX = true; // 1 is the code for X

    stroke(255);
    strokeWeight(10);
    stroke(255);
    line(d,e,f,g); // draw line with 4 coordinates defined in draw();
  } else if ((a === 2) && (b === 2) && (c === 2)) {
    ended = true;
    winC = true;
    winO = true; // 2 is the code for O

    stroke(255);
    strokeWeight(10);
    stroke(255);
    line(d,e,f,g); // draw line with 4 coordinates defined in draw();
  }
}

function checkHover(a,b,c,d,e) { // a,b,c,d are coordinates of the box, e is the square ID. a,b,110,20 are the square drawing coos
  if (mouseX >= a && mouseY >= b && mouseX <= c && mouseY <= d && e === 0) { // is my mouse above this square?
    fill(0,0,0,210);
  } else {
    fill(0,0,0,180);
  }
  square(a,b,110,20);
}

function drawCnShape(a,b,c) { // draw certain shape. a is to signify X or O, b and c are the starting coordinates of the shape
  if (a === 1) { // draw X
    stroke(color(colPlr1)); // set the shape's colour to the player-selected colour.
    line(b,c,b+80,c+80);
    line(b+80,c,b,c+80);
  } else if (a === 2) { // draw O
    stroke(color(colPlr2)); // set the shape's colour to the player-selected colour.
    fill(30,30,30,80);
    circle(b+40,c+40,90);
  }
}

function drawClrSelect(a,b,c,d,e,f,g,h,i) { // colour selection 3: it's free
  fill(a,b,c);
  stroke(d,e,f);
  strokeWeight(5);
  square(menu.x+g,menu.y+h,80,20);
  if (IDplr1 === i) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+g,menu.y+h,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+g+20,menu.y+h+20,menu.x+g+60,menu.y+h+60);
    line(menu.x+g+60,menu.y+h+20,menu.x+g+20,menu.y+h+60);
  } else if (IDplr2 === i) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+g,menu.y+h,80,20);
    strokeWeight(7.5);
    stroke(255);
    circle(menu.x+g+40,menu.y+h+40,45);
  }
}

function setColor(a,b,c,d,e,f,g,h) { // set player colour
  if (mouseX >= menu.x+a && mouseX <= menu.x+b && mouseY >= menu.y+c && mouseY <= menu.y+d) {
      if (selection === 1 && IDplr2 !== e) {
        colPlr1 = color(f,g,h);
        IDplr1 = e;
      } else if (selection === 2 && IDplr1 !== e) {
        colPlr2 = color(f,g,h);
        IDplr2 = e;
      }
    }
}

function beginDraw(a,b,c,d,e) { // place symbol on selecte box
  if ((((mouseX >= a && mouseY >= b) && (mouseX <= c && mouseY <= d)) && e === 0) && started) {
    chalk.play();
    let placedSymbol = xo;
    changeTurn();
    return placedSymbol;
  }
  return e;
}