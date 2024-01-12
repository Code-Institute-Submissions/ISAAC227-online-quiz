
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

    currentQuestionIndex = currentQuestionIndex + 1;

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
        feedbackParagraph.innerText = "Good effort! Keep practicing.";           
        
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = "none";
    startQuiz();
}

startQuiz();