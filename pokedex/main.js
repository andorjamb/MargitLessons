const pokemonNumber = document.querySelector('#pokemon-number');
const pokemonContainer = document.querySelector('.pokemon-container')
const searchTerm = document.querySelector('#search-term');
const submitSearch = document.querySelector('#submit-search');
const genRadios = document.querySelectorAll('.gen-radio');
let number = 50;
let generation = 0;
const genButtons = document.querySelectorAll('.gen');

// https://pokeapi.co/api/v2/pokemon/

genButtons.forEach(genButton => genButton.addEventListener('click', function (this) {
    console.log('clocking');
   
}));



function pokemonDivMaker(number) {
    for (let i = 0; i < number; i++) {
        const pokemonDiv = document.createElement('div');
        pokemonContainer.appendChild(pokemonDiv);
        pokemonDiv.classList.add('card');
        const pokemonImage = document.createElement('img');
        pokemonDiv.appendChild(pokemonImage);


    }
}

function searchWrapper(searchTerm,) {
    const baseURL = 'https://pokeapi.co/api/v2/';
    return searchURL = '"' + baseURL + '"'

}

function genWrapper(gen) {

    const baseURL = 'https://pokeapi.co/api/v2/';


}
function APICall(term) {

    let pokemonData = fetch('https://pokeapi.co/api/v2/pokemon/' + term).then(function (response) { console.log('successful call'); return response.json() }).then(function (data) { console.log(data) }).catch(function (err) {
        console.log('error', err);
    })
}

submitSearch.addEventListener('click', searchPokemon(searchTerm.value));


function searchPokemon(value) {

    return APICall(value)


}

pokemonDivMaker(10);




pokemonNumber.textContent = `There are ${number} pokemons in generation ${generation}`