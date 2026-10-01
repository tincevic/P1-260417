let rn = 1;
let phase = "in";
let palChoices = [];
let redP;
let greenP;
let bluP;
let purP;
let selChoice = 3;

function setup() {
  createCanvas(500, 500);
  background(0);
}

function draw() {
  for (let i = 0; i < 50; i++) {
    for (let j = 0; j < 50; j++) {
      redP = [i + j * rn, 0, 0];
      greenP = [0, i + j * rn, 0];
      bluP = [0, 0, i + j * rn];
      purP = [i + j * rn, 0, i + j * rn];
      palChoices = [redP, greenP, bluP, purP];
      fill(palChoices[selChoice]);
      push();
      translate(i * 10, j * 10);
      rotate(rn)
      beginShape();
      for (let k = 0; k < 6; k++) { // loop 6 times. this logic is valid for all regular polygons
        let angle = TWO_PI/6*k;
        let x = cos(angle)*10; // use cosine to find horizontal
        let y = sin(angle)*10; // use sine to find vertical
        vertex(x, y); // create point
      }
      endShape(CLOSE);
      pop();
    }
  }
  if (phase == "in") {
    rn += 0.05;
    if (rn >= 15) {
      phase = "out";
    }
  }
  if (phase == "out") {
    rn -= 0.05;
    if (rn <= 0) {
      phase = "in";
    }
  }
}

function keyPressed() {
  if (keyCode == 8) {
    if (selChoice == 3) {
      selChoice = 0;
    } else {
      selChoice++
    }
  }
}