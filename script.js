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
    // Kalau semua project sudah muncul dan tombol Show Less diklik
    currentItem = 3;
  } else {
    // Tambah 3 project
    currentItem += 3;
    if (currentItem > boxes.length) currentItem = boxes.length;
  }

  localStorage.setItem("shownItems", currentItem);
  showItems(currentItem);
};

// Jaga-jaga kalau kembali dari TryOn, tetap tunjukkan jumlah project terakhir
window.addEventListener("pageshow", function (event) {
  currentItem = parseInt(localStorage.getItem("shownItems")) || 3;
  showItems(currentItem);
});
