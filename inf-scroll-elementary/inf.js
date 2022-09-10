const COUNTRY_SEGMENT_COUNT = 10;
let startIndex = 0;

const listRef = document.querySelector(".country-list");

function isScrollToBottom() {
  return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

function createCountryElement(country) {
  const countryElement = document.createElement("h2");
  countryElement.classList.add("country");
  countryElement.textContent = country;
  return countryElement;
}

function renderPartOfCountries() {
  const partOfCountries = countries
    .slice(startIndex, startIndex + COUNTRY_SEGMENT_COUNT)
    .map(createCountryElement);

  listRef.append(...partOfCountries);

  startIndex += COUNTRY_SEGMENT_COUNT;

  // console.log(document.body.offsetHeight);
  // console.log(window.innerHeight);
  // console.log(window.scrollY);
  // console.log(startIndex);
}

// renderPartOfCountries();
for (let i = 0; i < 300; i++) {
  if (isScrollToBottom()) {
    renderPartOfCountries();
  }
}

function scrollHandler() {
  if (!isScrollToBottom()) return;

  renderPartOfCountries();

  if (startIndex >= countries.length) {
    window.removeEventListener("scroll", scrollHandler);
  }
}

window.addEventListener("scroll", scrollHandler);
// window.addEventListener("scroll", _.throttle(scrollHandler, 250));
