let flip = false

function makeCards(array) {
  for (index in array) {
    makeCard(array[index])
  }
}

function makeCard(pokemon) {
  let pokemonContainer = document.querySelector("#pokemon-container")
  let card = document.createElement('div')
  card.className = "pokemon-container"
  card.id = pokemon["name"]
  let name = document.createElement('h1')
  name.innerText = pokemon["name"]
  name.className = "center-text"
  card.appendChild(name)
  let picDiv = document.createElement('div')
  card.appendChild(picDiv)
  picDiv.id = "picDiv"
  picDiv.className = "center-text"
  picDiv.dataset.front = pokemon["sprites"]["front"]
  picDiv.dataset.back = pokemon["sprites"]["back"]
  let pic = document.createElement('img')
  pic.src = picDiv.dataset.front
  picDiv.appendChild(pic)
  let flipButton = document.createElement('p')
  flipButton.id = pokemon["name"]
  flipButton.innerText = "flip card"
  flipButton.className = "center-text flip-image"
  flipButton.addEventListener('click', flipCard)
  card.appendChild(flipButton)
  pokemonContainer.appendChild(card)
}

function flipCard(event) {
  let parentCard = event.currentTarget.parentNode
  let pokemonPicDiv = parentCard.querySelector("#picDiv")
  let pokemonPic = pokemonPicDiv.querySelector("img")
  if (!flip) {
    pokemonPic.src = pokemonPicDiv.dataset.back
    flip = !flip
  } else {
    pokemonPic.src = pokemonPicDiv.dataset.front
    flip = !flip
  }
}

function searchPokemon(pokemons) {
  let pokemonContainer = document.querySelector("#pokemon-container")
  pokemonContainer.innerHTML = ""
  let input = document.getElementById("pokemon-search-input").value
  let result = pokemons.filter(pokemon => pokemon["name"].includes(input))
  for (pokemon of result) {
    makeCard(pokemon)
  }
}

function addSearchListener() {
  let search = document.getElementById("pokemon-search-input")
  search.addEventListener('keyup', () => {searchPokemon(pokemons)})
}

function init() {
  addSearchListener();
}

document.addEventListener("DOMContentLoaded", init)
