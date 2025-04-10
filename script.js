const loadMoreBtn = document.querySelector("#loadMore");
const boxes = [...document.querySelectorAll(".projectContainer .boxContainer .box")];
let currentItem = parseInt(localStorage.getItem("shownItems")) || 3;

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
    if (currentItem > boxes.length) currentItem = boxes.length;
  }

  localStorage.setItem("shownItems", currentItem);
  showItems(currentItem);
};


window.addEventListener("pageshow", function (event) {
  currentItem = parseInt(localStorage.getItem("shownItems")) || 3;
  showItems(currentItem);
});
