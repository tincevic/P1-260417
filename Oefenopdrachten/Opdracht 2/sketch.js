let x;
let y = 20;
let groet = "greetings";
let isAWhole;
let isAStr;
let isBWhole;
let isBStr;
let a;
let b;
let addition;
let subtraction;
let multi;
let division;
  
function setup() {
  createCanvas(400, 400);
  x = floor(random(30))+10;
  a = round(random(100), 1); // ik rond alles hierna af op 3 decimalen want soms wordt er bij optellen bijvoorbeeld 1285.00000000000001 weergegeven
  b = round(random(50), 1);
  addition = round(a+b, 3); // ik tel a en b op
  subtraction = round(a-b, 3); // ik tref b van a af
  multi = round(a*b, 3); // ik vermenigvuldig a met b
  division = round(a/b, 3); // ik deel a door b en rond af op 3 decimalen
  if (a == floor(a)) {
    isAWhole = true;
    isAStr = "yes";
  } else {
    isAWhole = false;
    isAStr = "no";
  }
  if (b == floor(b)) {
    isBWhole = true;
    isBStr = "yes";
  } else {
    isBWhole = false
    isBStr = "no";
  }
}

function draw() {
  background(220);
  y = 20;
  text(x,x,y);
  y+=40;
  text(groet,x,y);
  y+=20; // na elke regel gaat y met 20 omhoog. x blijft hetzelfde
  text("a = "+str(a),x,y); // ik moet str() gebruiken omdat de variabelen integers gebruiken en text() kan alleen strings weergeven
  y+=20;
  text("b = "+str(b),x,y);
  y+=20;
  text("addition: "+str(addition),x,y);
  y+=20;
  text("subtraction: "+str(subtraction),x,y);
  y+=20;
  text("multiplication: "+str(multi),x,y);
  y+=20;
  text("division (rounded to 3 decimals): "+str(division),x,y);
  y+=40;
  text("is a whole? "+isAStr,x,y);
  y+=20;
  text("is b whole? "+isBStr,x,y);
}