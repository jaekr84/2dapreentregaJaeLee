let usuario = prompt("Por favor, introduce tu nombre");
alert("¡Hola, " + usuario + "! Bienvenido al juego de problemas matemáticos.");

let problemas = [];
let puntos = 0;

for(let i=0; i<5; i++) {
    let num1 = Math.floor(Math.random() * 9) + 1;
    let num2 = Math.floor(Math.random() * 9) + 1;
    let operacion = Math.floor(Math.random() * 3);
    let respuesta_correcta;

    switch(operacion) {
        case 0:
            respuesta_correcta = num1 + num2;
            break;
        case 1:
            respuesta_correcta = num1 - num2;
            break;
        case 2:
            respuesta_correcta = num1 * num2;
            break;
    }

    let respuesta_usuario = prompt("¿Cuánto es " + num1 + (operacion == 0 ? " + " : (operacion == 1 ? " - " : " * ")) + num2 + "?");
    if(respuesta_usuario == respuesta_correcta) {
        puntos++;
    }

    alert("Tu respuesta fue: " + respuesta_usuario + ". La respuesta correcta es: " + respuesta_correcta + ".");
    problemas.push({problema: num1 + (operacion == 0 ? " + " : (operacion == 1 ? " - " : " * ")) + num2, respuesta_usuario: respuesta_usuario, respuesta_correcta: respuesta_correcta});
}

alert("Tu puntuación total es: " + puntos + ".");
