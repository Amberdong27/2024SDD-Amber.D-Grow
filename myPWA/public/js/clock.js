setInterval(function() { // for system clock 
    startTime = new Date();
    clock.innerHTML = startTime.toLocaleTimeString();
  }, 1000);