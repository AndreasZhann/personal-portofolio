// make cost of inputbox and list container
// add addtask function and in this function we want to do if in search box is nothing we need to alert somethin and else we need to add the searchbox value to ul
// add x in right of li how? create span element in span elemen = \u00d7
// make new fuct "click" on list container in the funct we write if e target name li must add class toggle checked else if e target tag name is span we remove the parent elemnt
// make new funct to save data in save data we write localstorage.setitem from data that in list container in html and add to all function
// make new funct that will be show our task to the list container when we opened again

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write some task!!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);

    saveData();
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
