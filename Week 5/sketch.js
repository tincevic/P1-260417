// per-question assets
let assetQ1; // music
let assetQ4; // music
let assetQ5; // image
let mapQ6; // image
let assetQ7; // music
let assetQ8; // music
let assetQ9; // image
let assetQ10; // music
let assetQ11; // music
let assetQ12; // music
let assetQ13; // music
let assetQ14; // image
let assetQ15; // image
let bgm; // background music
let assetL; // logo
let suessfont; // font
let currentQ; // current question

let questionsAnswers = []; 
let q1 = {
  question: "Which album did this song appear on?", // Let's Go Crazy | Purple Rain
  choices: ["Around The World in a Day", "Parade", "Purple Rain", "Sign O' the Times"],
  correctAnswer: 2,
  qType: 1, // mult choice
  asset: "assetQ1", // song/image
}
let q2 = {
  question: "Which of these people never worked with Prince?", // David Bowie
  choices: ["David Bowie", "Chaka Khan", "Sheila E.", "Madonna"],
  correctAnswer: 0,
  qType: 1,
  asset: null,
}
let q3 = {
  question: "When did Prince change his name to an unpronounceable symbol?", // 1993
  choices: ["1993", "1989", "1996", "2001"],
  correctAnswer: 0,
  qType: 1,
  asset: null,
}
let q4 = {
  question: "What album is this song from?", // Sign O' the Times
  choices: ["Purple Rain", "Sign O' the Times", "Batman", "The Beautiful Ones"],
  correctAnswer: 1,
  qType: 1,
  asset: "assetQ4",
}
let q5 = {
  question: "In what year was this Prince album released?", // LoveSexy - TIMELINE
  choices: ["1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990"],
  correctAnswer: 8,
  qType: 2, // timeline
  asset: "assetQ5",
}
let q6 = {
  question: "In which country did Prince never perform?", // Minnesota - MAP
  choices: ["U.S.A.", "Ireland", "Yugoslavia", "Italy", "Russia/USSR", "France"],
  correctAnswer: 2,
  qType: 3, // map
  asset: "mapQ6",
}
let q7 = {
  question: "Which month is mentioned in this song?", // Sometimes It Snows in April
  choices: ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  correctAnswer: 1,
  qType: 2, // timeline
  asset: "assetQ7",
}
let q8 = {
  question: "Which famous city is mentioned in this song?", // It's Gonna Be A Beautiful Night | Paris
  choices: ["London", "Paris", "Los Angeles", "Minneapolis"],  
  correctAnswer: 1,
  qType: 1,
  asset: "assetQ8",
}
let q9 = {
  question: "True or False: Love Song is a duet with Prince and Madonna.", // True
  choices: ["True", "False"],
  correctAnswer: 0,
  qType: 4, // true false
  asset: "assetQ9",
}
let q10 = {
  question: "Who is featured on this song?", // U Got the Look | Sheena Easton
  choices: ["Madonna", "Sheena Easton", "Cyndi Lauper", "Whitney Houston"],
  correctAnswer: 1,
  qType: 1,
  asset: "assetQ10",
}
let q11 = {
  question: "Which artist recorded this song written by Prince?", // Nothing Compares 2 U | Sinéad O'Connor
  choices: ["Sinéad O'Connor", "Tom Jones", "Madonna", "Beyonce"],
  correctAnswer: 0,
  qType: 1,
  asset: "assetQ11",
}
let q12 = {
  question: "Which band recorded this song written by Prince?", // Manic Monday | The Bangles
  choices: ["Madness", "The Go-Go's", "The Bangles", "Heart"],
  correctAnswer: 2,
  qType: 1,
  asset: "assetQ12",
}
let q13 = {
  question: "Which '90s album by Prince, then known as the Artist,\nis this song from?", // Gold | The Gold Experience
  choices: ["Rave Un2 the Joy Fantastic", "Come", "The Gold Experience", "Emancipation"],
  correctAnswer: 2,
  qType: 1,
  asset: "assetQ13",
}
let q14 = {
  question: "True or False: The soundtrack to Tim Burton's Batman\nwas primarily recorded by Prince.", // True
  choices: ["True", "False"],
  correctAnswer: 0,
  qType: 1,
  asset: "assetQ14",
}
let q15 = {
  question: "True or False: Prince died in 2016.", // True
  choices: ["True", "False"],
  correctAnswer: 0,
  qType: 4,
  asset: "assetQ15",
}

// image graphics

let imgGL;

// status vars

let opened;
let started;

function preload() {
  assetQ1 = loadSound('/../Assets/q1.mp3'); // music
  assetQ4 = loadSound('/../Assets/q4.mp3'); // music
  assetQ7 = loadSound('/../Assets/q7.mp3'); // music
  assetQ8 = loadSound('/../Assets/q8.mp3'); // music
  assetQ10 = loadSound('/../Assets/q10.mp3'); // music
  assetQ11 = loadSound('/../Assets/q11.mp3'); // music
  assetQ12 = loadSound('/../Assets/q12.mp3'); // music
  assetQ13 = loadSound('/../Assets/q13.mp3'); // music

  assetQ5 = loadImage('/../Assets/q5.jpg'); // image
  mapQ6 = loadImage('/../Assets/q6.png'); // map
  assetQ9 = loadImage('/../Assets/q9.png'); // image
  assetQ14 = loadImage('/../Assets/q14.jpg'); // image
  assetQ15 = loadImage('/../Assets/q15.png'); // image

  bgm = loadSound('/../Assets/bgmQuiz.mp3'); // background music
  assetL = loadImage('/../Assets/prince quiz.png'); // logo
  suessfont = loadFont('/../Assets/SuessFont.ttf'); // font
  symbols = loadFont('/../Assets/Prince.otf'); // font
  pattern = loadImage('/../Assets/ppattern.png') // pattern for menu
}

function setup() {
  createCanvas(1200,800);
  opened = false;
  started = false;
  bgm.setVolume(0.1);
  bgm.amp(1);
  questionsAnswers = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15];
  q1.asset = assetQ1;
  q4.asset = assetQ4;
  q5.asset = assetQ5;
  q6.asset = mapQ6;
  q7.asset = assetQ7;
  q8.asset = assetQ8;
  q9.asset = assetQ9;
  q10.asset = assetQ10;
  q11.asset = assetQ11;
  q12.asset = assetQ12;
  q13.asset = assetQ13;
  q14.asset = assetQ14;
  q15.asset = assetQ15;
  currentQ = random(questionsAnswers);
  if (currentQ.qType != 1 && currentQ.qType != 4) {
    currentQ = random(questionsAnswers); // basically guarantees that the player gets a multiple choice or true or false as their first question. the chance of them not getting one is now 4/225
  }
  // i did not use HTML buttons for this quiz since they do not match the overall aesthetic of the project and mess with the other elements. using the same methods as in previous projects, i will create custom buttons.
}

function draw() {
  textFont("Bahnschrift");
  fill(255);
  background(220);
  fill(60,5,70);
  rect(0,0,1200,100);
  image(assetL,10,10,85,85);
  tint(255,180);
  image(pattern,0,100,1920,1280);
  tint(255);
  textAlign(LEFT,BASELINE);
  if (!started) {
    fill(220);
    textFont("Bahnschrift");
    text("Welcome to the Quiz!",600,73);
    textFont("Bahnschrift");
    textSize(60);
    fill(60,5,70);
    textStyle(BOLD);
    text("THE PRINCE QUIZ",50,200);
    textStyle(NORMAL);
    textSize(30);
    text("Welcome to the Prince quiz! There are 15 questions about Prince's music and life. \nYou have 15 seconds to answer each question. \nDo you wish to begin?",50,250)
    rect(50,350,200,100,20);
    textSize(15);
    fill(30);
    textFont("Bahnschrift");
    text("Martinčević, 2026",10,790);
    fill(220);
    textSize(60);
    textFont(symbols);
    text("c",120,430);
  }
  
  if (!opened) {
    background(0);
    fill(255,180)
    circle(mouseX,mouseY,70);
    textSize(50);
    fill(120,20,120);
    textFont(suessfont);
    textAlign(CENTER,CENTER);
    text("click anywhere 2 enter the quiz\nexperience",width/2,height/2);
    textAlign(LEFT,BASELINE);
  } 
  if (started) {
    bgm.amp(0.1,0.2); 
      textFont("Bahnschrift");
      fill(0);
      textSize(40);
      textStyle(BOLD);
      textAlign(CENTER,CENTER);
      text(currentQ.question,width/2,200)
    if (currentQ.qType == 1 || currentQ.qType == 4) {
      if (currentQ.asset instanceof p5.Image) {
        image(currentQ.asset,width/2-100,250,200,200);  
      }
      if (currentQ.qType == 1) {
        for (let i = 0; i < currentQ.choices.length; i++) {
          let j;
          let k = 0;
          if (i%2 != 0) {
            j = 420;
          } else {
            j = 0;
          }
          if (i > 1) {
            k = 1;
          }
          fill(60,5,70);
          rect(190+j,500+k*100,400,80,20);
          fill(220);
          textSize(30);
          textAlign(CENTER,CENTER);
          text(currentQ.choices[i],width/2,340+i*100); // text needs to be fixed
        }
      }
    }
  }

}

function mouseClicked() {
  if (!opened) {
    opened = true;
    bgm.loop();
  } else if (!started) {
    if (mouseX > 50 && mouseX < 250 && mouseY > 350 && mouseY < 450) {
      started = true;
    }
  }
}

// quiz with 15 questions about Prince / TAFKAP, varying difficulty
// 2 timeline questions, 1 map question