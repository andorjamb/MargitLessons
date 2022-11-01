/* /////////////   DOCUMENT OBJECTS   /////////////////  */

const pokemonNumber = document.querySelector("#pokemon-number");
const pokemonContainer = document.querySelector(".pokemon-container");
const searchBtn = document.querySelector("#search-btn");
const form = document.querySelector("form");
const searchTerm = document.querySelector("#search-term");
const genRadios = document.querySelectorAll(".gen-radio");
const nextSixty = document.querySelector("#nextSixty");
const menuIcon = document.querySelector("#menu-icon");
const buttonContainer = document.querySelector(".button-container");
const gen = document.querySelectorAll('.gen');

/* ////////////////  GLOBAL VARIABLES    ////////////    */
const baseURL = "https://pokeapi.co/api/v2/pokemon";
let genNumber = 0;
let pokemons = [];
let attributes = [];
let limit = "60";
let offset = "0";
let pageNo = 1;

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
  return newPoke;
}

function getPokemons(limit, offset) {
  pokemonContainer.innerHTML = "";
  let fetchURL =
    baseURL + "?offset=" + offset.toString() + "&limit=" + limit.toString();
  fetch(fetchURL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data.results.map((pokemon) => {
        pokemons.push(pokemon.name);
      });
    })
    .then((result) => {
      console.log(result.length);
    });
}

function getAttributes() {
  attributes = [];
  let requests = pokemons.map((pokemon) =>
    fetch(baseURL + `/${pokemon}`)
      .then((response) => response.json())
      .then((data) => {
        return makePoke(data);
      })
  );

  Promise.all(requests).then((attributes) => {
    return pokemonCards(attributes);
  });
}

function pokemonCards(attributes) {
  attributes.forEach((attribute) => {
    const pokemonCard = document.createElement("div");
    pokemonCard.classList.add("card");
    pokemonContainer.appendChild(pokemonCard);
    pokemonCard.innerHTML = `
    
  <h3>${attribute.name.charAt(0).toUpperCase() + attribute.name.substring(1)
      }</h3>
  <img src="${attribute.img}">
    <p>Id: ${attribute.id}</p>
    <p>Types: ${attribute.types}</p>
    `;
  });
}

function searchPokemon(term) {
  pokemonContainer.innerHTML = "";
  pokemons = [term];
  getAttributes(pokemons);
}

/*  /////////////////// RUNTIME   //////////////////////   */
window.onload = getPokemons(limit, offset);
setTimeout(() => {
  getAttributes(getPokemons);
}, 500);

nextSixty.addEventListener("click", function () {
  pageNo = Number(pageNo) + 1;
  if (pageNo >= 15) {
    nextSixty.style.pointerEvents = "none";
    return 0;
  } else {

    offset = (Number(pageNo) * 60).toString();
    pokemonNumber.textContent = `Showing up to pokemon ${Number(offset)}`;
    limit = "60";
    setTimeout(() => {
      getAttributes(getPokemons(limit, offset));
    }, 500);
  }
});

menuIcon.addEventListener('click', () => { buttonContainer.classList.add("mobile") });

form.addEventListener("submit", function (e) {
  e.preventDefault();
  pokemonNumber.textContent = "";
  searchPokemon(searchTerm.value.toLowerCase());
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
      getAttributes(pokemons);
    }, 500);
  });
});
