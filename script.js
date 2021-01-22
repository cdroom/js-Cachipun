var resultado = '==========Resultado parcial=========\n';
var normas = '==========Opeciones==========\n';
var juego = 1;
var puntosIa = 0;
var puntosHumano = 0;
var ganador = '';



function getRandom() {
    return Math.round(Math.random() * (3 - 1) + 1);
}

function getnombre(opcion) {
    var nombre = '';
    switch (opcion) {
        case 1:
            nombre = "Piedra";
            break;
        case 2:
            nombre = "Papel";
            break;
        case 3:
            nombre = "Tijera";
            break;
        default:

    }
    return nombre;
}



var maxJuegos = parseInt(prompt("Cuantos Juegos quiere participar"));

do {
    var opcion = parseInt(prompt(normas + "Elige las siguientes opciones:\n1 = Piedra\n2 = Papel\n3 = Tijera \n" + resultado));
    var ia = getRandom();
    switch (opcion) {
        case 1:
            if (ia == 3) {
                resultado += " Juego " + juego + " Ganador eres tu, IA saco " + getnombre(ia) + "\n";
                puntosHumano++;
            } else if (ia == opcion) {
                resultado += " Juego " + juego + " Empate IA, el saco " + getnombre(ia) + "\n";
                puntosIa++;
                puntosHumano++;
            } else {
                resultado += " Juego " + juego + " Ganador IA, el saco " + getnombre(ia) + "\n";
                puntosIa++;
            }
            juego++;
            break;
        case 2:
            if (ia == 1) {
                resultado += " Juego " + juego + " Ganador eres tu, IA saco " + getnombre(ia) + "\n";
                puntosHumano++;
            } else if (ia == opcion) {
                resultado += " Juego " + juego + " Empate IA, el saco " + getnombre(ia) + "\n";
                puntosIa++;
                puntosHumano++;
            } else {
                resultado += " Juego " + juego + " Ganador IA, el saco " + getnombre(ia) + "\n";
                puntosIa++;
            }
            juego++;
            break;
        case 3:
            if (ia == 2) {
                resultado += " Juego " + juego + " Ganador eres tu, IA saco " + getnombre(ia) + "\n";
                puntosHumano++;
            } else if (ia == opcion) {
                resultado += " Juego " + juego + " Empate IA, el saco " + getnombre(ia) + "\n";
                puntosIa++;
                puntosHumano++;
            } else {
                resultado += " Juego " + juego + " Ganador IA, el saco " + getnombre(ia) + "\n";
                puntosIa++;
            }
            juego++;
            break;
        default:



    }

    if (juego > maxJuegos) {
        if (puntosIa > puntosHumano) {
            ganador = 'El ganador fue IA!!!!';
        }
        if (puntosIa < puntosHumano) {
            ganador = 'El ganador eres tú!!!';
        }
        if (puntosIa == puntosHumano) {
            ganador = 'Es un empate!!!!';
        }
        alert("******Resultados final****************\n" + resultado + "\n>>>" + ganador + "\n\n\n\n");
    }

}
while (juego <= maxJuegos);