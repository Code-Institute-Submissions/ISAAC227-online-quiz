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

    // Increment the index to move to the next main question
    currentQuestionIndex++;
}

function checkAnswer(userAnswer) {
  const currentQuestion = quizData[currentQuestionIndex - 1];

  if (userAnswer === currentQuestion.correctAnswer) {
    score++;
  }

  if (currentQuestion.subquestion) {
    // Display the subquestion
    showSubquestion();
  } else {
    // Move to the next question
    if (currentQuestionIndex < quizData.length) {
      // Display the next question
      showQuestion();
    } else {
      // End of the quiz, display the final result
      showResult();
    }
  }
}

function showSubquestion() {
    console.log("showSubquestion called");
  
    const currentQuestion = quizData[currentQuestionIndex - 1];
    if (Array.isArray(currentQuestion.subquestion)) {
      // If subquestion is an array, show each subquestion
      currentQuestion.subquestion.forEach((subquestion) => {
        displaySubquestion(subquestion);
      });
    } else {
      // If subquestion is an object, show it directly
      displaySubquestion(currentQuestion.subquestion);
    }
  
    // Increment the index to move to the next main question
    currentQuestionIndex++;
  }
  // ... (rest of your code)
  
  function displaySubquestion(subquestion) {
    questionContainer.innerText = subquestion.question;
  
    optionsContainer.innerHTML = "";
    for (let i = 0; i < subquestion.options.length; i++) {
      const optionButton = document.createElement("button");
      optionButton.innerText = subquestion.options[i];
      optionButton.addEventListener("click", () => {
        checkAnswer(subquestion.options[i]);
      });
  
      optionsContainer.appendChild(optionButton);
    }
  }

  function showResult() {
    resultContainer.style.display = "block";
    scoreSpan.innerText = score;
  
    if (score === quizData.length) {
      feedbackParagraph.innerText = "Congratulations! You got all the answers right.";
      alert('Good Job'); // This is where the alert is triggered
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

// Start the quiz
startQuiz();