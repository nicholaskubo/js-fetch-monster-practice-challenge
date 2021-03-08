const monsterUrl = `http://localhost:3000/monsters/?_limit=20&_page=3`

document.addEventListener(`DomContenetLoaded`, () => {
    getThoseMonsters(monsterUrl);
})

function getThoseMonsters(url) {
    fetch(url).then(r => r.json()).then(monsters =>{
        console.log(monsters)
    
    
    })
}


