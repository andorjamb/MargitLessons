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

/* function searchPokemon(value) {
} */

function getPokemons(radio) {
    pokemonContainer.innerHTML = "";
    genNumber = radio.value;
    let limit, offset;
    [limit, offset] = getGen(genNumber);
    pokemonNumber.textContent = `There are ${limit} pokemons in generation ${genNumber}`

    const fetchURL = baseURL + "?offset=" + offset.toString() + "&limit=" + limit.toString();
    const pokemonArray = [];
    fetch(fetchURL).then(
        (response) => { return response.json() }
    ).then(
        (data) => {
            console.log(data.results);
            (data.results).map((object) => { pokemonArray.push(object.name) });
            console.log(pokemonArray);
        });

    for (const pokemon in pokemonArray) {
        console.log(pokemon);
        /*  fetch(`baseURL/${pokemon.name}`).then((response) => response.json()).then((data) => {
             console.log(data.results)
         }); */
    }



}

//Promise.all([pokemonName, pokemonID]);

/*fetch(fetchURL).then((response) => {
    return response.json()
})
    .then((data) => {
        const pokemons = data.results;
 
        for (const pokemon of pokemons) {
            pokemonDivMaker(pokemon.name);
        }
    }
    )
    .catch(function (err) {
        console.log('error', err);
    })
Promise.all([getName]).then((values) => {
    console.log(values);
});
}*/




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
        getPokemons(radio)
    }
    )
});



