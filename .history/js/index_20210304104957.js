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
    const name =document.createElement('h2')
    const age =document.createElement(`h3`)
    const description = document.createElement(`p`)

    container.appendChild(card)
    card.appendChild(name
    card.appendChild(age) 
    card.appendChild(description)
    console.log(card)
}