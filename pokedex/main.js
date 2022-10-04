const pokemonNumber = document.querySelector('#pokemon-number');
const pokemonContainer = document.querySelector('.pokemon-container')
const searchTerm = document.querySelector('#search-term');
const submitSearch = document.querySelector('#submit-search');
const genRadios = document.querySelectorAll('.gen-radio');
let number = 10;
let generation = 0;
const genButtons = document.querySelectorAll('.gen');

// example: 
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.
//promise.all()
//use map() method or forEach() to generate cards


function defineGen(generation) {
    switch (generation) {
        case "1":
            return indexDivider = [151, 0];
            break;
        case "2":
            return indexDivider = [100, 151];
            break;
        case "3":
            return indexDivider = [135, 251];
            break;
        case "4":
            return indexDivider = [107, 386];
            break;
        case "5":
            return indexDivider = [156, 493];
            break;
        case "6":
            return indexDivider = [72, 659];
            break;
        case "7":
            return indexDivider = [88, 721];
            break;
        case "8":
            return indexDivider = [96, 809];
            break;

    }

}

function pokemonDivMaker(number) {
    for (let i = 0; i < number; i++) {
        const pokemonDiv = document.createElement('div');
        pokemonContainer.appendChild(pokemonDiv);
        pokemonDiv.classList.add('card');
        const pokemonImage = document.createElement('img');
        pokemonDiv.appendChild(pokemonImage);

    }
}

function genWrapper(generation) {
    const baseURL = 'https://pokeapi.co/api/v2/pokemon';
    fetchURL = '"' + baseURL + '?limit=' + defineGen()[0] + '&offet=' + defineGen()[1] + '"';
    console.log(fetchURL);
    return fetchURL;

}
function APICall(term) {
    let pokemonData = fetch(genWrapper()).then(function (response) { console.log('successful call'); return response.json() }).then(function (data) { console.log(data) }).catch(function (err) {
        console.log('error', err);
    })
}

function searchPokemon(value) {
    return APICall(value)

}

genRadios.forEach(genRadio => genRadio.addEventListener('click', function () {
    console.log(genRadio.value);
    defineGen(genRadio.value); //returns array

}));

pokemonDivMaker(10);
console.log('index divider: ', indexDivider);

pokemonNumber.textContent = `There are ${number} pokemons in generation ${generation}`