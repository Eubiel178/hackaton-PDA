const quiz = document.getElementById('quiz');
const countQuestion = document.getElementById('count-question');
const tittleNumberOfQuestion = document.getElementById('tol-num-que');
const questionNumber = document.getElementById('question-number');
const questionTitle = document.getElementById('question');
const answerLable = document.querySelectorAll('.answer-lable');
const nextQuestionButton = document.getElementById('next-question-btn');
const submitQuizButton = document.getElementById('submit-button');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const quizWrapper = document.querySelector('.quiz-wrapper');
const showQuizButton = document.getElementById('show-quiz-btn');

showQuizButton.addEventListener('click', function () {
  quizWrapper.style.display = 'block'; // Mostra o quiz
  this.style.display = 'none'; // Esconde o botão
  loadQuiz(); // Carrega a primeira questão do quiz
});

const allInputs = document.querySelectorAll("input[type='radio']");

let currentQuestion = 0,
  correctAnswers = 0;

const reset = () => {
  allInputs.forEach((input) => (input.checked = false));
};

const loadQuiz = () => {
  countQuestion.textContent = currentQuestion + 1;
  questionNumber.textContent = currentQuestion + 1;

  tittleNumberOfQuestion.textContent = quizData.length;

  questionTitle.textContent = quizData[currentQuestion].question;
  answerLable[0].textContent = quizData[currentQuestion].answer_a;
  answerLable[1].textContent = quizData[currentQuestion].answer_b;
  answerLable[2].textContent = quizData[currentQuestion].answer_c;
  answerLable[3].textContent = quizData[currentQuestion].answer_d;

  reset();

  if (currentQuestion == quizData.length - 1) {
    nextQuestionButton.style.display = 'none';
    submitQuizButton.style.display = 'block';
  }
};

const getSelected = () => {
  let answer = Array.from(allInputs)
    .filter((input) => input.checked)
    .pop().value;

  return answer;
};

const checkPassword = (answer) =>
  answer == quizData[currentQuestion].correct_answer;

const nextQuestionClickHandler = () => {
  let answer = getSelected();
  if (answer) {
    if (checkPassword(answer)) correctAnswers++;

    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    }
  }
};

const submitQuizClickHandler = () => {
  let answer = getSelected();
  if (answer) {
    if (checkPassword(answer)) correctAnswers++;
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuiz();
    } else {
      quizWrapper.style.display = 'none'; // Esconde o quiz
      resultElement.style.display = 'block'; // Mostra o resultado
      scoreElement.textContent = `Perguntas respondidas corretamente ${correctAnswers} / ${quizData.length}`;
    }
  }
};

nextQuestionButton.addEventListener('click', nextQuestionClickHandler);
submitQuizButton.addEventListener('click', submitQuizClickHandler);
loadQuiz();
