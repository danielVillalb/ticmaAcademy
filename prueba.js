/*
const fs = require('fs');

const archivoChistes = fs.readFileSync('./jason.json','utf8');
const chistes = JSON.parse(archivoChistes);

console.log(chistes.nombre);
/*
document.getElementById("boton").onclick=function(){
    console.log("hiciste click en el boton")
    document.getElementById("nombre").innerHTML="Nombre:" + chistes.nombre;


}


import data from './prueba.json' assert {type:'JSON'};

console.log(data); 

fetch('https://randomuser.me/api/')
.then(res => res.json())
.then(data => console.log(data));
*/

const entries =([
    ['foo', 'bar'],
    ['baz', 42]
  ]);
  
  const obj = Object.fromEntries(entries);
  
  console.log(obj.foo);
  /* RESULTADO
  {
      "467ed9f4a4cf4255": {
          "id": "467ed9f4a4cf4255",
          "name": "Juan",
          "age": 30
      },
      "bcc432192b283b83": {
          "id": "bcc432192b283b83",
          "name": "Pedro",
          "age": 25
      },
  }
  */
const input=document.querySelector("input");
const button=document.querySelector("button");
const pokemonContainer=document.querySelector(".pokemon-container");

button.add

function traerPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then(res => res.json())
        .then(data => {
            crearPokemon(data);
        });
}

function crearPokemon(pokemon){
    const img=document.createElement('img');
    img.src=pokemon.sprites.front_default;
    const h3=document.createElement('h3');
    h3.textContent=pokemon.name;
    const div=document.createElement('div')
    div.appendChil(img);
    div.appendChil(h3);
    pokemonContainer.appendChild(div);

}
traerPokemon();