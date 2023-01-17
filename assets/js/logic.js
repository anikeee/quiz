// Initialize variables for quiz
let currentQuestion = 0;
let score = 0;
let time = 60;
let timerInterval;

const questions = [
  {
    question: "What is the syntax for creating a variable in JavaScript?",
    answers: {
      a: "var variableName = value;",
      b: "let variableName = value;",
      c: "const variableName = value;",
      d: "create variableName = value;"
    },
    correctAnswer: "b"
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    answers: {
      a: "String",
      b: "Number",
      c: "Boolean",
      d: "Image"
    },
    correctAnswer: "d"
  },
  {
    question: "What is the purpose of the var keyword in JavaScript?",
    answers: {
      a: "To declare a variable",
      b: "To create an object",
      c: "To create a function",
      d: "To create a loop"
    },
    correctAnswer: "a"
  },
  // Add more questions as needed
];

// Start quiz function
function startQuiz() {
  // Start timer
  timerInterval = setInterval(() => {
    time--;
    if (time === 0) {
      endQuiz();
    }
    // Update timer on page
    document.getElementById("timer").innerHTML = time;
  }, 1000);

  // Show first question
  showQuestion(currentQuestion);
}

// Show question function
function showQuestion(questionIndex) {
  // Get question and answers from array
  const question = questions[questionIndex];
  const answers = question.answers;

  // Update question on page
  document.getElementById("question").innerHTML = question.question;

  // Clear previous answers
  document.getElementById("answers").innerHTML = "";

  // Create buttons for each answer
  for (let letter in answers) {
    const button = document.createElement("button");
    button.innerHTML = letter + ". " + answers[letter];
    button.classList.add("answer-button");
    button.addEventListener("click", checkAnswer);
    document.getElementById("answers").appendChild(button);
  }
}

// Check answer function
function checkAnswer() {
  // Get answer from button clicked
  const answer = this.innerHTML.split(".")[0];

  // Check if answer is correct
  if (answer === questions[currentQuestion].correctAnswer) {
    score++;
  } else {
    time -= 10;
  }

  // Move to next question
  currentQuestion++;

  // End quiz if no more questions
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    showQuestion(currentQuestion);
  }
}

// End quiz function
function endQuiz() {
    clearInterval(timerInterval);
    document.getElementById("quiz").innerHTML = "";
  
    // Show score
    const scoreMessage = document.createElement("p");
    scoreMessage.innerHTML = "Your score is " + score + ".";
    document.getElementById("quiz").appendChild(scoreMessage);
  
    // Create form for initials
    const form = document.createElement("form");
    const initialsLabel = document.createElement("label");
    initialsLabel.innerHTML = "Enter your initials: ";
    const initialsInput = document.createElement("input");
    initialsInput.type = "text";
    initialsInput.maxLength = 3;
    initialsInput.required = true;
    form.appendChild(initialsLabel);
    form.appendChild(initialsInput);
  
    // Create submit button
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Save Score";
    form.appendChild(submitButton);
  
    // Add form to page
    document.getElementById("quiz").appendChild(form);
  
    // Handle form submission
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const initials = initialsInput.value;
  
      // Save score and initials to local storage
      localStorage.setItem("initials", initials);
      localStorage.setItem("score", score);
  
      // Redirect to high scores page
      window.location.href = "highscores.html";
    });
  }
  
