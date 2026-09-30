let colours;
let mX;
let mY;
let shapes = [];

function setup() {
  createCanvas(800, 800);
  colours = [color(200,30,30), color(30,200,30), color(30,30,200), color(200), color(30), color(200,200,30), color(200,30,200)];
  background(round(random(100,255)));
}

function draw() {
  fill(0);
  mX = mouseX;
  mY = mouseY;
  text("HERE!",mX,mY);
}
