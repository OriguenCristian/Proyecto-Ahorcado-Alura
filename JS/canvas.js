let tablero = document.getElementById("canvas").getContext("2d");
function canvasDibujo(){
    tablero.lineWidth = 8;
    tablero.lineCap ="round";
    tablero.lineJoin ="round"
    tablero.fillStyle = "#f3f5f6"
    tablero.strokeStyle = "#8a3471"

    tablero.fillRect(0,0,500,400);
    tablero.beginPath();
    tablero.moveTo(650,500);
    tablero.lineTo(900,500);
    tablero.stroke();
    tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 6;
    tablero.lineCap ="round";
    tablero.lineJoin ="round"
    tablero.fillStyle = "#f3f5f6"
    tablero.strokeStyle = "#8a3471"
    
    let anchura = 600/palabraSecretaAleatoria.length;

    for(let i = 0; i < palabraSecretaAleatoria.length; i++){
        tablero.moveTo(500 +(anchura*i),640);
        tablero.lineTo(550 +(anchura*i),640);
    }

    tablero.stroke();
    tablero.closePath();
}


dibujarLinea()