// shape generation
let shapes = []; // has to exist as an empty array, otherwise it will not work! this is the initial array that stores each instance of a shape
let alphabet; // for letter function
let letter;
let letterSel;
// colours
let colourArrays; // array to store the different colours
let redArray; // red colours array
let orangeArray;
let yellowArray;
let greenArray;
let blueArray;
let purpleArray;
let graysArray;
let clrSelect = 6; // which colour is selected?
// coordinates
let mX1;
let mY1;
let mX2;
let mY2;
let mX3;
let mY3;
// sound
let sound;
let amp;
let act;

function preload() {
  sound = loadSound('/../Assets/song.mp3'); // load music
}
function setup() {
  createCanvas(800,800); // this code is compatible with any canvas size
  redArray = [color(200,30,30), color(255,0,0), color(255,67,67), color(255,180,180), color(160,20,20), color(90,0,0), color(160,60,60)]; // array for red colours
  orangeArray = [color(200,100,30), color(255,130,0), color(255,177,67), color(255,230,180), color(160,120,20), color(90,45,0), color(160,100,60)];
  yellowArray = [color(200,200,30), color(255,255,0), color(255,255,67), color(255,255,180), color(160,160,20), color(90,90,0), color(160,160,60)];
  greenArray = [color(30,200,30), color(0,255,0), color(67,255,67), color(180,255,180), color(20,160,20), color(0,90,0), color(60,160,60)];
  blueArray = [color(30,30,200), color(0,0,255), color(67,67,255), color(180,180,255), color(20,20,160), color(0,0,90), color(60,60,160)];
  purpleArray = [color(200,30,200), color(255,0,255), color(255,67,255), color(255,180,255), color(160,20,160), color(90,0,90), color(160,60,160)];
  graysArray = [color(200), color(255), color(67), color(180), color(120), color(90), color(140)];
  colourArrays = [redArray, orangeArray, yellowArray, greenArray, blueArray, purpleArray, graysArray]; // collection of arrays. palette of colours is determined with clrSelect and the exact colour used within that palette is random
  alphabet = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ superfunkycalifragisexy!"; // list of letters
  letter = alphabet.split(""); // split each individual letter and put it into an array
  background(0);
  sound.stop(); // make sure sound doesn't play until canvas is clicked
  amp = new p5.Amplitude(); // create amplitude function for detection
  fill(255);
  text("press backspace to change colour, press enter to save canvas, click on the canvas to trigger music",10,790) // it's what it says on the tin. no debug menu this time because i can't track every single shape. this code was originally tested in the web editor and relied solely on hopes and dreams 😇😇
}

function draw() {
  mX1 = mouseX+random(-20,20);
  mY1 = mouseY+random(-20,20);
  mX2 = mouseX+random(-40,40);
  mY2 = mouseY+random(-40,40);
  mX3 = mouseX+random(-60,60);
  mY3 = mouseY+random(-60,60);
  // all shape coordinates are based on current mouse location with a little randomness thrown in just so everything doesn't pile up on the same place

  let level = amp.getLevel(); // detect amplitude of the music. used for size changes

  if (frameCount % 3 == 0) { // limit shape creation to 1 of each per 3 frames
    shapes.push([mX1, mY1, 10+level*3, 0, 0.05, "triangle", "initial", 300, random(colourArrays[clrSelect])]); // creates an array with shape data and saves it until removed
    shapes.push([mX2, mY2, 15+level*3, 1, -0.07, "hexagon", "initial", 100, random(colourArrays[clrSelect])]);
    shapes.push([mX3, mY3, 10+level*3, 0, 0.03, "diamond", "initial", 200, random(colourArrays[clrSelect])]);
    shapes.push([mX2, mY2, 15+level*3, 1, -0.07, "trapezoid", "initial", 100, random(colourArrays[clrSelect])]);
    shapes.push([mX3, mY3, 10+level*3, 0, 0.03, "octagon", "initial", 200, random(colourArrays[clrSelect])]);
    shapes.push([mX1, mY1, 10, random(-10,10), 0, "letter", "initial", 300, random(colourArrays[clrSelect]), letter[floor(random(letter.length))]]); // randomly select a letter
    // x, y, orig. size, orig. rotation, rotation speed, shape, state, lifespan while at largest, colour, letter selection (reserved for letter shape)
  }

  for (let i = 0; i < shapes.length; i++) {
    let x = shapes[i][0]; // defines which value in the selected array (i) is defined
    let y = shapes[i][1];
    let size = shapes[i][2];
    let rotation = shapes[i][3];
    let rotationSpeed = shapes[i][4];
    let type = shapes[i][5];
    let state = shapes[i][6];
    let life = shapes[i][7];
    let colour = shapes[i][8]; // colour is randomly chosen between what is available in the colourArrays() array
    let letterSlc = shapes[i][9];
    // define variables in for loop using arrays w/ shape data
    
    rotation = rotation+rotationSpeed; // makes the shape spin
    if (state === "initial") { // initial state
      size = size+1+PI/10; // increase size per frame
      if (size >= 20) { // max size?
        size = 20; // properly setting
        state = "peak"; // enter new state
      }
    }
    if (state === "peak") {
      size = 20+level*50
      life = life-1; // lifespan while largest
      if (life <= 0) { // is peak lifespan over?
        life = 0; // properly setting
        state = "removal";
      }
    }
    if (state === "removal") {
      size = size - 1; // decrease size per frame
      if (size <= 0) { // is it practically gone?
        size = 0; // properly setting
        state = "gone"; // trigger actual removal of shape clone to prevent memory leakage
      }
    }

    shapes[i][2] = size; // implement above changes on object data
    shapes[i][3] = rotation;
    shapes[i][6] = state;
    shapes[i][7] = life;
    shapes[i][8] = colour;
    shapes[i][9] = letterSlc;

    push();
    translate(x,y); // allow position movement and rotation
    rotate(rotation); // rotates the object by the rotation value defined earlire
    drawShape(type,size,colour,letterSlc); // trigger shape creation
    pop();
  }
  for (let i = shapes.length - 1; i >= 0; i--) { // without the -1, it tries to read array value 6 which does not exist
    if (shapes[i][6] == "gone") { // check shape state. if it's "gone" then it has to be removed
      shapes.splice(i,1); // remove the selected shape's data from the array. i denotes where to start looking in the array, 1 denotes how many shapes to remove from the array (in this case, just the one)
    }
  }
} 
function mouseClicked() {
  if (act != 1) { // trigger sound
    stroke(80);
    sound.loop();
    act = 1;
  }
}
function keyPressed() {
  if (keyCode === 8) { // is backspace pressed?
    if (clrSelect == colourArrays.length-1) {
      clrSelect = 0; // set selected palette to 0
    } else {
      clrSelect++ // add 1 to the palette selection
    }
  }
  if (key === 'Enter') { // is enter pressed?
    saveCanvas('canvas.jpg'); // save canvas when pressing enter
  }
}  
function drawShape(shape,size,colour,letterSlc) { // draw selected shape. letterSlc is reserved for the "letter" shape.
  if (shape === "triangle") {
    fill(colour);
    triangle(0,-size,-size, size,size,size); // simple triangle function. could use the polygon math but this is much easier!
  }
  if (shape === "diamond") {
    fill(colour);
    beginShape(); // creating diamond with vertexes. basically a square turned 45 degrees but a bit thinner, hence the +5 and -5
    vertex(0,-size);
    vertex(size-5,0);
    vertex(0,size);
    vertex(-size+5,0);
    endShape(CLOSE);
  }
  if (shape === "hexagon") {
    fill(colour);
    beginShape();
    for (let i = 0; i < 6; i++) { // loop 6 times. this logic is valid for all regular polygons
      let angle = TWO_PI/6*i; // find angle of each point in hexagon. all points in a hexagon add up to 360 deg
      let x = cos(angle)*size; // use cosine to find horizontal
      let y = sin(angle)*size; // use sine to find vertical
      vertex(x,y); // create point
    }
    endShape(CLOSE);
  }
  if (shape === "octagon") {
    fill(colour);
    beginShape();
    for (let i = 0; i < 8; i++) { // same logic in the hexagon except 8 instead of 6
      let angle = TWO_PI/8*i;
      let x = cos(angle)*size;
      let y = sin(angle)*size;
      vertex(x,y);
    }
    endShape(CLOSE);
  }
  if (shape === "trapezoid") {
    fill(colour);
    beginShape(); // fancy rectangle with top points moved in
    vertex(-size*0.6,0);
    vertex(size*0.6,0);
    vertex(size,size);
    vertex(-size,size);
    endShape(CLOSE);
  }
  if (shape === "letter") {
    fill(colour);
    textSize(size*4);
    textStyle(BOLD);
    textFont("Times New Roman");
    text(letterSlc,0,0); // draw selected letter
  }
}