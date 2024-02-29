function selection() {
    var value = document.getElementById("selector").value;
    
    if (value == "1") { //Loading How To Guide 
        document.getElementById("helpContent").innerHTML = "";

        var newContent = '<h1>How to use the Timer</h1>' +
        '<p class="help-text"><span style = "font-weight:bold">1.</span> Type in a valid time in the input box next to "Start" </p>' +
        '<img src="images/TimerHelp1.png" class="img-fluid" width="300" height="200">' +
        '<p class="help-text"><span style = "font-weight:bold">2.</span> Start the timer by pressing the "Start" button.</p>' +
        '<p>Your "Study Time End" would be shown here below the "Growing..."</p>' +
        '<img src="images/TimerHelp2.png" class="img-fluid" width="300" height="200">' +
        '<p class="help-text"><span style = "font-weight:bold">3.</span> Now wait for the timer to end!</p>' +
        '<img src="images/TimerHelp3.png" class="img-fluid" width="300" height="200">' +
        '<p class="help-text"><span style = "font-weight:bold">4.</span> If you wish start another time, once it ended press the again button</p>' +
        '<img src="images/TimerHelp4.png" class="img-fluid" width="300" height="200">' +
        '<h2 class="help-text">Additional Functions</h2>' +
        '<p class="help-text"><span style = "font-weight:bold">Pausing: </span>If you wish to stop the timer press the pause button</p>' + 
        '<p>The countdown would be stopped and "Break Time End" will replace your "Study Time End"</p>' +
        '<img src="images/TimerHelpPause.png" class="img-fluid" width="300" height="200">' +
        '<p class="help-text"><span style = "font-weight:bold">Unpausing: </span>If you wish to resume the timer press the resume button</p>' +
        '<p>A new "Study Time End" will be shown depending on how much time you have left from when you paused</p>' +
        '<img src="images/TimerHelpUnpause.png" class="img-fluid" width="300" height="200">' +
        '<p class="help-text"><span style = "font-weight:bold">Ending Early: </span>If you wish to end the timer press the end button</p>' + 
        '<img src="images/TimerHelpEnd.png" class="img-fluid" width="300" height="200">';

        document.getElementById("helpContent").innerHTML = newContent;
      } else if (value == "2") { //Loading Notificaition Help Guide
        document.getElementById("helpContent").innerHTML = "";

        var newContent = '<h1>Notifcation Help</h1>' +
        '<h3> Note: Notifications does not work on Mobile Safari </h3>' +
        '<p> If you wish to get notification of when the timer ends, pause or resumes.</p>' +
        '<p>Please allow notification for the application</p>' +
        '<img src="images/Notification.gif"  class="img-fluid" width="300" height="200"></img>';

        document.getElementById("helpContent").innerHTML = newContent;
      } else if (value == "3") {//Loading Possible Errors and Solution Guide
        document.getElementById("helpContent").innerHTML = "";

        var newContent = '<h1 class="help-text"> Possible Errors and Solutions</h1>' +
        '<li class="help-text">Error: If switch between pause and unpause to quickly. It will crash the timer</li>' +
        '<p class="help-text"><span style = "font-weight:bold">Solution:</span> Reload the Page </p>' +
        '<li class="help-text">Error: Graphics is not changing properly</li>' +
        '<p class="help-text"> <span style = "font-weight:bold">Solution:</span> If this occurs you can either wait or reload the page and start the timer again </p>';

        document.getElementById("helpContent").innerHTML = newContent;
      }

}