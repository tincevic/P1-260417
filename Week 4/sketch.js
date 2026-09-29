let colours;

function setup() {
  createCanvas(400, 400);
  colours = [color(200,30,30), color(30,200,30), color(30,30,200), color(200), color(30), color(200,200,30), color(200,30,200)];
  background(colours[round(random(6))]);
}

function draw() {
  
}
