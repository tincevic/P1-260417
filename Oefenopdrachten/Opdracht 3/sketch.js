let score;
let x;
let y;

function setup() {
  createCanvas(400, 200);
  score = floor(random(100));
  x = 10;
  y = 35;
}

function draw() {
  background(220);
  fill(0);
  text(str(score),x,x+5);
  textSize(15);
  textStyle(BOLD);
  stroke(255);
  strokeWeight(1);
  if (score >= 90) {
    fill(20,220,20);
    text("Uitstekend!",x,y);
    console.log("Uitstekend!");
  } else if (score >= 70 && score < 90) {
    fill(160,160,20);
    text("Goed gedaan!",x,y);
    console.log("Goed gedaan!");
  } else if (score >= 50 && score < 70) {
    fill(220,90,20);
    text("Voldoende.",x,y);
    console.log("Voldoende.");
  } else if (score < 50) {
    fill(220,20,20);
    text("Onvoldoende.",x,y);
    console.log("Onvoldoende.");
  } else {
    fill(0);
    text("ERROR",x,y);
    console.log("ERROR! Check code.");
  }
}