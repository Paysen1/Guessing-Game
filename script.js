var Begin = document.querySelector(".Begin")
var Quest1 = document.querySelector(".Questions1")
var A1 = document.querySelector("#A1")
var A2 = document.querySelector("#A2")
var A3 = document.querySelector("#A3")
var A4 = document.querySelector("#A4")

var countdownTime = 75;
var timerElement =document.getElementById("time")

var StartBtn = document.getElementById('StartBtn');
StartBtn.addEventListener('click', showForm2)

var ButtonA1 = document.getElementById('2A1');
ButtonA1.addEventListener('click', showForm3)

var ButtonA2 = document.getElementById('3A3');
ButtonA2.addEventListener('click', showForm4)

var ButtonA3 = document.getElementById('4A4');
ButtonA3.addEventListener('click', showForm5)

var ButtonA4 = document.getElementById('5A1');
ButtonA4.addEventListener('click', showForm6)

var ButtonA5 = document.getElementById('6A2');
ButtonA5.addEventListener('click', showForm7)

var Submit = document.getElementById('SubmitBtn');
Submit.addEventListener('click', showForm8)


StartBtn.addEventListener('click', function(event) {
  showForm2(event);
  startCountdown();
});


function startCountdown() {
  var startTime = Date.now();

  var timerInterval = setInterval(function() {
    var elapsedTime = Math.floor((Date.now() - startTime) / 1000);

    var remainingTime = countdownTime - elapsedTime;

    if (remainingTime <= 0) {
      clearInterval(timerInterval);
      timerElement.textContent = 'Failed';
    } else {
      var seconds = remainingTime;

      timerElement.textContent = seconds + 's';
    }
  }, 1000); 
}



function showForm2(event) {
    document.getElementById('form2').style.display = 'block';
    document.getElementById('Form1').style.display = 'none';
    event.preventDefault();
  }

  function showForm3(event) {
    document.getElementById('form3').style.display = 'block';
    document.getElementById('form2').style.display = 'none';
    event.preventDefault();
  }

  function showForm4(event) {
    document.getElementById('form4').style.display = 'block';
    document.getElementById('form3').style.display = 'none';
    event.preventDefault();
  }

  function showForm5(event) {
    document.getElementById('form5').style.display = 'block';
    document.getElementById('form4').style.display = 'none';
    event.preventDefault();
  }

  function showForm6(event) {
    document.getElementById('form6').style.display = 'block';
    document.getElementById('form5').style.display = 'none';
    event.preventDefault();
  }

  function showForm7(event) {
    document.getElementById('form7').style.display = 'block';
    document.getElementById('form6').style.display = 'none';
    event.preventDefault();
  }

  function showForm8(event) {
    document.getElementById('form8').style.display = 'block';
    document.getElementById('form7').style.display = 'none';
    event.preventDefault();
  }



//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score