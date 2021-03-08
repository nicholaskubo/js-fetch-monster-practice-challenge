document.addEventListener("DOMContentLoaded", getMonsters())
const form = document.createElement("form")

function getMonsters() {
    fetch(`http://localhost:3000/monsters/?_limit=50&_page=3`)
    .then(response => response.json())
    .then(data => data.forEach(monsters => postMonsters(monsters)))
    .catch(error => console.log(error))
}

function createMonster(){
    const monsterContainer = document.querySelector(`#create-monster`)
    
    form.id = ("monster-form")
    document.createElement("input")
    let createName = document.createElement("input")
    createName.id = "name"
    createName.placeholder = "name..."
    createName.type = "text"
    let createAge = document.createElement("input")
    createAge.id = "age"
    createAge.placeholder = "age..."
    createAge.type = "text"
    let createDescription = document.createElement("input")
    createDescription.id = "description"
    createDescription.placeholder = "description..."
    createDescription.type = "text"
    let button = document.createElement("input")
    button.id = "button"
    button.value = "Create"
    button.type = "submit"

    form.append(createName, createAge, createDescription, button)
    monsterContainer.appendChild(form)
}
createMonster()

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

}form.addEventListener("submit", (e) => {
    e.preventDefault()
        let monObj = {
            name: e.target.name.value,
            age: e.target.age.value,
            description: e.target.description.value
        }
        renderMon(monObj)
})

function renderMon(monObj) {
    fetch("http://localhost:3000/monsters", {
        method: "POST",
        header: {
            "Content Type": "application.json"
        },
        body: JSON.stringify(monObj),
    })
    .then(response => response.json())
    .then(mon => postMonsters(mon))
}