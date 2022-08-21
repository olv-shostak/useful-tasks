const cardRef = document.querySelector(".card");

const mouseOverListener = (e) => {
  if (e.target.classList.contains("card__delete")) {
    e.currentTarget.classList.add("card_focus");
  }
};

cardRef.addEventListener("mouseover", mouseOverListener);

const mousLeaveListener = (e) => {
  if (e.target.classList.contains("card__delete")) {
    e.currentTarget.classList.remove("card_focus");
  }
};

cardRef.addEventListener("mouseout", mousLeaveListener);
