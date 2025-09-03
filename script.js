let questions = [
{
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "int", "string", "declare"],
        correctAnswer: "var",
        time: 30,
        marks: 10
    },
    {
        question: "Which of the following is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Undefined"],
        correctAnswer: "Float",
        time: 30,
        marks: 10
    },
    {
        question: "Which symbol is used for single-line comments in JavaScript?",
        options: ["//", "/*", "#", "<!--"],
        correctAnswer: "//",
        time: 20,
        marks: 5
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Oracle"],
        correctAnswer: "Netscape",
        time: 30,
        marks: 10
    },
    {
        question: "Which method is used to print output in JavaScript?",
        options: ["cout()", "console.log()", "print()", "document.write()"],
        correctAnswer: "console.log()",
        time: 30,
        marks: 10
    },
    {
        question: "What is the default value of an uninitialized variable in JavaScript?",
        options: ["null", "0", "undefined", "empty string"],
        correctAnswer: "undefined",
        time: 30,
        marks: 10
    },
    {
        question: "Which operator is used to compare both value and type?",
        options: ["==", "===", "!=", "!=="],
        correctAnswer: "===",
        time: 25,
        marks: 10
    },
    {
        question: "Which function is used to parse a string into an integer?",
        options: ["parseInt()", "Number()", "parseFloat()", "toString()"],
        correctAnswer: "parseInt()",
        time: 25,
        marks: 10
    },
    {
        question: "What is the output of: typeof null?",
        options: ["null", "object", "undefined", "boolean"],
        correctAnswer: "object",
        time: 30,
        marks: 10
    },
    {
        question: "Which array method adds an element at the end?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()",
        time: 20,
        marks: 5
    },
    {
        question: "Which array method removes the last element?",
        options: ["push()", "pop()", "shift()", "splice()"],
        correctAnswer: "pop()",
        time: 20,
        marks: 5
    },
    {
        question: "Which keyword is used to define a constant variable?",
        options: ["const", "let", "var", "static"],
        correctAnswer: "const",
        time: 25,
        marks: 10
    },
    {
        question: "What is the correct way to write an arrow function?",
        options: ["function => {}", "() => {}", "=> function()", "func -> {}"],
        correctAnswer: "() => {}",
        time: 30,
        marks: 10
    },
    {
        question: "Which loop is guaranteed to run at least once?",
        options: ["for loop", "while loop", "do...while loop", "foreach"],
        correctAnswer: "do...while loop",
        time: 30,
        marks: 10
    },
    {
        question: "Which object is the root of JavaScript in a browser?",
        options: ["document", "window", "global", "console"],
        correctAnswer: "window",
        time: 30,
        marks: 10
    },
    {
        question: "Which function is used to convert JSON into a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "toJSON()"],
        correctAnswer: "JSON.parse()",
        time: 30,
        marks: 10
    },
    {
        question: "Which function converts a JavaScript object into a JSON string?",
        options: ["JSON.parse()", "JSON.stringify()", "object.toJSON()", "JSON.toString()"],
        correctAnswer: "JSON.stringify()",
        time: 30,
        marks: 10
    },
    {
        question: "Which method is used to select an element by its ID in DOM?",
        options: ["getElementById()", "getElementsByClass()", "querySelectorAll()", "getId()"],
        correctAnswer: "getElementById()",
        time: 30,
        marks: 10
    },
    {
        question: "Which event is triggered when a user clicks on an element?",
        options: ["onmouseover", "onchange", "onclick", "onload"],
        correctAnswer: "onclick",
        time: 25,
        marks: 10
    },
    {
        question: "Which keyword is used to handle errors in JavaScript?",
        options: ["try...catch", "error...handle", "catch...throw", "throw...handle"],
        correctAnswer: "try...catch",
        time: 30,
        marks: 10
    },
    {
        question: "What will 2 + '2' return?",
        options: ["22", "4", "NaN", "undefined"],
        correctAnswer: "22",
        time: 25,
        marks: 10
    },
    {
        question: "What will 2 - '2' return?",
        options: ["0", "22", "NaN", "undefined"],
        correctAnswer: "0",
        time: 25,
        marks: 10
    },
    {
        question: "Which method is used to join all elements of an array into a string?",
        options: ["concat()", "join()", "toString()", "slice()"],
        correctAnswer: "join()",
        time: 30,
        marks: 10
    },
    {
        question: "Which statement is used to exit a loop in JavaScript?",
        options: ["exit", "return", "break", "stop"],
        correctAnswer: "break",
        time: 30,
        marks: 10
    },
    {
        question: "What will be the output of Boolean('')?",
        options: ["true", "false", "null", "undefined"],
        correctAnswer: "false",
        time: 25,
        marks: 10
    },
    {
        question: "What is NaN in JavaScript?",
        options: ["Not a Name", "Not a Number", "No any Null", "Negative Number"],
        correctAnswer: "Not a Number",
        time: 30,
        marks: 10
    },
    {
        question: "Which method removes the first element from an array?",
        options: ["shift()", "pop()", "splice()", "slice()"],
        correctAnswer: "shift()",
        time: 30,
        marks: 10
    },
    {
        question: "Which keyword is used with promises?",
        options: ["async/await", "wait/then", "hold/release", "fetch/return"],
        correctAnswer: "async/await",
        time: 30,
        marks: 10
    },
    {
        question: "Which function executes a callback after a given time?",
        options: ["setInterval()", "setTimeout()", "setDelay()", "waitFor()"],
        correctAnswer: "setTimeout()",
        time: 30,
        marks: 10
    },
    {
        question: "Which function executes repeatedly after a given interval?",
        options: ["setTimeout()", "setInterval()", "setRepeat()", "setLoop()"],
        correctAnswer: "setInterval()",
        time: 30,
        marks: 10
    },
    {
        question: "What is the output of typeof NaN?",
        options: ["NaN", "undefined", "number", "string"],
        correctAnswer: "number",
        time: 25,
        marks: 10
    },
    {
        question: "Which operator is used for logical AND?",
        options: ["&&", "||", "&", "AND"],
        correctAnswer: "&&",
        time: 25,
        marks: 10
    },
    {
        question: "Which operator is used for logical OR?",
        options: ["&&", "||", "|", "OR"],
        correctAnswer: "||",
        time: 25,
        marks: 10
    },
    {
        question: "Which keyword is used to create a class in JavaScript?",
        options: ["class", "function", "object", "struct"],
        correctAnswer: "class",
        time: 30,
        marks: 10
    },
    {
        question: "Which method is called when an object is created from a class?",
        options: ["_init_", "constructor", "create", "new"],
        correctAnswer: "constructor",
        time: 30,
        marks: 10
    },
    {
        question: "Which operator is used to check if a property exists in an object?",
        options: ["in", "exists", "contains", "has"],
        correctAnswer: "in",
        time: 30,
        marks: 10
    },
];

let questionIndex = 0;
let totalMarks = 0;
let timer;
let interval;

let displayQuestion = document.getElementById("displayQuestion");
let displayOptions = document.getElementById("displayOptions");
let currentQuestionNo = document.getElementById("currentQuestionNo");
let totalQuestionNumber = document.getElementById("totalQuestionNumber");
let timerDisplay = document.getElementById("timerDisplay");

let quizScreen = document.getElementById("quizScreen");
let resultScreen = document.getElementById("resultScreen");
let score = document.getElementById("score");

// Render question
function renderQuestion() {
  let current = questions[questionIndex];
  currentQuestionNo.innerHTML = questionIndex + 1;
  totalQuestionNumber.innerHTML = questions.length;
  displayQuestion.innerHTML = current.question;

  displayOptions.innerHTML = "";
  current.options.forEach(option => {
    displayOptions.innerHTML += `
      <label class="block border rounded-lg p-2 cursor-pointer hover:bg-gray-100">
        <input type="radio" name="option" value="${option}" class="mr-2" />
        ${option}
      </label>
    `;
  });

  displayOptions.innerHTML += `
    <button onclick="checkAnswer()" 
      class="mt-4 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
      Next
    </button>
  `;

  // Reset timer
  timer = current.time;
  timerDisplay.innerHTML = "Timer: " + timer;
  clearInterval(interval);
  interval = setInterval(startTimer, 1000);
}

// Timer
function startTimer() {
  if (timer > 0) {
    timer--;
    timerDisplay.innerHTML = "Timer: " + timer;
  } else {
    clearInterval(interval);
    nextQuestion();
  }
}

// Check Answer
function checkAnswer() {
  let selected = document.querySelector("input[name='option']:checked");
  if (!selected) {
    alert("⚠️ Please select an option!");
    return;
  }

  if (selected.value === questions[questionIndex].correctAnswer) {
    totalMarks += questions[questionIndex].marks;
  }
  nextQuestion();
}

// Next Question
function nextQuestion() {
  if (questionIndex + 1 === questions.length) {
    clearInterval(interval);
    showResult();
  } else {
    questionIndex++;
    renderQuestion();
  }
}
function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  score.innerHTML = `${totalMarks} / ${questions.length}`;

  // Pass / Fail Condition (50% required)
  let percentage = (totalMarks / questions.length) * 100;
  if (percentage >= 50) {
    document.getElementById("status").innerHTML = "✅ Pass";
    document.getElementById("status").classList.add("text-green-600");
  } else {
    document.getElementById("status").innerHTML = "❌ Fail";
    document.getElementById("status").classList.add("text-red-600");
  }
}

// Restart Quiz
function restartQuiz() {
  questionIndex = 0;
  totalMarks = 0;
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");
  renderQuestion();
}


// Start quiz
renderQuestion();
