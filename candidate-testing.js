const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = input.question('What is your name? ');
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? ', 'What is the minimum crew size for the ISS? '];
let correctAnswer = ['Sally Ride', "true", "40", "Trajectory", "3"];
let candidateAnswer = '';
let questions;
let correctAnswers;  
let candidateAnswers =[];
let numberCorrect = 0;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < question.length; i++) {
    let candidateAnswer = input.question(question[i]);
    candidateAnswers.push(String(candidateAnswer));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for (let i = 0; i < candidateAnswers.length; i++) {
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
  console.log(`\nCandidate Name: ${candidateName}
1) Who was the first American woman in space?
Your Answer: ${candidateAnswers[0]}
Correct Answer: ${correctAnswer[0]}

2) True or false: 5000 meters = 5 kilometers.
Your Answer: ${candidateAnswers[1]}
Correct Answer: ${correctAnswer[1]}

3) (5 + 3)/2 * 10 = ?
Your Answer: ${candidateAnswers[2]}
Correct Answer: ${correctAnswer[2]}

4) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?
Your Answer: ${candidateAnswers[3]}
Correct Answer: ${correctAnswer[3]}

5) What is the minimum crew size for the ISS?
Your Answer: ${candidateAnswers[4]}
Correct Answer: ${correctAnswer[4]}

>>> Overall Grade: ${grade}% (${numberCorrect} of ${question.length} responses correct) <<<
>>> Status: ${status} <<<`);

  //return `${grade}`;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Hello, ${candidateName}!`);
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