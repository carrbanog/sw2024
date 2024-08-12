const todoForm = document.querySelector("#todoSubmit");
const todoInput = document.querySelector("#todoTxt");
const listArea = document.querySelector(".listArea");
let todos = [];
let todoSeq = 0;


todoForm.addEventListener("submit", submitEvent);
function submitEvent(event){
  event.preventDefault();
  const todoObj = {
    seq:todoSeq++, title:todoInput.value, done:false,
  }
  todos.push(todoObj);
  // console.log(todoObj);
  paintTodo(todoObj);
  todoInput.value = "";
}

function paintTodo(todoObj){
  // newTodo = todoInput.value;
  const li = document.createElement("li");
  li.id = todoObj.seq;
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  const span = document.createElement("span");
  const btn = document.createElement("button");
  listArea.appendChild(li);
  li.appendChild(checkbox);
  li.appendChild(span);
  span.innerHTML = todoObj.title;
  li.appendChild(btn);
  btn.innerHTML = "delete";
  btn.addEventListener("click", deleteList);
  checkbox.addEventListener("change", checkList);
}

function deleteList(event){
  const deleteTarget = event.target.parentElement;
  // console.log(deleteTarget.id);
  todos = todos.filter(todo => {
    // console.log(typeof(todo.seq));
    // console.log(parseInt(deleteTarget.id));
    return todo.seq !== parseInt(deleteTarget.id);
  })
  deleteTarget.remove();
}

function checkList(event){
  if(event.target.checked){
    event.target.parentElement.classList.add("checked");
  }else{
    event.target.parentElement.classList.remove("checked");
  }
}