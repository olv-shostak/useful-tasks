const listRef = document.querySelector(".country-list");
const searchInput = document.querySelector(".search");

searchInput.addEventListener("input", _.debounce(onInputHandler, 500));

function onInputHandler(e) {
  const searchValue = e.target.value.toLowerCase();
  console.log(this.value);
  const filtredCountries = countries.filter((t) => {
    if (searchValue === "") renderFiltredCountries(countries);
    return t.toLowerCase().startsWith(searchValue);
  });
  renderFiltredCountries(filtredCountries);
}

function renderFiltredCountries(filtered) {
  listRef.innerHTML = "";

  const countriesElement = filtered.map(createCountryElement);

  listRef.append(...countriesElement);
}

function createCountryElement(country) {
  const countryElement = document.createElement("h2");
  countryElement.classList.add("country");
  countryElement.textContent = country;
  return countryElement;
}

renderFiltredCountries(countries);
