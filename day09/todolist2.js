const form = document.querySelector("form");
const todoTxt = document.querySelector(".title");
const saveBtn = document.querySelector("#saveBtn");
const resultArea = document.querySelector(".resultArea");
let todoList = [];

form.addEventListener("submit", submitEvent);

function submitEvent(event){
  event.preventDefault();
  todoSeq = todoList.length + 1;
  todoList.push({
    seq:todoSeq, title:todoTxt.value, done:false,
  })
  paintTodo();
  todoTxt.value = "";
}
function paintTodo(){
  resultArea.innerHTML = "";
  todoList.forEach(todo => {
    const li = document.createElement("li");
    resultArea.appendChild(li);
    li.innerHTML = todo.title;
  })
  // todoList.for
}