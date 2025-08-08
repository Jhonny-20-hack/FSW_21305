const prompt = require('prompt-sync')();

let cantidad = parseInt(prompt("¿Cuántas edades vas a ingresar? "));
let edades = [];

// Pedir edades al usuario
for (let i = 0; i < cantidad; i++) {
    let edad = parseInt(prompt(`Ingrese la edad #${i + 1}: `));
    edades.push(edad);
}

// Usamos map para sumar 5 años a cada edad
let edadesFuturas = edades.map(edad => edad + 5);

// Mostrar resultados
console.log("\nEdades originales:", edades);
console.log("Edades dentro de 5 años:", edadesFuturas);
