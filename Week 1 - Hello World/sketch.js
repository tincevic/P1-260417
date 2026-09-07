function setup() {
  createCanvas(1500,1500);
  background(255);
}

function draw() {
  // tekening 1: naam
  noStroke();
  fill(0);
  text("1. Tin Martincevic",20,10);

  // tekening 2: vlag (Joegoslavië)
  noStroke();
  fill(0);
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

  // tekening 3: schaakbord.
  noStroke();
  fill(0);
  text("3.",20,415);
  stroke(0);
  strokeWeight(3);
  fill(255);
  rect(25,425,300,300);
  fill(0);
  noStroke();
  // dit kan misschién wat efficiënter
  rect(25,425,50,50);
  rect(125,425,50,50);
  rect(225,425,50,50);
  rect(75,475,50,50);
  rect(175,475,50,50);
  rect(275,475,50,50);
  rect(25,525,50,50);
  rect(125,525,50,50);
  rect(225,525,50,50);
  rect(75,575,50,50);
  rect(175,575,50,50);
  rect(275,575,50,50);
  rect(25,625,50,50);
  rect(125,625,50,50);
  rect(225,625,50,50);
  rect(75,675,50,50);
  rect(175,675,50,50);
  rect(275,675,50,50);

  // tekening 4: huis
  noStroke();
  fill(0);
  text("4.",340,10);
  strokeWeight(2);
  stroke(0);
  line(340,125,340,325);
  line(340,325,540,325);
  line(540,325,540,125);
  line(540,125,340,125);
  line(340,125,440,25);
  line(440,25,540,125);

  // tekening 5: stoplicht
  noStroke();
  fill(0);
  text("5.",340,415);
  strokeWeight(3);
  stroke(180);
  fill(128);
  rect(340,425,100,250);
  noStroke();
  fill(128,0,0);
  circle(390,470,65);
  fill(128,128,0);
  circle(390,550,65);
  fill(40,200,30);
  circle(390,630,65);
  fill(115);
  stroke(150);
  rect(365,675,50,50);

  // tekening 6: mario pixel art
  noStroke();
  fill(0);
  text("6.",600,10);
  fill(200); // TIJDELIJK HAAL WEG
  rect(600,25,200,300); // TIJDELIJK HAAL WEG
  fill(255,0,0); // rood
  rect(630,25,60,10);
  rect(620,35,100,10);
  fill(151,64,57); // bruin
  rect(620,45,30,10);
  fill(255,200,159); // huid
  rect(650,45,30,10);
  fill(0); // zwart
  rect(680,45,10,20);
  fill(151,64,57); // bruin
  rect(610,55,10,30);
  fill(255,200,159); // huid
  rect(620,55,10,20);
  fill(151,64,57); // bruin
  rect(630,55,10,20);
  fill(255,200,159); // huid
  rect(640,55,40,10);
  rect(690,55,30,10)
  fill(151,64,57); // bruin
  rect(640,65,10,10);
  fill(255,200,159); // huid
  rect(650,65,40,10);
  fill(0); // zwart
  rect(690,65,10,10);
  fill(255,200,159); // huid
  rect(700,65,30,10);
  fill(151,64,57); // bruin
  rect(620,75,10,10);
  fill(255,200,159); // huid
  rect(630,75,50,10);
  fill(0); // zwart
  rect(680,75,40,10);
  fill(255,200,159); // huid
  rect(630,85,80,10);
  fill(255,0,0); // rood
  rect(620,95,20,10);
  fill(0,0,255); // blauw
  rect(640,95,10,10);
  fill(255,0,0); // rood
  rect(650,95,40,10);
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