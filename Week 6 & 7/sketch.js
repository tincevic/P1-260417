let hungerLevel = 100; // 0 - 100. At 0, healthLevel declines by 1 more every second.
let sleepLevel = 100; // 0 - 100. At 0, healthLevel declines by 1 more every second.
let funLevel = 50; // 0 - 100. At 0, healthlevel declines by 0.5 more every second.
let cleanLevel = 100; // 0 - 100. At 0, healthLevel declines by 1 more every second.
let healthLevel = 100; // 0 - 100. Default is 100 and declines by 1 every 5 seconds. Has a 1/10 chance of dropping to 40 every minute. If the level is 40 or lower, the pet is sick. If the level is 0, the pet dies.
let weightLevel = 100; // 0 - 200. Below 5, the pet dies. Above 170, healthLevel declines by 2 more every second. Underweight below 50, overweight above 150
let debugActive = false;
let cash = 100; // Every 10 seconds you get 10$. You use this to buy supplies.

let pizzas = 1; // Items; very primitive
let pills = 1;
let toys = 1;
let soaps = 1;

let spritesheet;
let xSprite = 0;
let ySprite = 0;

let menuActive = false;
let menuType = 0;

function preload() {
  spritesheet = loadImage('/../Assets/spritesheet.png'); // stupid little seal
}

function setup() {
  createCanvas(400, 400);
  if (getItem("hungerLevel") && getItem("pizzas")) { // Check if data exists in local storage
    hungerLevel = getItem("hungerLevel"); // Get data from local storage and load it
    sleepLevel = getItem("sleepLevel");
    funLevel = getItem("funLevel");
    cleanLevel = getItem("cleanLevel");
    healthLevel = getItem("healthLevel");
    weightLevel = getItem("weightLevel");
    cash = getItem("cash");
    pizzas = getItem("pizzas");
    pills = getItem("pills");
    toys = getItem("toys");
    soaps = getItem("soaps");
  }
  saveStats();

  imageMode(CENTER);
  noSmooth();
}

function draw() {
  background(180,190,210);

  fill(0,0);
  stroke(0,60);
  strokeWeight(3);
  circle(415,200,800); // background
  circle(-15,200,800);

  if (frameCount % 120 == 0) { // lower stats every 2 seconds
    hungerLevel = max(0, hungerLevel-1);
    sleepLevel = max(0, sleepLevel-1);
    funLevel = max(0, funLevel-0.5);
    cleanLevel = max(0, cleanLevel-1);
    updateSprite();
    saveStats();
  }
  if (frameCount % 180 == 0) { // lower stats every 3 seconds
    healthLevel = max(0, cleanLevel-1);
    weightLevel = max(0, cleanLevel-1);
  }
  if (frameCount % 60 == 0) { // lower stats every second depending on other stats
    if (hungerLevel == 0) {
      healthLevel = max(0, healthLevel-1)
    }
    if (sleepLevel == 0) {
      healthLevel = max(0, healthLevel-1)
    }
    if (funLevel == 0) {
      healthLevel = max(0, healthLevel-0.5)
    }
    if (cleanLevel == 0) {
      healthLevel = max(0, healthLevel-1)
    }
  }
  noStroke();
  fill(255,120); // icons:
  circle(60,300,55); // shop
  circle(340,300,55); // clean
  circle(120,350,55); // food
  circle(280,350,55); // play
  circle(200,360,55); // medicine

  stroke(0); // shopping cart icon
  line(37,295,70,295);
  line(70,295,80,285);
  line(37,295,43,315);
  line(43,315,68,315);
  line(68,315,70,295);
  fill(0,0);
  circle(48,320,5);
  circle(64,320,5);

  updateSprite(); // add image of sprite. xSprite and ySprite are determined by variables, which show different sprites for different stats
  image(spritesheet,width/2,height/2,150,80,xSprite*72,ySprite*40,72,40);
  
  triangle(110,330,143,345,115,372); // pizza-ish icon
  line(111,340,136,350);
  circle(115,350,5);
  circle(125,350,5);
  circle(123,360,5);

  rect(185,353,30,24,3); // medicine/pill bottle icon
  rect(191,345,18,8);
  rect(189,340,22,5);
  line(200,358,200,370);
  line(194,364,206,364);

  circle(280,350,35); // tennis ball/toy icon
  push();
  translate(280, 350);
  rotate(PI/4);
  arc(-12,0,12,25,-HALF_PI,HALF_PI);
  arc(12,0,12,25,HALF_PI,PI*1.5);
  pop();

  rect(330,292,30,20,5); // soap icon
  circle(327,285,8);
  circle(334,290,8);
  circle(327,292,8)

  if (menuActive) { // is any menu opened?
    noStroke();
    fill(180,190,210);
    square(0,0,400); // cover screen
    fill(0);
    textSize(15);
    text("X",385,15);
    if (menuType == 1) { // shop menu. primitive, but works.
      textSize(20);
      text("Welcome to the Shop!",10,30);
      textSize(12);
      text("You have: $"+cash,10,50);
      text("You can buy:",10,100);
      textSize(16);
      text("PIZZA - $10 (You own "+pizzas+")",10,120);
      text("MEDICINAL PILLS - $10 (You own "+pills+")",10,140);
      text("TOY - $20 (You own "+toys+")",10,160);
      text("SOAP - $5 (You own "+soaps+")",10,180);
    }
  }

  noStroke();
  fill(0);
  textSize(12);
  if (debugActive) { // debug only. pressing D shows you stats in numbers
    text("hunger: "+hungerLevel,10,10);
    text("sleep: "+sleepLevel,10,20);
    text("fun: "+funLevel,10,30);
    text("clean: "+cleanLevel,10,40);
    text("health: "+healthLevel,10,50);
    text("weight: "+weightLevel,10,60);
    text("menu active? "+menuActive,10,70);
  }
  text("reset variables",10,390); // debug only. resets stats when pressed
  text("mouseY: "+mouseY,10,380); // debug only
  text("mouseX: "+mouseX,10,370); // debug only
}

function mouseClicked() {
  if (mouseX >= 10 && mouseX <= 85 && mouseY >= 385 && mouseY <= 395) { // debug only. this resets stats when pressed
    hungerLevel = 100;
    sleepLevel = 100;
    funLevel = 50;
    cleanLevel = 100;
    healthLevel = 100;
    weightLevel = 100;
    cash = 100;
    pizzas = 1; 
    pills = 1;
    toys = 1;
    soaps = 1;
    saveStats();
    updateSprite();
  }
  if (!menuActive) {
  if (mouseX >= 33 && mouseX <= 87 && mouseY >= 273 && mouseY <= 327) { // shop menu
    menuActive = true;
    menuType = 1;
  } else if (mouseX >= 313 && mouseX <= 367 && mouseY >= 273 && mouseY <= 327) { // clean menu
    menuActive = true;
    menuType = 5;
  } else if (mouseX >= 93 && mouseX <= 147 && mouseY >= 323 && mouseY <= 377) { // food menu
    menuActive = true;
    menuType = 2;
  } else if (mouseX >= 263 && mouseX <= 307 && mouseY >= 323 && mouseY <= 377) { // play menu
    menuActive = true;
    menuType = 4;
  } else if (mouseX >= 173 && mouseX <= 227 && mouseY >= 333 && mouseY <= 387) { // medicine menu
    menuActive = true;
    menuType = 3;
  } 
  } else {
    if (mouseX >= 385 && mouseX <= 400 && mouseY <= 15) { // close menu
      menuActive = false;
      menuType = 0;
    }
    if (menuType == 1) {
      if (mouseX >= 10 && mouseX <= 250 && mouseY >= 110 && mouseY <= 130 && cash >= 10) { // purchase items. removes cash and adds the item
        pizzas++;
        cash -= 10;
      }
      if (mouseX >= 10 && mouseX <= 250 && mouseY >= 130 && mouseY <= 150 && cash >= 10) {
        pills++;
        cash -= 10;
      }
      if (mouseX >= 10 && mouseX <= 250 && mouseY >= 150 && mouseY <= 170 && cash >= 20) {
        toys++;
        cash -= 20;
      }
      if (mouseX >= 10 && mouseX <= 250 && mouseY >= 170 && mouseY <= 190 && cash >= 5) {
        soaps++;
        cash -= 5;
      }
    }
  }
}

function keyPressed() { // opens debug menu
  if (key === 'd') {
    if (!debugActive) {
      debugActive = true;
    } else {
      debugActive = false;
    }
  }
}

function updateSprite() { // update sprite by checking different variables at the same time. 

  let happy = funLevel > 70; // variables to check more easily
  let clean = cleanLevel >= 50;
  let dirty = cleanLevel < 50;
  let healthy = healthLevel >= 40;
  let sick = healthLevel < 40;
  let normalWeight = weightLevel >= 50 && weightLevel <= 150;
  let underWeight = weightLevel < 50;
  let overWeight = weightLevel > 150;

  let hungry = hungerLevel < 50;
  let sleepy = sleepLevel < 50;
  
  if (happy && clean && healthy && normalWeight) { // all of this checks for variables to find the sprite location in the spritesheet
    xSprite = 0;
    ySprite = 1;
  }
  if (!happy && clean && healthy && normalWeight) {
    xSprite = 0;
    ySprite = 0;
  }
  if (happy && clean && sick && normalWeight) {
    xSprite = 1;
    ySprite = 1;
  }
  if (!happy && clean && sick && normalWeight) {
    xSprite = 1;
    ySprite = 0;
  }


  if (happy && clean && healthy && underWeight) {
    xSprite = 0;
    ySprite = 5;
  }
  if (!happy && clean && healthy && underWeight) {
    xSprite = 0;
    ySprite = 4;
  }
  if (happy && clean && sick && underWeight) {
    xSprite = 1;
    ySprite = 5;
  }
  if (!happy && clean && sick && underWeight) {
    xSprite = 1;
    ySprite = 4;
  }


  if (happy && clean && healthy && overWeight) {
    xSprite = 0;
    ySprite = 9;
  }
  if (!happy && clean && healthy && overWeight) {
    xSprite = 0;
    ySprite = 8;
  }
  if (happy && clean && sick && overWeight) {
    xSprite = 1;
    ySprite = 9;
  }
  if (!happy && clean && sick && overWeight) {
    xSprite = 1;
    ySprite = 8;
  }

  if (happy && dirty && healthy && normalWeight) {
    xSprite = 0;
    ySprite = 3;
  }
  if (!happy && dirty && healthy && normalWeight) {
    xSprite = 0;
    ySprite = 2;
  }
  if (happy && dirty && sick && normalWeight) {
    xSprite = 1;
    ySprite = 3;
  }
  if (!happy && dirty && sick && normalWeight) {
    xSprite = 1;
    ySprite = 2;
  }

  if (happy && dirty  && healthy && underWeight) {
    xSprite = 0;
    ySprite = 7;
  }
  if (!happy && dirty && healthy && underWeight) {
    xSprite = 0;
    ySprite = 6;
  }
  if (happy && dirty && sick && underWeight) {
    xSprite = 1;
    ySprite = 7;
  }
  if (!happy && dirty && sick && underWeight) {
    xSprite = 1;
    ySprite = 6;
  }

  if (happy && dirty && healthy && overWeight) {
    xSprite = 0;
    ySprite = 11;
  }
  if (!happy && dirty && healthy && overWeight) {
    xSprite = 0;
    ySprite = 10;
  }
  if (happy && dirty && sick && overWeight) {
    xSprite = 1;
    ySprite = 11;
  }
  if (!happy && dirty && sick && overWeight) {
    xSprite = 1;
    ySprite = 10;
  }
}


function saveStats() { // saves stats using localStorage
  storeItem("hungerLevel", hungerLevel);
  storeItem("sleepLevel", sleepLevel);
  storeItem("funLevel", funLevel);
  storeItem("cleanLevel", cleanLevel);
  storeItem("healthLevel", healthLevel);
  storeItem("weightLevel", weightLevel);
  storeItem("cash", cash);
  storeItem("pizzas", pizzas);
  storeItem("pills", pills);
  storeItem("toys", toys);
  storeItem("soaps", soaps);
}