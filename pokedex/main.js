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
let offset = 1;
let pokemon;


/*  //////////////// CLASS CONSTRUCTOR  ////////////////   */

class Pokemon  {
    constructor ( id, pokeName, types, img) {
        this.id = id;
        this.name = pokeName;
        this.types = types;
        this.img = img;

    }
}

/*  ////////////  FUNCTIONS ///////////////   */


function makePoke(data){ //parameter: object
    let newPokemon = new Pokemon(data.id, data.name, data.types, data.img);
    return newPokemon;
}

function pokemonDivMaker(pokemons) {
    pokemons.forEach((pokemon)=>{   
        const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('card');
    pokemonContainer.appendChild(pokemonDiv);
    pokemonDiv.innerHTML = `
    <img src="${pokemon.sprites.other['offical-artwork'].front_default}">
    <p>Id: ${pokemon.id}</p>
    <p>Name: ${pokemon.name}</p>
    <p>Types: ${((pokemon.types).map((type)=>type.name)).join(", ")}</p>
`}
 
    )
    
} 

function searchPokemon() {
    console.log('');
}

function getPokemons(offset, limit) {
    /**
     * maybe here: if (page == 2 ){offset = }
     * else if(page == 3) etc
     * but you would also need to do this for generations buttons?
     */
    pokemonContainer.innerHTML = ""; //sweep up
for(let i=offset;i<limit;i++){
 let fetchURL = baseURL + `/${i}`;
fetch(fetchURL)
    .then(
        response => response.json()
    ).then(
        (data) => {const newPoke = makePoke(data);
            pokemons.push(newPoke);
       console.log(newPoke);}  //an object pushed to an array of objects
    )
}  
console.log(pokemons);
}

function getPokemonAttributes(pokemonArray) {
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
window.onload = getPokemons(offset,limit);

nextPage.addEventListener('click', (page)=>{page++; getPokemons(offset, limit)});
previousPage.addEventListener('click', (page)=>{page--; getPokemons(offset, limit)});

//display pokemons by selected generation
genRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
        pokemons= [];
        //[limit, offset] = getGen(radio.value);
        pokemonNumber.textContent = `There are ${limit} pokemons in generation ${radio.value}`
        getPokemonAttributes(getPokemons(limit, offset));
    }
    )
});











