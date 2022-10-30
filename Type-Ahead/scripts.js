const endpoint =
        "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
    .then(prom => prom.json())
    .then(data => {
        cities.push(...data)
        console.log(cities);
    });
    
const findMatches = (input, cities) => {
    return cities.filter(place => {
        const searchTerm = RegExp(input, 'gi');
        return place.city.match(searchTerm) || place.state.match(searchTerm)
    })
}

function displayResults(){
    const resultArray = findMatches(this.value, cities);
    
}

const searchInput = document.querySelector('.search');

searchInput.addEventListener('keyup', displayResults)