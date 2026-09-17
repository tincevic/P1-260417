let licht;
let time;
let tspeed;
let cspeed;
let xcar;
let c2speed;
let x2car;
let runlight;
let x3car;
let c3speed;

function setup() {
  createCanvas(1000, 800);
  licht = 2;
  time = 1;
  tspeed = 0.0026;
  xcar = 0;
  x2car = 0;
  c2speed = 1.5;
  runlight = 0;
}

function draw() {
  background(69*time,192*time,226*time);
  time += tspeed
  if (time >= 1 || time <= 0) { // dag-nacht cyclus
    tspeed *= -1;
  }
  fill(20,100,20);
  stroke(25,110,25);
  strokeWeight(10);
  rect(-10,600,1100,300);
  noStroke();

  // bergen
  fill(100);
  triangle(300,600,500,340,700,600);
  fill(80);
  triangle(300,600,500,340,420,600);

  // rivier
  fill(26,120,167);
  beginShape();
  vertex(350,400);
  vertex(500,500);
  vertex(600,550);
  vertex(700,600);
  vertex(750,700);
  vertex(800,900);
  vertex(650,900);
  vertex(600,700);
  vertex(500,600);
  vertex(400,500);
  endShape();

  // weer bergen
  fill(64);
  triangle(30,600,280,250,500,600);
  fill(40);
  triangle(280,250,30,600,140,600);
  fill(200);
  triangle(280,250,208,350,300,350);
  triangle(491,370,500,340,476,370);
  fill(220);
  triangle(280,250,240,350,343,350);
  triangle(500,340,490,370,531,380);

  // weg + brug
  stroke(128);
  fill(56);
  rect(-10,625,1100,125);
  fill(45);
  quad(500,625,550,750,825,750,775,625);
  noStroke();
  fill(220,220,220,200);
  for (let i = 0; i < 20; i++) { // lijntjes
    let xx = 10+i*58.4
    rect(xx,687.5,25,5);
  }
  rect(300,677.5,625,3);
  text(licht,10,15); // debug

  // auto 1
  if (licht === 0) {
    if (runlight >= 70) {
      cspeed = 3;
    } else {
    cspeed = 0;
    }
  } else if (licht === 1) {
    cspeed = random(1.25,1.75);
  } else if (licht === 2) {
    cspeed = random(1.75,2.25);
  }
  xcar += cspeed
  stroke(100);
  strokeWeight(2);
  fill(40);
  beginShape();
  vertex(xcar,635);
  vertex(xcar,675);
  vertex(xcar+100,675);
  vertex(xcar+100,655);
  vertex(xcar+70,655);
  vertex(xcar+70,635);
  vertex(xcar+0,635);
  endShape();
  fill(20);
  stroke(60);
  circle(xcar+20,675,30);
  circle(xcar+80,675,30);
  if (xcar >= 1000) {
    xcar = -150
  }

  // auto 2
  if (licht === 0) {
    if (runlight >= 70) {
      c2speed = 5;
    } else {
    c2speed = 0;
    }
  } else if (licht === 1) {
    c2speed = random(0.75,1.25);
  } else if (licht === 2) {
    c2speed = random(1.25,1.75);
  }
  x2car += c2speed
  stroke(100);
  strokeWeight(2);
  fill(40);
  beginShape();
  vertex(x2car,685);
  vertex(x2car,725);
  vertex(x2car+100,725);
  vertex(x2car+100,705);
  vertex(x2car+70,705);
  vertex(x2car+70,685);
  vertex(x2car+0,685);
  endShape();
  fill(20);
  stroke(60);
  circle(x2car+20,725,30);
  circle(x2car+80,725,30);
  if (x2car >= 1000) {
    x2car = -150
  }

  // auto 3
  if (runlight >= 70) {
    c3speed = 3.5;
  } else {
    c3speed = 0;
    x3car = 200
  } 
  noStroke();
  fill(255,144,3);
  beginShape();
  vertex(x3car+0,702);
  vertex(x3car+12,702);
  vertex(x3car+43,688);
  vertex(x3car+72,687);
  vertex(x3car+84,698);
  vertex(x3car+103,699);
  vertex(x3car+123,704);
  vertex(x3car+123,716);
  vertex(x3car+110,721);
  vertex(x3car+110,710);
  vertex(x3car+95,710);
  vertex(x3car+89,723);
  vertex(x3car+39,723);
  vertex(x3car+35,711);
  vertex(x3car+23,711);
  vertex(x3car+19,720);
  vertex(x3car+4,718);
  vertex(x3car+0,713);
  endShape();

  // stoplicht
  noStroke();
  fill(100);
  rect(530,700,25,50);
  rect(520,580,50,135);
  strokeWeight(3);
  fill(115);
  stroke(150);
  rect(522.5,700,25,50);
  fill(128);
  stroke(180);
  rect(510,580,50,135);
  if (licht === 0) {
    fill(220,0,0);
    stroke(255,0,0);
  } else {
    noStroke();
    fill(160,0,0);
  }
  circle(535,607.5,30);
  if (licht === 1) {
    fill(220,110,0);
    stroke(255,127,0);
  } else {
    noStroke();
    fill(160,80,0);
  }
  circle(535,647.5,30);
  if (licht === 2) {
    fill(0,220,0);
    stroke(0,255,0);
  } else {
    noStroke();
    fill(0,160,0);
  }
  circle(535,687.5,30);
}

function keyPressed() {
  if (key === 'Enter') {
    if (licht === 0) {
      licht = 2
    } else if (licht === 1) {
      licht--
      runlight = floor(random(72));
    } else {
      licht--
    }
  }
}