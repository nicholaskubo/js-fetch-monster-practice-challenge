document.addEventListener("DOMContentLoaded", getMonsters())

function getMonsters() {
    fetch(`http://localhost:3000/monsters`)
    .then(response => response.json())
    .then(monsters => console.log(monsters))
}

function postMonsters() {
    const container = document.querySelector(`#monster-container`)
    console.log(container)
}