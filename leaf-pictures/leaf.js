const imagesRef = document.querySelectorAll(".promo-image");
const modalRef = document.getElementById("modal-window");
const modalContentRef = document.getElementById("modal-content");

const dataSource = [];

imagesRef.forEach((element) => {
  dataSource.push(element.dataset.source);
  element.addEventListener("click", (e) => {
    modalRef.style.display = "block";
    modalContentRef.src = element.dataset.source;
  });
});

modalRef.querySelector(".close").addEventListener("click", () => {
  modalRef.style.display = "none";
});

document.addEventListener("keyup", (e) => {
  const currentIndex = dataSource.indexOf(modalContentRef.src);
  if (e.key === "ArrowLeft") {
    leftClick(currentIndex);
  } else if (e.key === "ArrowRight") {
    rightClick(currentIndex);
  }
});

function leftClick(currentIndex) {
  let nextIndex = currentIndex - 1;
  if (nextIndex === -1) {
    nextIndex = dataSource.length - 1;
  }
  modalContentRef.src = dataSource[nextIndex];
}

function rightClick(currentIndex) {
  let nextIndex = currentIndex + 1;
  if (nextIndex === dataSource.length) {
    nextIndex = 0;
  }
  modalContentRef.src = dataSource[nextIndex];
}
