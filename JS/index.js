let palabras = ["ALURA","ORACLE","ONE","HTML","MADRE","ALEGRIA","PULGA"];
let palabraSecreta = "";
let vidas = 8;

function id(str){
    return document.getElementById(str);    
}

//geEnerar palabra aleatoria e inicio el juego
function palabraSecretaAleatoria(){
    
    let parrafo = id("palabraSecreta");
    parrafo.innerHTML = "";

    let palabra = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabra;

    let cantLetra =palabraSecreta.length;

    for( let i = 0; i < cantLetra; i++){
        const span = document.createElement("span");
        parrafo.appendChild(span);
    }
}
//iniciar Juego conel boton INICIAR JUE
function iniciarJuego(){
    palabraSecretaAleatoria();
}
