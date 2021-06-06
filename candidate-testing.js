const input = require('readline-sync');

let candidateName = '';
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride', "true", "40", "Trajectory", "3"];
let candidateAnswers = [];
let testString = '';
let testSummary = '';

function askForName() {
  candidateName = input.question('What is your name? '); 
  return candidateName;
}

function askQuestion() {

  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = input.question(questions[i]);
    candidateAnswers.push(String(candidateAnswer));
  }
}

function gradeQuiz(candidateAnswers) {
  let numberCorrect = 0;

  for (let i = 0; i < candidateAnswers.length; i++) {

    testString += `${i + 1}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n\n`;
    
    let correctCounter = (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) ? numberCorrect += 1 : numberCorrect += 0;

  }
  
  let grade = ((numberCorrect / questions.length) * 100);
    
  let status = (grade >= 80) ? "PASSED" : "FAILED";

  testSummary += `\nCandidate Name: ${candidateName}\n${testString}>>> Overall Grade: ${grade}% (${numberCorrect} of ${questions.length} responses correct) <<<\n>>> Status: ${status} <<<`;

  return grade;
}

function runProgram() {
  askForName();
  console.log(`\nHello, ${candidateName}!\n`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
  console.log(testSummary);
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



