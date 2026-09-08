function setup() {
  createCanvas(1500,1500);
  background(225);
}

function draw() {
  // tekening 1: naam
  noStroke();
  fill(0);
  text("1. Tin Martincevic",20,10); // hoi!

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
  star(175,180,30.3,80,5); // wordt later gedefiniëerd. ik gebruik een custom funct

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
  // kleur om doorzichtigheid te laten zien
  noStroke();
  fill(151,64,57);
  rect(380,85,170,200);
    // echt het huisje tekenen
  strokeWeight(2);
  stroke(0);
    // huis
  line(340,125,340,325);
  line(340,325,540,325);
  line(540,325,540,125);
  line(540,125,340,125);
    // deur
  line(390,325,390,225);
  line(390,225,440,225);
  line(440,225,440,325);
    // raam
  line(470,275,470,225);
  line(470,225,520,225);
  line(520,225,520,275);
  line(520,275,470,275);
  line(495,225,495,275);
  line(470,250,520,250);
    // dak
  line(340,125,440,25);
  line(440,25,540,125);
    // of ik kan fill(0,0,0,255) en rect() + triangle() doen maar ik vind dit leuker :P

  // tekening 5: stoplicht
  noStroke();
  fill(0);
  text("5.",340,415);
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
  noStroke();
  fill(128,0,0);
  circle(390,470,65);
  fill(128,128,0);
  circle(390,550,65);
  stroke(0,255,0);
  strokeWeight(3);
  fill(40,220,30);
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

  // tekening 7: mario pixel art
  noStroke();
  fill(0);
  text("7.",600,210);

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
    // dit kan VEEL efficiënter though

  // tekening 8: gamefiguur
  noStroke();
  fill(0);
  text("8. Steve (Minecraft)",600,420);
  fill(47,32,13); // 1
  rect(620,430,10,10);
  rect(600,430,10,10);
  fill(43,30,13); // 2
  rect(660,430,10,10);
  rect(610,430,10,10);
  rect(600,440,30,10);
  rect(600,450,10,10);
  fill(48,28,11); // 3
  rect(630,430,10,10);
  fill(36,24,8); // 4
  rect(640,430,10,10);
  fill(38,26,10); // 5
  rect(650,430,10,10);
  fill(42,29,13); // 6
  rect(670,430,10,10);
  fill(51,36,17); // 7
  rect(630,440,10,10);
  fill(66,42,18); // 8
  rect(640,440,10,10);
  fill(63,42,21); // 9
  rect(650,440,10,10);
  fill(44,30,14); // 10
  rect(660,440,10,10);
  fill(40,28,1); // 11
  rect(670,440,10,10);
  fill(182,137,108); // 12
  rect(610,450,10,10);
  fill(189,142,114); // 13
  rect(620,450,10,10);
  fill(198,150,128); // 14
  rect(630,450,10,10);
  fill(189,139,114); // 15
  rect(640,450,10,10);
  fill(189,142,116); // 16
  rect(650,450,10,10);
  fill(172,118,90); // 17
  rect(660,450,10,10);
  fill(52,37,18); // 18
  rect(670,450,10,10);
  fill(170,125,102); // 19
  rect(600,460,10,10);
  rect(620,460,10,10);
  rect(670,470,10,10);
  fill(180,132,109); // 20
  rect(610,460,10,10);
  rect(600,470,10,10);
  fill(173,128,109); // 21
  rect(630,460,10,10);
  fill(156,114,92); // 22
  rect(640,460,10,10);
  fill(187,137,114); // 23
  rect(650,460,10,10);
  rect(640,470,10,10);
  fill(156,105,76); // 24
  rect(660,460,20,10);
  fill(255); // 25
  rect(610,470,10,10);
  rect(660,470,10,10);
  fill(82,61,137); // 26
  rect(620,470,10,10);
  rect(650,470,10,10);
  fill(181,123,103); // 27
  rect(630,470,10,10);
  fill(156,99,70); // 28
  rect(600,480,10,10);
  fill(179,123,98); // 29
  rect(610,480,10,10);
  fill(183,130,114); // 30
  rect(620,480,10,10);
  fill(106,64,48); // 31
  rect(630,480,20,10);
  fill(190,136,108); // 32
  rect(650,480,10,10);
  fill(162,106,71); // 33
  rect(660,480,10,10);
  fill(128,83,52); // 34
  rect(670,480,10,10);
  fill(144,94,67); // 35
  rect(600,490,10,10);
  fill(150,95,64); // 36
  rect(610,490,10,10);
  fill(119,66,53); // 37
  rect(620,490,40,10);
  fill(143,94,62); // 38
  rect(660,490,10,10);
  fill(129,83,57); // 39
  rect(670,490,10,10);
  rect(620,500,20,10);
  fill(111,69,44); // 40
  rect(600,500,10,10);
  fill(109,67,42); // 41
  rect(610,500,10,10);
  fill(122,78,51); // 42
  rect(640,500,10,10);
  rect(670,500,10,10);
  fill(131,85,59); // 43
  rect(650,500,20,10);
    // heb het zo efficiënt mogelijk proberen te maken door kleuren te sorteren
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