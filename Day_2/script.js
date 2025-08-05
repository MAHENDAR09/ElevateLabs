const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Add task on button click
addBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");

  // Create span for task text
  const span = document.createElement("span");
  span.textContent = taskText;

  // Toggle complete on click
  span.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Create remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "X";
  removeBtn.className = "remove-btn";
  removeBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Add to list
  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
});
