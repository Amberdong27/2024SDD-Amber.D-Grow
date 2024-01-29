function Timer(clicked) {
  plantGraphic.src = "/images/altpot.gif";
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

  alert(clicked);
  var time = clicked;
  
 if (time == 'b1') { 
    alert("30mins");
  } 
  else if (time == 'b2') {
    alert("1 hour");
  } 
  else {
    alert("2 hour");
  }
}

function Pause() {
  plantGraphic.src = "/images/watering.gif";
  comment.innerHTML = "5 minutes Break";
  pause.disabled = true;
}
function End() {
  plantGraphic.src = "/images/deadplant.png";
  extra.innerHTML ="The plant died..."
  comment.innerHTML = "Take a Break and Restart!";
  pause.disabled = true;
  pause.style.visibility = "hidden";
  end.disabled = true;
  end.style.visibility = "hidden";
  restart.disabled = false;
  restart.style.visibility = "visible";
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
}
