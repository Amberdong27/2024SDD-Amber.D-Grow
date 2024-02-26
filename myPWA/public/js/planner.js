var taskArray = [];
var deadlineArray = [];
let taskCard = "";
//var listTask = document.getElementById("content");
//let storedTask = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];

window.onload = function () {
    displayTask();
}

function addTask(){ //getting task from html 
      /* var task = { 
            newTask: document.getElementById("setTask").value,
            deadline: document.getElementById("setDate").value,
        }; */
        
        var newTask = document.getElementById("setTask").value;
        var deadline = document.getElementById("setDate").value;
        taskArray.push(newTask);
        deadlineArray.push(deadline);
        console.log(taskArray);
        console.log(deadline);
        document.getElementById("setTask").value = "";
        document.getElementById("setDate").value = "";
        displayTask(); 

       // location.reload(); //temporary fix 
}

function displayTask() {
    arrayIndex = 0;
    htmlString = "";
      while (arrayIndex < taskArray.length && deadlineArray.length) {
        newItem = "<div "+ "class='task-card'>" + "<h2>" +"Task: " + taskArray[arrayIndex] + 
        "</h2>"+ "<p "+ "class='deadline'>" + "Due Date:"+ deadlineArray[arrayIndex] + "</p>" + "<button " + "class= 'btn'" + "id='delete'" + "onclick='removeTask(" + arrayIndex + ")';>"+
        "Delete Task" +"</button> " + "</div>";
        htmlString = htmlString + newItem;
        arrayIndex = arrayIndex + 1;
        }
        document.getElementById("content").innerHTML = htmlString;
}

function removeTask(i) {
    console.log("button works");
    taskArray.splice(i, 1);
    deadlineArray.splice(i, 1); 
    displayTask();
    console.log(taskArray);
    console.log(deadline);
}


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
}

function removeTask(index) {
        storedTask.splice(this); //why does this not work properly with , 1
        localStorage.setItem('task', JSON.stringify(storedTask)); 
        document.getElementById(index).remove();
        console.log(storedTask);
       //location.reload(); //temporary fix
}  */