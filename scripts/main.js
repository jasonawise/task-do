 let i = 1;
 
 /* This functions adds a task to the to-do-list section and clears out the placeholder */
 const addTask = function()
 {
    // Get the input of the task
    let task = document.getElementById('new-task');
    
    // Set the const for the to do list
    const toDoList = document.getElementById('to-do-list');

    // Create the new to do item element
    let toDoItem = document.createElement('li');
    toDoItem.id = "task" + i;
    
    var id = toDoItem.id;

    // Sets the new to do item
    toDoItem.innerHTML = task.value + "<span><button id=\"delete-task\" onclick=\"deleteTask(" + id + ")\">X</button></span>";
     
    if (isBlank(task.value))
    {
        //show error message
        displyErrorMessage("Please do not leave field blank...", task);
    }
    else 
    {
        removeErrorMessage(task);
        // Adds the new to do item to the list
        toDoList.appendChild(toDoItem);
    }

    // Clear our input placeholder
    clearPlaceholder(task);

    i++;
 }

 const deleteTask = function(task)
 {
    task.remove();
 }
