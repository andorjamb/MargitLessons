/* /////////////   DOCUMENT OBJECTS   /////////////////  */

const pokemonNumber = document.querySelector('#pokemon-number');
const pokemonContainer = document.querySelector('.pokemon-container')
const searchTerm = document.querySelector('#search-term');
const submitSearch = document.querySelector('#submit-search');
const genRadios = document.querySelectorAll('.gen-radio');
const genLabels = document.querySelectorAll('.gen');

/* ////////////////  GLOBAL VARIABLES    ////////////    */
const baseURL = 'https://pokeapi.co/api/v2/pokemon';
let genNumber = 0;
let pokemons = [];
let limit, offset;

/*  ////////////  FUNCTIONS ///////////////   */

function getGen(number) {
    switch (number) {
        case "1":
            return [151, 0];
            break;
        case "2":
            return [100, 151];
            break;
        case "3":
            return [135, 251];
            break;
        case "4":
            return [107, 386];
            break;
        case "5":
            return [156, 493];
            break;
        case "6":
            return [72, 659];
            break;
        case "7":
            return [88, 721];
            break;
        case "8":
            return [96, 809];
            break;
    }
}

function pokemonDivMaker(pname) {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('card');
    pokemonContainer.appendChild(pokemonDiv);
    pokemonDiv.innerHTML = `
    <p>Name: ${pname}</p>
    <p>ID: ${id}</p>
    <p>Types: ${types}</p>`;

}

function searchPokemon() {
    console.log('');
}

function getPokemons(limit, offset) {
    pokemonContainer.innerHTML = "";
    const fetchURL = baseURL + "?offset=" + offset.toString() + "&limit=" + limit.toString();
    fetch(fetchURL).then(
        (response) => { return response.json() }
    ).then(
        (data) => {
            (data.results).map((object) => { pokemons.push(object.name) });

        });
    return pokemons; // returning an indexed array of pokemon names for each generation
}

function getPokemonAttributes(pokemonArray) {//[bulbasaur, ....etc]
    //pokemonArray.forEach((pokemon) => {
    let requests = pokemonArray.map(pokemon => fetch(baseURL + `/${pokemon}`));

    //  });

    Promise.all(requests)

    Promise.all([promise1, promise2, promise3, promise4]);
}


for (const pokemon of pokemons) {
    pokemonDivMaker(pokemon.name);
}


/*  /////////////////// RUNTIME   //////////////////////   */

/**
 * 
 sample return object from promise:
 
 return {
     id:data.id,
     name: data.name,
     img: data.sprites.other[].front_default,
     types: 
    }
    */

genRadios.forEach((radio) => {

    radio.addEventListener('change', () => {
        genNumber = radio.value;
        pokemonArray = [];
        [limit, offset] = getGen(genNumber);
        pokemonNumber.textContent = `There are ${limit} pokemons in generation ${genNumber}`
        getPokemonAttributes(getPokemons(limit, offset));
    }
    )
});







