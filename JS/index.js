const palabras=["ALURA","ORACLE","ONE","HTML","MADRE","ALEGRIA","PULGA"];
let palabraSecreta = "";
let vidas = 8;
let acertadas = 0;

function id(str){
    return document.getElementById(str);    
}

//iniciar Juego conel boton INICIAR JUE
function iniciarJuego(){
    palabraSecretaAleatoria();
    vidas = 8;
    acertadas = 0;

    

    console.log(palabraSecreta)
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

//funcion Para el teclado y comparacion de las teclas presionadas con las palabras 

const btnTeclado = document.querySelectorAll("#teclado .tecla");
    for (let i = 0; i < btnTeclado.length; i++){
        btnTeclado[i].addEventListener( "click", clickTeclado);
    }

function clickTeclado(event){
    let palabraPresionada= document.querySelectorAll("#palabraSecreta span");
    const button = event.target;
    button.disabled = true;
    const letraPresionada = button.innerHTML.toLocaleUpperCase();
    const palabraSecrMayus = palabraSecreta.toLocaleUpperCase();
   
    let  acerto = false;
    for(let i = 0; i < palabraSecrMayus.length; i++){
        if ( letraPresionada == palabraSecrMayus[i]){
            palabraPresionada[i].innerHTML =letraPresionada;
            acertadas++;
            acerto = true;
        }
    }
}
