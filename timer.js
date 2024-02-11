var startTime;
var endTime;
var time;
var startDate 
var endDate;
var timerMinutes;
var timerHours;
var timerSeconds;

window.onload = function() {
  comment = document.getElementById ('text');
  extra = document.getElementById ('extra');
  plantGraphic = document.getElementById ('plantGraphic');
  unpause = document.getElementById ('unpause');
  end = document.getElementById('end');
  pause = document.getElementById('pause');
  countdown = document.getElementById('countdown');
  start = document.getElementById('start');
  clock = document.getElementById ('clock');
  setTime = document.getElementById('setTime');
  setInterval(function setTime() { 
    startTime = new Date();
    clock.innerHTML = "Clock:" + " " + startTime.toLocaleTimeString();
  }, 1000);

  extra.innerHTML = "Please use : inbetween hours and minutes for correct results";
}

function Start() {
  pickedTime = setTime.value;
  timerMinutes = Number(pickedTime.substring(3));
  timerHours = Number(pickedTime.substring(0,2));
  startDate = new Date();
  endDate = new Date();
  endDate.setHours(startDate.getHours() + timerHours);
  endDate.setMinutes(startDate.getMinutes() + timerMinutes);

    if (startDate.toLocaleTimeString() >= endDate.toLocaleTimeString()||pickedTime.value == "00:00") {
      countdown.innerHTML = "Write a valid time";
    } else {
    //  countdown.innerHTML = "Study End Time: " + endDate.toLocaleTimeString();
      plantGraphic.src = "images/altpot.gif";
      start.disabled = true;
      start.style.visibility = "hidden";
      setTime.disabled = true;
      setTime.style.visibility = "hidden";
      extra.innerHTML = "Study End Time: " + endDate.toLocaleTimeString();
      pause.disabled = false;
      pause.style.visibility = "visible";
      end.disabled = false;
      end.style.visibility = "visible";
      unpause.style.visibility = "visible";
      comment.innerHTML = 'Growing...';
      Timer();
    }
  }


function Timer() {
  var x = setInterval(function() {
    startDate = new Date();
    var difference = endDate - startDate;

    var hours = Math.floor((difference % (1000*60*60*60*24))/(1000*60*60));
    var minutes = Math.floor((difference % (1000*60*60))/(1000*60));
    var seconds = Math.floor((difference % (1000*60))/1000);
    countdown.innerHTML = "Hours:" + hours + " " + "Minutes:" + minutes + " " +"Seconds: " + seconds;

 if (seconds <0) {
      clearInterval(x);
      success();
    }
  },1000)
}

function success() {
  plantGraphic.src = "images/Plant.gif";
  comment.innerHTML = "The plant is fully grown!";
  extra.innerHTML ="Take a Break!";
  pause.disabled = true;
  pause.style.visibility = "hidden";
  end.disabled = true;
  end.style.visibility = "hidden";
  unpause.disabled = true;
  unpause.style.visibility = "hidden";
  start.disabled = true;
  start.style.visibility = "hidden";
  again.disabled = false;
  again.style.visibility = "visible";
  countdown.innerHTML = "";
}

function Pause() {
  plantGraphic.src = "images/watering.gif";
  comment.innerHTML = "5 minutes Break";
  pause.disabled = true;
  unpause.disabled = false;
  extra.innerHTML = "Timer Paused";
  window.setTimeout(End, 60000);
}
function End() {
  plantGraphic.src = "images/deadplant.png";
  comment.innerHTML = "The plant died...";
  extra.innerHTML ="Take a Break and Restart!"
  extra.style.fontWeight = "600";
  pause.disabled = true;
  pause.style.visibility = "hidden";
  end.disabled = true;
  end.style.visibility = "hidden";
  unpause.disabled = true;
  unpause.style.visibility = "hidden";
  again.disabled = false;
  again.style.visibility = "visible";
}

function Again() {
  window.location.reload();
}
