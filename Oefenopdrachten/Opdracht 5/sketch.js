function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(220);
  fill(0);
  text("1",20,15);
  text("2",20,105);
  text("3",80,105);
  text("4",80,205);
  text("5",540,20);
  text("6",350,105);
  text("7",625,105);
  fill(255);
  for (let i = 0; i < 10; i++) {
    square(20+50*i,20,50); // voor elke i gaat de x-as met breedte*i omhoog
    if (i === 5) {
      fill(0,0,255);
    } else {
      fill(255);
    }
  }
  for (let i = 0; i < 5; i++) {
    fill(i*61);
    square(20,110+50*i,50);
  }
  let x3 = 80;
  for (let i = 1; i < 5; i++) {
    g = i*61;
    let colour = color(0,g,0);
    let w = i*25;
    fill(color(colour));
    rect(x3,110,w,50);
    x3 += w;
  }
  let x4 = 80;
  for (let i = 1; i < 5; i++) {
    g = 255-i*61;
    let colour = color(0,0,g);
    let w = i*25;
    fill(color(colour));
    rect(x4,210,w,20+w);
    x4 += w;
  }
  let x5 = 505;
  for (let i = 0; i < 5; i++) {
    push();
    let str = i*3;
    let w = i*25;
    strokeWeight(str);
    stroke(0);
    fill(255);
    x5 += 52.5;
    circle(x5,45,30);
    pop();
  }
  for (let i = 0; i < 5; i++) {
    push();
    let str = i*3;
    let w = i*25;
    strokeWeight(str);
    stroke(0);
    fill(255);
    x5 += 52.5;
    circle(x5,45,30);
    pop();
  }
  for (let i = 0; i < 10; i++) {
    if (i%2 == 0) {
      fill(255,0,0);
    } else {
      fill(255);
    }
    circle(480,230,250-i*25);
  }
  let y7 = 110;
  let w = 10;
  for (let i = 0; i < 21; i++) {
    let h = 11;
    if (i < 11) {
      w += 12;
    } else {
      w -= 12;
      text()
    }
    if (i%2 == 0) {
      fill(150);
    } else {
      fill(255);
    }
    rect(625,y7,w,h)
    y7 += h;
  }
}
