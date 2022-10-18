/* /////////////   DOCUMENT OBJECTS   /////////////////  */

const pokemonNumber = document.querySelector('#pokemon-number');
const pokemonContainer = document.querySelector('.pokemon-container')
const searchTerm = document.querySelector('#search-term');
const submitSearch = document.querySelector('#submit-search');
const genRadios = document.querySelectorAll('.gen-radio');
const nextPage = document.querySelector('#nextPage');
const previousPage = document.querySelector('#previousPage');

/* ////////////////  GLOBAL VARIABLES    ////////////    */
const baseURL = 'https://pokeapi.co/api/v2/pokemon';
let pokemons = [];
let limit = 60;
let offset = 0;
let pokemon;


/*  //////////////// CLASS CONSTRUCTOR  ////////////////   */

class Pokemon  {
    constructor ( id, pokeName, types, img) {
        this.id = id;
        this.name = pokeName;
        this.types = types; //array
        this.img = img;

    }
}

/*  ////////////  FUNCTIONS ///////////////   */


function makeObject(data){
    let newPokemon = new Pokemon(data.id, data.name, data.types, data.img);
    return newPokemon;
}

function pokemonDivMaker(object) {
    console.log(object);
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('card');
    pokemonContainer.appendChild(pokemonDiv);
    pokemonDiv.innerHTML = `
    <img src="${object.sprites.other['offical-artwork'].front_default}">
    <p>Id: ${object.id}</p>
    <p>Name: ${object.name}</p>
    <p>Types: ${((object.types).map((type)=>type.name)).join(", ")}</p>
`
} 

function searchPokemon() {
    console.log('');
}

function getPokemons(offset, limit) {
    pokemonContainer.innerHTML = ""; //sweep up
for(const i=offset;i<limit;i++){
 let fetchURL = `baseURL/${i}`;
console.log(fetchURL);
fetch(fetchURL)
    .then(
        response => response.json()
    ).then(
        (data) => {console.log(data.results);
            (data.results).map();
        });
    return pokemons; // returning an indexed array of pokemon names for each generation
}

}

function getPokemonAttributes(pokemonArray) {//[bulbasaur, ....etc, this takes the 'pokemons' global array as its parameter]
    let requests = pokemonArray.map(pokemon => fetch(baseURL + `/${pokemon}`)
    .then((response)=>response.json())
    .then((data)=>{pokemonDivMaker(makeObject(data))})
    )
    // data returned from each request has been mapped to an object, 
    // then fed to the divmaker

  Promise.all(requests);

} //end of getPokemonAttributes

/*  /////////////////// RUNTIME   //////////////////////   */

//pre-populate some divs
window.onload = getPokemons(1);

nextPage.addEventListener('click', (page)=>{page++; getPokemons(offset, limit)});
previousPage.addEventListener('click', (page)=>{page--; getPokemons(offset, limit});

//display pokemons by selected generation
genRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
        pokemons= [];
        [limit, offset] = getGen(radio.value);
        pokemonNumber.textContent = `There are ${limit} pokemons in generation ${radio.value}`
        getPokemonAttributes(getPokemons(limit, offset));
    }
    )
});











