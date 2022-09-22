const palabras=["ALURA","ORACLE","ONE","HTML","MADRE","ALEGRIA","PULGA"];
let palabraSecreta = "";
const vidas = 8;

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
    console.log(palabraSecreta)
}
//funcion Para el teclado

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
            acerto = true;
        }
    }
}
