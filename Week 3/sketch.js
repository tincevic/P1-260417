let img;
let img2;
let img3;
let xo;
let startxo;
let debugActive = false;
let sound;
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
let nsdet = false;
let xscore = 0;
let oscore = 0;
let win;
let winc;
let winx;
let wino;
let exec = false;
let menu = {x:1500,y:250};
let menuAct = false;
let colPlr1;
let colPlr2;

function preload() {
  img = loadImage('/../Assets/hout.jpg'); // hout textuur laden
  img2 = loadImage('/../Assets/houtach.jpg'); // hout 2
  img3 = loadImage('/../Assets/hout.jpg'); // hout 3
  sound = loadSound('/../Assets/ostaris.mp3'); // muziekje
  chalk = loadSound('/../Assets/chalk.mp3'); // geluid
  win = loadSound('/../Assets/win.mp3'); // geluid
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
  startxo = 1;
  xo = 1; // 1 = x, 2 = o
  sound.setVolume(0.4);
  winc = false;
  winx = false;
  wino = false;
  colPlr1 = color(255);
  colPlr2 = color(60);
}

function draw() {
  image(img2,0,0);
  background(0,0,0,70);
  stroke(69,33,4);
  strokeWeight(15);
  square(600,250,400,20);
  image(img,0,0);
  stroke(69,33,4);
  strokeWeight(4);
  if (mouseX >= 615 && mouseY >= 265 && mouseX <= 725 && mouseY <= 375 && sq1 === 0) {
    fill(0,0,0,210);
  } else {
    fill(0,0,0,180);
  }
  square(615,265,110,20);
  if (mouseX >= 745 && mouseY >= 265 && mouseX <= 855 && mouseY <= 375 && sq2 === 0) {
    fill(0,0,0,210);
  } else {
    fill(0,0,0,180);
  }
  square(745,265,110,20);
  if (mouseX >= 875 && mouseY >= 265 && mouseX <= 985 && mouseY <= 375 && sq3 === 0) {
    fill(0,0,0,210);
  } else {
    fill(0,0,0,180);
  }
  square(875,265,110,20);
  if (mouseX >= 615 && mouseY >= 395 && mouseX <= 725 && mouseY <= 505 && sq4 === 0) {
    fill(0,0,0,210);
  } else {
    fill(0,0,0,180);
  }
  square(615,395,110,20);
  if (mouseX >= 745 && mouseY >= 395 && mouseX <= 855 && mouseY <= 505 && sq5 === 0) {
    fill(0,0,0,210);
  } else {
    fill(0,0,0,180);
  }
  square(745,395,110,20);
  if (mouseX >= 875 && mouseY >= 395 && mouseX <= 985 && mouseY <= 505 && sq6 === 0) {
    fill(0,0,0,210);
  } else {
    fill(0,0,0,180);
  }
  square(875,395,110,20);
  if (mouseX >= 615 && mouseY >= 525 && mouseX <= 725 && mouseY <= 635 && sq7 === 0) {
    fill(0,0,0,210);
  } else {
    fill(0,0,0,180);
  }
  square(615,525,110,20);
  if (mouseX >= 745 && mouseY >= 525 && mouseX <= 855 && mouseY <= 635 && sq8 === 0) {
    fill(0,0,0,210);
  } else {
    fill(0,0,0,180);
  }
  square(745,525,110,20);
  if (mouseX >= 875 && mouseY >= 525 && mouseX <= 985 && mouseY <= 635 && sq9 === 0) {
    fill(0,0,0,210);
  } else {
    fill(0,0,0,180);
  }
  square(875,525,110,20);
  noStroke();
  fill(180,180,0,120);
  circle(865,385,10);
  circle(735,385,10);
  circle(865,515,10);
  circle(735,515,10);
  fill(0,0,0,120);

  // watch-a out-a for the-a spaghetti 🤌🤌🤌
  if (started === false || ended === true) {
    rect(500,750,600,100,20);
    fill(255);
    textSize(50);
    noStroke();
    textFont("Monospace");
    if (started === false) {
      text("Start!",720,817.5);
    } else if (ended === true) {
      text("Play!",740,817.5);
      if (startxo === 1 && nsdet === false) {
        xo = 2;
        startxo = 2;
        nsdet = true;
      } else if (startxo === 2 && nsdet === false) {
        xo = 1;
        startxo = 1;
        nsdet = true;
      }
    }
  }
  if (started === true) {
  if (xo === 1) {
    noStroke();
    push();
    translate(100,600);
    textSize(450);
    textFont("Monospace");
    textStyle(BOLD);
    angleMode(DEGREES);
    rotate(15);
    fill(50,50,50,220);
    text("X",15,0)
    fill(colPlr1,230);
    text("X",0,0);
    pop();
  } else if (xo === 2) {
    noStroke();
    push();
    translate(100,600);
    textSize(450);
    textFont("Monospace");
    textStyle(BOLD);
    angleMode(DEGREES);
    rotate(15);
    fill(50,50,50,220);
    text("O",15,0)
    fill(colPlr2,230);
    text("O",0,0);
    pop();
  }
  stroke(255); // X en O tekenen
  strokeWeight(5);
  if (sq1 === 1) {
    stroke(colPlr1);
    line(630,280,710,360);
    line(710,280,630,360);
  } else if (sq1 === 2) {
    stroke(colPlr2);
    fill(30,30,30,80);
    circle(670,320,90);
  }
  if (sq2 === 1) {
    stroke(colPlr1);
    line(760,280,840,360);
    line(840,280,760,360);
  } else if (sq2 === 2) {
    stroke(colPlr2);
    fill(30,30,30,80);
    circle(800,320,90);
  }
  if (sq3 === 1) { 
    stroke(colPlr1);
    line(890,280,970,360);
    line(970,280,890,360);
  } else if (sq3 === 2) {
    stroke(colPlr2);
    fill(30,30,30,80);
    circle(930,320,90);
  }
  
  if (sq4 === 1) {
    stroke(colPlr1);
    line(630,410,710,490);
    line(710,410,630,490);
  } else if (sq4 === 2) {
    stroke(colPlr2);
    fill(30,30,30,80);
    circle(670,450,90);
  }
  if (sq5 === 1) {
    stroke(colPlr1);
    line(760,410,840,490);
    line(840,410,760,490);
  } else if (sq5 === 2) {
    stroke(colPlr2);
    fill(30,30,30,80);
    circle(800,450,90);
  }
  if (sq6 === 1) {
    stroke(colPlr1);
    line(890,410,970,490);
    line(970,410,890,490);
  } else if (sq6 === 2) {
    stroke(colPlr2);
    fill(30,30,30,80);
    circle(930,450,90);
  }

  if (sq7 === 1) {
    stroke(colPlr1);
    line(630,540,710,620);
    line(710,540,630,620);
  } else if (sq7 === 2) {
    stroke(colPlr2);
    fill(30,30,30,80);
    circle(670,580,90);
  }
  if (sq8 === 1) {
    stroke(colPlr1);
    line(760,540,840,620);
    line(840,540,760,620);
  } else if (sq8 === 2) {
    stroke(colPlr2);
    fill(30,30,30,80);
    circle(800,580,90);
  }
  if (sq9 === 1) {
    stroke(colPlr1);
    line(890,540,970,620);
    line(970,540,890,620);
  } else if (sq9 === 2) {
    stroke(colPlr2);
    fill(30,30,30,80);
    circle(930,580,90);
  }
  } else if (started != true && started != false) {
    textSize(200);
    text("ERROR!",800,850); // dit wordt nooit geactiveerd maar ik heb het alsnog hier staan
  }

  stroke(255);
  strokeWeight(10);
  stroke(255);
  if (((sq1 === 1) && (sq2 === 1) && (sq3 === 1)) || ((sq1 === 2) && (sq2 === 2) && (sq3 === 2))) {
    ended = true;
    winc = true;
    if (sq1 === 1 && sq2 === 1 && sq3 === 1) {
      winx = true;
    } else {
      wino = true;
    }
    line(625,320,975,320);
  } else if (((sq4 === 1) && (sq5 === 1) && (sq6 === 1)) || ((sq4 === 2) && (sq5 === 2) && (sq6 === 2))) {
    ended = true;
    winc = true;
    if (sq4 === 1 && sq5 === 1 && sq6 === 1) {
      winx = true;
    } else {
      wino = true;
    }
    line(625,450,975,450);
  } else if (((sq7 === 1) && (sq8 === 1) && (sq9 === 1)) || ((sq7 === 2) && (sq8 === 2) && (sq9 === 2))) {
    ended = true;
    winc = true;
    if (sq7 === 1 && sq8 === 1 && sq9 === 1) {
      winx = true;
    } else {
      wino = true;
    }
    line(625,580,975,580);
  } else if (((sq1 === 1) && (sq4 === 1) && (sq7 === 1)) || ((sq1 === 2) && (sq4 === 2) && (sq7 === 2))) {
    ended = true;
    winc = true;
    if (sq1 === 1 && sq4 === 1 && sq7 === 1) {
      winx = true;
    } else {
      wino = true;
    }
    line(670,280,670,620);
  } else if (((sq2 === 1) && (sq5 === 1) && (sq8 === 1)) || ((sq2 === 2) && (sq5 === 2) && (sq8 === 2))) {
    ended = true;
    winc = true;
    if (sq2 === 1 && sq5 === 1 && sq8 === 1) {
      winx = true;
    } else {
      wino = true;
    }
    line(800,280,800,620);
  } else if (((sq3 === 1) && (sq6 === 1) && (sq9 === 1)) || ((sq3 === 2) && (sq6 === 2) && (sq9 === 2))) {
    ended = true;
    winc = true;
    if (sq1 === 3 && sq2 === 6 && sq3 === 9) {
      winx = true;
    } else {
      wino = true;
    }
    line(930,280,930,620);
  } else if (((sq3 === 1) && (sq5 === 1) && (sq7 === 1)) || ((sq3 === 2) && (sq5 === 2) && (sq7 === 2))) {
    ended = true;
    winc = true;
    if (sq3 === 1 && sq5 === 1 && sq7 === 1) {
      winx = true;
    } else {
      wino = true;
    }
    line(970,280,630,620);
  } else if (((sq1 === 1) && (sq5 === 1) && (sq9 === 1)) || ((sq1 === 2) && (sq5 === 2) && (sq9 === 2))) {
    ended = true;
    winc = true;
    if (sq1 === 1 && sq5 === 1 && sq9 === 1) {
      winx = true;
    } else {
      wino = true;
    }
    line(630,280,970,620);
  } else if (sq1 != 0 && sq2 != 0 && sq3 != 0 && sq4 != 0 && sq5 != 0 && sq6 != 0 && sq7 != 0 && sq8 != 0 && sq9 != 0) {
    ended = true;
  }
  if (winc === true && exec === false) {
    win.setVolume(3);
    win.play();
    if (winx === true) {
      xscore += 1;
      winx = false;
      exec = true;
    } else if (wino === true) {
      oscore += 1;
      wino = false;
      exec = true; 
    }
    winc = false;
  }
  noStroke();
  fill(255);
  textSize(50);
  textFont("Monospace");
  text("x "+xscore+" : "+oscore+" o",678,220);
  if (winc === false && started === true && ended === false) {
    textSize(20);
    text("Ongoing...",750,175);
  } else if (wino === true) {
    textSize(20);
    text("O wins!",765,175);
  } else if (winx === true) {
    textSize(20);
    text("X wins!",765,175);
  } else if (ended === true) {
    textSize(20);
    text("Draw!",775,175);
  }

  // kleur veranderen
  image(img3,menu.x-800,0);
  stroke(69,33,4);
  strokeWeight(7.5);
  fill(0,0);
  rect(menu.x,menu.y,400,400)
  fill(0,0,0,100);
  rect(menu.x,menu.y,100,400);

  // debug-menu
  if (debugActive === true) { // debug-menu. op d drukken op het keyboard activeert 'm. 
    textSize(20);
    fill(255);
    noStroke();
    textFont("Arial");
    text("welcome 2 the dawn debug menu",10,20);
    rect(142.5,12.5,53,2.5);
    text("beurt: "+xo,10,40);
    text("vierkanten: "+sq1+","+sq2+","+sq3+","+sq4+","+sq5+","+sq6+","+sq7+","+sq8+","+sq9,10,60)
    text("beurt begin: "+startxo,10,80);
    text("win x: "+winx,10,100);
    text("win 3o: "+wino,10,120);
    text("menu actief: "+menuAct,10,140);
  }
}

function keyPressed() {
  if (key === 'd') {
    if (debugActive === false) {
      debugActive = true;
    } else {
      debugActive = false;
    }
  }
}   

function mouseClicked() {
  if (menuAct === false && mouseX >= 1500 && mouseY >= 250 && mouseY <= 650) {
    menuAct = true;
    p5.tween.manager
    .addTween(menu, 'myTween')
    .addMotion('x', 1200, 2000, 'easeInElastic') 
    .startTween();
  } else if (menuAct === true && mouseX >= 1200 && mouseY >= 250 && mouseY <= 650 && mouseX <= 1300) {
    menuAct = false;
    p5.tween.manager
    .addTween(menu, 'myTween')
    .addMotion('x', 1500, 2000, 'easeInElastic') 
    .startTween();
  }
  if (ended === false) {
  if ((((mouseX >= 615 && mouseY >= 265) && (mouseX <= 725 && mouseY <= 375)) && sq1 === 0) && started === true) {
    chalk.play();
    sq1 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 745 && mouseY >= 265) && (mouseX <= 855 && mouseY <= 375)) && sq2 === 0) && started === true) {
    chalk.play();
    sq2 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 875 && mouseY >= 265) && (mouseX <= 985 && mouseY <= 375)) && sq3 === 0) && started === true) {
    chalk.play();
    sq3 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 615 && mouseY >= 395) && (mouseX <= 725 && mouseY <= 505)) && sq4 === 0) && started === true) {
    chalk.play();
    sq4 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 745 && mouseY >= 395) && (mouseX <= 855 && mouseY <= 505)) && sq5 === 0) && started === true) {
    chalk.play();
    sq5 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 875 && mouseY >= 395) && (mouseX <= 985 && mouseY <= 505)) && sq6 === 0) && started === true) {
    chalk.play();
    sq6 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 615 && mouseY >= 525) && (mouseX <= 725 && mouseY <= 635)) && sq7 === 0) && started === true) {
    chalk.play();
    sq7 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 745 && mouseY >= 525) && (mouseX <= 855 && mouseY <= 635)) && sq8 === 0) && started === true) {
    chalk.play();
    sq8 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 875 && mouseY >= 525) && (mouseX <= 985 && mouseY <= 635)) && sq9 === 0) && started === true) {
    chalk.play();
    sq9 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  }
  }
  if (((mouseX >= 500 && mouseY >= 750) && (mouseX <= 1100 && mouseY <= 850)) && (started === false || ended === true)) {
    if (started === false) {
    userStartAudio();
    // sound.loop();
    started = true;
    } else {
      ended = false;
      nsdet = false;
    }
    sq1 = 0;
    sq2 = 0;
    sq3 = 0;
    sq4 = 0;
    sq5 = 0;
    sq6 = 0;
    sq7 = 0;
    sq8 = 0;
    sq9 = 0;
    winc = false;
    wino = false;
    winx = false;
    exec = false;
  }
}