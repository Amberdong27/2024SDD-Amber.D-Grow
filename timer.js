var startTime;
var endTime;
var time;


window.onload = function() {
  comment = document.getElementById ('text');
  extra = document.getElementById ('extra');
  plantGraphic = document.getElementById ('plantGraphic');
  restart = document.getElementById ('restart');
  end = document.getElementById('end');
  pause = document.getElementById('pause');
  b3 = document.getElementById('b3');
  b2 = document.getElementById('b2');
  b1 = document.getElementById('b1');
}

function Timer(clicked) {
  plantGraphic.src = "images/altpot.gif";
  b1.disabled = true;
  b1.style.visibility = "hidden";
  b2.disabled = true;
  b2.style.visibility = "hidden";
  b3.disabled = true;
  b3.style.visibility = "hidden";
  pause.disabled = false;
  pause.style.visibility = "visible";
  end.disabled = false;
  end.style.visibility = "visible";
  restart.style.visibility = "visible";
  restart.disabled = false;
  comment.innerHTML = 'Growing...';

  time = clicked;
  startTime = new Date();
  document.getElementById('countdown').innerHTML = startTime.toLocaleTimeString();
  
 if (time == 'b1') { 
  
   /* var timeleft = 90;
      var minute = Math.floor(timeleft/60);
      var second = timeleft - minute*60;
      timer.innerHTML = minute +":" + second;
    
   var timerId = setInterval(countdown, 90000);

    function countdown(){
      if(timeleft == -1){
        clearTimeout(timerId);
        success();
      } else {
        timeleft--;
      } 
    } */
  } 
  else if (time == 'b2') {
    alert("1 hour");
  } 
  else {
    alert("2 hour");
  } 
}
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
  again.disabled = false;
  again.style.visibility = "visible";
}

function Pause() {
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
}
function Restart() {
  
}

function Again() {
  window.location.reload();
}