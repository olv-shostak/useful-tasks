const COUNTRY_SEGMENT_COUNT = 15;
let startIndex = 0;

const listRef = document.querySelector(".country-list");
const anchorRef = document.querySelector(".anchor");

const observer = new IntersectionObserver(observerHandler, { threshold: 0 });

observer.observe(anchorRef);

function observerHandler([entrie], observerRef) {
  if (!entrie.isIntersecting) return;

  renderPartOfCountries();

  if (startIndex >= countries.length) {
    observerRef.unobserve(anchorRef);
  }
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
}
