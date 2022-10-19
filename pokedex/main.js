/* /////////////   DOCUMENT OBJECTS   /////////////////  */

const pokemonNumber = document.querySelector("#pokemon-number");
const pokemonContainer = document.querySelector(".pokemon-container");
const searchTerm = document.querySelector("#search-term");
const submitSearch = document.querySelector("#submit-search");
const genRadios = document.querySelectorAll(".gen-radio");
const form = document.querySelector("form");
//const nextPage
//const previousPage

/* ////////////////  GLOBAL VARIABLES    ////////////    */
const baseURL = "https://pokeapi.co/api/v2/pokemon";
let genNumber = 0;
let pokemons = [];
let extraArray = [];
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
  pokemons.forEach((pokemon) => {
    console.log(pokemon);
  });
  return pokemons; // returning an array of pokemon names for selected generation
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

function searchPokemon(term, pokemons) {
  if (pokemons.includes(term)) {
    console.log("yes");
  } else {
    console.log("try another page");
  }
}

function getPokemonAttributes(arr) {
  //of the array of names returned above
  extraArray = [];
  console.log(arr); //works
  arr.forEach((pokemon) => {
    fetch(baseURL + `/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
}

/*  /////////////////// RUNTIME   //////////////////////   */

/* searchTerm.addEventListener("submit", function (e) {
  e.preventDefault;
  let searchWord = searchTerm.value;
  console.log(pokemons);
  searchPokemon(searchWord, pokemons);
});
 */
form.addEventListener("submit", function (e) {
  e.preventDefault;
  let searchWord = searchTerm.value;
  console.log(pokemons);
  searchPokemon(searchWord, pokemons);
});

genRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    genNumber = radio.value;
    [limit, offset] = getGen(genNumber);
    pokemonNumber.textContent = `There are ${limit} pokemons in generation ${genNumber}`;
    getPokemons(limit, offset);
    console.log(pokemons);
  });
});
