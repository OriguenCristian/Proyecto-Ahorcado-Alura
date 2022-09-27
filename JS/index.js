const palabras=["ALURA","ORACLE","ONE","HTML","MADRE","ALEGRIA","PULGA"];
const btnTeclado = document.querySelectorAll("#teclado .tecla");
const btnInicioJuego =document.getElementById("btnInioJuego");
const btnNuevoJuego = document.getElementById("btnNuevoJuego");
//btnInicioJuego.addEventListener("click", inicio)
btnNuevoJuego.addEventListener("click", iniciarJuego)

let palabraSecreta = "";
let vidas = 8;
let acertadas = 0;
let letras =[];


   
function id(str){
    return document.getElementById(str);    
}

//iniciar Juego conel boton INICIAR JUE
function iniciarJuego(){
    btnNuevoJuego.disabled=true;
    tecladoP()
    palabraSecretaAleatoria();
    vidas = 0;
    acertadas = 0;
    console.log(palabraSecreta);
    const btnTeclado = document.querySelectorAll("#teclado .tecla");
    for (let i = 0; i < btnTeclado.length; i++){
        btnTeclado[i].disabled = false;
     }
}
//geEnerar palabra aleatoria e introduce as lineas de la cantidad de letras de la palabra.
function palabraSecretaAleatoria(){
    
    let parrafo = id("palabraSecreta");
    parrafo.innerHTML = "";

    let palabraRandom = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabraRandom;

    let cantLetra =palabraSecreta.length;

    for( let i = 0; i < cantLetra; i++){
        const span = document.createElement("span");
        parrafo.appendChild(span);
    }
}

//funcion Para el teclado y comparacion de las teclas presionadas con las palabras.
function tecladoP(){
 for (let i = 0; i < btnTeclado.length; i++){
    btnTeclado[i].addEventListener( "click", clickTeclado);
    }
 }

function clickTeclado(event){
    let palabraSelec = document.querySelectorAll("#palabraSecreta span");
    const button = event.target;
    button.disabled = true;
    const letraPresionada = button.innerHTML.toUpperCase();
    const palabraSecrMayus = palabraSecreta.toUpperCase();
    let  acerto = false;
    for(let i = 0; i < palabraSecrMayus.length; i++){
        if ( letraPresionada == palabraSecrMayus[i]){
            palabraSelec[i].innerHTML =letraPresionada;
            acertadas++;
            console.log(acertadas)
            acerto = true;
        }
    }
    if (acerto == false){
        vidas++;
    }
    if (vidas == 7){
        alert("perdiste la palabra era" + palabraSecreta);
        finJuego()
    }
     else if (acertadas == palabraSecreta.length){
    alert("felicidades ganaste");
    finJuego() 
    }
}
function  finJuego(){
    const btnTeclado = document.querySelectorAll("#teclado .tecla");
    for (let i = 0; i < btnTeclado.length; i++){
        btnTeclado[i].disabled = true;
     } 
     btnNuevoJuego.disabled= false;
     
};