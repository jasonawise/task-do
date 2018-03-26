 /* This functions adds a task to the to-do-list section and clears out the placeholder */
 const addTask = function()
 {
     // Get the input of the task
     let task = document.getElementById('new-task');
     
     // Set the const for the to do list
     const toDoList = document.getElementById('to-do-list');

     // Create the new to do item element
     let toDoItem = document.createElement('li');

     // Sets the new to do item
     toDoItem.innerHTML = task.value;
     
    if (isBlank(task.value))
    {
        //show error message
        displyErrorMessage("Please do not leave field blank...", task);
    }
    else 
    {
        checkErrorMessage(task);
        // Adds the new to do item to the list
        toDoList.appendChild(toDoItem);
    }

     // Clear our input placeholder
     document.getElementById('new-task').value = "";
 }
