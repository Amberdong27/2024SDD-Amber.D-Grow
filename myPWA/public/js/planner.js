var taskArray = [];
//var storedTask;
let result = "";
var listTask = document.getElementById("content");
let storedTask = localStorage.getItem('task') ? JSON.parse(localStorage.getItem('task')) : [];
//var newTask = document.getElementById("setTask").value;
//var dueDate = document.getElementById("setDate").value;

window.onload = displayTask();

function addTask(){
   var task = { 
        newTask: document.getElementById("setTask").value,
        deadline: document.getElementById("setDate").value
    };
    document.getElementById("setTask").value = "";
    document.getElementById("setDate").value = "";
    saveTask(task);
}

function saveTask(task) {
   storedTask.push(task);
   localStorage.setItem('task', JSON.stringify(storedTask));
   displayTask();
   console.log(storedTask);
}

function displayTask() {
   storedTask.forEach((tasks, index) => { 
        result += ` 
         <ul class="task-card"> 
              <h2 class="name">Task: ${tasks.newTask}</h2> 
              <p class="deadline">Due Date: ${tasks.deadline}</p> 
              <button class="delete" onclick="removeTask(${index})"> Delete Task</button>
          </ul> 
         `; 
      }); 
    document.getElementById("list").innerHTML = result;
}

function removeTask(index) {
    storedTask.splice(index, 1);
    localStorage.setItem('task', JSON.stringify(storedTask)); 
}