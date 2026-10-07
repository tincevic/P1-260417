let questionsAnswers = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15]; 
let q1 = {
  question: "Who wrote this 1984 song?", // Let's Go Crazy
  choices: ["Madonna", "David Bowie", "Prince", "KISS"],
  correctAnswer: 2,
}
let q2 = {
  question: "Which of these is not part of the \"Big Three\" of the '80s?", // David Bowie
  choices: ["David Bowie", "Prince", "Michael Jackson", "Madonna"],
  correctAnswer: 0,
}
let q3 = {
  question: "Who changed their name to an unpronounceable symbol?", // Prince / O(+>
  choices: ["Prince", "Metallica", "Yoko Ono", "None of the above"],
  correctAnswer: 0,
}
let q4 = {
  question: "What song is this?", // Sign O' the Times
  choices: ["Family Affair", "Sign O' the Times", "Welcome to the Jungle", "Love Song"],
  correctAnswer: 1,
}
let q5 = {
  question: "In what year was this album released?", // LoveSexy - TIMELINE
  choices: ["1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988", "1989", "1990"],
  correctAnswer: 8,
}
let q6 = {
  question: "Which country or area is in this song title?", // Born in the U.S.A. - MAP
  choices: ["U.S.A.", "Ireland", "Yugoslavia", "Italy", "USSR", "Africa", "France"],
  correctAnswer: 0,
}
let q7 = {
  question: "Which month is mentioned in this song?", // September - TIMELINE
  choices: ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  correctAnswer: 6,
}
let q8 = {
  question: "Which famous location is mentioned in this song?", // Hollywood Swinging
  choices: ["Mount Rushmore", "Hollywood", "Eiffel Tower", "Great Wall of China"],
  correctAnswer: 1,
}
let q9 = {
  question: "True or False: Love Song is a duet with Madonna and Michael Jackson.", // False
  choices: ["True", "False"],
  correctAnswer: 1,
}
let q10 = {
  question: "Who is featured on this song?", // U Got the Look
  choices: ["Madonna", "Sheena Easton", "Cyndi Lauper", "Whitney Houston"],
  correctAnswer: 1,
}
let q11 = {
  question: "What song is this?", // Take on Me
  choices: ["Take on Me", "Tainted Love", "Sweet Dreams", "Everybody Wants to Rule the World"],
  correctAnswer: 0,
}
let q12 = {
  question: "Which band recorded this song written by Prince?", // The Bangles - Manic Monday
  choices: ["Madness", "The Go-Go's", "The Bangles", "Heart"],
  correctAnswer: 2,
}
let q13 = {
  question: "For which film series was this song recorded?", // A View To A Kill
  choices: ["Back to the Future", "Beverly Hills Cop", "James Bond", "Rocky"],
  correctAnswer: 2,
}
let q14 = {
  question: "True or False: The soundtrack to Tim Burton's Batman was primarily recorded by Prince.",
  choices: ["True", "False"],
  correctAnswer: 0,
}
let q15 = {
  question: "True or False: the Black Album by Prince is one of the most bootlegged records ever.",
  choices: ["True", "False"],
  correctAnswer: 0,
}

// per-question assets
let assetQ1; // sound
let assetQ4; // sound
let assetQ5; // image
let mapQ6; // image
let assetQ7; // sound
let assetQ8; // sound
let assetQ9; // image
let assetQ10; // sound
let assetQ11; // sound
let assetQ12; // sound
let assetQ13; // sound
let assetQ14; // image
let assetQ15; // image

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
  assetQ9 = loadImage('/../Assets/q9.jpg'); // image
  assetQ14 = loadImage('/../Assets/q14.jpg'); // image
  assetQ15 = loadImage('/../Assets/q15.jpg'); // image
}

function setup() {
  createCanvas(1200, 800); 
}

function draw() {
  background(120);
  fill(255);
}

// 70s/80s quiz with 15 questions about music, varying difficulty
// 2 timeline questions, 1 map question