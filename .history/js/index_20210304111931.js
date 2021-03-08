document.addEventListener("DOMContentLoaded", getMonsters())

function getMonsters() {
    fetch(`http://localhost:3000/monsters`)
    .then(response => response.json())
    .then(data => data.forEach(monsters => postMonsters(monsters)))
    .catch(error => console.log(error))
}

function postMonsters(monster) {
    const container = document.querySelector(`#monster-container`)
    const card = document.createElement("div")
    card.id = monster.id
    card.classList =`card`
    const name =document.createElement('h2')
    const age =document.createElement(`h3`)
    const description = document.createElement(`p`)
    name = monster.name

    
    container.appendChild(card)
    card.appendChild(name)
    card.appendChild(age) 
    card.appendChild(description)

    // card.innerHTML =
    // `<h2> ${name} </h2>
    //  <h3> ${age} </h3>
    //  <p> ${description} </p>
    `

    console.log(card)
}