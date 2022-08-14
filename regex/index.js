function isEmail(email) {
  const regexEmail =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexEmail.test(email);
}

const formRef = document.querySelector(".form");
const inputRef = document.querySelector("#input-email");
const warningRef = document.querySelector(".warning");

formRef.addEventListener("submit", (e) => e.preventDefault());

inputRef.addEventListener("keypress", (e) => {
  if (e.code === "Enter") {
    if (isEmail(e.target.value)) {
      warningRef.style.display = "none";
    } else {
      warningRef.style.display = "block";
    }
  }
});

// window.onbeforeunload = function () {
//   return "Are you sure ???";
// };

// OR

window.addEventListener(
  "beforeunload",
  (e) => (e.returnValue = "Are you sure?")
);
