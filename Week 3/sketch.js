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

// real shit!
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
  
  maskGraphics = createGraphics(1200,1200);
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
  startXO = 1;
  xo = 1; // 1 = x, 2 = o
  chalk.setVolume(0.3);
  music.setVolume(0.4);
  winC = false;
  winX = false;
  winO = false;
  colPlr1 = color(255);
  colPlr2 = color(60);
  selection = 1;
}

function draw() {
  image(img2,0,0);
  background(0,70);
  noStroke();

  // coffee
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
  checkHover(615,265,725,375,sq1); // repetitive, in other function
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
  circle(865,385,10);
  circle(735,385,10);
  circle(865,515,10);
  circle(735,515,10);
  fill(0,0,0,120);

  // watch-a out-a for the-a spaghetti 🤌🤌🤌

  // start button
  if (!started || ended) {
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

  stroke(255); // draw X and O
  strokeWeight(5);
  drawCnShape(sq1,630,280); // repetitive; moved to other function
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

  // check if someone has won. defined in other function
  checkWin(sq1,sq2,sq3,625,320,975,320);
  checkWin(sq4,sq5,sq6,625,450,975,450);
  checkWin(sq7,sq8,sq9,625,580,975,580);
  checkWin(sq1,sq4,sq7,670,280,670,620);
  checkWin(sq2,sq5,sq8,800,280,800,620);
  checkWin(sq3,sq6,sq9,930,280,930,620);
  checkWin(sq3,sq5,sq7,970,280,630,620);
  checkWin(sq1,sq5,sq9,630,280,970,620);
  if (sq1 !== 0 && sq2 !== 0 && sq3 !== 0 && sq4 !== 0 && sq5 !== 0 && sq6 !== 0 && sq7 !== 0 && sq8 !== 0 && sq9 !== 0) {
    ended = true;
  }
  if (winC && !winProc) { // has someone won?
    win.setVolume(3);
    win.play();
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
  textFont("Monospace");
  fill(colPlr1);
  text("x "+xScore,678,220);
  fill(255);
  text(" : ",758,220);
  fill(colPlr2);
  text(oScore+" o",838,220);
  textSize(20);
  stroke(200);
  strokeWeight(2);
  if (!winC && started && !ended) {
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

  // change colour
  image(img3,menu.x-800,0);
  stroke(69,33,4);
  strokeWeight(5);
  fill(0,0);
  rect(menu.x,menu.y,400,400)
  fill(0,0,0,100);
  rect(menu.x,menu.y,80,400);
  fill(255); // white
  stroke(200);
  square(menu.x+100,menu.y+20,80,20);
  if (IDplr1 === 1) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+100,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+120,menu.y+40,menu.x+160,menu.y+80);
    line(menu.x+160,menu.y+40,menu.x+120,menu.y+80);
  } else if (IDplr2 === 1) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+100,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+140,menu.y+60,45);
  }
  strokeWeight(5);
  fill(60); // black
  stroke(30);
  square(menu.x+200,menu.y+20,80,20);
  if (IDplr1 === 2) {
    strokeWeight(5);
    fill(255,80);
    stroke(220);
    square(menu.x+200,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+220,menu.y+40,menu.x+260,menu.y+80);
    line(menu.x+260,menu.y+40,menu.x+220,menu.y+80);
  } else if (IDplr2 === 2) {
    strokeWeight(5);
    fill(255,80);
    stroke(220);
    square(menu.x+200,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+240,menu.y+60,45);
  }
  strokeWeight(5);
  fill(180,20,20); // red
  stroke(170,10,10);
  square(menu.x+300,menu.y+20,80,20);
  if (IDplr1 === 3) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+300,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+320,menu.y+40,menu.x+360,menu.y+80);
    line(menu.x+360,menu.y+40,menu.x+320,menu.y+80);
  } else if (IDplr2 === 3) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+300,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+340,menu.y+60,45);
  }
  strokeWeight(5);
  fill(20,20,180); // blue
  stroke(10,10,170);
  square(menu.x+100,menu.y+120,80,20);
  if (IDplr1 === 4) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+100,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+120,menu.y+140,menu.x+160,menu.y+180);
    line(menu.x+160,menu.y+140,menu.x+120,menu.y+180);
  } else if (IDplr2 === 4) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+100,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+140,menu.y+160,45);
  }
  strokeWeight(5);
  fill(20,180,20); // green
  stroke(10,170,10);
  square(menu.x+200,menu.y+120,80,20);
  if (IDplr1 === 5) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+200,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+220,menu.y+140,menu.x+260,menu.y+180);
    line(menu.x+260,menu.y+140,menu.x+220,menu.y+180);
  } else if (IDplr2 === 5) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+200,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+240,menu.y+160,45);
  }
  strokeWeight(5);
  fill(180,180,20); // yellow
  stroke(170,170,10);
  square(menu.x+300,menu.y+120,80,20);
  if (IDplr1 === 6) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+300,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+320,menu.y+140,menu.x+360,menu.y+180);
    line(menu.x+360,menu.y+140,menu.x+320,menu.y+180);
  } else if (IDplr2 === 6) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+300,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+340,menu.y+160,45);
  }
  strokeWeight(5);
  fill(230,160,20); // orange
  stroke(185,120,10);
  square(menu.x+150,menu.y+220,80,20);
  if (IDplr1 === 7) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+150,menu.y+220,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+170,menu.y+240,menu.x+210,menu.y+280);
    line(menu.x+210,menu.y+240,menu.x+170,menu.y+280);
  } else if (IDplr2 === 7) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+150,menu.y+220,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+190,menu.y+260,45);
  }
  strokeWeight(5);
  fill(180,40,180); // purple
  stroke(170,10,170);
  square(menu.x+250,menu.y+220,80,20);
  if (IDplr1 === 8) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+250,menu.y+220,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+270,menu.y+240,menu.x+310,menu.y+280);
    line(menu.x+310,menu.y+240,menu.x+270,menu.y+280);
  } else if (IDplr2 === 8) {
    strokeWeight(5);
    fill(0,80);
    stroke(20);
    square(menu.x+250,menu.y+220,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+290,menu.y+260,45);
  }
  if (selection === 1) {
    stroke(255);
    strokeWeight(12.5);
  } else {
    stroke(200);
    strokeWeight(7.5);
  }
  line(menu.x+180,menu.y+350,menu.x+200,menu.y+370);
  line(menu.x+200,menu.y+350,menu.x+180,menu.y+370);
  if (selection === 2) {
    stroke(255);
    strokeWeight(12.5);
  } else {
    stroke(200);
    strokeWeight(7.5);
  }
  fill(0,0);
  circle(menu.x+290,menu.y+360,30);
  if (colPlr1.toString() === colPlr2.toString()) {
    if (colPlr2.toString() == color(60).toString()) {
      colPlr2 = color(255);
    } else {
      colPlr2 = color(60);
    }
  }

  if (debugActive) { // debug menu. activated by pressing d on the keyboard
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
  if (key === 'd') {
    if (!debugActive) {
      debugActive = true;
    } else {
      debugActive = false;
    }
  }
}   

function mouseClicked() {
  if (!menuAct && mouseX >= 1510 && mouseY >= 250 && mouseY <= 650) {
    menuAct = true;
    p5.tween.manager
    .addTween(menu, 'myTween')
    .addMotion('x', 1200, 1500, 'easeInOutQuad') 
    .startTween();
  } else if (menuAct && mouseX >= 1200 && mouseY >= 250 && mouseY <= 650 && mouseX <= 1300) {
    menuAct = false;
    p5.tween.manager
    .addTween(menu, 'myTween')
    .addMotion('x', 1510, 1500, 'easeInOutQuad') 
    .startTween();
  }
  if (menuAct) {
    if ((mouseX >= menu.x+180 && mouseY >= menu.y+350) && (mouseX <= menu.x+200 && mouseY <= menu.y+370)) {
      if (selection !== 1) {
        selection = 1;
      }
    } else if ((mouseX >= menu.x+275 && mouseY >= menu.y+345) && (mouseX <= menu.x+305 && mouseY <= menu.y+385)) {
      if (selection !== 2) {
        selection = 2;
      }
    }
    if (mouseX >= menu.x+100 && mouseX <= menu.x+180 && mouseY >= menu.y+20 && mouseY <= menu.y+100) {
      if (selection === 1 && IDplr2 !== 1) {
        colPlr1 = color(255);
        IDplr1 = 1;
      } else if (selection === 2 && IDplr1 !== 1) {
        colPlr2 = color(255);
        IDplr2 = 1;
      }
    } else if (mouseX >= menu.x+200 && mouseX <= menu.x+280 && mouseY >= menu.y+20 && mouseY <= menu.y+100) {
      if (selection === 1 && IDplr2 !== 2) {
        colPlr1 = color(60);
        IDplr1 = 2;
      } else if (selection === 2 && IDplr1 !== 2) {
        colPlr2 = color(60);
        IDplr2 = 2;
      }
    } else if (mouseX >= menu.x+300 && mouseX <= menu.x+380 && mouseY >= menu.y+20 && mouseY <= menu.y+100) {
      if (selection === 1 && IDplr2 !== 3) {
        colPlr1 = color(180,20,20);
        IDplr1 = 3;
      } else if (selection === 2 && IDplr1 !== 3) {
        colPlr2 = color(180,20,20);
        IDplr2 = 3;
      }
    } else if (mouseX >= menu.x+100 && mouseX <= menu.x+180 && mouseY >= menu.y+120 && mouseY <= menu.y+200) {
      if (selection === 1 && IDplr2 !== 4) {
        colPlr1 = color(20,20,180);
        IDplr1 = 4;
      } else if (selection === 2 && IDplr1 !== 4) {
        colPlr2 = color(20,20,180);
        IDplr2 = 4;
      }
    } else if (mouseX >= menu.x+200 && mouseX <= menu.x+280 && mouseY >= menu.y+120 && mouseY <= menu.y+200) {
      if (selection === 1 && IDplr2 !== 5) {
        colPlr1 = color(20,180,20);
        IDplr1 = 5;
      } else if (selection === 2 && IDplr1 !== 5) {
        colPlr2 = color(20,180,20);
        IDplr2 = 5;
      }
    } else if (mouseX >= menu.x+300 && mouseX <= menu.x+380 && mouseY >= menu.y+120 && mouseY <= menu.y+200) {
      if (selection === 1 && IDplr2 !== 6) {
        colPlr1 = color(180,180,20);
        IDplr1 = 6;
      } else if (selection === 2 && IDplr1 !== 6) {
        colPlr2 = color(180,180,20);
        IDplr2 = 6;
      }
    } else if (mouseX >= menu.x+150 && mouseX <= menu.x+230 && mouseY >= menu.y+220 && mouseY <= menu.y+300) {
      if (selection === 1 && IDplr2 !== 7) {
        colPlr1 = color(230,160,20);
        IDplr1 = 7;
      } else if (selection === 2 && IDplr1 !== 7) {
        colPlr2 = color(230,160,20);
        IDplr2 = 7;
      }
    } else if (mouseX >= menu.x+250 && mouseX <= menu.x+330 && mouseY >= menu.y+220 && mouseY <= menu.y+300) {
      if (selection === 1 && IDplr2 !== 8) {
        colPlr1 = color(180,40,180);
        IDplr1 = 8;
      } else if (selection === 2 && IDplr1 !== 8) {
        colPlr2 = color(180,40,180);
        IDplr2 = 8;
      }
    }
  }
  if (!ended) {
  if ((((mouseX >= 615 && mouseY >= 265) && (mouseX <= 725 && mouseY <= 375)) && sq1 === 0) && started) {
    chalk.play();
    sq1 = xo;
    changeTurn();
  } else if ((((mouseX >= 745 && mouseY >= 265) && (mouseX <= 855 && mouseY <= 375)) && sq2 === 0) && started) {
    chalk.play();
    sq2 = xo;
    changeTurn();
  } else if ((((mouseX >= 875 && mouseY >= 265) && (mouseX <= 985 && mouseY <= 375)) && sq3 === 0) && started) {
    chalk.play();
    sq3 = xo;
    changeTurn();
  } else if ((((mouseX >= 615 && mouseY >= 395) && (mouseX <= 725 && mouseY <= 505)) && sq4 === 0) && started) {
    chalk.play();
    sq4 = xo;
    changeTurn();
  } else if ((((mouseX >= 745 && mouseY >= 395) && (mouseX <= 855 && mouseY <= 505)) && sq5 === 0) && started) {
    chalk.play();
    sq5 = xo;
    changeTurn();
  } else if ((((mouseX >= 875 && mouseY >= 395) && (mouseX <= 985 && mouseY <= 505)) && sq6 === 0) && started) {
    chalk.play();
    sq6 = xo;
    changeTurn();
  } else if ((((mouseX >= 615 && mouseY >= 525) && (mouseX <= 725 && mouseY <= 635)) && sq7 === 0) && started) {
    chalk.play();
    sq7 = xo;
    changeTurn();
  } else if ((((mouseX >= 745 && mouseY >= 525) && (mouseX <= 855 && mouseY <= 635)) && sq8 === 0) && started) {
    chalk.play();
    sq8 = xo;
    changeTurn();
  } else if ((((mouseX >= 875 && mouseY >= 525) && (mouseX <= 985 && mouseY <= 635)) && sq9 === 0) && started) {
    chalk.play();
    sq9 = xo;
    changeTurn();
  }
  }
  if (((mouseX >= 500 && mouseY >= 750) && (mouseX <= 1100 && mouseY <= 850)) && (started === false || ended)) {
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
  if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
}

function resetBoard() {
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

function checkWin(a,b,c,d,e,f,g) {
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

function drawCnShape(a,b,c) { // a is the square ID, b and c are the starting coordinates of the shape (X or O)
  if (a === 1) { // draw X
    stroke(color(colPlr1));
    line(b,c,b+80,c+80);
    line(b+80,c,b,c+80);
  } else if (a === 2) { // draw O
    stroke(color(colPlr2));
    fill(30,30,30,80);
    circle(b+40,c+40,90);
  }
}