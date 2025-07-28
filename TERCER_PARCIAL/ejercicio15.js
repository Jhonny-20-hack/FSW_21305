const prompt = require('prompt-sync')();

//funcion
function equipoFunnciona(i1, i2, i3) {
    if ((i1 === 1 && i2 === 1) || (i1 === 1 && i3 === 1) || (i2 === 1 && i3 === 1)) {
        console.log("El equipo funciona.");
    } else {
        console.log("El equipo no funciona.")
    }
}

//ingreso de estados
function estadoInterruptor(num){
    let estado;
    do{
        estado = parseInt(prompt(`Estado del interruptor ${num} (0 o 1): `));
        if(estado !==0 && estado !==1 || isNaN(estado)){
            console.log("Solo se acepta 0 (abierto) o 1 (cerrado).");
        }
    }while(estado !==0 && estado !==1 || isNaN(estado));
    return estado;
}

let i1 = estadoInterruptor(1);
let i2 = estadoInterruptor(2);
let i3 = estadoInterruptor(3);

equipoFunnciona(i1, i2, i3);