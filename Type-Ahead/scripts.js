const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((prom) => prom.json())
  .then((data) => {
    cities.push(...data);
  });

const findMatches = (input, cities) => {
  return cities.filter((place) => {
    const searchTerm = new RegExp(input, "gi");
    return place.city.match(searchTerm) || place.state.match(searchTerm);
  });
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function displayResults() {
  const resultArray = findMatches(this.value, cities);

  const text = resultArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );

      return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
        </li>`;
    })
    .join("");
  suggestions.innerHTML = text;
}

const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

searchInput.addEventListener("keyup", displayResults);
