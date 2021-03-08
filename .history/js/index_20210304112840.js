document.addEventListener("DOMContentLoaded", getMonsters())

function getMonsters() {
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=3`)
    .then(response => response.json())
    .then(data => data.forEach(monsters => postMonsters(monsters)))
    .catch(error => console.log(error))
}

function postMonsters(monster) {
    const container = document.querySelector(`#monster-container`)
    const card = document.createElement("div")
    const name =document.createElement('h2')
    const age =document.createElement(`h3`)
    const description = document.createElement(`p`)
    
    name.textContent = monster.name
    age.textContent = monster.age
    description.textContent = monster.description


    // card.innerHTML =
    // `<h2> ${monster.name} </h2>
    //  <h3> ${monster.age} </h3>
    //  <p> ${monster.description} </p>
    // `

    card.append(name, age, description)
    container.appendChild(card)

}