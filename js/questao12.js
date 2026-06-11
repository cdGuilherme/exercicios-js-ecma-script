"use strict";

// Questão 12:

// function multiplicarPorCinco(numeros) {
//     for (let i = 0; i < numeros.length; i++) {
//         numeros[i] = numeros[i] * 5;
//     }
//     return numeros;
// }

const multiplicarPorCinco = (numeros) => {
    return numeros.map(num => num * 5);
}

let numeros = [2, 4, 6, 8];
let resultado = multiplicarPorCinco(numeros);

function questao12() {
    console.log(resultado);
    alert(`Console:\n${resultado}`);
}