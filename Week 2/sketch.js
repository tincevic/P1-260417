let licht;
let time;
let tspeed;
let cspeed;
let car1Color;
let xcar;
let c2speed;
let car2Color;
let x2car;
let runlight;
let x3car;
let c3speed;
let carchange;
let inProc;
let horn;
let dixie;
let debugActive;
let rad = 350;
let dayCycle = 0;
let cycleSpeed = 0.005;
let leaf;
let dir;
let cloudx;
let cloud2x;
let cloudxr;
let cloud2xr;

function setup() {
  createCanvas(1000, 800);
  licht = 2;
  xcar = 0;
  x2car = 0;
  c2speed = 1.5;
  runlight = 0;
  c3speed = 0;
  x3car = -200;
  carchange = false;
  inProc = false;
  car1Color = color(random(255),random(255),random(255));
  car2Color = color(random(255),random(255),random(255));
  dixie = loadSound('/../Assets/dixie.mp3');
  horn = loadSound('/../Assets/horn.mp3');
  debugActive = false;
  dir = "r";
  leaf = 0;
  cloudx = 800;
  cloud2x = cloudx*random(0.5,1.6);
  cloudxr = random(1.8,2);
  cloud2xr = random(1.2,2.8);
}

function draw() {
  
  // zon en maan / dagcyclus

  dayCycle += cycleSpeed; // cyclus gaat met cycleSpeed verder
  if (dayCycle >= TWO_PI) { // resetten bij 360 graden
    dayCycle = 0;
  }
  time = (-sin(dayCycle-HALF_PI) + 1) / 2; // van -1 en 1 naar 0 en 1
  background(69*time,192*time,226*time); // achtergrond wordt donkerder afhankelijk van hoe laat het is
  let centX = width/2; // de straal is de helft van de diameter
  let centY = height/2;

  let sunCycle = dayCycle-HALF_PI; // zon met 90 graden verplaatsen anders was het niet in sync

  let xSun = centX+rad*cos(sunCycle); // om een cirkel heen gaan (rad = radius)
  let ySun = centY+rad*sin(sunCycle);

  fill(255,204,0);
  stroke(255,255,0);
  strokeWeight(abs(leaf)+5);
  circle(xSun,ySun,100);
  
  let nightCycle = sunCycle+PI; // altijd tegenover de zon

  let xMoon = centX+rad*cos(nightCycle);
  let yMoon = centY+rad*sin(nightCycle);

  fill(128);
  stroke(230);
  strokeWeight((abs(leaf)/3)+3);
  circle(xMoon,yMoon,30);

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

  // wolken
  noStroke();
  fill(255);
  cloudx -= cloudxr // verplaatsing naar links
  cloud2x -= cloud2xr // ||
  if (cloudx <= -100) { // zodra 'ie out of bounds is, zet ik 'm terug
    cloudx = 1100;
  }
  if (cloud2x <= -300) { // ||
    cloud2x = 1100;
  }

  ellipse(cloudx,205,40,40);
  ellipse(cloudx+40,190,50,50);
  ellipse(cloudx+80,200,40,40);
  ellipse(cloudx+40,200,80,50);

  ellipse(cloud2x+200,155,40,40);
  ellipse(cloud2x+240,130,50,50);
  ellipse(cloud2x+280,150,40,40);
  ellipse(cloud2x+240,150,80,50);

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

  // bomen
  noStroke();
  fill(71,50,22);
  rect(80,550,20,100);
  rect(140,560,20,100);
  rect(210,580,20,100);
  rect(320,550,20,100);
  rect(450,540,20,100);
  rect(840,580,20,100);
  rect(910,530,20,100);
  if (dir === "r" && leaf <= 10) { // leaf zorgt voor beweging van de lichtgroene bladeren. "r" is rechts en "l" is links. de bladeren gaat links en rechts
    leaf += 0.1;
    if (leaf >= 10) {
      dir = "l";
      leaf += 0.1;
    }
  } else if (dir === "l" && leaf >= -10) {
    leaf += -0.1;
    if (leaf <= -10) {
      dir = "r";
      leaf += 0.1;
    }
  }
  fill(40,170,0);
  quad(leaf+55,545,leaf+90,510,leaf+125,545,leaf+90,580);
  quad(leaf+115,555,leaf+150,520,leaf+185,555,leaf+150,590);
  quad(leaf+185,575,leaf+220,540,leaf+255,575,leaf+220,610);
  quad(leaf+295,545,leaf+330,510,leaf+365,545,leaf+330,580);
  quad(leaf+425,535,leaf+460,500,leaf+495,535,leaf+460,570);
  quad(leaf+815,575,leaf+850,540,leaf+885,575,leaf+850,610);
  quad(leaf+885,525,leaf+920,490,leaf+955,525,leaf+920,560);
  fill(20,130,0);
  quad(55,545,90,510,125,545,90,580);
  quad(115,555,150,520,185,555,150,590);
  quad(185,575,220,540,255,575,220,610);
  quad(295,545,330,510,365,545,330,580);
  quad(425,535,460,500,495,535,460,570);
  quad(815,575,850,540,885,575,850,610);
  quad(885,525,920,490,955,525,920,560);

  // weg + brug
  stroke(128);
  fill(56);
  strokeWeight(5);
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
  stroke(car1Color);
  strokeWeight(2);
  fill(car1Color);
  beginShape();
  vertex(xcar,635);
  vertex(xcar,675);
  vertex(xcar+100,675);
  vertex(xcar+95,655);
  vertex(xcar+70,655);
  vertex(xcar+50,635);
  vertex(xcar+20,635);
  vertex(xcar+0,655);
  endShape();
  if (time < 0.5) { // licht
    noStroke();
    fill(255,255,0,150);
    triangle(xcar+100,665,xcar+150,675,xcar+150,645);
  }
  fill(20);
  stroke(60);
  circle(xcar+20,675,30);
  circle(xcar+80,675,30);
  if (xcar >= 1000) { // zodra 'ie out of bounds is, zet ik 'm terug
    xcar = -200
    car1Color = color(random(255),random(255),random(255));
  }

  // auto 2
  if (licht === 0) { // rood
    if (runlight === 50 || runlight === 51) { // general lee RNG; wordt bij auto 3 uitgelegd
      if (carchange === true && x2car <= -100) {
        c2speed = 0;
      } else {
        c2speed = 4.5;
      }
    } else {
    c2speed = 0;
    }
  } else if (licht === 1 && carchange === false) { // oranje
    c2speed = random(0.75,1.25);
  } else if (licht === 2 && carchange === false) { // groen
    c2speed = random(1.25,1.75);
  }
  x2car += c2speed
  stroke(car2Color);
  strokeWeight(2);
  fill(car2Color);
  beginShape();
  vertex(x2car,685);
  vertex(x2car,725);
  vertex(x2car+100,725);
  vertex(x2car+100,705);
  vertex(x2car+70,705);
  vertex(x2car+70,685);
  vertex(x2car+0,685);
  endShape();
  if (time < 0.5) { // licht
    noStroke();
    fill(255,255,0,150);
    triangle(x2car+100,715,x2car+150,725,x2car+150,695);
  }
  fill(20);
  stroke(60);
  circle(x2car+20,725,30);
  circle(x2car+80,725,30);
  if (x2car >= 1000) { // zodra 'ie out of bounds is, zet ik 'm terug
    x2car = -200;
    car2Color = color(random(255),random(255),random(255));
    if (inProc === true) {
      carchange = true;
    }
  }

  // auto 3
  if ((runlight === 50 || runlight === 51) && carchange === true) { // RNG. als auto 2 door rood gaat, neemt de general Lee zijn plaatst tot het weer groen wordt
    c3speed = 4.5;
  } else {
    c3speed = 0;
  }
  x3car += c3speed;
  stroke(70);
  strokeWeight(2);
  fill(20);
  circle(x3car+28.5,720,20);
  circle(x3car+101,720,20);
  stroke(128,70,0);
  fill(196,107,0);
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
  if (time < 0.5) { // licht
    noStroke();
    fill(255,255,0,200);
    triangle(x3car+123,710,x3car+200,725,x3car+200,695);
  }
  fill(0);
  textSize(20);
  textStyle(BOLD);
  stroke(255);
  strokeWeight(1.5);
  text("01",x3car+50,715); // general Lee!
  if (x3car >= 1000) { // zodra 'ie out of bounds is, zet ik 'm terug
    x3car = -200
    if (inProc === false) {
      c3speed = 0;
      runlight = 1;
      inProc === false;
      carchange = false;
    }
  }
  
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
  if (licht === 0) { // als het rood is
    fill(220,0,0);
    stroke(255,0,0);
  } else {
    noStroke();
    fill(160,0,0);
  }
  circle(535,607.5,30);
  if (licht === 1) { // als het geel is
    fill(220,110,0);
    stroke(255,127,0);
  } else {
    noStroke();
    fill(160,80,0);
  }
  circle(535,647.5,30);
  if (licht === 2) { // als het groen is
    fill(0,220,0);
    stroke(0,255,0);
  } else {
    noStroke();
    fill(0,160,0);
  }
  circle(535,687.5,30);

  // boom
  noStroke()
  fill(71,50,22);
  rect(460,680,20,100);
  rect(950,690,20,80);
  fill(40,170,0);
  quad(leaf+425,675,leaf+472,630,leaf+520,675,leaf+472,720);
  quad(leaf+912,685,leaf+962,640,leaf+1012,685,leaf+962,730);
  fill(20,130,0);
  quad(425,675,472,630,520,675,472,720);
  quad(912,685,962,640,1012,685,962,730);

  if (debugActive === true) { // debug-menu. op d drukken op het keyboard activeert 'm. 
    fill(255);
    noStroke();
    text("welcome 2 the dawn debug menu",10,20)
    rect(150,12.5,55,2.5);
    text("licht: "+licht,10,35); // debug
    text("3rd car on road: "+str(carchange),10,50);
    text("3rd car staying: "+str(inProc),10,65);
    text("time: "+str(time),10,80);
    text("leaf x: "+leaf,10,95);
    text("leaf dir: "+dir,10,110);
  }
}

function keyPressed() {
  if (key === 'Enter') {
    if (licht === 0) {
      licht = 2
      inProc = false;
    } else if (licht === 1) {
      licht--
      runlight = round(random(72));
      if (runlight === 50 || runlight === 51) {
        inProc = true;
        carchange = true;
      }
    } else if (licht === 2) {
      licht--
    }
  } else if (key === 'd') {
    if (debugActive === false) {
      debugActive = true;
    } else {
      debugActive = false;
    }
    
  }
}   

function mouseClicked() {
  if ((mouseX >= xcar && mouseY >= 635) && (mouseX <= xcar+100 && mouseY <= 675) || ((mouseX >= x2car && mouseY >= 685) && (mouseX <= x2car+100 && mouseY <= 725))) {
    horn.play();
  } else if ((mouseX >= x3car && mouseY >= 687) && (mouseX <= x3car+100 && mouseY <= 723)) {
    dixie.play();
  }
}