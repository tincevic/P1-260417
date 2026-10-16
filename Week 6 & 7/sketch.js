let hungerLevel = 100; // 0 - 100. At 0, healthLevel declines by 1 more every second.
let sleepLevel = 100; // 0 - 100. At 0, healthLevel declines by 1 more every second.
let funLevel = 100; // 0 - 100. At 0, healthlevel declines by 0.5 more every second.
let cleanLevel = 100; // 0 - 100. At 0, healthLevel declines by 1 more every second.
let healthLevel = 100; // 0 - 100. Default is 100 and declines by 1 every 5 seconds. Has a 1/10 chance of dropping to 40 every minute. If the level is 40 or lower, the pet is sick. If the level is 0, the pet dies.
let weightLevel = 100; // 0 - 200. Below 5, the pet dies. Above 170, healthLevel declines by 2 more every second.
let debugActive = false;

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
}

function draw() {
  background(220);
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
}

function saveStats() {
  storeItem("hungerLevel", hungerLevel);
  storeItem("sleepLevel", sleepLevel);
  storeItem("funLevel", funLevel);
  storeItem("cleanLevel", cleanLevel);
  storeItem("healthLevel", healthLevel);
  storeItem("weightLevel", weightLevel);
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