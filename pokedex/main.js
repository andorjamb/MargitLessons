/* /////////////   DOCUMENT OBJECTS   /////////////////  */

const pokemonNumber = document.querySelector("#pokemon-number");
const pokemonContainer = document.querySelector(".pokemon-container");
const searchBtn = document.querySelector("#search-btn");
const genRadios = document.querySelectorAll(".gen-radio");
const form = document.querySelector("form");
const searchTerm = document.querySelector("#search-term");
//const nextPage = document.querySelector('#nextPage);
//const previousPage = document.querySelector('#previousPage);

/* ////////////////  GLOBAL VARIABLES    ////////////    */
const baseURL = "https://pokeapi.co/api/v2/pokemon";
let genNumber = 0;
let pokemons = [];
let attributes = [];
let limit = "60";
let offset = "0";
let testPokemons = [1, 2, 3];

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
      return ["151", "0"];
      break;
    case "2":
      return ["100", "151"];
      break;
    case "3":
      return ["135", "251"];
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

function makePoke(data) {
  let types = data.types.map((type) => type.type.name).join(", ");
  let newPoke = new Pokemon(
    data.id,
    data.name,
    types,
    data.sprites.other["official-artwork"].front_default
  );
  attributes.push(newPoke);
  localStorage.setItem(newPoke.name, newPoke);
  return newPoke;
}

function getPokemons(limit, offset) {
  pokemonContainer.innerHTML = "";

  let fetchURL = //just fetches an array of names
    //note: it would be better to download the whole list at the beginning, then access it by index as needed
    baseURL + "?offset=" + offset.toString() + "&limit=" + limit.toString();
  fetch(fetchURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.results.map((pokemon) => {
        pokemons.push(pokemon.name);
      });
    });

  /**
 *  if (localStorage.Storage.length > 0) {
    let fetchLocalList = Object.keys(localStorage);
    console.log(fetchLocalList.length);
    console.log(fetchLocalList);
    fetchLocalList.forEach((item) => pokemonCards(item));
  } else {
  
 *
 */
}

function getAttributes() {
  //try to fetch from local storage first
  attributes = [];
  /*  if (localStorage.length > 0) {
    let fetchLocal = Object.keys(localStorage);
    console.log(fetchLocal.length);
    console.log(fetchLocal);
    fetchLocal.forEach((item) => pokemonCards(item));
  } else { */
  let requests = pokemons.map((pokemon) =>
    fetch(baseURL + `/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        return makePoke(data); //attributes are pushed to attributes array in makePoke()
        // (and added to localStorage)git 
      })
  );

  Promise.all(requests).then((attributes) => {
    return pokemonCards(attributes); //making an object from each request
  });
}
//}

function pokemonCards(attributes) {
  // takes as parameter an array of objects
  attributes.forEach((attribute) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("card");
    pokemonContainer.appendChild(pokemonCard);
    pokemonCard.innerHTML = `
    
  <h3>${
    attribute.name.charAt(0).toUpperCase() + attribute.name.substring(1)
  }</h3>
  <img src="${attribute.img}">
    <p>Id: ${attribute.id}</p>
    <p>Types: ${attribute.types}</p>
    `;
  });
}

function searchPokemon(term) {
  //if adding localstorage, check localStorage first, then:
  /*  if (Object.keys(localStorage).includes(term)) {
    pokemonCards(term);
  } else { */
  pokemons = [term];
  getAttributes();
  //}
}

/*  /////////////////// RUNTIME   //////////////////////   */
window.onload = getPokemons(limit, offset);

setTimeout(() => {
  getAttributes(getPokemons);
}, 1000);

form.addEventListener("submit", function (e) {
  e.preventDefault();
  searchPokemon(searchTerm.value);
});

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(searchTerm);
  console.log(searchTerm.value);
  searchPokemon(searchTerm.value);
});

genRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    console.log("clicked");
    if (pokemons.length != 0) {
      pokemons = [];
    }
    genNumber = radio.value;
    [limit, offset] = getGen(genNumber);
    pokemonNumber.textContent = `There are ${limit} pokemons in generation ${genNumber}`;
    getPokemons(limit, offset);
    setTimeout(() => {
      getAttributes();
    }, 1000); // Note for improvement: see if async/await avoids the need for these timeouts
  });
});
