/* ===== DATA ===== */
const quiz = [
  {
    question: "Which language runs in a web browser?",
    choices: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does CSS stand for?",
    choices: ["Central Style Sheets", "Cascading Style Sheets",
              "Cascading Simple Sheets", "Cars SUVs Sailboats"],
    answer: 1
  },
  {
    question: "What year was JavaScript launched?",
    choices: ["1996", "1995", "1994", "none of the above"],
    answer: 1
  },
  {
    question: "Inside which HTML element do we put JavaScript?",
    choices: ["<js>", "<javascript>", "<script>", "<code>"],
    answer: 2
  }
];

/* ===== STATE ===== */
let current = 0;
let score = 0;

/* ===== DOM SHORTCUTS ===== */
const qText   = document.getElementById("question-text");
const choices = document.getElementById("choice-list");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");
const totalEl = document.getElementById("total");

totalEl.textContent = quiz.length;

/* ===== FUNCTIONS ===== */
function showQuestion() {
  nextBtn.classList.add("hidden");
  choices.innerHTML = "";

  const q = quiz[current];
  qText.textContent = q.question;

  q.choices.forEach((choice, idx) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = choice;
    btn.dataset.index = idx;
    btn.addEventListener("click", selectAnswer);
    choices.appendChild(btn);
  });
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const selectedIndex = Number(selectedBtn.dataset.index);
  const correctIndex = quiz[current].answer;

  // disable all buttons
  [...choices.children].forEach(b => b.classList.add("disabled"));

  // mark correct / wrong
  if (selectedIndex === correctIndex) {
    selectedBtn.classList.add("correct");
    score++;
    scoreEl.textContent = score;
  } else {
    selectedBtn.classList.add("wrong");
    choices.children[correctIndex].classList.add("correct");
  }

  // reveal next button
  nextBtn.classList.remove("hidden");
}

function nextQuestion() {
  current++;
  if (current < quiz.length) {
    showQuestion();
  } else {
    // game over
    qText.textContent = `Game Over! You scored ${score} / ${quiz.length}`;
    choices.innerHTML = "";
    nextBtn.classList.add("hidden");
  }
}

/* ===== EVENTS ===== */
nextBtn.addEventListener("click", nextQuestion);

/* ===== INIT ===== */
showQuestion();