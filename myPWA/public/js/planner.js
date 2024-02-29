var taskArray = [];
var deadlineArray = [];

window.onload = function() { 
    loadTask();
}

function addTask(){ //getting task from html 
        var newTask = document.getElementById("setTask").value;
        var deadline = document.getElementById("setDate").value;
        taskArray.push(newTask);
        deadlineArray.push(deadline);

        document.getElementById("setTask").value = "";
        document.getElementById("setDate").value = "";
        displayTask();

        console.log(taskArray);
        console.log(deadline);
}

function displayTask() { //displaying task in html
    arrayIndex = 1;
    htmlString = "";

   while (arrayIndex < taskArray.length && deadlineArray.length) {
        newItem = "<div "+ "class='task-card'>" + 
        "<h2>" +"Task: " + "</h2>" + 
        "<p"  + "class= 'task'>" + taskArray[arrayIndex] + "</p>" +
        "<p "+ "class='deadline'>" + "Due Date: "+ deadlineArray[arrayIndex] + "</p>" + 
        "<button " + "class= 'btn'" + "id='delete'" + "onclick='removeTask(" + arrayIndex + ")';>"+ "Delete Task" +"</button> " 
        + "</div>";
        htmlString = htmlString + newItem;
        arrayIndex = arrayIndex + 1;
        } 
        document.getElementById("content").innerHTML = htmlString;
        localStorage.listTasks = taskArray.join();
        localStorage.listDates = deadlineArray.join(); 
}


function removeTask(i) { //removing items form storage and display
    console.log("button works");
    taskArray.splice(i, 1);
    deadlineArray.splice(i, 1);  
    displayTask();
    console.log(taskArray);
    console.log(deadlineArray);

}

function loadTask() { //loading previous stored task data
 var storedTasks = localStorage.listTasks;
 var storedDates = localStorage.listDates;
    taskArray = storedTasks.split(",");
    deadlineArray = storedDates.split(",");
    displayTask();
    console.log(storedTasks);
    console.log(storedDates);
}
