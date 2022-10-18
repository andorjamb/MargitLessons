/* /////////////   DOCUMENT OBJECTS   /////////////////  */

const pokemonNumber = document.querySelector("#pokemon-number");
const pokemonContainer = document.querySelector(".pokemon-container");
const searchTerm = document.querySelector("#search-term");
const submitSearch = document.querySelector("#submit-search");
const genRadios = document.querySelectorAll(".gen-radio");
//const nextPage
//const previousPage

/* ////////////////  GLOBAL VARIABLES    ////////////    */
const baseURL = "https://pokeapi.co/api/v2/pokemon";
let genNumber = 0;
let pokemons = [];
let limit, offset;

/*  //////////////// CLASS CONSTRUCTOR  ////////////////7   */

class Pokemon {
  constructor(id, pokeName, types, img) {
    this.id = id;
    this.name = pokeName;
    this.types = types;
    this.img = img;
  }
}

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

function pokemonDivMaker(poke) {
  const pokemonDiv = document.createElement("div");
  pokemonDiv.classList.add("card");
  pokemonContainer.appendChild(pokemonDiv);
  pokemonDiv.innerHTML = `
    <p>Name: ${poke.name}</p>
    <p>ID: ${poke.id}</p>
    `;
}

function searchPokemon(term) {
  if (pokemons.includes(term)) console.log("");
}

function makeObject(data) {
  let newPoke = new Pokemon(data.id, data.name, data.name, data.name);
  console.log(newPoke);
  return newPoke;
}

function getPokemons(limit, offset) {
  pokemonContainer.innerHTML = "";
  pokemons = [];
  const fetchURL =
    baseURL + "?offset=" + offset.toString() + "&limit=" + limit.toString();
  fetch(fetchURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      data.results.map((object) => {
        pokemons.push(object.name);
      });
    });
  return pokemons; // returning an indexed array of pokemon names for each generation
}

function getPokemonAttributes(arr) {
  //[bulbasaur, ....etc]
  let requests = arr.map((pokemon) =>
    fetch(baseURL + `/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        return makeObject(data);
      })
  ); // data returned from each request has been mapped to an object

  Promise.all(requests);
  /* for (const pokemon of pokemons) {
    pokemonDivMaker(pokemon.name);
}
 */
} //end of getPokemonAttributes

/*  /////////////////// RUNTIME   //////////////////////   */

searchTerm.addEventListener("submit", function () {
  let searchWord = searchTerm.value;
  searchPokemon(searchWord);
});

genRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    genNumber = radio.value;
    pokemonArray = [];
    [limit, offset] = getGen(genNumber);
    pokemonNumber.textContent = `There are ${limit} pokemons in generation ${genNumber}`;
    getPokemonAttributes(getPokemons(limit, offset));
  });
});
