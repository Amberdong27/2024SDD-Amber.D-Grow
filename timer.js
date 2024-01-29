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

function End() {
  window.location.reload();
}


window.onload = function() {
  plantGraphic = document.getElementById ('plantGraphic');
  restart = document.getElementById ('restart');
  end = document.getElementById('end');
  pause = document.getElementById('pause');
  b3 = document.getElementById('b3');
  b2 = document.getElementById('b2');
  b1 = document.getElementById('b1');
}
