const API = "http://localhost:5000";

// Load Tasks
function loadTasks(){

fetch(API+"/tasks")

.then(res=>res.json())

.then(data=>{

let output="";

data.forEach(task=>{

output+=`

<div class="task">

<h3>${task.title}</h3>

<p>${task.description}</p>

<p><b>Due:</b> ${task.due_date}</p>

<p><b>Status:</b> ${task.status}</p>

<button class="complete"
onclick="completeTask(${task.id})">

Complete

</button>

<button class="delete"
onclick="deleteTask(${task.id})">

Delete

</button>

</div>

`;

});

document.getElementById("taskList").innerHTML=output;

});

}

// Add Task

function addTask(){

const task={

title:document.getElementById("title").value,

description:document.getElementById("description").value,

due_date:document.getElementById("due_date").value,

user_id:1

};

fetch(API+"/tasks",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify(task)

})

.then(res=>res.json())

.then(data=>{

alert("Task Added");

loadTasks();

});

}

// Complete Task

function completeTask(id){

fetch(API+"/tasks/"+id,{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

status:"Completed"

})

})

.then(res=>res.json())

.then(data=>{

loadTasks();

});

}

// Delete Task

function deleteTask(id){

fetch(API+"/tasks/"+id,{

method:"DELETE"

})

.then(res=>res.json())

.then(data=>{

loadTasks();

});

}

loadTasks();