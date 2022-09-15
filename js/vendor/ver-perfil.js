//Obtenemos los valores de la url
let valores = window.location.search;
console.log(valores);

const urlParams = new URLSearchParams(valores);

let nombre = urlParams.get('nombre');
let puesto = urlParams.get('puesto');

console.log(nombre);

let nombreCandidato = document.querySelector('.nombre-candidato');

nombreCandidato.textContent = puesto + " - " + nombre;