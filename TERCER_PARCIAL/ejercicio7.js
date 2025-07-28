const prompt = require('prompt-sync')();

//funcion invertir
function invNumero(num) {
    const centenas = parseInt(num / 100);
    const decenas = parseInt((num % 100) / 10);
    const unidades = num % 10;

    return unidades * 100 + decenas * 10 + centenas;
}

//leer numero
let num = parseInt(prompt("Ingrese un numero de tres cifras: "));

while (isNaN(num) || num < 100 || num > 999) {
    console.log("Numero invalido. No posee tres cifras.");
    num = parseInt(prompt("Ingrese de nuevo: "));
}

//Invertir y comparar
const numinv = invNumero(num);

console.log(`Numero ingresado: ${num}`);
console.log(`Numero invertido: ${numinv.toString().padStart(3, '0')}`);

if (num === numinv) {
    console.log("El numero ingresado es igual al reves.");
} else {
    console.log("El numero ingresado NO es igual al reves.");
}