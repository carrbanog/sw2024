const form = document.querySelector("form");
const listTxt = document.querySelector("#listTxt");
const listSection = document.querySelector(".listSection");
let todoList = [
];

form.addEventListener("submit", submitList);
function submitList(event){
  let listSeq = todoList.length + 1;
  event.preventDefault();
  const newTodoObj = {
    seq: listSeq, title:listTxt.value, done:false,
  }
  todoList.push(newTodoObj);
  // console.log(newTodoObj.seq);
  paintTodo(newTodoObj);
  listTxt.value = "";
}

function paintTodo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.seq;
    const span = document.createElement("span");
    const button = document.createElement("button");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    listSection.appendChild(li);
    li.append(checkbox);
    li.appendChild(span);
    li.appendChild(button);
    span.innerHTML = listTxt.value;
    button.innerHTML = "delete";
    button.addEventListener("click", deleteList);
    checkbox.addEventListener("change", checkedList);
    // console.log(checkbox);
}

function checkedList(event){
  const listCheck = event.target.parentElement;
  if(event.target.checked){
    listCheck.classList = "listChecked"
  }else{
    listCheck.classList = "";
  }
}

function deleteList(event){
  const targetList = event.target.parentElement
  // console.log(targetList);
  todoList = todoList.filter(todo => {
    return todo.seq !== parseInt(targetList.id);
    // console.log(todo.seq);
    // console.log(targetList.id);
    // console.log(todoList);
  })
  targetList.remove();
}