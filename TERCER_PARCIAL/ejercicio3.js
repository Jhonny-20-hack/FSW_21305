const prompt = require('prompt-sync')();
let total = 0;
let cliente = 1;
let continuar = 'S';

//funcion y calculos
function calcularEntrada(edad) {
    if (edad < 4) {
        return 0;
    } else if (edad <= 18) {
        return 5;
    } else {
        return 10;
    }
}

while (continuar.toUpperCase() === 'S') {
    let edad = parseInt(prompt(`Ingrese la edad del cliente ${cliente}: `));

    // Validación de edad
    while (isNaN(edad) || edad <= 0) {
        console.log("Edad inválida. Intente nuevamente.");
        edad = parseInt(prompt(`Ingrese la edad del cliente ${cliente}: `));
    }

    const precio = calcularEntrada(edad);
    total += precio;

    // Mostrar datos del cliente
    console.log(`Cliente #${cliente}`);
    console.log(`Edad: ${edad}`);
    console.log(`Precio: ${precio === 0 ? 'Gratis' : precio + '€'}`);
    console.log("--------------------------\n");

    // Preguntar si desea continuar
    continuar = prompt("¿Desea ingresar otro cliente? (S/N): ");
    cliente++;
}

console.log(`\nTotal de las entradas: ${total}€`);