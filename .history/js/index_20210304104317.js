document.addEventListener("DOMContentLoaded", getMonsters())

function getMonsters() {
    fetch(`http://localhost:3000/monsters`)
    .then(response => response.json())
    .then(monsters => console.log(monsters))
    .catch(error => console.error())
}

function postMonsters() {
    const container = document.querySelector(`#monster-container`)
    const age = document.createElement
}