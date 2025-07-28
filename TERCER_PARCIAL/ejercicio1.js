const prompt = require('prompt-sync')();

// Solicitar nombre y sexo
let nombre = prompt("Ingrese su nombre: ").trim();
let sexo = prompt("Ingrese su sexo (M para mujer, H para hombre): ").trim().toUpperCase();

while (sexo !== 'M' && sexo !== 'H') {
    console.log("Sexo no válido. Use 'M' para mujer o 'H' para hombre.");
    sexo = prompt("Ingrese su sexo (M para mujer, H para hombre): ").trim().toUpperCase();
}

let letrasNombre = nombre.split("");
let inicial = letrasNombre[0].toUpperCase(); // toma la primera letra

// Determinar grupo
let grupo;

if ((sexo === 'M' && inicial < 'M') || (sexo === 'H' && inicial > 'N')) {
    grupo = 'A';
} else {
    grupo = 'B';
}

// Visualizar
console.log(`\n Hola ${nombre}, perteneces al grupo ${grupo}.`);
