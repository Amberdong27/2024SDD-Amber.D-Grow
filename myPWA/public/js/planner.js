var tasksArray = [];
var datesArray = [];
var storedTask;
var listTask = document.getElementById("content");
var newTask = document.getElementById("setTask").value;
var dueDate = document.getElementById("setDate").value;
// const list = document.querySelector('ul');

function addTask(){
   /* var newTask = document.getElementById("setTask").value;
    var dueDate = document.getElementById("setDate").value;
    tasksArray.push(newTask);
    datesArray.push(dueDate);

    displayTasks();

    console.log (tasksArray);
    console.log (datesArray); */

      /*tasksArray.push(newTask);
    datesArray.push(dueDate);

    localStorage.setItem("taskname", JSON.stringify(tasksArray));
    localStorage.setItem("deadline", dueDate);

    storedTask = localStorage.getItem("taskname")

    console.log(storedTask);
    listTask.innerHTML = localStorage.getItem("taskname") */ 
    
   const task = { 
        newTask: newTask,
        deadline: dueDate
    };
    saveTask(task);
}

function saveTask(task) {
   const storedTask = JSON.parse(localStorage.getItem('task')) || [];
   storedTask.push(task);
   localStorage.setItem('task', JSON.stringify(storedTask));

   taskData = JSON.parse(localStorage.getItem('task'))
   console.log(taskData);

}
