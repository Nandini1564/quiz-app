const questions = [
  {
    question: "What is JavaScript?",
    options: ["Programming Language", "Image", "Server", "OS"],
    answer: "Programming Language"
  },
  {
    question: "What is HTML used for?",
    options: ["Structure", "Styling", "Logic", "Database"],
    answer: "Structure"
  },
  {
    question: "What is CSS used for?",
    options: ["Styling", "Backend", "Database", "AI"],
    answer: "Styling"
  }
];

let current = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
  let q = questions[current];

  document.getElementById("question").innerText = q.question;

  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  selectedAnswer = null;
  document.getElementById("nextBtn").disabled = true;

  q.options.forEach(opt => {
    let div = document.createElement("div");
    div.innerText = opt;
    div.classList.add("option");

    div.onclick = () => selectOption(div, opt);

    optionsDiv.appendChild(div);
  });
}

function selectOption(div, opt) {
  document.querySelectorAll(".option").forEach(el => {
    el.classList.remove("selected");
  });

  div.classList.add("selected");
  selectedAnswer = opt;

  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  if (selectedAnswer === questions[current].answer) {
    score++;
  }

  current++;

  if (current < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {

  document.getElementById("quiz-box").style.display = "none";

  let message = "";

  if (score === 3) {
    message = "Excellent 🎉";
  } 
  else if (score === 2) {
    message = "Good Job 👍";
  } 
  else {
    message = "Try Again 😅";
  }

  document.getElementById("result").innerText =
    `Your Score: ${score} / ${questions.length}
     ${message}`;

  document.getElementById("restartBtn").style.display = "inline-block";
} 

function restartQuiz() {
  current = 0;
  score = 0;

  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("result").innerText = "";
  document.getElementById("restartBtn").style.display = "none";

  loadQuestion();
}

loadQuestion();