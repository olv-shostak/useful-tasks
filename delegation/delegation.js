// -------------- ONE OF MANY ----------------------

// const tagsContainer = document.querySelector(".js-tags");
// let selectedTag = "null";

// tagsContainer.addEventListener("click", onTagClick);

// function onTagClick(e) {
//   if (e.target.nodeName !== "BUTTON") return;

//   const currentActiveBtn = document.querySelector(".tags__btn--active");

//   if (currentActiveBtn) {
//     currentActiveBtn.classList.remove("tags__btn--active");
//   }

//   let isSelected = e.target.dataset.value === selectedTag;

//   e.target.classList.add("tags__btn--active");

//   selectedTag = e.target.dataset.value;

//   if (isSelected && currentActiveBtn) {
//     currentActiveBtn.classList.remove("tags__btn--active");
//     selectedTag = "null";
//   }

//   console.log(selectedTag);
// }

//  --------------- A FEW OF MANY ------------------

const tagsContainer = document.querySelector(".js-tags");
const selectedTags = new Set();

tagsContainer.addEventListener("click", onTagClick);

function onTagClick(e) {
  if (e.target.nodeName !== "BUTTON") return;

  const tag = e.target.dataset.value;
  const isSelected = e.target.classList.contains("tags__btn--active");

  if (isSelected) {
    selectedTags.delete(tag);
  } else {
    selectedTags.add(tag);
  }

  e.target.classList.toggle("tags__btn--active");

  console.log(selectedTags);
}
