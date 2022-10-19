/* /////////////   DOCUMENT OBJECTS   /////////////////  */

const pokemonNumber = document.querySelector("#pokemon-number");
const pokemonContainer = document.querySelector(".pokemon-container");
const searchTerm = document.querySelector("#search-term");
const searchBtn = document.querySelector("#search-btn");
const genRadios = document.querySelectorAll(".gen-radio");
//const nextPage = document.querySelector('#nextPage);
//const previousPage = document.querySelector('#previousPage);

/* ////////////////  GLOBAL VARIABLES    ////////////    */
const baseURL = "https://pokeapi.co/api/v2/pokemon";
let genNumber = 0;
let pokemons = [];
let attributes = [];
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
  console.log(pokemons);
  return pokemons; // returning an array of pokemon names for selected generation
}

function getAttributes(pokemonArray) {
  let requests = pokemonArray.map((pokemon) => {
    fetch(baseURL + `/${pokemon}`);
  });

  /*   .then((response) => response.json())
      .then((data) => {
        attributes.push(data);
      });
  }); */
  // data returned from each request has been mapped to a PROMISE

  Promise.all(requests)
    .then((response) => response.json())
    .then((data) => {
      attributes.push(data);
    });
  console.log(attributes);
}

function pokemonCards(poke) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("card");
  pokemonContainer.appendChild(pokemonCard);
  pokemonCard.innerHTML = `
    <p>Name: ${poke.name}</p>
    <p>ID: ${poke.id}</p>
    `;
}

function searchPokemon(term) {
  pokemons = getPokemons(905, 0);
  if (pokemons.includes(term)) {
    console.log("found");
    //insert pokemon card on page
  } else {
    console.log("not found");
  }
}

/*  /////////////////// RUNTIME   //////////////////////   */

searchBtn.addEventListener("click", function () {
  if (searchTerm.value) {
    console.log(value);
  }
});

genRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    console.log("clicked");
    genNumber = radio.value;
    [limit, offset] = getGen(genNumber);
    pokemonNumber.textContent = `There are ${limit} pokemons in generation ${genNumber}`;

    return getAttributes(getPokemons(limit, offset));
  });
});
