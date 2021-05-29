const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question('What is your name? ');
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? '];
let correctAnswer = ['Sally Ride', "true", "40", "Trajectory", "3"];
let candidateAnswer;
let questions;
let correctAnswers;  
let candidateAnswers =[];
let numberCorrect = 0;
let testString;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < question.length; i++) {
    
    // !!! Couldn't figure out how to get input validation to prevent empty string submission !!!
    // while (candidateAnswer !== '') {
    //   candidateAnswer = input.question(question[i]);
    // }
    
    candidateAnswer = input.question(question[i]);

    candidateAnswers.push(String(candidateAnswer));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < candidateAnswers.length; i++) {

    testString += `${i + 1}) ${question[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswer[i]}\n\n`;

    if (candidateAnswers[i].toLowerCase() === correctAnswer[i].toLowerCase()) {
      numberCorrect += 1;
    }
  }
  

  let grade = (numberCorrect / question.length) * 100;

  if (grade >= 80) {
    status = 'PASSED';
  } else {
    status = 'FAILED';
  }

  return console.log(`\nCandidate Name: ${candidateName}
${testString}>>> Overall Grade: ${grade}% (${numberCorrect} of ${question.length} responses correct) <<<
>>> Status: ${status} <<<`);
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`\nHello, ${candidateName}!\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
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