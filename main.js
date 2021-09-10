let todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const deleteButton = document.querySelector(".deleteButton");
let todoList = document.querySelector(".todo-list");

todoButton.addEventListener("click", addTodo);
deleteButton.addEventListener("click", deleteAllList);

function addTodo(e){
  e.preventDefault();
  console.log("submit button working");
  
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value; //ekranda ne varsa onu aldık.
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  
  const completeButton = document.createElement("button");
  completeButton.innerHTML = '<i class="fas fa-clipboard-check"></i>';
  completeButton.classList.add("comp-btn");
  todoDiv.appendChild(completeButton);

  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  
  todoList.appendChild(todoDiv);
  todoInput.value = ""; //yazma ekranındakini silmek için.
}

function deleteAllList(e){
  e.preventDefault();
  console.log("delete button working");
  
  todoList.innerHTML = " ";
}