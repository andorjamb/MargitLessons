/* /////////////   DOCUMENT OBJECTS   /////////////////  */

const pokemonNumber = document.querySelector('#pokemon-number');
const pokemonContainer = document.querySelector('.pokemon-container')
const searchTerm = document.querySelector('#search-term');
const submitSearch = document.querySelector('#submit-search');
const genRadios = document.querySelectorAll('.gen-radio');
//const namePara = document.querySelectorAll('namePara');
const genLabels = document.querySelectorAll('.gen');

/* ////////////////  GLOBAL VARIABLES    ////////////    */
const baseURL = 'https://pokeapi.co/api/v2/pokemon';
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

function pokemonDivMaker(pname) {
    const pokemonDiv = document.createElement('div');
    pokemonDiv.classList.add('card');
    pokemonContainer.appendChild(pokemonDiv);
    pokemonDiv.innerHTML = `
    <p>Name: ${pname}</p>`;

}

/* function searchPokemon(value) {
} */


/*  /////////////////// RUNTIME   //////////////////////   */


genLabels.forEach((label) => {
    label.addEventListener('click', () => {
        label.classList.toggle('selected');
    })

})

genRadios.forEach((radio) => {
    radio.addEventListener('click', () => {
        console.log('radio');
        genNumber = radio.value;
        let limit, offset;
        [limit, offset] = getGen(genNumber);
        pokemonNumber.textContent = `There are ${limit} pokemons in generation ${genNumber}`
        const fetchURL = baseURL + "?offset=" + offset.toString() + "&limit=" + limit.toString();
        console.log(fetchURL);

        const pokemonData = fetch(fetchURL);
        pokemonData.then((response) => {
            return response.json()
        })
            .then((data) => {
                const pokemons = data.results;
                console.log(pokemons.length);
                pokemonContainer.innerHTML = "";

                for (const pokemon of pokemons) {
                    pokemonDivMaker(pokemon.name);
                }
            }
            )

    })
})



/* 
.catch(function (err) {
    console.log('error', err);
}) */