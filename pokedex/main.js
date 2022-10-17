/* /////////////   DOCUMENT OBJECTS   /////////////////  */

const pokemonNumber = document.querySelector('#pokemon-number');
const pokemonContainer = document.querySelector('.pokemon-container')
const searchTerm = document.querySelector('#search-term');
const submitSearch = document.querySelector('#submit-search');
const genRadios = document.querySelectorAll('.gen-radio');
const baseURL = 'https://pokeapi.co/api/v2/pokemon';
//const genButtons = document.querySelectorAll('.gen');

/* ////////////////  GLOBAL VARIABLES    ////////////    */
let amountPokemons = 0;
let genNumber = 0;

// example: 
// https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0.
//promise.all()
//use map() method or forEach() to generate cards

/*  ////////////  FUNCTIONS ///////////////   */

function getGen(g) {
    switch (g) {
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

function pokemonDivMaker(amountPokemons) {
    for (let i = 0; i < amountPokemons; i++) {
        const pokemonDiv = document.createElement('div');
        pokemonContainer.appendChild(pokemonDiv);
        pokemonDiv.classList.add('card');
        const pokemonImage = document.createElement('img');
        pokemonDiv.appendChild(pokemonImage);
    }
}

/* function searchPokemon(value) {
} */


/*  /////////////////// RUNTIME   //////////////////////   */

pokemonNumber.textContent = `There are ${amountPokemons} pokemons in generation ${genNumber}`
pokemonDivMaker(amountPokemons);

genRadios.forEach((radio) => {
    radio.addEventListener('change', () => {
        genNumber = radio.value;
        let limit, offset;
        [limit, offset] = getGen(genNumber);
        console.log(limit, offset);

        const fetchURL = baseURL + "?offset=" + offset.toString() + "&limit=" + limit.toString();
        console.log(fetchURL);

        const pokemonData = fetch(fetchURL);
        pokemonData.then((response) => {
            return response.json()
        })
            .then((data) => {
                const pokemons = data.results;
                for (const pokemon of pokemons) {
                    console.log(pokemon.name);
                    pokemonDivMaker(pokemons.length);
                }
            }
            )

    })
})



/* 
.catch(function (err) {
    console.log('error', err);
}) */