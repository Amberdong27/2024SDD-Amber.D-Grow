var startTime;
var endTime;
var time;
var startDate 
var endDate;
var timerMinutes;
var timerHours;
var timerSeconds;
var timeEnded = false;
var difference;
var hours;
var minutes;
var seconds;
var x;

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
  setInterval(function() { 
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
   x = setInterval(function() {
    startDate = new Date();
    difference = endDate - startDate;
    hours = Math.floor((difference % (1000*60*60*60*24))/(1000*60*60));
    minutes = Math.floor((difference % (1000*60*60))/(1000*60));
    seconds = Math.floor((difference % (1000*60))/1000);

    if (hours == 0 && minutes == 0) {
      countdown.innerHTML = "00" + ":" + "00" + ":"+ seconds;
    } else if (minutes == 0) {
      countdown.innerHTML = hours + ":" + "00" + ":"+ seconds;
    } else if (hours == 0) {
      countdown.innerHTML = "00" + ":" + minutes + ":"+ seconds;
    } else {
      countdown.innerHTML = hours + ":" + minutes + ":"+ seconds;
    }

 if (seconds < 0 || timeEnded == true) {
      clearInterval(x);
      success();
    }
  },1000)
}

function Pause() {
  plantGraphic.src = "images/watering.gif";
  comment.innerHTML = "5 minutes Break";
  pause.disabled = true;
  unpause.disabled = false;
  pauseduration = setTimeout (End, 300000);
  clearInterval(x);

  startDate = undefined;
  endDate = undefined;
  startDate = new Date();
  endDate = new Date ();
  endDate.setMinutes(startDate.getMinutes() + 5);
  extra.innerHTML = "Break Time End: " + endDate.toLocaleTimeString();
}

function Unpaused() {
  plantGraphic.src = "images/altpot.gif";
  pause.disabled = false;
  unpause.disabled = true;
  clearTimeout(pauseduration);

  startDate = undefined;
  endDate = undefined;
  startDate = new Date();
  endDate = new Date ();
  endDate.setHours(startDate.getHours() + hours);
  endDate.setMinutes(startDate.getMinutes() + minutes);
  endDate.setSeconds(startDate.getSeconds() + seconds);
  extra.innerHTML = "Study End Time: " + endDate.toLocaleTimeString();
  Timer();
}


function success() {
  plantGraphic.src = "images/Plant.gif";
  comment.innerHTML = "The plant is fully grown!";
  extra.innerHTML ="Take a Break!";
  finishUI();
}

function End() {
  plantGraphic.src = "images/deadplant.png";
  comment.innerHTML = "The plant died...";
  extra.innerHTML ="Take a Break and try again!"
  extra.style.fontWeight = "600";
  finishUI();
  timeEnded = true;
  clearInterval(x);
  clearTimeout(pauseduration);
}

function finishUI () {
  pause.disabled = true;
  pause.style.visibility = "hidden";
  end.disabled = true;
  end.style.visibility = "hidden";
  unpause.disabled = true;
  unpause.style.visibility = "hidden";
  again.disabled = false;
  again.style.visibility = "visible";
  countdown.innerHTML = "";
}

function newTime() {
  startDate = undefined;
  endDate = undefined;
  startDate = new Date();
  endDate = new Date ();
}

function Again() {
  window.location.reload();
}
