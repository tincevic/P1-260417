let ffont; // tekening 1
let act; // tekening 5
let start; // tekening 5
let licht; // tekening 5
let sfont; // tekening 9
let cfont; // tekening 9
let tfont; // tekening 9
let xS = 975; // sierpinski. willekeurig punt; startpunt
let yS = 510;
let ax = 975; // hoek 0
let ay = 510;
let bx = 850; // hoek 1
let by = 710;
let cx = 1100; // hoek 2
let cy = 710;


function setup() {
  createCanvas(1500,1500);
  background(225);
  ffont = loadFont("/../Assets/Bulga.otf"); 
  sfont = loadFont("/../Assets/Prince.otf");
  cfont = loadFont("/../Assets/Compacta Bold.otf");
  tfont = loadFont("/../Assets/TGB.ttf");
  // kleur om doorzichtigheid van huis te laten zien
  noStroke();
  fill(151,64,57,random(200));
  rect(350,85,220,200);
  let act = floor((random(2)));
  if (act == 0) {
    licht = "rood";
  } else {
    licht = "groen";
  }
  start = millis();
  for (let i = 0; i<10000; i = i+1) {
    let hoek = floor(random(3)); // chaos game: willekeurig hoek kiezen
    if (hoek == 0) { // ax/ay zijn hoek 0
      xS = (xS+ax)/2; // halverwege naar bovenste hoek
      yS = (yS+ay)/2;
    }
    if (hoek == 1) { // bx/by zijn hoek 1
      xS = (xS+bx)/2; // halverwege naar hoek links-onder
      yS = (yS+by)/2;
    }
    if (hoek == 2) { // cx/cy zijn hoek 2
      xS = (xS+cx)/2; // halverwege naar hoek rechts-onder
      yS = (yS+cy)/2;
    }
    stroke(random(255),random(255),random(255));
    triangle(xS,yS-2,xS-2,yS+2,xS+2,yS+2); // driehoek tekenen
  }
}

function draw() {
  // tekening 1: naam
  noStroke();
  fill(0);
  textFont(ffont);
  textSize(15);
  text("Tin Martincevic",20,10); // hoi!
  textFont("Bahnschrift");
  textSize(12);

  // tekening 2: vlag (Joegoslavië)
  noStroke();
  fill(0);
  text("2.",20,20);
  fill(0,56,147);
  rect(25,25,300,100);
  fill(255);
  rect(25,125,300,100);
  fill(221,0,0);
  rect(25,225,300,100);
  fill(221,0,0);
  stroke(245,191,34);
  strokeWeight(6);
  star(175,180,30.3,80,5); // wordt later gedefiniëerd. ik gebruik een custom functie

  // tekening 3: schaakbord.
  noStroke();
  fill(0);
  text("3.",20,415);
  stroke(0);
  strokeWeight(3);
  fill(255);
  rect(25,425,300,300); // ik maak hier een wit vlak met stroke zodat ik niet individueel elk vierkant hoef te tekenen
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
  // huis
  fill(0,0,0,0);
  square(340,125,200);
  // deur
  rect(390,225,50,100);
  // raam
  square(470,225,50);
  line(495,225,495,275);
  line(470,250,520,250);
  // dak
  triangle(340,125,440,25,540,125);

  // tekening 5: stoplicht (WERKEND!)
  noStroke();
  fill(0);
  text("5.",340,415);
  let el = millis() - start; // elapsed
  if (licht == "groen" && el >= 5000) {
    licht = "oranje";
    start = millis(); // reset
  }
  else if (licht == "oranje" && el >= 3000) {
    licht = "rood";
    start = millis(); // reset
  }
  else if (licht == "rood" && el >= 5000) {
    licht = "groen";
    start = millis(); // reset
  }
  fill(100);
  rect(375,675,50,50);
  rect(350,425,100,250);
  fill(115);
  stroke(150);
  rect(365,675,50,50);
  strokeWeight(3);
  stroke(180);
  fill(128);
  rect(340,425,100,250);
  if (licht == "rood") {
    stroke(255,0,0);
    strokeWeight(3);
    fill(220,30,30);
  } else {
    noStroke();
    fill(128,0,0);
  }
  circle(390,470,65);
  if (licht == "oranje") {
    stroke(255,200,0);
    strokeWeight(3);
    fill(255,170,30);
  } else {
    noStroke();
    fill(128,128,0);
  }
  circle(390,550,65);
  if (licht == "groen") {
    stroke(0,255,0);
    strokeWeight(3);
    fill(40,220,30);
  } else {
    noStroke();
    fill(0,100,0);
  }
  circle(390,630,65);

  // tekening 6: dobbelsteen
  noStroke();
  fill(0);
  text("6.",600,10);
  fill(127);
  square(610,20,100,20);
  strokeWeight(3);
  stroke(0);
  fill(255);
  square(600,25,100,20);
  noStroke();
  fill(0);
  circle(625,50,20);
  circle(650,75,20);
  circle(675,100,20);

  // tekening 7: Mario
  noStroke();
  fill(0);
  text("7.",600,210);

  mario(); // in andere functie geplaatst want anders wordt dit bijna onleesbaar

  // tekening 8: gamefiguur
  noStroke();
  fill(0);
  text("8. Sonic",600,420);

  sonic(); // in andere functie geplaatst want anders wordt dit bijna onleesbaar

  // tekening 9: album

  album(); // in andere functie geplaatst want anders wordt dit bijna onleesbaar

  noStroke();
  fill(0);
  text("9. TAFKAP (Prince) - Gold",800,8);
  noStroke();
  fill(50,20,20,200);
  textFont(sfont);
  textSize(150);
  text("j",900,190); // hoi!
  fill(153,115,48);
  text("j",897,187);
  textFont(cfont);
  textSize(55);
  fill(50,20,20,200);
  text("gold",820,70);
  fill(153,115,48);
  text("gold",817,67);
  fill(116,47,42);
  textSize(10);
  text("b/w",940,210);
  textFont(tfont);
  textSize(13);
  fill(50,20,20,200);
  text("rock'n'roll is alive",940,220);
  text("(and it lives in minneapolis)",910,234);
  fill(242);
  text("rock'n'roll is alive",938,218);
  text("(and it lives in minneapolis)",908,232);
  noStroke();
  fill(0);
  textSize(12);
  textFont("Bahnschrift");

  // tekening 10: logo

  text("10. Logo",850,300);
  fill(0);
  rect(850,340,20,120);
  rect(870,370,25,20);
  rect(900,370,60,20);
  rect(870,440,20,20);
  rect(900,390,20,70);
  rect(930,390,20,70);
  rect(960,390,20,70);
  triangle(960,370,980,390,960,390);
  triangle(980,370,980,380,970,370);
  star(885,415,5.5,10,5); // wordt later gedefiniëerd. ik gebruik een custom functie

  // tekening ??: driehoek van Sierpinski

  noStroke();
  fill(0);
  textSize(12);
  textFont("Bahnschrift");
  text("??. Driehoek van Sierpinski",850,500);
  // boven getekend in setup functie, anders zou het elke frame een nieuwe tekenen

    // heb het zo efficiënt mogelijk proberen te maken door kleuren te sorteren
}

function star(x,y,radius1,radius2,npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = -HALF_PI; a < TWO_PI - HALF_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx,sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx,sy);
  }
  endShape(CLOSE);
} // mocht van docent


// really messy stuff below

function mario() {

  fill(255,0,0); // rood
  rect(630,225,60,10);
  rect(620,235,100,10);
  rect(620,295,20,10);
  rect(650,295,40,10);
  rect(610,305,30,10);
  rect(650,305,20,10);
  rect(600,315,40,10);
  rect(680,305,30,10);
  rect(680,315,40,10);
  rect(620,325,10,10);
  rect(690,325,10,10);

  fill(151,64,57); // bruin
  rect(620,245,30,10);
  rect(610,255,10,30);
  rect(630,255,10,20);
  rect(640,265,10,10);
  rect(620,275,10,10);
  rect(610,365,30,10);
  rect(680,365,30,10);
  rect(600,375,40,10);
  rect(680,375,40,10);

  fill(255,200,159); // huid
  rect(650,245,30,10);
  rect(620,255,10,20);
  rect(640,255,40,10);
  rect(690,255,30,10);
  rect(650,265,40,10);
  rect(700,265,30,10);
  rect(630,275,50,10);
  rect(630,285,80,10);
  rect(600,325,20,10);
  rect(700,325,20,10);
  rect(600,335,30,10);
  rect(690,335,30,10);
  rect(600,345,20,10);
  rect(700,345,20,10);

  fill(0); // zwart
  rect(680,245,10,20);
  rect(690,265,10,10);
  rect(680,275,40,10);

  fill(0,0,255); // blauw
  rect(640,295,10,10);
  rect(640,305,10,10);
  rect(670,305,10,10);
  rect(640,315,40,10);
  rect(630,325,10,10);
  rect(650,325,20,10);
  rect(680,325,10,10);
  rect(630,335,60,10);
  rect(620,345,80,10);
  rect(620,355,30,10);
  rect(670,355,30,10);

  fill(255,255,0); // geel
  rect(640,325,10,10);
  rect(670,325,10,10);

}

function sonic() {

  push();
  translate(600,430);
  scale(0.75);
  translate(-600,-430);
  // ZWART

  fill(0); // zwart
  rect(710,530,20,40);
  rect(780,540,10,10);
  rect(770,550,20,20);
  rect(780,570,10,10);
  rect(770,580,30,10);
  rect(670,600,10,10);
  rect(680,610,20,10);
  rect(640,650,10,10);
  rect(670,660,10,10);
  rect(680,670,10,10);
  rect(660,690,10,10);
  rect(710,690,10,10);
  rect(650,700,10,10);
  rect(720,700,10,10);
  rect(730,710,10,20);
  rect(740,730,10,10);
  rect(740,740,20,10);
  rect(740,750,10,10);
  rect(670,760,10,10);
  rect(750,760,10,10);
  rect(870,760,20,10);
  rect(660,770,10,30);
  rect(760,770,10,10);
  rect(840,770,30,10);
  rect(770,780,10,20);
  rect(810,780,30,10);
  rect(790,790,20,10);
  rect(660,800,130,10);

  // BLAUW

  fill(36,36,144); // blauw 1
  rect(640,450,30,10);
  rect(790,450,20,10);
  rect(620,460,50,10);
  rect(780,460,30,10);
  rect(650,470,20,10);
  rect(800,470,10,20);
  rect(660,480,10,10);
  rect(640,510,20,10);
  rect(620,520,40,10);
  rect(600,530,70,20);
  rect(810,540,10,30);
  rect(640,550,40,10);
  rect(650,560,40,10);
  rect(640,570,60,10);
  rect(630,580,60,20);
  rect(620,600,50,10);
  rect(680,600,20,10);
  rect(620,610,60,10);
  rect(700,610,20,10);
  rect(620,620,10,10);
  rect(690,620,10,10);
  rect(660,640,20,10);
  rect(670,650,10,10);
  rect(670,670,10,20);
  rect(730,670,10,10);
  rect(710,680,30,10);
  rect(680,690,10,30);
  rect(720,690,20,10);
  rect(640,700,10,10);
  rect(730,700,20,10);
  rect(740,710,10,10);
  rect(690,720,10,20);
  rect(740,720,20,10);
  rect(750,730,20,10);

  fill(72,72,180); // blauw 2
  rect(660,430,60,10);
  rect(640,440,20,10);
  rect(720,440,30,10);
  rect(630,450,10,10);
  rect(750,450,20,10);
  rect(790,470,10,10);
  rect(660,490,10,10);
  rect(800,490,10,20);
  rect(640,500,50,10);
  rect(700,500,30,10);
  rect(620,510,20,10);
  rect(660,510,40,10);
  rect(730,510,10,10);
  rect(810,510,10,30);
  rect(610,520,10,10);
  rect(660,520,30,10);
  rect(740,520,10,10);
  rect(780,520,10,20);
  rect(670,530,20,20);
  rect(750,530,10,10);
  rect(760,540,20,10);
  rect(680,550,10,10);
  rect(690,560,10,10);
  rect(680,680,30,10);
  rect(700,730,10,10);

  fill(108,108,216); // blauw 3
  rect(660,440,60,10);
  rect(690,450,60,10);
  rect(700,460,20,10);
  rect(730,460,50,10);
  rect(710,470,20,10);
  rect(740,470,50,10);
  rect(710,480,10,10);
  rect(750,480,50,30);
  rect(690,490,40,10);
  rect(690,500,10,10);
  rect(730,500,10,10);
  rect(740,510,10,10);
  rect(760,510,30,10);
  rect(800,510,10,10);
  rect(750,520,30,10);
  rect(760,530,20,10);
  rect(690,690,10,30);
  rect(700,720,10,10);

  fill(144,144,252); // blauw 4
  rect(720,460,10,10);
  rect(730,470,10,10);
  rect(720,480,30,10);
  rect(730,490,20,10);
  rect(740,500,10,10);
  rect(700,510,10,10);
  rect(720,510,10,10);
  rect(750,510,10,10);
  rect(790,510,10,10);
  rect(690,520,10,40);
  rect(730,520,10,10);
  rect(800,520,10,10);
  rect(740,530,10,10);
  rect(750,540,10,10);
  rect(760,550,10,10);
  rect(800,560,10,10);
  rect(700,570,10,10);

  // ROOD

  fill(72,0,0); // rood 1
  rect(750,600,20,10);
  rect(750,770,10,10);
  rect(770,770,10,10);
  rect(780,780,10,20);

  fill(144,0,0); // rood 2
  rect(790,600,10,10);
  rect(770,610,20,10);
  rect(720,620,50,10);
  rect(690,630,10,10);
  rect(750,630,20,10);
  rect(680,640,10,10);
  rect(770,640,10,10);
  rect(610,650,10,10);
  rect(760,650,20,10);
  rect(620,660,20,10);
  rect(650,660,10,10);
  rect(680,660,10,10);
  rect(760,660,10,10);
  rect(640,670,20,10);
  rect(780,750,30,10);
  rect(830,750,60,10);
  rect(680,760,10,10);
  rect(770,760,40,10);
  rect(830,760,40,10);
  rect(670,770,10,10);
  rect(740,770,10,10);
  rect(780,770,30,10);
  rect(830,770,10,10);
  rect(760,780,10,10);
  rect(790,780,20,10);

  fill(252,0,0); // rood 3
  rect(700,770,40,10);
  rect(690,780,70,10);
  rect(680,790,90,10);

  // GRIJS EN WIT

  fill(72); // grijs 1
  rect(650,650,20,10);
  rect(750,660,10,10);
  rect(630,670,10,10);
  rect(740,670,20,20);
  rect(610,680,30,10);
  rect(770,680,10,10);
  rect(640,690,20,10);
  rect(750,690,20,10);
  rect(770,740,10,10);
  rect(750,750,20,10);
  rect(760,760,10,10);
  rect(820,770,10,10);

  fill(144); // grijs 2
  rect(770,570,10,10);
  rect(790,570,10,10);
  rect(610,670,20,10);
  rect(760,670,10,20);
  rect(660,680,10,10);
  rect(780,680,10,10);
  rect(630,690,10,10);
  rect(770,690,10,10);
  rect(770,730,20,10);
  rect(760,740,10,10);
  rect(780,740,20,10);
  rect(770,750,10,10);
  rect(810,750,20,20);
  rect(810,770,10,10);
  rect(670,780,10,20);

  fill(180); // grijs 3
  rect(600,680,10,10);
  rect(610,690,20,10);
  rect(680,740,10,10);
  rect(680,750,40,10);
  rect(690,760,10,20);
  rect(680,780,10,10);

  fill(252); // wit
  rect(710,510,10,10);
  rect(700,520,30,10);
  rect(790,520,10,10);
  rect(700,530,10,40);
  rect(730,530,10,10);
  rect(790,530,20,30);
  rect(730,540,20,10);
  rect(730,550,30,10);
  rect(730,560,40,10);
  rect(790,560,10,10);
  rect(710,570,50,10);
  rect(710,580,40,10);
  rect(660,660,10,20);
  rect(640,680,20,10);
  rect(690,740,30,10);
  rect(700,760,30,10);
  rect(680,770,10,10);

  // HUID

  fill(180,108,72); // huid 1
  rect(670,450,20,10);
  rect(690,460,10,10);
  rect(700,470,10,10);
  rect(670,490,20,10);
  rect(760,570,10,10);
  rect(800,570,10,20);
  rect(690,580,10,20);
  rect(790,590,10,10);
  rect(700,600,20,10);
  rect(780,600,10,10);
  rect(720,610,50,10);
  rect(700,620,20,10);
  rect(660,630,30,10);
  rect(700,630,10,10);
  rect(730,630,20,10);
  rect(770,630,10,10);
  rect(630,640,30,10);
  rect(740,640,10,20);
  rect(780,640,10,10);
  rect(620,650,20,10);
  rect(680,650,10,10);
  rect(640,660,10,10);
  rect(690,660,10,10);
  rect(730,660,10,10);
  rect(690,670,40,10);

  fill(252,180,144); // huid 2
  rect(670,460,20,10);
  rect(670,470,30,10);
  rect(670,480,40,10);
  rect(700,580,10,10);
  rect(750,580,20,10);
  rect(700,590,90,10);
  rect(720,600,30,10);
  rect(770,600,10,10);
  rect(660,620,30,10);
  rect(630,630,30,10);
  rect(710,630,20,10);
  rect(610,640,20,10);
  rect(690,640,50,20);
  rect(700,660,30,10);

  pop();
}

function album() {

  push();
  translate(800,10);
  scale(2.5);
  translate(-800,-10);

  fill(213,161,39); // geel 1
  rect(835,10,5,5);
  rect(850,10,5,5);
  rect(865,10,5,5);
  rect(900,10,5,5);
  rect(860,15,10,5);
  rect(825,20,5,5);
  rect(845,20,5,5);
  rect(860,20,10,5);
  rect(900,20,5,5);
  rect(895,25,5,5);
  rect(820,30,5,5);
  rect(895,30,5,5);
  rect(820,35,5,5);
  rect(860,35,5,5);
  rect(880,35,5,5);
  rect(895,35,5,5);
  rect(870,40,5,5);
  rect(800,45,5,5);
  rect(845,45,5,5);
  rect(825,50,5,5);
  rect(840,50,5,5);
  rect(850,50,5,5);
  rect(870,50,5,5);
  rect(885,50,5,5);
  rect(900,50,5,5);
  rect(825,55,5,5);
  rect(840,55,5,5);
  rect(865,55,10,5);
  rect(840,60,5,5);
  rect(880,60,5,5);
  rect(890,65,5,5);
  rect(895,70,10,5);
  rect(865,75,5,5);
  rect(810,80,5,5);
  rect(870,80,5,5);
  rect(855,85,5,5);
  rect(870,90,10,5);
  rect(840,95,5,5);
  rect(860,95,5,5);
  rect(870,95,5,5);
  rect(880,95,5,5);
  rect(840,105,5,5);
  rect(885,105,5,5);
  rect(835,110,5,5);
  rect(885,110,5,5);
  rect(895,110,5,5);


  fill(211,142,30); // geel 2
  rect(860,10,5,5);
  rect(895,10,5,5);
  rect(880,15,10,5);
  rect(900,15,5,5);
  rect(850,20,5,5);
  rect(835,25,5,5);
  rect(860,25,10,5);
  rect(890,25,5,5);
  rect(860,30,5,5);
  rect(885,30,10,5);
  rect(900,30,5,5);
  rect(800,35,5,5);
  rect(815,35,5,5);
  rect(830,35,5,5);
  rect(850,35,5,5);
  rect(885,35,5,5);
  rect(800,40,10,5);
  rect(825,40,10,5);
  rect(845,40,5,5);
  rect(850,45,5,5);
  rect(885,45,5,5);
  rect(805,50,5,5);
  rect(800,55,5,5);
  rect(850,55,5,5);
  rect(880,55,5,5);
  rect(900,55,5,5);
  rect(845,60,5,5);
  rect(875,60,5,5);
  rect(885,60,5,5);
  rect(895,60,10,5);
  rect(870,65,5,5);
  rect(835,70,5,5);
  rect(850,70,5,5);
  rect(865,70,15,5);
  rect(800,75,5,5);
  rect(840,75,5,5);
  rect(870,75,10,5);
  rect(830,80,5,5);
  rect(840,80,5,5);
  rect(865,80,5,5);
  rect(875,80,5,5);
  rect(885,80,5,5);
  rect(800,85,10,5);
  rect(825,85,5,5);
  rect(800,90,10,5);
  rect(815,95,5,5);
  rect(875,95,5,5);
  rect(885,95,5,5);
  rect(800,100,5,5);
  rect(815,100,5,5);
  rect(855,100,5,5);
  rect(865,100,5,5);
  rect(885,100,10,5);
  rect(805,105,5,5);
  rect(855,105,5,5);
  rect(865,105,5,5);
  rect(895,105,5,5);
  rect(805,110,10,5);
  rect(820,110,5,5);


  fill(196,116,20); // geel 3
  rect(855,10,5,5);
  rect(870,10,5,5);
  rect(880,10,15,5);
  rect(800,15,5,5);
  rect(850,15,5,5);
  rect(890,15,10,5);
  rect(810,20,5,5);
  rect(835,20,5,5);
  rect(855,20,5,5);
  rect(880,20,5,5);
  rect(810,25,5,5);
  rect(820,25,5,5);
  rect(840,25,5,5);
  rect(850,25,5,5);
  rect(880,25,10,5);
  rect(900,25,5,5);
  rect(810,30,10,5);
  rect(825,30,5,5);
  rect(835,30,5,5);
  rect(850,30,10,5);
  rect(865,30,5,5);
  rect(880,30,5,5);
  rect(805,35,5,5);
  rect(825,35,5,5);
  rect(835,35,5,5);
  rect(845,35,5,5);
  rect(835,40,5,5);
  rect(875,40,25,5);
  rect(805,45,5,5);
  rect(825,45,5,5);
  rect(870,45,15,5);
  rect(890,45,5,5);
  rect(900,45,5,5);
  rect(800,50,5,5);
  rect(860,50,5,5);
  rect(880,50,5,5);
  rect(815,55,5,5);
  rect(835,55,5,5);
  rect(845,55,5,5);
  rect(875,55,5,5);
  rect(810,60,15,5);
  rect(860,60,5,5);
  rect(870,60,5,5);
  rect(820,65,5,5);
  rect(855,65,5,5);
  rect(875,65,10,5);
  rect(895,65,10,5);
  rect(800,70,5,5);
  rect(820,70,10,5);
  rect(855,70,5,5);
  rect(880,70,10,5);
  rect(805,75,5,5);
  rect(830,75,5,5);
  rect(845,75,10,5);
  rect(880,75,10,5);
  rect(815,80,5,5);
  rect(845,80,15,5);
  rect(895,80,5,5);
  rect(820,85,5,5);
  rect(840,85,5,5);
  rect(870,85,15,5);
  rect(810,90,5,5);
  rect(835,90,5,5);
  rect(885,90,10,5);
  rect(805,100,5,5);
  rect(850,100,5,5);
  rect(860,100,5,5);
  rect(870,100,5,5);
  rect(880,100,5,5);
  rect(895,100,10,5);
  rect(800,105,5,5);
  rect(810,105,5,5);
  rect(835,105,5,5);
  rect(845,105,5,5);
  rect(830,110,5,5);
  rect(845,110,5,5);


  fill(197,105,24); // geel 4
  rect(805,10,5,5);
  rect(820,10,5,5);
  rect(830,10,5,5);
  rect(845,10,5,5);
  rect(805,15,10,5);
  rect(825,15,15,5);
  rect(875,15,5,5);
  rect(805,20,5,5);
  rect(815,20,5,5);
  rect(830,20,5,5);
  rect(885,20,5,5);
  rect(895,20,5,5);
  rect(800,25,10,5);
  rect(815,25,5,5);
  rect(855,25,5,5);
  rect(800,30,5,5);
  rect(830,30,5,5);
  rect(840,30,5,5);
  rect(875,30,5,5);
  rect(840,35,5,5);
  rect(855,35,5,5);
  rect(875,35,5,5);
  rect(890,35,5,5);
  rect(900,35,5,5);
  rect(810,40,5,5);
  rect(820,40,5,5);
  rect(850,40,10,5);
  rect(900,40,5,5);
  rect(815,45,10,5);
  rect(835,45,10,5);
  rect(865,45,5,5);
  rect(895,45,5,5);
  rect(810,50,5,5);
  rect(820,50,5,5);
  rect(845,50,5,5);
  rect(865,50,5,5);
  rect(890,50,5,5);
  rect(805,55,10,5);
  rect(820,55,5,5);
  rect(830,55,5,5);
  rect(855,55,10,5);
  rect(885,55,5,5);
  rect(895,55,5,5);
  rect(800,60,10,5);
  rect(825,60,10,5);
  rect(850,60,10,5);
  rect(810,65,10,5);
  rect(845,65,5,5);
  rect(860,65,5,5);
  rect(815,70,5,5);
  rect(890,70,5,5);
  rect(810,75,15,5);
  rect(860,75,5,5);
  rect(890,75,15,5);
  rect(800,80,10,5);
  rect(835,80,5,5);
  rect(880,80,5,5);
  rect(900,80,5,5);
  rect(810,85,10,5);
  rect(845,85,10,5);
  rect(860,85,5,5);
  rect(890,85,5,5);
  rect(820,90,5,5);
  rect(840,90,5,5);
  rect(850,90,10,5);
  rect(880,90,5,5);
  rect(800,95,10,5);
  rect(820,95,5,5);
  rect(835,95,5,5);
  rect(845,95,15,5);
  rect(865,95,5,5);
  rect(890,95,5,5);
  rect(900,95,5,5);
  rect(830,100,20,5);
  rect(815,105,10,5);
  rect(850,105,5,5);
  rect(860,105,5,5);
  rect(875,105,5,5);
  rect(890,105,5,5);
  rect(900,105,5,5);
  rect(800,110,5,5);
  rect(815,110,5,5);
  rect(840,110,5,5);
  rect(850,110,35,5);
  rect(900,110,5,5);


  fill(167,70,29); // bruin
  rect(800,10,5,5);
  rect(810,10,10,5);
  rect(825,10,5,5);
  rect(840,10,5,5);
  rect(875,10,5,5);
  rect(815,15,10,5);
  rect(840,15,10,5);
  rect(855,15,5,5);
  rect(870,15,5,5);
  rect(800,20,5,5);
  rect(820,20,5,5);
  rect(840,20,5,5);
  rect(870,20,10,5);
  rect(890,20,5,5);
  rect(825,25,10,5);
  rect(845,25,5,5);
  rect(870,25,10,5);
  rect(805,30,5,5);
  rect(845,30,5,5);
  rect(870,30,5,5);
  rect(810,35,5,5);
  rect(865,35,10,5);
  rect(815,40,5,5);
  rect(840,40,5,5);
  rect(860,40,10,5);
  rect(810,45,5,5);
  rect(830,45,5,5);
  rect(855,45,10,5);
  rect(815,50,5,5);
  rect(830,50,10,5);
  rect(855,50,5,5);
  rect(875,50,5,5);
  rect(895,50,5,5);
  rect(890,55,5,5);
  rect(835,60,5,5);
  rect(865,60,5,5);
  rect(890,60,5,5);
  rect(800,65,10,5);
  rect(825,65,20,5);
  rect(850,65,5,5);
  rect(865,65,5,5);
  rect(885,65,5,5);
  rect(805,70,10,5);
  rect(830,70,5,5);
  rect(840,70,10,5);
  rect(860,70,5,5);
  rect(825,75,5,5);
  rect(835,75,5,5);
  rect(855,75,5,5);
  rect(820,80,10,5);
  rect(860,80,5,5);
  rect(890,80,5,5);
  rect(830,85,10,5);
  rect(865,85,5,5);
  rect(885,85,5,5);
  rect(895,85,10,5);
  rect(815,90,5,5);
  rect(825,90,10,5);
  rect(845,90,5,5);
  rect(860,90,10,5);
  rect(895,90,10,5);
  rect(810,95,5,5);
  rect(825,95,10,5);
  rect(895,95,5,5);
  rect(810,100,5,5);
  rect(820,100,10,5);
  rect(875,100,5,5);
  rect(825,105,10,5);
  rect(870,105,5,5);
  rect(880,105,5,5);
  rect(825,110,5,5);
  rect(890,110,5,5);
  
  pop();
}