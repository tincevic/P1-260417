let img;
let img2;
let img3;
let XO;
let startXO;
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
let xScore = 0;
let oScore = 0;
let win;
let winC;
let winX;
let winO;
let exec = false;
let menu = {x:1500,y:250};
let menuAct = false;
let colPlr1;
let colPlr2;
let IDplr1 = 1;
let IDplr2 = 2;
let selection;

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
  startXO = 1;
  XO = 1; // 1 = x, 2 = o
  sound.setVolume(0.4);
  winC = false;
  winX = false;
  winO = false;
  colPlr1 = color(255);
  colPlr2 = color(60);
  selection = 1;
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
      if (startXO === 1 && nsdet === false) {
        XO = 2;
        startXO = 2;
        nsdet = true;
      } else if (startXO === 2 && nsdet === false) {
        XO = 1;
        startXO = 1;
        nsdet = true;
      }
    }
  }
  if (started === true) {
  if (XO === 1) {
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
    fill(color(colPlr1),230);
    text("X",0,0);
    pop();
  } else if (XO === 2) {
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
    fill(color(colPlr2),230);
    text("O",0,0);
    pop();
  }
  stroke(255); // X en O tekenen
  strokeWeight(5);
  if (sq1 === 1) {
    stroke(color(colPlr1));
    line(630,280,710,360);
    line(710,280,630,360);
  } else if (sq1 === 2) {
    stroke(color(colPlr2));
    fill(30,30,30,80);
    circle(670,320,90);
  }
  if (sq2 === 1) {
    stroke(color(colPlr1));
    line(760,280,840,360);
    line(840,280,760,360);
  } else if (sq2 === 2) {
    stroke(color(colPlr2));
    fill(30,30,30,80);
    circle(800,320,90);
  }
  if (sq3 === 1) { 
    stroke(color(colPlr1));
    line(890,280,970,360);
    line(970,280,890,360);
  } else if (sq3 === 2) {
    stroke(color(colPlr2));
    fill(30,30,30,80);
    circle(930,320,90);
  }
  
  if (sq4 === 1) {
    stroke(color(colPlr1));
    line(630,410,710,490);
    line(710,410,630,490);
  } else if (sq4 === 2) {
    stroke(color(colPlr2));
    fill(30,30,30,80);
    circle(670,450,90);
  }
  if (sq5 === 1) {
    stroke(color(colPlr1));
    line(760,410,840,490);
    line(840,410,760,490);
  } else if (sq5 === 2) {
    stroke(color(colPlr2));
    fill(30,30,30,80);
    circle(800,450,90);
  }
  if (sq6 === 1) {
    stroke(color(colPlr1));
    line(890,410,970,490);
    line(970,410,890,490);
  } else if (sq6 === 2) {
    stroke(color(colPlr2));
    fill(30,30,30,80);
    circle(930,450,90);
  }

  if (sq7 === 1) {
    stroke(color(colPlr1));
    line(630,540,710,620);
    line(710,540,630,620);
  } else if (sq7 === 2) {
    stroke(color(colPlr2));
    fill(30,30,30,80);
    circle(670,580,90);
  }
  if (sq8 === 1) {
    stroke(color(colPlr1));
    line(760,540,840,620);
    line(840,540,760,620);
  } else if (sq8 === 2) {
    stroke(color(colPlr2));
    fill(30,30,30,80);
    circle(800,580,90);
  }
  if (sq9 === 1) {
    stroke(color(colPlr1));
    line(890,540,970,620);
    line(970,540,890,620);
  } else if (sq9 === 2) {
    stroke(color(colPlr2));
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
    winC = true;
    if (sq1 === 1 && sq2 === 1 && sq3 === 1) {
      winX = true;
    } else {
      winO = true;
    }
    line(625,320,975,320);
  } // else
  if (((sq4 === 1) && (sq5 === 1) && (sq6 === 1)) || ((sq4 === 2) && (sq5 === 2) && (sq6 === 2))) {
    ended = true;
    winC = true;
    if (sq4 === 1 && sq5 === 1 && sq6 === 1) {
      winX = true;
    } else {
      winO = true;
    }
    line(625,450,975,450);
  } // else
  if (((sq7 === 1) && (sq8 === 1) && (sq9 === 1)) || ((sq7 === 2) && (sq8 === 2) && (sq9 === 2))) {
    ended = true;
    winC = true;
    if (sq7 === 1 && sq8 === 1 && sq9 === 1) {
      winX = true;
    } else {
      winO = true;
    }
    line(625,580,975,580);
  } // else
  if (((sq1 === 1) && (sq4 === 1) && (sq7 === 1)) || ((sq1 === 2) && (sq4 === 2) && (sq7 === 2))) {
    ended = true;
    winC = true;
    if (sq1 === 1 && sq4 === 1 && sq7 === 1) {
      winX = true;
    } else {
      winO = true;
    }
    line(670,280,670,620);
  } // else
  if (((sq2 === 1) && (sq5 === 1) && (sq8 === 1)) || ((sq2 === 2) && (sq5 === 2) && (sq8 === 2))) {
    ended = true;
    winC = true;
    if (sq2 === 1 && sq5 === 1 && sq8 === 1) {
      winX = true;
    } else {
      winO = true;
    }
    line(800,280,800,620);
  } // else
  if (((sq3 === 1) && (sq6 === 1) && (sq9 === 1)) || ((sq3 === 2) && (sq6 === 2) && (sq9 === 2))) {
    ended = true;
    winC = true;
    if (sq1 === 3 && sq2 === 6 && sq3 === 9) {
      winX = true;
    } else {
      winO = true;
    }
    line(930,280,930,620);
  } // else
  if (((sq3 === 1) && (sq5 === 1) && (sq7 === 1)) || ((sq3 === 2) && (sq5 === 2) && (sq7 === 2))) {
    ended = true;
    winC = true;
    if (sq3 === 1 && sq5 === 1 && sq7 === 1) {
      winX = true;
    } else {
      winO = true;
    }
    line(970,280,630,620);
  } // else
  if (((sq1 === 1) && (sq5 === 1) && (sq9 === 1)) || ((sq1 === 2) && (sq5 === 2) && (sq9 === 2))) {
    ended = true;
    winC = true;
    if (sq1 === 1 && sq5 === 1 && sq9 === 1) {
      winX = true;
    } else {
      winO = true;
    }
    line(630,280,970,620);
  } // else
  if (sq1 != 0 && sq2 != 0 && sq3 != 0 && sq4 != 0 && sq5 != 0 && sq6 != 0 && sq7 != 0 && sq8 != 0 && sq9 != 0) {
    ended = true;
  }
  if (winC === true && exec === false) {
    win.setVolume(3);
    win.play();
    if (winX === true) {
      xScore += 1;
      winX = false;
      exec = true;
    } else if (winO === true) {
      oScore += 1;
      winO = false;
      exec = true; 
    }
    winC = false;
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
  if (winC === false && started === true && ended === false) {
    fill(255);
    text("Ongoing...",750,175);
  } else if (winO === true) {
    fill(colPlr2);
    text("O wins!",765,175);
  } else if (winX === true) {
    fill(colPlr1);
    text("X wins!",765,175);
  } else if (ended === true) {
    fill(255);
    text("Draw!",775,175);
  }

  // kleur veranderen
  image(img3,menu.x-800,0);
  stroke(69,33,4);
  strokeWeight(7.5);
  fill(0,0);
  rect(menu.x,menu.y,400,400)
  fill(0,0,0,100);
  rect(menu.x,menu.y,80,400);
  fill(255); // wit
  stroke(200);
  square(menu.x+100,menu.y+20,80,20);
  if (IDplr1 === 1) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+100,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+120,menu.y+40,menu.x+160,menu.y+80);
    line(menu.x+160,menu.y+40,menu.x+120,menu.y+80);
  } else if (IDplr2 === 1) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+100,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+140,menu.y+60,45);
  }
  fill(60); // zwart
  stroke(30);
  square(menu.x+200,menu.y+20,80,20);
  if (IDplr1 === 2) {
    strokeWeight(10);
    fill(255,80);
    stroke(220);
    square(menu.x+200,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+220,menu.y+40,menu.x+260,menu.y+80);
    line(menu.x+260,menu.y+40,menu.x+220,menu.y+80);
  } else if (IDplr2 === 2) {
    strokeWeight(10);
    fill(255,80);
    stroke(220);
    square(menu.x+200,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+240,menu.y+60,45);
  }
  fill(200,20,20); // rood
  stroke(170,10,10);
  square(menu.x+300,menu.y+20,80,20);
  if (IDplr1 === 3) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+300,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+320,menu.y+40,menu.x+360,menu.y+80);
    line(menu.x+360,menu.y+40,menu.x+320,menu.y+80);
  } else if (IDplr2 === 3) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+300,menu.y+20,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+340,menu.y+60,45);
  }
  fill(20,20,200); // blauw
  stroke(10,10,170);
  square(menu.x+100,menu.y+120,80,20);
  if (IDplr1 === 4) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+100,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+120,menu.y+140,menu.x+160,menu.y+180);
    line(menu.x+160,menu.y+140,menu.x+120,menu.y+180);
  } else if (IDplr2 === 4) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+100,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+140,menu.y+160,45);
  }
  fill(20,200,20); // groen
  stroke(10,170,10);
  square(menu.x+200,menu.y+120,80,20);
  if (IDplr1 === 5) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+200,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+220,menu.y+140,menu.x+260,menu.y+180);
    line(menu.x+260,menu.y+140,menu.x+220,menu.y+180);
  } else if (IDplr2 === 5) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+200,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+240,menu.y+160,45);
  }
  fill(200,200,20); // geel
  stroke(170,170,10);
  square(menu.x+300,menu.y+120,80,20);
  if (IDplr1 === 6) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+300,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+320,menu.y+140,menu.x+360,menu.y+180);
    line(menu.x+360,menu.y+140,menu.x+320,menu.y+180);
  } else if (IDplr2 === 6) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+300,menu.y+120,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+340,menu.y+160,45);
  }
  fill(230,160,20); // oranje
  stroke(185,120,10);
  square(menu.x+150,menu.y+220,80,20);
  if (IDplr1 === 7) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+150,menu.y+220,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+170,menu.y+240,menu.x+210,menu.y+280);
    line(menu.x+210,menu.y+240,menu.x+170,menu.y+280);
  } else if (IDplr2 === 7) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+150,menu.y+220,80,20);
    strokeWeight(7.5);
    stroke(255);
    fill(0,0);
    circle(menu.x+190,menu.y+260,45);
  }
  fill(200,20,200); // paars
  stroke(170,10,170);
  square(menu.x+250,menu.y+220,80,20);
  if (IDplr1 === 8) {
    strokeWeight(10);
    fill(0,80);
    stroke(20);
    square(menu.x+250,menu.y+220,80,20);
    strokeWeight(7.5);
    stroke(255);
    line(menu.x+270,menu.y+240,menu.x+310,menu.y+280);
    line(menu.x+310,menu.y+240,menu.x+270,menu.y+280);
  } else if (IDplr2 === 8) {
    strokeWeight(10);
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

  // debug-menu
  if (debugActive === true) { // debug-menu. op d drukken op het keyboard activeert 'm. 
    textSize(20);
    fill(255);
    noStroke();
    textFont("Arial");
    text("welcome 2 the dawn debug menu",10,20);
    rect(142.5,12.5,53,2.5);
    text("beurt: "+XO,10,40);
    text("vierkanten: "+sq1+","+sq2+","+sq3+","+sq4+","+sq5+","+sq6+","+sq7+","+sq8+","+sq9,10,60)
    text("beurt begin: "+startXO,10,80);
    text("win x: "+winX,10,100);
    text("win 3o: "+winO,10,120);
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
    .addMotion('x', 1200, 1500, 'easeInOutQuad') 
    .startTween();
  } else if (menuAct === true && mouseX >= 1200 && mouseY >= 250 && mouseY <= 650 && mouseX <= 1300) {
    menuAct = false;
    p5.tween.manager
    .addTween(menu, 'myTween')
    .addMotion('x', 1500, 1500, 'easeInOutQuad') 
    .startTween();
  }
  if (menuAct === true) {
    if ((mouseX >= menu.x+180 && mouseY >= menu.y+350) && (mouseX <= menu.x+200 && mouseY <= menu.y+370)) {
      if (selection != 1) {
        selection = 1;
      }
    } else if ((mouseX >= menu.x+275 && mouseY >= menu.y+345) && (mouseX <= menu.x+305 && mouseY <= menu.y+385)) {
      if (selection != 2) {
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
        colPlr1 = color(200,20,20);
        IDplr1 = 3;
      } else if (selection === 2 && IDplr1 !== 3) {
        colPlr2 = color(200,20,20);
        IDplr2 = 3;
      }
    } else if (mouseX >= menu.x+100 && mouseX <= menu.x+180 && mouseY >= menu.y+120 && mouseY <= menu.y+200) {
      if (selection === 1 && IDplr2 !== 4) {
        colPlr1 = color(20,20,200);
        IDplr1 = 4;
      } else if (selection === 2 && IDplr1 !== 4) {
        colPlr2 = color(20,20,200);
        IDplr2 = 4;
      }
    } else if (mouseX >= menu.x+200 && mouseX <= menu.x+280 && mouseY >= menu.y+120 && mouseY <= menu.y+200) {
      if (selection === 1 && IDplr2 !== 5) {
        colPlr1 = color(20,200,20);
        IDplr1 = 5;
      } else if (selection === 2 && IDplr1 !== 5) {
        colPlr2 = color(20,200,20);
        IDplr2 = 5;
      }
    } else if (mouseX >= menu.x+300 && mouseX <= menu.x+380 && mouseY >= menu.y+120 && mouseY <= menu.y+200) {
      if (selection === 1 && IDplr2 !== 6) {
        colPlr1 = color(200,200,20);
        IDplr1 = 6;
      } else if (selection === 2 && IDplr1 !== 6) {
        colPlr2 = color(200,200,20);
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
        colPlr1 = color(200,20,200);
        IDplr1 = 8;
      } else if (selection === 2 && IDplr1 !== 8) {
        colPlr2 = color(200,20,200);
        IDplr2 = 8;
      }
    }
  }
  if (ended === false) {
  if ((((mouseX >= 615 && mouseY >= 265) && (mouseX <= 725 && mouseY <= 375)) && sq1 === 0) && started === true) {
    chalk.play();
    sq1 = XO;
    if (XO === 2) {
      XO = 1;
    } else {
      XO = 2;
    }
  } else if ((((mouseX >= 745 && mouseY >= 265) && (mouseX <= 855 && mouseY <= 375)) && sq2 === 0) && started === true) {
    chalk.play();
    sq2 = XO;
    if (XO === 2) {
      XO = 1;
    } else {
      XO = 2;
    }
  } else if ((((mouseX >= 875 && mouseY >= 265) && (mouseX <= 985 && mouseY <= 375)) && sq3 === 0) && started === true) {
    chalk.play();
    sq3 = XO;
    if (XO === 2) {
      XO = 1;
    } else {
      XO = 2;
    }
  } else if ((((mouseX >= 615 && mouseY >= 395) && (mouseX <= 725 && mouseY <= 505)) && sq4 === 0) && started === true) {
    chalk.play();
    sq4 = XO;
    if (XO === 2) {
      XO = 1;
    } else {
      XO = 2;
    }
  } else if ((((mouseX >= 745 && mouseY >= 395) && (mouseX <= 855 && mouseY <= 505)) && sq5 === 0) && started === true) {
    chalk.play();
    sq5 = XO;
    if (XO === 2) {
      XO = 1;
    } else {
      XO = 2;
    }
  } else if ((((mouseX >= 875 && mouseY >= 395) && (mouseX <= 985 && mouseY <= 505)) && sq6 === 0) && started === true) {
    chalk.play();
    sq6 = XO;
    if (XO === 2) {
      XO = 1;
    } else {
      XO = 2;
    }
  } else if ((((mouseX >= 615 && mouseY >= 525) && (mouseX <= 725 && mouseY <= 635)) && sq7 === 0) && started === true) {
    chalk.play();
    sq7 = XO;
    if (XO === 2) {
      XO = 1;
    } else {
      XO = 2;
    }
  } else if ((((mouseX >= 745 && mouseY >= 525) && (mouseX <= 855 && mouseY <= 635)) && sq8 === 0) && started === true) {
    chalk.play();
    sq8 = XO;
    if (XO === 2) {
      XO = 1;
    } else {
      XO = 2;
    }
  } else if ((((mouseX >= 875 && mouseY >= 525) && (mouseX <= 985 && mouseY <= 635)) && sq9 === 0) && started === true) {
    chalk.play();
    sq9 = XO;
    if (XO === 2) {
      XO = 1;
    } else {
      XO = 2;
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
    winC = false;
    winO = false;
    winX = false;
    exec = false;
  }
}