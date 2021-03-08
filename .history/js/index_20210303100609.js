const monsterUrl = `http://localhost:3000/monsters/?_limit=50&_page=3`

document.addEventListener(`DOMContentLoaded`, () => {
    getThoseMonsters(monsterUrl);
})

function getThoseMonsters(url) {
    fetch(url).then(r => r.json()).then(monsters =>{
        console.log(monsters)
        //build a container for monster
        //add monster into the container
        //append the container to the DOM
        monsters.forEach(monster => {    
        const newMon = addMonsterToContainer(monster, buildMonster())
            document.getElementById(`monster-container`).append(newMon) 
        });
    })
}

function addMonsterToContainer(m, c) {
    c.id = m.id;
    c.querySelector(`h2`).textContent = m.name;
    c.querySelector(`h4`).textContent = m.age;
    c.querySelector(`p`).textContent = m.description
    return c
}

function buildMonster() {
    const div = document.createElement(`div`);
    const name = document.createElement(`h2`);
    const age =document.createElement(`h4`);
    const description = document.createElement(`p`);
    div.append(name, age, description);
    return div;
}


