var taskArray = [];
var deadlineArray = [];
//var listTask = document.getElementById("content");
let storedTask = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];

window.onload = function () {
    displayTask();
   // localStorage.clear(); //to remove manually 
    console.log(storedTask);

}

function addTask(){ //getting task from html 
        var newTask = document.getElementById("setTask").value;
        var deadline = document.getElementById("setDate").value;
        taskArray.push(newTask);
        deadlineArray.push(deadline);
        storingTask(newTask, deadline);
        console.log(taskArray);
        console.log(deadline);
        document.getElementById("setTask").value = "";
        document.getElementById("setDate").value = "";
        displayTask(); 
}

function displayTask() { //displaying task in html
    arrayIndex = 0;
    htmlString = "";
   /* //let item = localStorage.getItem('task', JSON.stringify(storedTask));
    for (var i=0; i <storedTask.length; i++) {
        newItem = "<div "+ "class='task-card'>" + "<h2>" +"Task: " + storedTask.taskName + 
        "</h2>"+ "<p "+ "class='deadline'>" + "Due Date:"+ storedTask.taskDate + "</p>" + 
        "<button " + "class= 'btn'" + "id='delete'" + "onclick='removeTask(" + i + ")';>"+ "Delete Task" +"</button> " + "</div>";
        htmlString = htmlString + newItem;
    }; */
    while (arrayIndex < storedTask.length) {
        newItem = "<div "+ "class='task-card'>" + 
        "<h2>" +"Task: " + taskArray[arrayIndex] + "</h2>"+
         "<p "+ "class='deadline'>" + "Due Date:"+ deadlineArray[arrayIndex] + "</p>" + 
         "<button " + "class= 'btn'" + "id='delete'" + "onclick='removeTask(" + arrayIndex + ")';>"+ "Delete Task" +"</button> " + "</div>";
        htmlString = htmlString + newItem;
        arrayIndex = arrayIndex + 1;
        } 
        document.getElementById("content").innerHTML = htmlString;
}

function removeTask(i) { //removing items form storage and display
    console.log("button works");
    taskArray.splice(i, 1);
    deadlineArray.splice(i, 1); 
    storedTask.splice(i, 1 ); 
    localStorage.setItem('task', JSON.stringify(storedTask)); 
    displayTask();
    console.log(taskArray);
    console.log(deadlineArray);
    console.log(storedTask);
}

function storingTask(newTask, deadline) {
    var taskData = {
        taskName: newTask,
        taskDate: deadline,
    }
    storedTask.push(taskData);
    localStorage.setItem('task', JSON.stringify(storedTask));
    console.log(storedTask);
}

      /* var task = { 
            newTask: document.getElementById("setTask").value,
            deadline: document.getElementById("setDate").value,
        }; */

         // location.reload(); //temporary fix 

/* function saveTask(task) { //saving task in local storage
   storedTask.push(task);
   localStorage.setItem('task', JSON.stringify(storedTask));
   console.log(storedTask);
   //document.getElementById("list").innerHTML = "";
   displayTask();
}

function displayTask() { //displaying task in html
       storedTask.forEach((tasks, index) => { //problem: recreates previous saved data
            taskCard += `
             <li id = ${index} class="task-card"> 
                  <h3 class="name">Task: ${tasks.newTask}</h3> 
                  <p class="deadline">Due Date: ${tasks.deadline}</p> 
                  <button class="btn" id= "delete" onclick="removeTask(${index})">Delete Task</button>
              </li> 
             `; 
          }); 
    document.getElementById("list").innerHTML = taskCard;

       /* var task = storedTask;
    htmlString = "";
    for (var i=0; i <task.length; i++) {
        var data = JSON.parse(task[i]);
        newItem = "<div "+ "class='task-card'>" + "<h2>" +"Task: " + data.taskName + 
        "</h2>"+ "<p "+ "class='deadline'>" + "Due Date:"+ data.taskDate + "</p>" + "<button " + "class= 'btn'" + "id='delete'" + "onclick='removeTask("[i];")';>"+
        "Delete Task" +"</button> " + "</div>";
        htmlString = htmlString + newItem;
    } 

}

function removeTask(index) {
        storedTask.splice(this); //why does this not work properly with , 1
        localStorage.setItem('task', JSON.stringify(storedTask)); 
        document.getElementById(index).remove();
        console.log(storedTask);
       //location.reload(); //temporary fix
}  */