const prompt = require('prompt-sync')();

//funcion edad
function calcularEdad(fechaNac) {
    let [añoNac, mesNac, diaNac] = fechaNac.split("-").map(Number);

    let hoy = new Date();
    let añoAct = hoy.getFullYear();
    let mesAct = hoy.getMonth() + 1;
    let diaAct = hoy.getDate();

    let años = añoAct - añoNac;
    let meses = mesAct - mesAct;
    let dias = diaAct - diaNac;

    if (dias < 0) {
        dias += 30;
        meses--;
    }

    if (meses < 0) {
        meses += 12;
        años--;
    }

    return años;
}

//ingreso de datos
const fechaJuan = prompt("Ingrese la fecha de nacimiento de Juan (yyyy-mm-dd): ");
const edadJuan = calcularEdad(fechaJuan);

const fechaMario = prompt("Ingrese la fecha de nacimiento de Mario (yyyy-mm-dd): ");
const edadMario = calcularEdad(fechaMario);

const fechaPedro = prompt("Ingrese la fecha de nacimiento de Pedro (yyyy-mm-dd): ");
const edadPedro = calcularEdad(fechaPedro);

//mostrar edades
console.log("\n--- Edades exacta ---");
console.log(`Juan tiene: ${edadJuan} años`);
console.log(`Mario tiene: ${edadMario} años`);
console.log(`Pedro tiene: ${edadPedro} años`);
console.log("---------------------------\n");

//contemporaneos
if(edadJuan === edadMario && edadMario === edadPedro){
    console.log("Juan, Mario y Pedro son contemporaneos.");
}else if(edadJuan === edadMario){
    console.log("Juan y Mario son contemporaneos.");
}else if(edadJuan === edadPedro){
    console.log("Juan y Pedro son contemporaneos.");
}else if(edadMario === edadPedro){
    console.log("Mario y Pedro son contemporaneos.");
}else{
    console.log("Ninguno es contemporaneo.");
}