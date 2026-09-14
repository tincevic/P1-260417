function setup() {
  createCanvas(600, 400);
}

function draw() {
  // noStroke();
  background(255);
  strokeWeight(4);
  fill(232,12,12); // rood
  rect(2.5,2.5,55,95);
  rect(290,2.5,98,32);
  rect(388,100,209.5,234);

  fill(12,12,232); // blauw
  rect(57.5,2.5,97.5,54);
  rect(344,34.5,44,54);
  rect(2.5,282.5,55,60);
  rect(57.5,342.5,97.5,55);
  
  fill(240,242,242); // wit -- mag elkaar aanraken
  rect(155,2.5,135,86);
  rect(57.5,56.5,97.5,286);
  rect(388,2.5,112,80);
  rect(369,88.5,19,245.5);
  rect(238,183.5,131,150.5);
  rect(155,266.5,83,131);
  rect(238,334,212,63.5);
  rect(513.5,334,84,63.5);
  
  fill(242,242,24); // geel
  rect(2.5,97.5,55,185);
  rect(155,88.5,214,95);
  rect(388,82.5,112,17.5);

  fill(12,12,12); // zwart -- ik maak ze allemaal vierkanten
  square(155,183.5,83);
  square(290.5,34.5,54);
  square(500,2.5,97.5);
  square(2.5,342.5,55);
  square(450,334,63.5);
}