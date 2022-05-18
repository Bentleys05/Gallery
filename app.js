// selecting items
const imageBtn = document.querySelector(".image-btn");
const imageBtn2 = document.getElementById("image-btn-2");
const imageBtn3 = document.getElementById("image-btn-3");
const imageBtn4 = document.getElementById("image-btn-4");
const imageBtn5 = document.getElementById("image-btn-5");
const imageBtn6 = document.getElementById("image-btn-6");
const modalOverlay = document.querySelector(".modal-overlay");
const closeBtn = document.querySelector(".close-btn");

// event listener on click
// opening modal 1
imageBtn.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

// closing modal 1
closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});

// opening modal 2
imageBtn2.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

// closing modal 2
closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});

// opening modal 3
imageBtn3.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

// closing modal 3
closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});

// opening modal 4
imageBtn4.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

// closing modal 4
closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});

// opening modal 5
imageBtn5.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

// closing modal 5
closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});

// opening modal 6
imageBtn6.addEventListener("click", function () {
  modalOverlay.classList.add("open-modal");
});

// closing modal 6
closeBtn.addEventListener("click", function () {
  modalOverlay.classList.remove("open-modal");
});
