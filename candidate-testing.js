const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
//comment
// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = 'Who was the first American woman in space? ';
let correctAnswer = 'Sally Ride';
let candidateAnswer = '';
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride', "true", "40", "Trajectory", "3"];  
let candidateAnswers = [];
let numberCorrect = 0;
let testString = '';
let testSummary = '';
//let grade;
let status;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('What is your name? '); 
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // Replace your code from TODO 1.2b with a loop that programmatically asks each question in the array and stores the user's responses.
  for (let i = 0; i < questions.length; i++) {
    
    // !!! Couldn't figure out how to get input validation to prevent empty string submission !!!
    // while (candidateAnswer !== '') {
    //   candidateAnswer = input.question(question[i]);
    // } !!!
    // Asks question
    candidateAnswer = input.question(questions[i]);
    // Stores response
    candidateAnswers.push(String(candidateAnswer));
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  // Lines 45 - 52 = Compare the candidate answers with the correct answers, line 48 is first part of template literal required for the template literal on line 69 for test feedback.
  for (let i = 0; i < candidateAnswers.length; i++) {
    // testString was written to reduce redundancy of code in case extra questions and answers are added to the questions and correctAnswers array variables.
    testString += `${i + 1}) ${questions[i]}\nYour Answer: ${candidateAnswers[i]}\nCorrect Answer: ${correctAnswers[i]}\n\n`;
    
    // Checking for the correct answer should be case insensitive (e.g. "Orbit" is the same as "orbit").
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numberCorrect += 1;
    }
  }
  
  // Calculate the candidate's score as a percentage,
  // Somewhere below TODO 1.2c you should see a variable declaration for grade. Use this to calculate the candidate's score.
  // To calculate the candidate's percentage, use the equation: (Number of Correct Answers) / (Number of Quiz Questions) * 100
  let grade = (numberCorrect) / (questions.length) * 100;
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
  //console.log(grade);
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
