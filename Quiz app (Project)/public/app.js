var questions = [
  {
    question: " 01.. What does CSS stand for?",
    option1: "Cascading Style Sheets  ",
    option2: "Colorful Style Sheetsr",
    option3: "Computer Style Sheets",
    ans: "Cascading Style Sheets  ",
  },
  {
    question: "02.. Which HTML attribute is used to define inline styles?",
    option1: "class",
    option2: "font",
    option3: "style",
    ans: "style",
  },
  {
    question: "03.. Which property is used to change the background color?",
    option1: "color",
    option2: "background-color",
    option3: "bgcolor",
    ans: "background-color",
  },
  {
    question: "04.. How do you select an element with id 'demo'?",
    option1: ".demo",
    option2: "*demo",
    option3: "#demolor",
    ans: "#demo",
  },
  {
    question: "05.. Which property is used to change the font of an element?",
    option1: "font-style",
    option2: "font-style",
    option3: "font-weight",
    ans: "font-style",
  },
];

var para = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var btn = document.getElementById("btn");
var timer = document.getElementById("timer");
var index = 0;
var score = 0;
var min = 1;
var sec = 59;

setInterval(function () {
  timer.innerHTML = `${min}:${sec}`;
  sec--;
  if (sec < 0) {
    min--;
    sec = 59;
    if (min < 0) {
      sec = 59;
      min = 1;
      nextQuestion();
    }
  }
}, 100);

function nextQuestion() {
  var getOptions = document.getElementsByName("options");
  for (var i = 0; i < getOptions.length; i++) {
    if (getOptions[i].checked) {
      var selectedValue = getOptions[i].value;
      var selectedques = questions[index - 1]["question"];
      var selectedAns = questions[index - 1][`option${selectedValue}`];
      var correctAns = questions[index - 1]["ans"];
      if (selectedAns == correctAns) {
        score++;
      }
    }
    getOptions[i].checked = false
  }
  min = 1;
  sec = 59;
  btn.disabled = true;

  if (index > questions.length - 1) {
    if (score >= 60) {
      Swal.fire(
        "Good job!",
        `Your percentage is ${((score / questions.length) * 100).toFixed(2)}`,
        "success"
      );
    }else if (score <= 60) {
      Swal.fire({
        icon: 'error',
        title: 'Fail...',
        text: `Your percentage is ${((score / questions.length) * 100).toFixed(2)}`,
      })
    }
  }
   else {
    para.innerText = questions[index].question;
    opt1.innerText = questions[index].option1;
    opt2.innerText = questions[index].option2;
    opt3.innerText = questions[index].option3;
    index++;
  }
}

function clicked() {
  btn.disabled = false;
}
