function addTask() {
   
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    
    if (taskInput.value.trim() !== '') {
       
        var li = document.createElement("li");
        li.className = "todo-item";
        li.textContent = taskInput.value;
        
        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function() {
            li.remove();
        
        };
        
        li.appendChild(deleteButton);
        taskList.appendChild(li);
        taskInput.value = '';

    } 
    
       else 
       {
           alert("Please enter a task!");
    }

}

function clearAll() 
{
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = '';
}
