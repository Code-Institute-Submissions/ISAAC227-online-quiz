
var quizData = [
  {
    question: "Who is the founder of Reggae Music?",
    options: ["Bob Marley", "Toots and Maytals", "Lee Perry", "Shaggy"],
    correctAnswer: "Toots and Maytals",
    subsquestions: {
    question: "In 1968, the band Toots and the Maytals recorded their first Reggae song titled?",
    options: ["Reggae", "Jah", "54-46", "Buffalo"],
    correctAnswer: "54-46"
    }
  }
]
// =============================DATA =================================


let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const scoreSpan = document.getElementById("score");
const feedbackParagraph = document.getElementById("feedback");

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionContainer.innerHTML = currentQuestion.question;

    optionsContainer.innerHTML = "";
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const optionButton = document.createElement("button");
        optionButton.innerText = currentQuestion.options[i];
        optionButton.addEventListener("click", function () {
            checkAnswer(currentQuestion.options[i]);
        });
        optionsContainer.appendChild(optionButton);
    }
}

function checkAnswer(userAnswer) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (userAnswer === currentQuestion.correctAnswer) {
        score = score + 1;
    }

    currentQuestionIndex++;

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
    } else {
        feedbackParagraph.innerText = "Good effort! Keep practicing.";            
        alert('Good Job');
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    startQuiz();
}

startQuiz();