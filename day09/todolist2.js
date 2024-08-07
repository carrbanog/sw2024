const saveBtn = document.querySelector("#saveBtn");
const title = document.querySelector(".title");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  append();
})

function append(){
  const listArea = document.querySelector(".resultArea");
  listArea.innerHTML = `<li>${title.value}</li>`;
  title.innerHTML = "";
  title.focus();
}