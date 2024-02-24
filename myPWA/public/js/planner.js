var tasksArray = [];
var datesArray = [];
var listTask = document.getElementById("content");

function addTask(){
    var newTask = document.getElementById("setTask").value;
    var dueDate = document.getElementById("setDate").value;
    tasksArray.push(newTask);
    datesArray.push(dueDate);


    console.log (tasksArray);
    console.log (datesArray);
}