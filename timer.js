function Timer () {
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
}

/*function Timer2 () {
  document.getElementById('plantGraphic').src = "/images/altpot.gif";
  document.getElementById('B1').disabled = true;
  document.getElementById('B2').disabled = true;
  document.getElementById('B3').disabled = true; 
}

function Timer3 () {
 document.getElementById('plantGraphic').src = "/images/altpot.gif";
  document.getElementById('B1').disabled = true;
  document.getElementById('B2').disabled = true;
  document.getElementById('B3').disabled = true; 
} */

window.onload = function() {
  plantGraphic = document.getElementById ('plantGraphic');
  restart = document.getElementById ('restart');
  end = document.getElementById('end');
  pause = document.getElementById('pause');
  b3 = document.getElementById('B3');
  b2 = document.getElementById('B2');
  b1 = document.getElementById('B1');
}
