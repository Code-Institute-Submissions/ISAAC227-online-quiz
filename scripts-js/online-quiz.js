let currentQuestionIndex = 0;
let score = 0;
let username = "";

const startQuestioneer =document.getElementById("start-questioneer");
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const scoreSpan = document.getElementById("score");
const feedbackParagraph = document.getElementById("feedback");
const usernameid = document.getElementById("username-id")

function toggleElement(value) {
  username = value;
  if (!username) {
    quizContainer.style.display = 'none';
    startQuestioneer.style.display = 'block';
  } else {
    startQuestioneer.style.display = 'none';
    quizContainer.style.display = 'block';
    usernameid.innerHTML = username || "";
  }
}

toggleElement();

function startQuiz() {
  showQuestion();
}
function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;

    optionsContainer.innerHTML = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.innerText = currentQuestion.options[i];
        optionButton.addEventListener("click", function () {
            checkAnswer(currentQuestion.options[i]);
        });
        optionsContainer.appendChild(optionButton);
    }

    
    currentQuestionIndex++;
}

function checkAnswer(userAnswer) {
  const currentQuestion = quizData[currentQuestionIndex - 1];

  if (userAnswer === currentQuestion.correctAnswer) {
    score++;
  }

    
    if (currentQuestionIndex < quizData.length) {
      
      showQuestion();
    } else {
      
      showResult();
    }
  
}


  function showResult() {
    resultContainer.style.display = "block";
    scoreSpan.innerText = score;
  
    if (score === quizData.length) {
      feedbackParagraph.innerText = "Congratulations! You got all the answers right.";
      alert('Good Job'); 
    } else {
      feedbackParagraph.innerText = "Good effort! Keep practicing, "+ username;
    }
  }
function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultContainer.style.display = "none";
  startQuiz();
}


startQuiz();