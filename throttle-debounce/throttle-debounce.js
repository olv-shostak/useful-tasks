const divRef = document.querySelector("#my-id");

const handlerScroll = () => {
  console.log("scroll", new Date());
};

// divRef.addEventListener("scroll", _.throttle(handlerScroll, 2000));
// divRef.addEventListener("scroll", _.debounce(handlerScroll, 2000));

function throttle(callback, delay) {
  let id;

  return function () {
    // console.log(id);
    if (id) return;

    id = setTimeout(() => {
      callback();
      id = 0;
    }, delay);
  };
}

function debounce(callback, delay) {
  let id;

  return function () {
    // console.log(id);
    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      callback();
      id = 0;
    }, delay);
  };
}

divRef.addEventListener("scroll", throttle(handlerScroll, 2000));
// divRef.addEventListener("scroll", debounce(handlerScroll, 2000));
