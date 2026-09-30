let shapes = []; // has to exist as an empty array, otherwise it will not work!
let colours;
let debugActive;
let mX1;
let mY1;
let mX2;
let mY2;
let mX3;
let mY3;

function setup() {
  createCanvas(800, 800); // this code is compatible with any canvas size
  colours = [color(200,30,30), color(30,200,30), color(30,30,200), color(200), color(30), color(200,200,30), color(200,30,200)]; // define colours here. red, green, blue, white, black, yellow, purple
}

function draw() {

  background(220);
  mX1 = mouseX+random(-20,20);
  mY1 = mouseY+random(-20,20);
  mX2 = mouseX+random(-40,40);
  mY2 = mouseY+random(-40,40);
  mX3 = mouseX+random(-60,60);
  mY3 = mouseY+random(-60,60);
  // all shape coordinates are based on current mouse location with a little randomness thrown in just so everything doesn't pile up on the same place

  if (frameCount % 3 == 0) { // limit shape creation to 1 per 3 frames
    shapes.push([mX1, mY1, 10, 0, 0.05, "triangle", "initial", 30, colours[floor(random(colours.length))]]); // creates an array with shape data and saves it until removed
    shapes.push([mX2, mY2, 15, 1, -0.07, "hexagon", "initial", 10, colours[floor(random(colours.length))]]);
    shapes.push([mX3, mY3, 10, 0, 0.03, "diamond", "initial", 20, colours[floor(random(colours.length))]]);
    shapes.push([mX2, mY2, 15, 1, -0.07, "trapezoid", "initial", 10, colours[floor(random(colours.length))]]);
    shapes.push([mX3, mY3, 10, 0, 0.03, "octagon", "initial", 20, colours[floor(random(colours.length))]]);
    // x, y, orig. size, orig. rotation, rotation speed, shape, state, lifespan while at largest, colour
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
    let colour = shapes[i][8]; // colour is randomly chosen between what is available in the colours() array
    // define variables in for loop using arrays w/ shape data
    
    rotation = rotation+rotationSpeed; // makes the shape spin
    if (state === "initial") { // initial state
      size = size + 1+PI/10; // increase size per frame
      if (size >= 20) { // max size?
        size = 20; // properly setting
        state = "peak"; // enter new state
      }
    }
    if (state === "peak") {
      life = life - 1; // lifespan while largest
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

    push();
    translate(x,y); // allow position movement and rotation
    rotate(rotation); // rotates the object by the rotation value defined earlire
    drawShape(type,size,colour); // trigger shape creation
    pop();
  }
  for (let i = shapes.length - 1; i >= 0; i--) { // without the -1, it tries to read array value 6 which does not exist
    if (shapes[i][6] == "gone") { // check shape state. if it's "gone" then it has to be removed
      shapes.splice(i,1); // remove the selected shape's data from the array. i denotes where to start looking in the array, 1 denotes how many shapes to remove from the array (in this case, just the one)
    }
  }
  // no debug menu this time because i can't track every single shape. this code was originally tested in the web editor and relied solely on hopes and dreams 😇😇
}   

function drawShape(shape,size,colour) {
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
}