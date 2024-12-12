const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn"); // Reference for the Clear All Tasks button

let tasks = [];

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText, completed: false }); // Add task with default 'completed' as false
        taskInput.value = "";
        displayTasks();
    }
}

// Function to display tasks on the screen
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

// Function to toggle the completion status of a task
function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Function to clear completed tasks
function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

// Function to clear all tasks
function clearAllTasks() {
    tasks = []; // Empty the tasks array
    displayTasks(); // Refresh the task list display
}

// Event listeners
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllBtn.addEventListener("click", clearAllTasks); // Attach event listener for Clear All Tasks

// Display the tasks initially (empty at first)
displayTasks();
