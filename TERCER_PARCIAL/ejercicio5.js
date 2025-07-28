const prompt = require('prompt-sync')();
const tarifa = 1500;
let total = 0;
let cliente = 1;
let continuar = 'S';

//funcion
function calcularPago(horas, minutos) {
    let tiempo = horas;

    //fraccion de hora, redondear como hora adicional
    if (minutos > 0) {
        tiempo += 1;
    }

    return tiempo * tarifa;
}

while (continuar.toUpperCase() === 'S') {
    console.log(`Cliente #${cliente}`);
    let horas = parseInt(prompt(`Ingrese horas de estacionamiento: `));
    let minutos = parseInt(prompt(`Ingrese minutos de estacionamiento: `));

    //validacion
    while (isNaN(horas) || horas < 0 || isNaN(minutos) || minutos < 0 || minutos >= 60) {
        console.log("Datos invalidos. Intente nuevamente.");
        console.log(`Cliente #${cliente}`);
        horas = parseInt(prompt(`Ingrese horas de estacionamiento: `));
        minutos = parseInt(prompt(`Ingrese minutos de estacionamiento: `));
    }

    const pago = calcularPago(horas, minutos);
    total += pago;

    //mostrar por consola
    console.log(`Cliente #${cliente}`);
    console.log(`Tiempo: ${horas} horas con ${minutos} minutos`);
    console.log(`Pago: $${pago.toFixed(2)}`);
    console.log("----------------------------------\n");

    continuar = prompt("¿Desea ingresar otro cliente? (S/N): ");
    cliente++;
}

console.log(`\nTotal por cliente: $${total.toFixed(2)}`);