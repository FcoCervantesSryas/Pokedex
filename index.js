let id = 1;
let pokemon = null;
let htmlName = document.getElementById("pokemon_name")
let htmlPic = document.getElementById("picture")
let htmlInfo = document.getElementById("pokemon_info")
let searchBox = document.getElementById("searchBox")
let button = document.getElementById("submit")
let left = document.getElementById("left")
let right = document.getElementById("right")
fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
    method: "GET"
}).then(res => {res.json().then(data =>  {
    pokemon = data
    console.log(pokemon)
    htmlPic.setAttribute("src",pokemon.sprites.front_default)
    htmlName.textContent = pokemon.name
    htmlInfo.innerHTML = `<span id="height">Height : ${pokemon.height} </span>`
    htmlInfo.innerHTML += `<span id="height">weight : ${pokemon.weight} </span>`
})})
button.addEventListener("click", () =>{
    id = parseInt(searchBox.value)
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
        method: "GET"
    }).then(res => {res.json().then(data =>  {
        pokemon = data
        console.log(pokemon)
        htmlPic.setAttribute("src",pokemon.sprites.front_default)
        htmlName.textContent = pokemon.name
        htmlInfo.innerHTML = `<span id="height">Height : ${pokemon.height} </span>`
        htmlInfo.innerHTML += `<span id="height">weight : ${pokemon.weight} </span>`
    })})
})
right.addEventListener("click", () =>{
    if (id < 900){
        id += 1
        searchBox.setAttribute("value", id)
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
        method: "GET"
    }).then(res => {res.json().then(data =>  {
        pokemon = data
        console.log(pokemon)
        htmlPic.setAttribute("src",pokemon.sprites.front_default)
        htmlName.textContent = pokemon.name
        htmlInfo.innerHTML = `<span id="height">Height : ${pokemon.height} </span>`
        htmlInfo.innerHTML += `<span id="height">weight : ${pokemon.weight} </span>`
    })})
})
left.addEventListener("click", () =>{
    if (id != 1){
        id -= 1
        searchBox.setAttribute("value", id)
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`, {
        method: "GET"
    }).then(res => {res.json().then(data =>  {
        pokemon = data
        console.log(pokemon)
        htmlPic.setAttribute("src",pokemon.sprites.front_default)
        htmlName.textContent = pokemon.name
        htmlInfo.innerHTML = `<span id="height">Height : ${pokemon.height} </span>`
        htmlInfo.innerHTML += `<span id="height">weight : ${pokemon.weight} </span>`
    })})
})


