const readlineSync = require("readline-sync");

function welcome() {
  const name = readlineSync.question("What is your good name ? \n");
  console.log(`Welcome ${name} !`);
  console.log("-------------------------------------------------");
  console.log("Lets play the Quiz: Do you know me");
}

const questions = [
  {
    ques: "What's my name ?\n",
    ans: "Prathamesh",
  },
  {
    ques: "What's my age ?\n",
    ans: "24",
  },
  {
    ques: "Where do i live ?\n",
    ans: "Thane",
  },
  {
    ques: "What's my native place ?\n",
    ans: "Satara",
  },
  {
    ques: "What's my favourite food dish ?\n",
    ans: "Mom's misal pav",
  },
];

const highScores = [
  {
    name: "Rohan",
    score: 5,
  },
  {
    name: "Rahul",
    score: 4,
  },
];

var currentScore = 0;

function play(ques, ans) {
  var userAns = readlineSync.question(ques);

  if (userAns.toUpperCase() === ans.toUpperCase()) {
    console.log("Right Ans");
    currentScore++;
  } else {
    console.log("Wrong ans");
  }
  console.log("Current Score : ", currentScore);
  console.log("--------------------------------");
}

function game() {
  questions.forEach((item) => {
    play(item.ques, item.ans);
  });
}

function showScore() {
  console.log("Your Final Score:", currentScore);
  console.log("Checkout the high scores: ");
  highScores.forEach((score) => console.log(score.name, " : ", score.score));
}

welcome();
game();
showScore();
