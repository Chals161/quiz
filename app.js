let quizData = [];


if (localStorage.getItem("quizData")) {
  quizData = JSON.parse(localStorage.getItem("quizData"));
} else {
  quizData = [
    {
      question: "What is the most common skin type?",
      options: ["Dry", "Oily", "Combination", "Sensitive"],
      answer: "Combination",
      counter: 0
    },
    {
      question: "What is the most popular cosmetic surgery procedure?",
      options: ["Breast Augmentation", "Liposuction", "Rhinoplasty", "Botox"],
      answer: "Breast Augmentation",
      counter: 0
    },
    {
      question: "What is the best way to apply foundation for a natural look?",
      options: ["Fingers", "Sponge", "Brush", "Airbrush"],
      answer: "Sponge",
      counter: 0
    },
    {
      question: "What is the active ingredient in most acne treatments?",
      options: ["Benzoyl Peroxide", "Salicylic Acid", "Retinol", "Hyaluronic Acid"],
      answer: "Benzoyl Peroxide",
      counter: 0
    },
    {
      question: "What is the purpose of using a toner in a skincare routine?",
      options: ["To cleanse the skin", "To remove makeup", "To hydrate the skin", "To exfoliate the skin"],
      answer: "To exfoliate the skin",
      counter: 0
    },
    {
      question: "What is the most common cause of split ends?",
      options: ["Heat styling", "Coloring", "Sun exposure", "Chemical treatments"],
      answer: "Heat styling",
      counter: 0
    },
    {
      question: "What ingredient is commonly found in anti-aging skincare products?",
      options: ["Collagen", "Hyaluronic acid", "Vitamin C", "All of the above"],
      answer: "All of the above",
      counter: 0
    },
    {
      question: "What type of hairbrush is best for detangling wet hair?",
      options: ["Paddle brush", "Round brush", "Denman brush", "Wet brush"],
      answer: "Wet brush",
      counter: 0
    },
    {
      question: "What is the main active ingredient in most acne spot treatments?",
      options: ["Benzoyl peroxide", "Salicylic acid", "Retinol", "Glycolic acid"],
      answer: "Benzoyl peroxide",
      counter: 0
    },
    {
      question: "What is the main benefit of using a face serum?",
      options: ["To hydrate the skin", "To exfoliate the skin", "To brighten the skin", "All of the above"],
      answer: "All of the above",
      counter: 0
    }
  ];

  /*fetch("beauty.json")
.then((response) => response.json())
.then((beautyJsonData) => {
  for (let i=0;i<beautyJsonData.length;i++){
    for (let j=0;j<quizData.length;j++){
      if (quizData[j].question == beautyJsonData[i].question){
        break;
      }
    }
    if (j == quizData.length) {
      quizData[j].question = beautyJsonData[i].question;
      quizData[j].options = beautyJsonData[i].options;
      quizData[j].answer = beautyJsonData[i].answer;
      quizData[j].counter = beautyJsonData[i].counter;
    }
  }
});*/


  localStorage.setItem("quizData", JSON.stringify(quizData));
}

const quizForm = document.querySelector("#quiz-form");
const questionElement = document.querySelector("#question");
const optionsElement = document.querySelector("#options");

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const quizQuestion = quizData[currentQuestion];
  questionElement.textContent = quizQuestion.question;
  optionsElement.innerHTML = "";
  quizQuestion.options.forEach(option => {
    const optionElement = document.createElement("label");
    optionElement.innerHTML = `
      <input type="radio" name="answer" value="${option}">
      ${option}
    `;
    optionsElement.appendChild(optionElement);
  });
}

function checkAnswer() {
  const userAnswer = quizForm.elements.answer.value;
  const correctAnswer = quizData[currentQuestion].answer;
  if (userAnswer === correctAnswer) {
    quizData[currentQuestion].counter++;
    score++;
  }
}

function showResult() {
  localStorage.setItem("quizData", JSON.stringify(quizData));
  var resultMessage = `You scored ${score} out of ${quizData.length} `;

  for (let i=0; i<quizData.length; i++){
    if (quizData[i].counter>0){
     resultMessage += quizData[i].question +" was answered  "+quizData[i].counter +" times right" ;
    }
  }

  alert(resultMessage);
}

function nextQuestion() {
  checkAnswer();
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

quizForm.addEventListener("submit", event => {
  event.preventDefault();
  nextQuestion();
});

showQuestion();
