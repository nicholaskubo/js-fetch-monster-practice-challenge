document.addEventListener("DOMContentLoaded", getMonsters())

function getMonsters() {
    fetch(`http://localhost:3000/monsters`)
    .then(response => response.json())
    .then(monsters => postMonsters(monsters))
    .catch(error => console.error())
}

function postMonsters() {
    const container = document.querySelector(`#monster-container`)
    const card = document.createElement("div")
    console.log(card)
}