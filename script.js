// DOM Elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const pendingList = document.getElementById('pending-list');
const completedList = document.getElementById('completed-list');

// Event Listener for "Add Task" Button
addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim(); // Get the input value and trim whitespace

    if (taskText === '') {
        alert('Please enter a task before adding!');
        return; // Exit if input is empty
    }

    // Add the task to the Pending List
    createTask(taskText, pendingList);

    // Clear the input field
    taskInput.value = '';
});

// Function to Create a Task Element
function createTask(taskText, targetList) {
    const taskItem = document.createElement('li'); // Create a list item for the task
    taskItem.textContent = taskText; // Add the task text

    const actions = document.createElement('div'); // Create a container for action buttons
    actions.classList.add('task-actions'); // Add a CSS class for styling

    // "Complete" Button
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Complete';
    completeBtn.classList.add('complete-btn');
    completeBtn.addEventListener('click', () => {
        taskItem.remove(); // Remove from the current list
        createTask(taskText, completedList); // Add to the Completed List
    });

    // "Edit" Button
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.addEventListener('click', () => {
        const newText = prompt('Edit your task:', taskText); // Prompt for new task text
        if (newText && newText.trim() !== '') {
            taskItem.firstChild.textContent = newText; // Update the task text
        }
    });

    // "Delete" Button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => {
        taskItem.remove(); // Remove the task
    });

    // Append buttons to the action container
    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);

    // Append actions to the task item
    taskItem.appendChild(actions);

    // Append task item to the target list
    targetList.appendChild(taskItem);
}
