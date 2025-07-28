const prompt = require('prompt-sync')();

//funcion
function calcularPrecio(precioUnitario, cantidad) {
    let subtotal = precioUnitario * cantidad;
    let descuento = 0;

    if (cantidad > 20) {
        descuento = 0.10;
    } else if (cantidad > 10 || cantidad <= 20) {
        descuento = 0.05;
    }

    let valorDescuento = subtotal * descuento;
    let total = subtotal - valorDescuento;

    return {
        precioUnitario: precioUnitario,
        cantidad: cantidad,
        subtotal: subtotal,
        descuento: descuento,
        valorDescuento: valorDescuento,
        total: total
    };
}

//ingreso de precio unitario y cantidad
let precioUnitario, cantidad;
do {
    precioUnitario = parseFloat(prompt("Ingrese el precio unitario del articulo: "));
    if (isNaN(precioUnitario) || precioUnitario <= 0) {
        console.log("Precio invalido. Ingrese de nuevo.");
    }
} while (isNaN(precioUnitario) || precioUnitario <= 0);

do {
    cantidad = parseInt(prompt("Ingrese la cantidad de articulos: "));
    if (isNaN(cantidad) || cantidad <= 0) {
        console.log("Cantidad invalida. Ingrese de nuevo.");
    }
} while (isNaN(cantidad) || cantidad <= 0);

//calculo
let resultado = calcularPrecio(precioUnitario, cantidad);

//visualizar
console.log("\n--- DETALLES DE LA COMPRA ---");
console.log(`Precio unitario: $${resultado.precioUnitario.toFixed(2)}`);
console.log(`Cantidad de articulos: ${resultado.cantidad}`);
console.log(`Subtotal: $${resultado.subtotal.toFixed(2)}`);
console.log(`Descuento aplicado: ${resultado.descuento*100}%`);
console.log(`Valor del descuento: $${resultado.valorDescuento.toFixed(2)}`);
console.log(`Total a pagar: $${resultado.total.toFixed(2)}`);