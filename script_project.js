// My HTML DOM Small Project

// Select element & assign them to variable
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let toDoUl = document.querySelector(".items");
let completeUl = document.querySelector(".complete-list ul");

// My Project Functions

const createTask = function (task) {
  let listItem = document.createElement("li");
  let checkBox = document.createElement("input");
  let label = document.createElement("label");

  label.innerText = task;
  checkBox.type = "checkbox";

  listItem.appendChild(checkBox);
  listItem.appendChild(label);

  return listItem;
};

let addTask = function (event) {
  event.preventDefault();
  let listItem = createTask(newTask.value);
  toDoUl.appendChild(listItem);
  newTask.value = " ";

  //   Bird the new list item to the incomplete list
  bindInCompleteItems(listItem, completeTask);
};

let completeTask = function () {
  let listItem = this.parentNode;
  let deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.className = "delete";
  listItem.appendChild(deleteBtn);
  let checkBox = listItem.querySelector(`input[type="checkbox"]`);
  checkBox.remove();
  completeUl.appendChild(listItem);
  bindCompleteItems(listItem, deleteTask);
};
let deleteTask = function () {
  listItem = this.parentNode;
  let ul = listItem.parentNode;
  ul.removeChild(listItem);
};

let bindInCompleteItems = function (taskItem, checkboxClick) {
  let checkBox = taskItem.querySelector('input[type ="checkBox"]');
  checkBox.onchange = checkboxClick;
};

let bindCompleteItems = function (taskItem, deleteButtonClick) {
  let deleteBtn = taskItem.querySelector(".delete");
  deleteBtn.onclick = deleteButtonClick;
};

for (let i = 0; i < toDoUl.children.length; i++) {
  bindInCompleteItems(toDoUl.children[i], completeTask);
}

for (let i = 0; i < completeUl.children.length; i++) {
  bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener("submit", addTask);
