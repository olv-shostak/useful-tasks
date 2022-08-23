const divRef = document.querySelector("#my-id");

const handlerScroll = () => {
  console.log("scroll", new Date());
};

// divRef.addEventListener("scroll", _.throttle(handlerScroll, 2000));
// divRef.addEventListener("scroll", _.debounce(handlerScroll, 2000));
