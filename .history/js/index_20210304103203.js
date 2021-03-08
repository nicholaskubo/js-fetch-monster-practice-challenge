document.addEventListener("DOMContentLoaded", getMonsters())

function getMonsters() {
    fetch(`http://localhost:3000/monsters`)
    .then(response => response.json)
    .then(monsters => postMonsters(monsters))
}

function postMonsters