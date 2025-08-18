// Get elements
const addTaskBtn = document.getElementById("add-task");
const taskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");

// Add task button
addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Toggle done on click
    li.addEventListener("click", function () {
      li.classList.toggle("done");
      saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation(); // prevent triggering li click
      li.remove();
      saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    saveTasks();

    taskInput.value = "";
  }
});

// Add task on Enter key
taskInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    addTaskBtn.click();
  }
});

// Save tasks to localStorage
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#task-list li").forEach((li) => {
    tasks.push({
      text: li.childNodes[0].textContent.trim(),
      done: li.classList.contains("done"),
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
// Load tasks on page load
window.addEventListener("load", function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.done) {
      li.classList.add("done");
    }

    li.addEventListener("click", function () {
      li.classList.toggle("done");
      saveTasks();
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      li.remove();
      saveTasks();
    });

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
});

function updateDateTime() {
  const now = new Date();
  const dateStr = now.toLocaleDateString();
  const timeStr = now.toLocaleTimeString();
  document.getElementById("time").innerHTML = `${dateStr} ${timeStr}`;
}

setInterval(updateDateTime, 1000);
