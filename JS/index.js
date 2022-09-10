let palabras = ["ALURA","ORACLE","ONE","HTML","MADRE","ALEGRIA","PULGA"];
let tablero = document.getElementById("ahorcadoTablero").getContext("2d");

let palabraSecreta = "";

//iniciar Juego conel boton
function iniciarJuego(){
    document.getElementById("inicioJuego").style.display = "none";

    palabraSecretaAleatoria();
    canvasDibujo();
    dibujarLinea();
}

function palabraSecretaAleatoria(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta)
}
