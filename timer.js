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
  restart = document.getElementById ('restart');
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
}

function Start() {
  plantGraphic.src = "images/altpot.gif";
  pause.disabled = false;
  pause.style.visibility = "visible";
  end.disabled = false;
  end.style.visibility = "visible";
  restart.style.visibility = "visible";
  restart.disabled = false;
  comment.innerHTML = 'Growing...';
  start.disabled = true;
  start.style.visibility = "hidden";
  setTime.disabled = true;
  setTime.style.visbility = "hidden";

  pickedTime = setTime.value;
  timerMinutes = Number(pickedTime.substring(3));
  timerHours = Number(pickedTime.substring(0,2));
  startDate = new Date();
  endDate = new Date();
  endDate.setHours(startDate.getHours() + timerHours);
  endDate.setMinutes(startDate.getMinutes() + timerMinutes);
  countdown.innerHTML = endDate.toLocaleString();
}


/*function R() {
  thirtyMin = 60 * 1,
  startTimer(thirtyMin);
};

function startTimer(duration) {
  var timer = duration, minutes, seconds;
  o = setInterval(function R() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('countdown').innerHTML = minutes + ":" + seconds;

    if (--timer < 0){
      timer = duration;
      success();
    }
  }, 1000);
} */




function success() {
  plantGraphic.src = "images/Plant.gif";
  comment.innerHTML = "The plant is fully grown!";
  extra.innerHTML ="Take a Break!";
  pause.disabled = true;
  pause.style.visibility = "hidden";
  end.disabled = true;
  end.style.visibility = "hidden";
  restart.disabled = true;
  restart.style.visibility = "hidden";
  start.disabled = true;
  start.style.visibility = "hidden";
  again.disabled = false;
  again.style.visibility = "visible";
}

function Pause() {
  start.disabled = true;
  start.style.visibility = "hidden";
  plantGraphic.src = "images/watering.gif";
  comment.innerHTML = "5 minutes Break";
  pause.disabled = true;
  window.setTimeout(End, 60000);
}
function End() {
  plantGraphic.src = "images/deadplant.png";
  comment.innerHTML = "The plant died...";
  extra.innerHTML ="Take a Break and Restart!"
  pause.disabled = true;
  pause.style.visibility = "hidden";
  end.disabled = true;
  end.style.visibility = "hidden";
  restart.disabled = true;
  restart.style.visibility = "hidden";
  again.disabled = false;
  again.style.visibility = "visible";
  start.disabled = true;
  start.style.visibility = "hidden";
}
function Restart() {

}

function Again() {
  window.location.reload();
}