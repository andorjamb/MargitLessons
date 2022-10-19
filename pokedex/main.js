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
let limit="60";
let offset = "0";
let testPokemons = [1,2,3];

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

function makePoke(data){
    //try mapping types here
    let newPoke = new Pokemon(data.id, data.name, data.name, data.name);
    console.log(newPoke);
    attributes.push(newPoke);
    console.log(attributes);
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
    .then((data) => {return (data.results).map((pokemon)=>{pokemons.push(pokemon.name)});      
}).then((result)=>{console.log(result.length);
   
});

    
}

function getAttributes(){
    console.log(pokemons);
    console.log(pokemons.length);
    let requests = pokemons.map((pokemon) => fetch(baseURL + `/${pokemon}`)
    .then((response)=>response.json())
    .then((data)=>{return makePoke(data)})
    .then((data)=>attributes.push(data))
    )

    Promise.all(requests).then((attributes)=>console.log(attributes));
    
}

function pokemonCards(poke) {
    getAttributes(pokemons);

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
window.onload = getPokemons(limit, offset);

setTimeout(()=>{getAttributes(getPokemons)},2000);//put here a function that populates boxes

  
searchBtn.addEventListener("click", function () {
  if (searchTerm.value) {
    console.log(value);
  }
});

genRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
    console.log("clicked");
    if ((pokemons.length) != 0){pokemons= []};
    genNumber = radio.value;
    [limit, offset] = getGen(genNumber);
    pokemonNumber.textContent = `There are ${limit} pokemons in generation ${genNumber}`;
    getPokemons(limit, offset);
    setTimeout(()=>{getAttributes()},2000);//put here a function that populates boxes
    




})
}
)


