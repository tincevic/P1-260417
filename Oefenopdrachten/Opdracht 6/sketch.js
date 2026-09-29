let colours;
let nums;
let arr1;
let arr2;
let word;
let letters;
let amountE;
let randCLRS;
let randNMBS;
let comb;
let avg;

function setup() {
  colours = [color(255,0,0),color(0,255,0),color(0,0,255),color(255,0,255),color(255,255,0)];
  coloursARR = ["red", "green", "blue", "purple", "yellow"];
  randCLRS = [color(round(random(255)),round(random(255)),round(random(255))),color(round(random(255)),round(random(255)),round(random(255))),color(round(random(255)),round(random(255)),round(random(255))),color(round(random(255)),round(random(255)),round(random(255))),color(round(random(255)),round(random(255)),round(random(255)))];
  randNMBS = [round(random(100)),round(random(100)),round(random(100)),round(random(100)),round(random(100)),round(random(100)),round(random(100)),round(random(100)),round(random(100)),round(random(100)),round(random(100)),round(random(100))]
  nums = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];
  arr1 = [3, 55, 93, 20, 102, 6];
  arr2 = [14, 22, 80, 5];
  createCanvas(380, 350);
  word = "Overheidsfinancieringstekort";
  letters = word.split("");
  amountE = 0;
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] == "e") {
      amountE++;
    }
  }
  comb = randNMBS.reduce(getSum);
  avg = round((comb / 12));
}

function draw() {
  background(220);

  fill(0);
  textSize(10);
  textStyle(BOLD);
  text("1.",20,15);
  text("2.",20,100);
  text("3.",20,190);
  text("4.",20,250);
  text("5.",120,15);
  text("6.",120,100);
  text("7.",120,190);
  text("8.",120,280);
  text("9.",240,15);

  textSize(10);
  fill(colours[0]);
  text("red",35,15);
  fill(colours[1]);
  text("green",35,25);
  fill(colours[2]);
  text("blue",35,35);
  fill(colours[3]);
  text("purple",35,45);
  fill(colours[4]);
  text("yellow",35,55);

  fill(colours[1]);
  text("green",35,100);
  fill(colours[2]);
  text("blue",35,110);
  fill(colours[3]);
  text("purple",35,120);
  fill(colours[4]);
  text("yellow",35,130);
  fill(colours[0]);
  text("red",35,140);

  fill(colours[1]);
  text("green",35,190);
  fill(colours[4]);
  text("yellow",35,200);
  fill(colours[0]);
  text("red",35,210);

  fill(0);
  let hog = 0;
  for (let i = 0; i < 10; i++) {
    if (nums[i] < 300) {
      text(nums[i],35,250+hog);
      hog += 10;
    }
  }

  let tot = 0;
  for (let i = 0; i < 6; i++) {
    tot += arr1[i]
  }
  for (let i = 0; i < 4; i++) {
    tot += arr2[i]
  }
  textSize(tot/10);
  text(tot,140,60);
  textSize(10);

  textSize(tot/10);
  text(amountE+"x",140,150);
  textSize(10);

  coloursARR.sort();
  for (let i = 0; i < 10; i++) {
    if (coloursARR[i] == "red") {
      fill(255,0,0);
    } else if (coloursARR[i] == "green") {
      fill(0,255,0);
    } else if (coloursARR[i] == "blue") {
      fill(0,0,255);
    } else if (coloursARR[i] == "purple") {
      fill(255,0,255);
    } else if (coloursARR[i] == "yellow") {
      fill(255,255,0);
    }
    text(coloursARR[i],135,190+i*10);
  }
  for (let i = 0; i < 5; i++) {
    fill(randCLRS[i]);
    square(135+i*30,280,30)
  }
  fill(0);
  textSize(10);
  textStyle(BOLD);
  randNMBS.sort();
  for (let i = 0; i < 12; i++) {
    text(randNMBS[i],255,15+i*10);
    if (i == 11) { // bolden voorkomen
    text("totaal: "+comb,255,145);
    text("gem: "+avg,255,155);
    }
  }
}

function getSum(total,num) {
    return total + num;
}
