const notesContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".createNote");
let notes = document.querySelectorAll(".input-box");

function showNote() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

function saveData() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.setAttribute("contenteditable", "true");
  inputBox.className = "input-box";
  img.src = "note-app.png";
  notesContainer.appendChild(inputBox).appendChild(img);
  saveData();
});
notesContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = function () {
        saveData();
      };
    });
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});
showNote();
