// Importing chalk and readlineSync
const chalk = require('chalk');
const readlineSync = require('readline-sync');
// score is initiated below
let score = 0;

// question bank array with objects containing questions and answers.
let questionBank = [
  {question:`\n 1. How old is Rishikesh?. 
   a : 20 
   b : 21 
   c : 22\n Option: `,
  ans : 'a'
  },
  {question:`\n 2. What is Rishikesh's stream?. 
   a : Art 
   b : Engineering 
   c : Management\n Option: `,
  ans : 'b'
  },
  {question:`\n 3. Which is Rishikesh's favourite movie?. 
   a : 3 idiots 
   b : Interstellar 
   c : Persuit Of Happiness\n Option: `,
  ans : 'b'
  },
  {question:`\n 4. Which is the hometown of Rishikesh?. 
   a : Mumbai 
   b : Pune 
   c : Banglore\n Option: `,
  ans : 'b'
  },
  {question:`\n 5. Which is the favourite dish of Rishikesh?. 
   a : Puran-Poli 
   b : Biryani 
   c : Pav-Bhaji\n Option: `,
  ans : 'a'
  }
];

// Defining function for welcome message.
const welcomeMessage = () => {
  //Taking the input of players username
const userName = readlineSync.question("What's your name?\n");

// Displaying 
console.log(chalk.blue.bgWhite.bold(`               Welcome ${chalk.red(userName)},  You are on, Do you really know Rishikesh Game?.`));
console.log(chalk.white('__________________________________________'))

console.log(chalk.blueBright('You have to answer five question relaed to me. \n#1. Every correct answer will give you two points.\n#2.For wrong answer NO GAIN, NO PAIN. \n#3. Enter the correct option to answer the question.'));

console.log(chalk.red(`\n\n  I hope you will enjoy it. :)\n  Best Of Luck!`));
}


// Defining function for correct answer messages.
const correctAnsMessage = score =>{
  // Creating array of messages for correct answers to give random message from it.
  const winMessages = ['Great Job!','Very Good!','Ohh! Nice Guess!','Nicely Done!','Ohh! You nailed it!','Correct!','You are doing great job!'];
  const random = Math.floor(Math.random() * winMessages.length); 
  console.log(chalk.green(winMessages[random],`\n Your Score is: ${score} \n --------------------------------------------`)); 
}
// Defining Function for wrong answer messages.
const wrongAnsMessage = score => {
  // Creating array of messages for wrong answers to give random message from it.
  const loseMessages = ['Oh no! you lose.','Wrong! Try to remember this.','You are losing the game!','You lose!'];
  const random = Math.floor(Math.random() * loseMessages.length); 
  console.log(chalk.redBright(loseMessages[random],`\n Your Score is: ${score} \n --------------------------------------------`)); 
}
// Function for end Message
const endMessage = () =>{
  console.log(` Your final score is: ${score}\n I hope you enjoyed the game. Thanks for participating.`)
}

// Main playGame function is defined here
const playGame = () => {
  welcomeMessage();
  for(let i=0;i< questionBank.length;i++){
  var userAns = readlineSync.question(questionBank[i].question);
  if(userAns.toLowerCase() === questionBank[i].ans){
    score = score + 2;
    correctAnsMessage(score);
  }
  else{
    score = score;
    wrongAnsMessage(score);
  }
  
}}
//Calling Functions
playGame();
endMessage();
