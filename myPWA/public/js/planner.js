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



//var storedTask = [];
//let storedTask = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : []; 

/*window.onload = function () {
    localStorage.clear(); //to remove manually 

}  */

/*function storingTask(newTask, deadline) {

        
   /* //let item = localStorage.getItem('task', JSON.stringify(storedTask));
    for (var i=0; i <storedTask.length; i++) {
        newItem = "<div "+ "class='task-card'>" + "<h2>" +"Task: " + storedTask.taskName + 
        "</h2>"+ "<p "+ "class='deadline'>" + "Due Date:"+ storedTask.taskDate + "</p>" + 
        "<button " + "class= 'btn'" + "id='delete'" + "onclick='removeTask(" + i + ")';>"+ "Delete Task" +"</button> " + "</div>";
        htmlString = htmlString + newItem;
    }; */

  /* var taskData = {
        taskName: newTask,
        taskDate: deadline,
    } 
    storedTask.push(taskData);
    localStorage.setItem('task', JSON.stringify(storedTask)); 
        console.log(storedTask);   
}
 */
  
  
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