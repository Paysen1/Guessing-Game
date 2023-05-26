var countdownTime = 75;
var startTime = 7500;
var timerElement = document.getElementById("time");
var initials = document.getElementById("Initials");
var finalHighscore = document.getElementById("finalScore");
var SubmitBtn = document.getElementById("SubmitBtn");
var Score = document.getElementById("score");
var ButtonA1 = document.getElementById('2A1');
var ButtonA2 = document.getElementById('3A3');
var ButtonA3 = document.getElementById('4A4');
var ButtonA4 = document.getElementById('5A1');
var ButtonA5 = document.getElementById('6A2');
var StartBtn = document.getElementById('StartBtn');
var HighScorePage = document.getElementById("HighScorePage");
var timerInterval;

ButtonA1.addEventListener('click', showForm3);
ButtonA2.addEventListener('click', showForm4);
ButtonA3.addEventListener('click', showForm5);
ButtonA4.addEventListener('click', showForm6);
ButtonA5.addEventListener('click', showForm7);
SubmitBtn.addEventListener('click', showForm8);

function isCorrect(selectedAnswer) {
  return selectedAnswer.getAttribute("data") === "True";
}

function startCountdown() {
  var startTime = Date.now();

  timerInterval = setInterval(function() {
    var elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    var remainingTime = countdownTime - elapsedTime;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = 'Failed';
    } else {
      timerElement.textContent = remainingTime + 's';
    }
  }, 1000);
}

function subtractTime(seconds) {
  var currentTime = parseInt(timerElement.textContent);
  var newTime = currentTime - seconds;
  timerElement.textContent = newTime + "s";
}

function createHighscore() {
  var initialsValue = initials.value;
  var timeValue = timerElement.textContent;
  var highscore = initialsValue + " - " + timeValue;

  finalHighscore.textContent = highscore;
  localStorage.setItem('highscore', highscore);
}

function saveLastScore() {
  var highscore = localStorage.getItem('highscore');
  localStorage.setItem('highscore', highscore);
}

function renderLastScore() {
  var lastScore = localStorage.getItem('highscore');
  if (lastScore !== null) {
    finalHighscore.textContent = lastScore;
  } else {
    return;
  }
}


SubmitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  runToPage();
  saveLastScore();
  renderLastScore();
});

function init() {
  renderLastScore();
}

init();

function showForm2(event) {
  document.getElementById('form2').style.display = 'block';
  document.getElementById('Form1').style.display = 'none';
  event.preventDefault();
}

function showForm3(event) {
  if (!isCorrect(ButtonA1)) {
    subtractTime(5); 
  }
  console.log("no")
  document.getElementById('form3').style.display = 'block';
  document.getElementById('form2').style.display = 'none';
  event.preventDefault();
}

function showForm4(event) {
  if (!isCorrect(ButtonA1)) {
    subtractTime(5); 
  }
  document.getElementById('form4').style.display = 'block';
  document.getElementById('form3').style.display = 'none';
  event.preventDefault();
}

function showForm5(event) {
  if (!isCorrect(ButtonA1)) {
    subtractTime(5); 
  }
  document.getElementById('form5').style.display = 'block';
  document.getElementById('form4').style.display = 'none';
  event.preventDefault();
}

function showForm6(event) {
  if (!isCorrect(ButtonA1)) {
    subtractTime(5); 
  }
  document.getElementById('form6').style.display = 'block';
  document.getElementById('form5').style.display = 'none';
  event.preventDefault();
}

function showForm7(event) {
  document.getElementById('form7').style.display = 'block';
  document.getElementById('form6').style.display = 'none';
  event.preventDefault();
  clearInterval(timerInterval);
}

function showForm8(event) {
  document.getElementById('form8').style.display = 'block';
  document.getElementById('form7').style.display = 'none';
  event.preventDefault();
  createHighscore();
}

StartBtn.addEventListener('click', function(event) {
  showForm2(event);
  startCountdown();
});

document.addEventListener('DOMContentLoaded', function() {
  createHighscore();
});

  
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN the game is over
//THEN I can save my initials and my score