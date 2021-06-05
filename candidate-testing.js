const input = require('readline-sync');

let candidateName = '';

let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
// let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
// let correctAnswers = ['Sally Ride', "true", "40", "Trajectory", "3"];

let questions = ['Who was the first American woman in space? ','True or false: 5000 meters = 5 kilometers. ','(5 + 3)/2 * 10 = ? ','Given the array [8, "Orbit","Trajectory", 45] what entry is at index 2? ','What is the minimum crew size for the International Space Station (ISS)? '];
let correctAnswers = ['Sally Ride',"true","40","Trajectory","3"];

let correctAnswers = ['Sally Ride', "true", "40", "Trajectory", "3"];  
let candidateAnswers = [];
let testString = '';
let testSummary = '';
let status;

function askForName() {
  candidateName = input.question('What is your name? '); 
  return candidateName;
}

function askQuestion() {

  for (let i = 0; i < questions.length; i++) {
    
    // !!! Couldn't figure out how to get input validation to prevent empty string submission !!!
    // while (candidateAnswer !== '') {
    //   candidateAnswer = input.question(question[i]);
    // } !!!
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(String(candidateAnswer));
  }
}

function gradeQuiz(candidateAnswers) {
  let numberCorrect = 0;

  for (let i = 0; i < candidateAnswers.length; i++) {

    testString += `${i + 1}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n\n`;
    

    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numberCorrect += 1;
      //console.log(numberCorrect);
    }
  }
  
  // Calculate the candidate's score as a percentage,
  // Somewhere below TODO 1.2c you should see a variable declaration for grade. Use this to calculate the candidate's score.
  // To calculate the candidate's percentage, use the equation: (Number of Correct Answers) / (Number of Quiz Questions) * 100
  let grade = ((numberCorrect / questions.length) * 100);
  //console.log(grade);
  // Convey to the candidate if they have passed the quiz with an 80% or if they have failed.
  if (grade >= 80) {
    status = 'PASSED';
  } else {
    status = 'FAILED';
  }
  // Convey to the candidate if they have passed the quiz with an 80% or if they have failed cot'd.
  // Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate's responses in addition to the corresponding correct answers.
  testSummary += `\nCandidate Name: ${candidateName}\n${testString}>>> Overall Grade: ${grade}% (${numberCorrect} of ${questions.length} responses correct) <<<\n>>> Status: ${status} <<<`;

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  // Look for TODO 1.1c. Underneath it, write a message to the console greeting the user using the name they just provided.
  console.log(`\nHello, ${candidateName}!\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  console.log(testSummary);
  // Had to print these values to find out what my code was doing wrong!
  //console.log(gradeQuiz(candidateAnswers));
  //console.log(grade);
  //console.log(numberCorrect + ' = numberCorrect');
  //console.log(questions.length);
  //console.log(candidateAnswers.length);
}


// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};


