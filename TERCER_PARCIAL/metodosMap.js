const prompt = require('prompt-sync')();

// Crear un nuevo Map vacio
let usuarios = new Map(); //new Map()

// Ingresar datos usando set()
let cantidad = parseInt(prompt("¿Cuántos usuarios quieres ingresar? "));

for (let i = 0; i < cantidad; i++) {
    let nombre = prompt(`Nombre del usuario #${i + 1}: `);
    let edad = parseInt(prompt(`Edad de ${nombre}: `));
    usuarios.set(nombre, edad); //Metodo `set(key, value)`
}

console.log("\nUSO DE MÉTODOS DE MAP");

// Mostrar edad de un usuario (get)
let buscar = prompt("¿De qué usuario deseas saber la edad? ");
if (usuarios.has(buscar)) { //Metodo `has(key)`
    console.log(`${buscar} tiene ${usuarios.get(buscar)} años.`); // ← `get(key)`
} else {
    console.log("Usuario no encontrado.");
}

// Mostrar total de usuarios
console.log("\nTotal de usuarios:", usuarios.size); // Propiedad `size`

// Eliminar un usuario
let eliminar = prompt("¿Deseas eliminar a un usuario? (nombre o enter para omitir): ");
if (eliminar !== "") {
    usuarios.delete(eliminar); //Metodo `delete(key)`
    console.log(`${eliminar} fue eliminado del mapa.`);
}

// Mostrar todos los usuarios (entries y forEach)
console.log("\nUsuarios actuales:");
usuarios.forEach((edad, nombre) => {
    console.log(`${nombre} → ${edad} años`);
}); //Método `forEach()`

// Mostrar solo nombres
console.log("\nNombres registrados:");
for (let nombre of usuarios.keys()) {
    console.log(nombre);
} //Método `keys()`

// Mostrar solo edades
console.log("\nEdades registradas:");
for (let edad of usuarios.values()) {
    console.log(edad);
} //Metodo `values()`

// Mostrar todos los pares clave-valor
console.log("\nPares clave-valor (entries):");
for (let [nombre, edad] of usuarios.entries()) {
    console.log(`${nombre} = ${edad}`);
} //Metodo `entries()`

// Limpiar el mapa si el usuario desea
let limpiar = prompt("¿Deseas limpiar todos los datos? (s/n): ");
if (limpiar.toLowerCase() === "s") {
    usuarios.clear(); //Metodo `clear()`
    console.log("Todos los datos fueron eliminados.");
}

console.log("\nTamaño final del Map:", usuarios.size);
