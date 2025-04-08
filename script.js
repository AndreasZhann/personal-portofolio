const loadMoreBtn = document.querySelector("#loadMore");
let currentItem = parseInt(localStorage.getItem("sh"));
let boxes = [...document.querySelectorAll(".projectContainer .boxContainer .box")];

const showItems = (count) => {
  boxes.forEach((box, index) => {
    box.style.display = index < count ? "inline-block" : "none";
  });
  loadMoreBtn.innerText = count >= boxes.length ? "Show Less" : "Load More";
};
showItems(currentItem);

loadMoreBtn.onclick = () => {
  if (currentItem >= boxes.length) {
    currentItem = 3;
  } else {
    currentItem += 3;
    if (currentItem > boxes.length) {
      currentItem = boxes.length;
    }
  }
  localStorage.setItem("showItems", currentItem);
  showItems(currentItem);
};
window.addEventListener("pageshow", function (event) {
  currentItem = 3;
  showItems(currentItem);
});
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};
