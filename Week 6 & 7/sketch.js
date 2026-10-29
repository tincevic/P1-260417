let hungerLevel = 100; // 0 - 100. At 0, healthLevel declines by 1 more every second.
let sleepLevel = 100; // 0 - 100. At 0, healthLevel declines by 1 more every second.
let funLevel = 100; // 0 - 100. At 0, healthlevel declines by 0.5 more every second.
let cleanLevel = 100; // 0 - 100. At 0, healthLevel declines by 1 more every second.
let healthLevel = 100; // 0 - 100. Default is 100 and declines by 1 every 5 seconds. Has a 1/10 chance of dropping to 40 every minute. If the level is 40 or lower, the pet is sick. If the level is 0, the pet dies.
let weightLevel = 100; // 0 - 200. Below 5, the pet dies. Above 170, healthLevel declines by 2 more every second. Underweight below 50, overweight above 150
let debugActive = false;

let spritesheet;
let sprites = [];
let xSprite;
let ySprite;

function preload() {
  // spritesheet = loadImage('/../Assets/spritesheet.png');
}

function setup() {
  createCanvas(400, 400);
  if (getItem("hungerLevel")) {
    hungerLevel = getItem("hungerLevel");
    sleepLevel = getItem("sleepLevel");
    funLevel = getItem("funLevel");
    cleanLevel = getItem("cleanLevel");
    healthLevel = getItem("healthLevel");
    weightLevel = getItem("weightLevel");
  }
  saveStats();

  imageMode(CENTER);
  let w = 72; // width of sprite
  let h = 40; // height of sprite
  
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(180,210,190);

  fill(0,0);
  stroke(0,60);
  strokeWeight(3);
  circle(415,200,800);
  circle(-15,200,800);

  noStroke();
  fill(0);
  if (debugActive) {
    text("hunger: "+hungerLevel,10,10);
    text("sleep: "+sleepLevel,10,20);
    text("fun: "+funLevel,10,30);
    text("clean: "+cleanLevel,10,40);
    text("health: "+healthLevel,10,50);
    text("weight: "+weightLevel,10,60);
  }

  if (frameCount % 120 == 0) {
    hungerLevel = max(0, hungerLevel-1);
    sleepLevel = max(0, sleepLevel-1);
    funLevel = max(0, funLevel-1);
    cleanLevel = max(0, cleanLevel-1);
    saveStats();
  }
  if (frameCount % 180 == 0) {
    healthLevel--
  }
  if (frameCount % 60 == 0) {
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
  text("reset variables",10,390); // debug only
  text("mouseY: "+mouseY,10,380);
  text("mouseX: "+mouseX,10,370);
  noStroke();
  fill(255,120);
  circle(60,300,55); // shop
  circle(340,300,50); // clean
  circle(120,350,50); // food
  circle(280,350,50); // play
  circle(200,360,50); // medicine

  stroke(0); // shopping cart icon
  line(37,295,70,295);
  line(70,295,80,285);
  line(37,295,43,315);
  line(43,315,68,315);
  line(68,315,70,295);
  fill(0,0);
  circle(48,320,5);
  circle(64,320,5);

  

  /*
  ideas for buttons
  (each button for a function opens a different menu that is laid over the screen)
  - shop, to purchase food, medicine, toys, soap
  - food, to feed the pet
  - meds, to heal the pet
  - toys, to play with the pet
  - clean, to clean the pet

  
  add some kind of new variables (e.g. menuOpened boolean, currentMenu int) for the menus that allows only one to be open, which goes over the screen and disables the other buttons
  */
}

function saveStats() {
  storeItem("hungerLevel", hungerLevel);
  storeItem("sleepLevel", sleepLevel);
  storeItem("funLevel", funLevel);
  storeItem("cleanLevel", cleanLevel);
  storeItem("healthLevel", healthLevel);
  storeItem("weightLevel", weightLevel);
}

function mouseClicked() {
  if (mouseX >= 10 && mouseX <= 85 && mouseY >= 385 && mouseY <= 395) { // debug only
    hungerLevel = 100;
    sleepLevel = 100;
    funLevel = 100;
    cleanLevel = 100;
    healthLevel = 100;
    weightLevel = 100;
    saveStats();
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