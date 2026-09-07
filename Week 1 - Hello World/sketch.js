function setup() {
  createCanvas(900,900);
}

function draw() {
  background(255,255,255);
  noStroke();
  text("1. Tin Martincevic",20,10);
  noStroke();
  text("2.",20,20);
  noStroke();
  fill(0,56,147);
  rect(25,25,300,100);
  noStroke();
  fill(221,0,0);
  rect(25,225,300,100);
  fill(221,0,0);
  stroke(245,191,34);
  strokeWeight(6);
  star(175,180,30,80,5);
}

function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -HALF_PI; a < TWO_PI - HALF_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}