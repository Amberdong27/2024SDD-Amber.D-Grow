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
  comment.innerHTML = 'Growing...';
  
  var time = clicked;
  
 if (time == 'b1') { 
    var timeleft = 30;
    var timerId = setInterval(countdown, 1000);

    function countdown(){
      if(timeleft == -1){
        clearTimeout(timerId);
        success();
      } else {
        timer.innerHTML = '00:'+ timeleft;
        timeleft--;
      }
    }
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
  restart.disabled = false;
  restart.style.visibility = "visible";
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
  restart.disabled = false;
  restart.style.visibility = "visible";
}

function Restart() {
  window.location.reload();
}


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
  timer = document.getElementById('countdown');
}
