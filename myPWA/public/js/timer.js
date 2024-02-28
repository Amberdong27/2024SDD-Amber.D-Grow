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
var pauseduration;
var End;
var comment = document.getElementById ('text');
var extra = document.getElementById ('extra');
var plantGraphic = document.getElementById ('plantGraphic');
var unpause = document.getElementById ('unpause');
var end = document.getElementById('end');
var pause = document.getElementById('pause');
var countdown = document.getElementById('countdown');
var start = document.getElementById('start');
var clock = document.getElementById ('clock');
var setTime = document.getElementById('setTime');
var again = document.getElementById('again');

window.onload = function() { 
  checknotify(); //check users notification settings 
  extra.innerHTML = "Add ':' between hours and minutes. Single digits please add a 0 before it for accurate results";
}

function startTimer() { //when the start button is pressed + getting the inputted time 
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


function Timer() { // general countdown timer function and calculating the difference 
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

 if (seconds < 0) { // when the timer ends naturally
      clearInterval(x);
      success();
    } else if (timeEnded == true) { // when user ends the timer with end button 
      clearInterval(x);
    }
  },1000)
}

function stopTimer() { // when user use the pause button 
  breakTime();
  plantGraphic.src = "images/watering.gif";
  comment.innerHTML = "5 minutes Break";
  pause.disabled = true;
  unpause.disabled = false;

navigator.serviceWorker.register("serviceWorker.js");
Notification.requestPermission().then((result) => {
  if (result === "granted") {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification("Timer has been paused");
    });
  }
});
  pauseduration = setTimeout (End, 330000); //not exactly 5 mins room for person to get back 
}

function breakTime() { //cal break time
  startDate = undefined;
  endDate = undefined;
  startDate = new Date();
  endDate = new Date ();
  endDate.setMinutes(startDate.getMinutes() + 5);
  extra.innerHTML = "Break Time End: " + endDate.toLocaleTimeString();
  clearInterval(x);
}

function resumeTimer() { // when unpaused button  is used 
  timeLeft();
  plantGraphic.src = "images/altpot.gif";
  comment.innerHTML = "Growing...";
  pause.disabled = false;
  unpause.disabled = true;
navigator.serviceWorker.register("serviceWorker.js");
Notification.requestPermission().then((result) => {
  if (result === "granted") {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification("Timer has resumed");
    });
  }
});
  clearTimeout(pauseduration); // clearing out the time out 
}

function timeLeft() { // recalculating end time using left over time difference from when the pause button is hit 
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

function success() { // when timer ends when countdown runs out 
  plantGraphic.src = "images/Plant.gif";
  comment.innerHTML = "The plant is fully grown!";
  extra.innerHTML ="Take a Break!";
  var alarm = new Audio("alarm.mp3");
  alarm.play();
  finishUI();
navigator.serviceWorker.register("serviceWorker.js");
Notification.requestPermission().then((result) => {
  if (result === "granted") {
    navigator.serviceWorker.ready.then((registration) => {
      registration.showNotification("Timer has ended! Take a break!");
    });
  }
});
}


function endTimer() { //when user use the end button or is timeout from the break
  plantGraphic.src = "images/deadplant.png";
  comment.innerHTML = "The plant died...";
  extra.innerHTML ="Take a Break and try again!"
  extra.style.fontWeight = "600";
  finishUI();
  timeEnded = true;
  clearInterval(x);
  clearTimeout(pauseduration);
}

function finishUI () { //buttons changes 
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

function checknotify() { //checking notification 
  if (!("Notification" in window)) {
    alert("This browser does not support notification");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission();
  }
}

function restartTimer() { //reloading new timer 
  window.location.reload();
}
