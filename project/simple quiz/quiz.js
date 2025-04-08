const questions = [
  {
    question: "What is Capital Of Indonesia ?",
    answers: [
      { text: "Jakarta", correct: true },
      { text: "Bandung", correct: false },
      { text: "Kalimantan", correct: false },
      { text: "Medan", correct: false },
    ],
  },
  {
    question: "What is Capital Of Malaysia ?",
    answers: [
      { text: "Subang Jaya", correct: false },
      { text: "Penang", correct: false },
      { text: "Kuala Lumpur", correct: true },
      { text: "Johor Bahru", correct: false },
    ],
  },
  {
    question: "What is Capital Of Japan ?",
    answers: [
      { text: "Kyoto", correct: false },
      { text: "Osaka", correct: false },
      { text: "Nagoya", correct: false },
      { text: "Tokyo", correct: true },
    ],
  },
  {
    question: "Country With The Most People ?",
    answers: [
      { text: "China", correct: false },
      { text: "India", correct: true },
      { text: "Indonesia", correct: false },
      { text: "USA", correct: false },
    ],
  },
];
const questionElement = document.getElementById("question");
const answersBtn = document.getElementById("answer-btn");
const nextBtn = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answersBtn.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextBtn.style.display = "none";
  while (answersBtn.firstChild) {
    answersBtn.removeChild(answersBtn.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answersBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    startQuiz();
  }
});
function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
function showScore() {
  resetState();
  questionElement.innerHTML = `You Scored ${score} out of ${questions.length} `;
  nextBtn.innerHTML = "Play Again ?";
  nextBtn.style.display = "block";
}

startQuiz();
