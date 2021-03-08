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
    card.classList =`card`
    const name =document.createElement('h2')
    const age =document.createElement(`h3`)
    const description = document.createElement(`p`)
    
    name.textContent = monster.name
    age.textContent = monster.name
    description.textContent = monster.description


    // card.innerHTML =
    // `<h2> ${name} </h2>
    //  <h3> ${age} </h3>
    //  <p> ${description} </p>
    // `

    card.append(name, age, description)
    container.appendChild(card)


    console.log(card)
}