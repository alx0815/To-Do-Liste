const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const list = document.getElementById("todo-list");

// Vorhandene Aufgaben aus localStorage laden
window.onload = () => {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.forEach(addTodoToDOM);
};

// Hinzufügen per Button
addButton.addEventListener("click", () => {
  const task = input.value.trim();
  if (task !== "") {
    addTodoToDOM(task);
    saveToLocalStorage(task);
    input.value = "";
  }
});

function addTodoToDOM(task) {
  const li = document.createElement("li");
  li.textContent = task;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.addEventListener("click", () => {
    li.remove();
    removeFromLocalStorage(task);
  });

  li.appendChild(delBtn);
  list.appendChild(li);
}

function saveToLocalStorage(task) {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push(task);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function removeFromLocalStorage(task) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter(t => t !== task);
  localStorage.setItem("todos", JSON.stringify(todos));
}
