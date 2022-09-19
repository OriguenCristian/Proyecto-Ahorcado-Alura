let palabras = ["ALURA","ORACLE","ONE","HTML","MADRE","ALEGRIA","PULGA"];
//let tablero = document.getElementById("canvas").getContext("2d");
let palabraSecreta = "";

//eEnerar palabra aleatoria
function palabraSecretaAleatoria(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}
//iniciar Juego conel boton INICIAR JUEGO
function iniciarJuego(){
    palabraSecretaAleatoria();
}
