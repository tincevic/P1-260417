let img;
let xo;
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

function preload() {
  img = loadImage('/../Assets/hout.jpg'); // hout textuur laden
  img2 = loadImage('/../Assets/houtach.jpg'); // hout 2
  sound = loadSound('/../Assets/ostaris.mp3');
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
  img2.mask(mG2);
  img.mask(maskGraphics);
  xo = 1; // 1 = x, 2 = o
  sound.setVolume(0.3);
}

function draw() {
  image(img2,0,0);
  background(0,0,0,70);
  stroke(69,33,4);
  strokeWeight(15);
  square(600,250,400,20);
  image(img,0,0);
  fill(0,0,0,180);
  stroke(69,33,4);
  strokeWeight(4);
  square(615,265,110,20);
  square(745,265,110,20);
  square(875,265,110,20);
  square(615,395,110,20);
  square(745,395,110,20);
  square(875,395,110,20);
  square(615,525,110,20);
  square(745,525,110,20);
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
    }
  }
  if (started === true) {
  stroke(255); // X en O tekenen
  strokeWeight(5);
  if (sq1 === 1) {
    line(630,280,710,360);
    line(710,280,630,360);
  } else if (sq1 === 2) {
    fill(0,0,0,0);
    circle(670,320,90);
  }
  if (sq2 === 1) {
    line(760,280,840,360);
    line(840,280,760,360);
  } else if (sq2 === 2) {
    fill(0,0,0,0);
    circle(800,320,90);
  }
  if (sq3 === 1) {
    line(890,280,970,360);
    line(970,280,890,360);
  } else if (sq3 === 2) {
    fill(0,0,0,0);
    circle(930,320,90);
  }
  
  if (sq4 === 1) {
    line(630,410,710,490);
    line(710,410,630,490);
  } else if (sq4 === 2) {
    fill(0,0,0,0);
    circle(670,450,90);
  }
  if (sq5 === 1) {
    line(760,410,840,490);
    line(840,410,760,490);
  } else if (sq5 === 2) {
    fill(0,0,0,0);
    circle(800,450,90);
  }
  if (sq6 === 1) {
    line(890,410,970,490);
    line(970,410,890,490);
  } else if (sq6 === 2) {
    fill(0,0,0,0);
    circle(930,450,90);
  }

  if (sq7 === 1) {
    line(630,540,710,620);
    line(710,540,630,620);
  } else if (sq7 === 2) {
    fill(0,0,0,0);
    circle(670,580,90);
  }
  if (sq8 === 1) {
    line(760,540,840,620);
    line(840,540,760,620);
  } else if (sq8 === 2) {
    fill(0,0,0,0);
    circle(800,580,90);
  }
  if (sq9 === 1) {
    line(890,540,970,620);
    line(970,540,890,620);
  } else if (sq9 === 2) {
    fill(0,0,0,0);
    circle(930,580,90);
  }
  } else if (started != true && started != false) {
    textSize(200);
    text("ERROR!",800,850); // dit wordt nooit geactiveerd maar ik heb het alsnog hier staan
  }

  strokeWeight(10);
  if (((sq1 === 1) && (sq2 === 1) && (sq3 === 1)) || ((sq1 === 2) && (sq2 === 2) && (sq3 === 2))) {
    ended = true;
    line(625,320,975,320);
  } else if (((sq4 === 1) && (sq5 === 1) && (sq6 === 1)) || ((sq4 === 2) && (sq5 === 2) && (sq6 === 2))) {
    ended = true;
    line(625,450,975,450);
  } else if (((sq7 === 1) && (sq8 === 1) && (sq9 === 1)) || ((sq7 === 2) && (sq8 === 2) && (sq9 === 2))) {
    ended = true;
    line(625,580,975,580);
  } else if (((sq1 === 1) && (sq4 === 1) && (sq7 === 1)) || ((sq1 === 2) && (sq4 === 2) && (sq7 === 2))) {
    ended = true;
    line(670,280,670,620);
  } else if (((sq2 === 1) && (sq5 === 1) && (sq8 === 1)) || ((sq2 === 2) && (sq5 === 2) && (sq8 === 2))) {
    ended = true;
    line(800,280,800,620);
  } else if (((sq3 === 1) && (sq6 === 1) && (sq9 === 1)) || ((sq3 === 2) && (sq6 === 2) && (sq9 === 2))) {
    ended = true;
    line(930,280,930,620);
  } else if (((sq3 === 1) && (sq5 === 1) && (sq7 === 1)) || ((sq3 === 2) && (sq5 === 2) && (sq7 === 2))) {
    ended = true;
    line(970,280,630,620);
  } else if (((sq1 === 1) && (sq5 === 1) && (sq9 === 1)) || ((sq1 === 2) && (sq5 === 2) && (sq9 === 2))) {
    ended = true;
    line(630,280,970,620);
  } 
  // debug-menu
  if (debugActive === true) { // debug-menu. op d drukken op het keyboard activeert 'm. 
    textSize(20);
    fill(255);
    noStroke();
    text("welcome 2 the dawn debug menu",10,20);
    rect(142.5,12.5,53,2.5);
    text("beurt: "+xo,10,40);
    text("vierkanten: "+sq1+","+sq2+","+sq3+","+sq4+","+sq5+","+sq6+","+sq7+","+sq8+","+sq9,10,60)
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
  if (ended === false) {
  if ((((mouseX >= 615 && mouseY >= 265) && (mouseX <= 725 && mouseY <= 375)) && sq1 === 0) && started === true) {
    sq1 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 745 && mouseY >= 265) && (mouseX <= 855 && mouseY <= 375)) && sq2 === 0) && started === true) {
    sq2 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 875 && mouseY >= 265) && (mouseX <= 985 && mouseY <= 375)) && sq3 === 0) && started === true) {
    sq3 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 615 && mouseY >= 395) && (mouseX <= 725 && mouseY <= 505)) && sq4 === 0) && started === true) {
    sq4 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 745 && mouseY >= 265) && (mouseX <= 855 && mouseY <= 505)) && sq5 === 0) && started === true) {
    sq5 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 875 && mouseY >= 265) && (mouseX <= 985 && mouseY <= 505)) && sq6 === 0) && started === true) {
    sq6 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 615 && mouseY >= 525) && (mouseX <= 725 && mouseY <= 635)) && sq7 === 0) && started === true) {
    sq7 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 745 && mouseY >= 525) && (mouseX <= 855 && mouseY <= 635)) && sq8 === 0) && started === true) {
    sq8 = xo;
    if (xo === 2) {
      xo = 1;
    } else {
      xo = 2;
    }
  } else if ((((mouseX >= 875 && mouseY >= 525) && (mouseX <= 985 && mouseY <= 635)) && sq9 === 0) && started === true) {
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
    sound.loop();
    started = true;
    } else {
      ended = false;
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
  }
}