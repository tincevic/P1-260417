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
let q1 = { // question, choices, correct answer, question type, asset (if applicable)
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
  question: "When did Prince change his name\nto an unpronounceable symbol?", // 1993
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
  question: "In what year was the album Lovesexy released?", // LoveSexy - TIMELINE
  choices: ["1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990"],
  correctAnswer: 8,
  qType: 2, // timeline
  asset: "assetQ5",
}
let q6 = {
  question: "Which state is Prince originally from?", // Minnesota - MAP
  choices: ["California", "New York", "Minnesota", "Illinois", "Texas", "Florida"],
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

// answer vars
let answered = false;
let feedback = "";
let feedbackColour;
let selectedIndex = -1;

// question vars
let questionNumber = 1;
let totalQuestions = 15;
let soundPlayedForQuestion = false;

// points/end handling
let points = 0; // points (1 per question)
let questionsRemaining = []; // every question someone answers gets spliced out of here and does not return
let quizComplete = false;

// timer vars
let timeLimit = 15; // how much time does someone have to answer a question?
let timeLeft = 15;

function preload() { // load assets and set volume for songs
  assetQ1 = loadSound('/../Assets/q1.mp3'); // music
  assetQ4 = loadSound('/../Assets/q4.mp3'); // music
  assetQ7 = loadSound('/../Assets/q7.mp3'); // music
  assetQ8 = loadSound('/../Assets/q8.mp3'); // music
  assetQ10 = loadSound('/../Assets/q10.mp3'); // music
  assetQ11 = loadSound('/../Assets/q11.mp3'); // music
  assetQ12 = loadSound('/../Assets/q12.mp3'); // music
  assetQ13 = loadSound('/../Assets/q13.mp3'); // music
  assetQ1.setVolume(0.2);
  assetQ4.setVolume(0.2);
  assetQ7.setVolume(0.2);
  assetQ8.setVolume(0.2);
  assetQ10.setVolume(0.2);
  assetQ11.setVolume(0.2);
  assetQ12.setVolume(0.2);
  assetQ13.setVolume(0.2);

  assetQ5 = loadImage('/../Assets/q5.jpg'); // image
  mapQ6 = loadImage('/../Assets/q6.png'); // map
  assetQ9 = loadImage('/../Assets/q9.png'); // image
  assetQ14 = loadImage('/../Assets/q14.jpg'); // image
  assetQ15 = loadImage('/../Assets/q15.png'); // image

  bgm = loadSound('/../Assets/bgmQuiz.mp3'); // background music
  bgm.setVolume(0.02);
  assetL = loadImage('/../Assets/prince quiz.png'); // logo
  suessfont = loadFont('/../Assets/SuessFont.ttf'); // font
  symbols = loadFont('/../Assets/Prince.otf'); // font
  pattern = loadImage('/../Assets/ppattern.png') // pattern for menu
}

function setup() {
  createCanvas(1200,800);
  opened = false;
  started = false;
  bgm.amp(1);
  questionsAnswers = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15]; // add questions and answer to array
  // load all assets back into arrays
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
  questionsRemaining = [...questionsAnswers]; // make questionsRemaining equal to questionsAnswers. if a question is answered, that question is removed from questionsRemaining and will not be asked again
  let randomIndex = floor(random(questionsRemaining.length)); // random question
  currentQ = questionsRemaining.splice(randomIndex,1)[0];
  timeLeft = timeLimit;
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
    if (quizComplete) { // is quiz complete? draw screen if yes
      fill(60,5,70);
      textAlign(CENTER,CENTER);
      textFont("Bahnschrift");
      textSize(40);
      text("Quiz Complete!",width/2,270);
      textSize(30);
      text("Your score: "+points+" / "+totalQuestions,width/2,340);
      textSize(20);
      text("You got "+round((points / totalQuestions)*100)+"%",width/2,375); // calculate point percentage
      fill(60,5,70);
      rect(450,420,300,70,12);
      fill(255);
      textSize(24);
      text("Play Again",width/2,455);
    } else if (!opened) { // before the quiz opens, you get a blank screen with text
    background(0);
    fill(255,180)
    circle(mouseX,mouseY,70);
    textSize(50);
    fill(120,20,120);
    textFont(suessfont);
    textAlign(CENTER,CENTER);
    text("click anywhere 2 enter the quiz\nexperience",width/2,height/2);
    textAlign(LEFT,BASELINE);
    bgm.setVolume(0.02);
  }
  else if (!started) {
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
    text("Welcome to the Prince quiz! There are 15 questions about Prince's music and life. \nYou have 15 seconds to answer each question. \nDo you wish to begin?",50,250) // description
    rect(50,350,200,100,20);
    textSize(15);
    fill(30);
    textFont("Bahnschrift");
    text("Martinčević, 2026",10,790);
    fill(220);
    textSize(60);
    textFont(symbols);
    text("c",120,430);
  } else if (started) {
    if (!answered && !quizComplete) { // calculate remaining time and draw it on scree
      timeLeft -= deltaTime / 1000;
      timeLeft = max(0,timeLeft);
      textAlign(CENTER,CENTER);
      textSize(28);
      if (timeLeft <= 5) {
        fill(190,40,40);
      } else {
        fill(30);
      }
      text(ceil(timeLeft),width-80,145);
      if (timeLeft <= 0) {
        answered = true; // player automatically gets the answer wrong once time is up
        selectedIndex = -1;
        feedback = "Time's up!";
        feedbackColour = color(190,40,40);

        if (currentQ.asset instanceof p5.SoundFile && currentQ.asset.isPlaying()) {
          currentQ.asset.stop(); // stop playing sound if timer is up
        }
      }
    }
    textFont("Bahnschrift");
    fill(0);
    textSize(40);
    textStyle(BOLD);
    textAlign(CENTER,CENTER);
    text(currentQ.question,width/2,180)
    textSize(18);
    fill(60,5,70);
    text("Question "+questionNumber+" / "+totalQuestions,width/2,790); // questions remaining
    if (currentQ.qType == 1 || currentQ.qType == 4) { // multiple choice OR true or false
      if (currentQ.asset instanceof p5.Image) {
        image(currentQ.asset,width/2-100,250,200,200); // add image if an image is needed
      } else if (currentQ.asset instanceof p5.SoundFile && !currentQ.asset.isPlaying() && !soundPlayedForQuestion) {
        currentQ.asset.play(); // play music if music is needed
        soundPlayedForQuestion = true; // do not repeat
      }
      for (let i = 0; i < currentQ.choices.length; i++) {
        let col = i % 2;
        let row = floor(i/2);
        let boxX = 190 + col*420; // box coordinates
        let boxY = 500 + row*100;
        let boxW = 400;
        let boxH = 80;

        if (answered && i == selectedIndex) { // check if answer is correct
          if (i == currentQ.correctAnswer) {
            fill(40,150,70); // correct
          } else {
            fill(190,40,40); // incorrect
          }
        } else {
          fill(60,5,70);
        }
        noStroke();
        rect(boxX,boxY,boxW,boxH,20);
        fill(220);
        textSize(30);
        textAlign(CENTER,CENTER);
        text(currentQ.choices[i],boxX+boxW/2,boxY+boxH/2);
      }
    }
  if (currentQ.qType == 2) { // timeline
    if (currentQ.asset instanceof p5.Image) {
      image(currentQ.asset,width/2-100,250,200,200);
    } else if (currentQ.asset instanceof p5.SoundFile && !currentQ.asset.isPlaying() && !soundPlayedForQuestion) {
      currentQ.asset.play();
      soundPlayedForQuestion = true;
    }
    stroke(60,5,70);
    strokeWeight(5);
    line(100,550,1100,550);

    for (let i = 0; i < currentQ.choices.length-1; i++) { // draw timeline with even spacing between choices
    let x = 100+i*(1000/9);
    let y = 550;

    noStroke();

    if (answered && i == selectedIndex) { // is answer correct or incorrect? fill in selected bubble
      fill(i == currentQ.correctAnswer ? color(40,150,70) : color(190,40,40));
    } else {
      fill(60,5,70);
    }

    circle(x,y,28); // draw circle/point on timeline

    fill(60,5,70);
    textSize(18);
    textAlign(CENTER,CENTER);
    text(currentQ.choices[i],x,y + 45);
  }
  }
  if (currentQ.qType == 3) { // map
    let maxW = 1000;
    let maxH = 650;

    let scaleFactor = min(maxW/currentQ.asset.width,maxH/currentQ.asset.height); // scale map down and match aspect ratio

    let mapW = currentQ.asset.width*scaleFactor;
    let mapH = currentQ.asset.height*scaleFactor;

    let mapX = (width-mapW)/2;
    let mapY = 220;

    image(currentQ.asset,mapX,mapY,mapW,mapH); // draw map
  }

  if (answered) { // is there an answer given?
    textAlign(CENTER,CENTER);
    textSize(26);
    fill(feedbackColour);
    text(feedback,width/2,700); // indicate correct or wrong

    fill(60,5,70);
    rect(450,720,300,55,12);

    fill(220);
    textSize(22);
    text("Next Question",600,747); // allow player to proceed
  }
  }
}

function mouseClicked() {
  if (quizComplete) {
    if (mouseX >= 450 && mouseX <= 750 && mouseY >= 420 && mouseY <= 490) {
      restartQuiz(); // restart quiz if done
    }
  }
  if (!opened) {
    opened = true; // open quiz game
    bgm.loop();
  }
  if (!started) {
    if (mouseX > 50 && mouseX < 250 && mouseY > 350 && mouseY < 450) {
      timeLeft = timeLimit; // reset timer when starting
      started = true;
      bgm.setVolume(0);
    }
  }
  if (answered) {
    if (mouseX >= 450 && mouseX <= 750 && mouseY >= 745 && mouseY <= 790) {
      nextQuestion(); // move on to next question when user proceeds
    }
  }
  if (started && !answered) {
    if (currentQ.qType == 1 || currentQ.qType == 4) { // multiple choice OR true or false
      for (let i = 0; i < currentQ.choices.length; i++) {
        let col = i%2; // column
        let row = floor(i/2);
        let boxX = 190 + col * 420; // box coordinates
        let boxY = 500 + row * 100;
        let boxW = 400;
        let boxH = 80;
        if (mouseX >= boxX && mouseX <= boxX+boxW && mouseY >= boxY && mouseY <= boxY+boxH) {
          selectedAnswer(i); // select answer from the selected box
        }
      }
    }
    else if (currentQ.qType == 2 && !answered) { // timeline
      for (let i = 0; i < currentQ.choices.length-1; i++) { // check if answer is given on a point
        let x = 100+i*(1000/9);
        let y = 550;
        if (dist(mouseX,mouseY,x,y) < 25) {
          selectedAnswer(i);
        }
      }
    }
    else if (currentQ.qType == 3 && !answered) { // map
      if (mouseX >= 270 && mouseX <= 395 && mouseY >= 353 && mouseY <= 533) { // choose which state is selected
        selectedAnswer(0); // california
      }
      if (mouseX >= 783 && mouseX <= 873 && mouseY >= 322 && mouseY <= 397) {
        selectedAnswer(1); // new york
      }
      if (mouseX >= 590 && mouseX <= 673 && mouseY >= 282 && mouseY <= 387) {
        selectedAnswer(2); // minnesota
      }
      if (mouseX >= 655 && mouseX <= 720 && mouseY >= 390 && mouseY <= 480) {
        selectedAnswer(3); // illinois
      }
      if (mouseX >= 470 && mouseX <= 642 && mouseY >= 476 && mouseY <= 656) {
        selectedAnswer(4); // texas
      }
      if (mouseX >= 710 && mouseX <= 843 && mouseY >= 560 && mouseY <= 653) {
        selectedAnswer(5); // florida
      }
      return; // don't treat clicks elsewhere on the map as an answer
    }
  }
}

function restartQuiz() {
  questionsRemaining = [...questionsAnswers]; // reset questionsRemaining

  // reset all values
  questionNumber = 1; // reset current question
  points = 0; // reset points
  quizComplete = false;
  answered = false;
  selectedIndex = -1;
  feedback = "";
  feedbackColour = undefined;
  soundPlayedForQuestion = false;
  started = false;

  let randomIndex = floor(random(questionsRemaining.length)); // select random question
  currentQ = questionsRemaining.splice(randomIndex,1)[0];
  timeLeft = timeLimit;
}

function nextQuestion() {
  if (currentQ.asset instanceof p5.SoundFile && currentQ.asset.isPlaying()) {
    currentQ.asset.stop(); // stop previous song, if applicable
  }

  if (questionsRemaining.length === 0) {
    quizComplete = true; // end quiz if no questions remaining
    started = false;
    return;
  }

  let randomIndex = floor(random(questionsRemaining.length)); // new random question
  currentQ = questionsRemaining.splice(randomIndex,1)[0];

  questionNumber++; // add 1 to the question number
  // reset values for if question is answered, if it's correct/wrong, etc.
  answered = false;
  selectedIndex = -1;
  feedback = "";
  feedbackColour = undefined;
  soundPlayedForQuestion = false;
  timeLeft = timeLimit;
}

function selectedAnswer(index) {
  selectedIndex = index;
  answered = true;
  if (index == currentQ.correctAnswer) { // check answer correctness and give a point if it's correct
    feedback = "Correct!";
    feedbackColour = color(40,150,70);
    points++;
  } else {
    feedback = "Incorrect!";
    feedbackColour = color(190,40,40);
  }
}

// quiz with 15 questions about Prince / TAFKAP, varying difficulty
// 2 timeline questions, 1 map question