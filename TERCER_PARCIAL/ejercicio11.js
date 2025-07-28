const prompt = require('prompt-sync')();

//funcion
function calcularNotaFinal(examen, lecciones, tareas, practicas) {
    //porcentajes
    const notaExamen = (examen * 0.6 * 20) / 100;
    const notaLecciones = (lecciones * 2) * 0.2;
    const notaTareas = (tareas * 2) * 0.15;
    const notaPracticas = (practicas * 2) * 0.05;

    return notaExamen + notaLecciones + notaTareas + notaPracticas;
}

//ingreso de notas
let examen = parseFloat(prompt("Ingrese la nota del examen escrito (0 a 100): "));
while (isNaN(examen) || examen < 0 || examen > 100) {
    console.log("Nota invalida. Debe ser entre 0 y 100.");
    examen = parseFloat(prompt("Ingrese de nuevo la nota (0 a 100): "));
}

let lecciones = parseFloat(prompt("Ingrese la nota de lecciones (0 a 10): "));
while (isNaN(lecciones) || lecciones < 0 || lecciones > 10) {
    console.log("Nota invalida. Debe ser entre 0 y 10.");
    lecciones = parseFloat(prompt("Ingrese de nuevo la nota (0 a 10): "));
}

let tareas = parseFloat(prompt("Ingrese la nota de tareas (0 a 10): "));
while (isNaN(tareas) || tareas < 0 || tareas > 10) {
    console.log("Nota invalida. Debe ser entre 0 y 10.");
    tareas = parseFloat(prompt("Ingrese de nuevo la nota (0 a 10): "));
}

let practicas = parseFloat(prompt("Ingrese la nota de practicas (0 a 10): "));
while (isNaN(practicas) || practicas < 0 || practicas > 10) {
    console.log("Nota invalida. Debe ser entre 0 y 10.");
    practicas = parseFloat(prompt("Ingrese de nuevo la nota (0 a 10): "));
}

//calculo
const notaFinal = calcularNotaFinal(examen, lecciones, tareas, practicas);

//mostrar por consola
console.log("\nCALIFCICACION FINAL");
console.log(`Examen escrito: ${examen}/100`);
console.log(`Lecciones: ${lecciones}/10`);
console.log(`Tareas: ${tareas}/10`);
console.log(`Practicas: ${practicas}/10`);
console.log("-----------------------------");
console.log(`Nota Final sobre 20: ${notaFinal.toFixed(2)}`);