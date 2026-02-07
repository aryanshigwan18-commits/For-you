const pages = document.querySelectorAll(".page");
let currentPage = 0;

function nextPage() {
  pages[currentPage].classList.remove("active");
  currentPage++;
  pages[currentPage].classList.add("active");
}

function showNo() {
  document.getElementById("noText").classList.remove("hidden");
}

function showGifts() {
  pages[currentPage].classList.remove("active");
  document.getElementById("gifts").classList.add("active");
}
