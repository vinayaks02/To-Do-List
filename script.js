// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
  
    if (taskText !== '') {
      const taskList = document.getElementById('taskList');
      const newTask = document.createElement('li');
      newTask.innerText = taskText;
  
      // Add a delete button for each task
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.onclick = function() {
        taskList.removeChild(newTask);
      };
  
      newTask.appendChild(deleteButton);
      taskList.appendChild(newTask);
      taskInput.value = '';
    }
  }
  
  // Add event listener to handle "Enter" key press
  document.getElementById('taskInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });
  