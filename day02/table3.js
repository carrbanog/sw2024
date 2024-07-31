const memoForm = document.querySelector("#memoForm");
const searchForm = document.querySelector("#searchForm");
const noteTxt = document.querySelector("#noteTxt");
let tableBody = document.querySelector("#tableBody");
const savedTodos = localStorage.getItem("todos");
let todoList = []
let conSeq = 0;

function drawList(){
  tableBody.innerHTML = "";
  todoList.forEach((todoObj) => {
    tableBody.innerHTML +=
    `<tr>
    <td><input type="checkbox"></td>
    <td>${todoObj.title}</td>
    <td><button>수정</button></td>
    <td><button onclick = "deleteList(${todoObj.seq})">삭제</button></td>
  </tr>`
    console.log(todoObj);
    //todoList의 첫 번째 값은 todoObj가 처음 반복할 때 가지는 값과 같습니다.
  })
}

memoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  todoList.push({seq:conSeq, title:noteTxt.value, done:false});
  conSeq++;
  console.log(todoList);
  drawList();
  noteTxt.value = "";
  localStorage.setItem("todos", JSON.stringify(todoList));
})
searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
})

function deleteList(seq){
  todoList = todoList.filter((todoObj) => {
    return todoObj.seq !== seq;
  })
  drawList();
}
if(savedTodos !== null){
  const parsedTodos = JSON.parse(savedTodos);
  todoList = parsedTodos;
  console.log(parsedTodos)
  drawList();
}