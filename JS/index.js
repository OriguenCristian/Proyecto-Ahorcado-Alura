const palabras=["ALURA","ORACLE","ONE","HTML","MADRE","ALEGRIA","PULGA"];
const btnTeclado = document.querySelectorAll("#teclado .tecla");
const btnInicioJuego =document.getElementById("btnInioJuego");
const btnNuevoJuego = document.getElementById("btnNuevoJuego");
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

const imagen = id("imagen");
const lottie = id("lottieVideo")

let palabraIgresada = "";
let palabraSecreta = "";
let vidas = 8;
let acertadas = 0;

function id(str){
    return document.getElementById(str);    
}


//iniciar Juego conel boton juegonuevo
function iniciarJuego(){
   
    imagen.src = `../Multimedia/img0.png`
    btnNuevoJuego.disabled=true;
    tecladoP()
    palabraSecretaAleatoria();
    crearLineas();
    vidas = 1;
    acertadas = 0;
    console.log(palabraSecreta);
    const btnTeclado = document.querySelectorAll("#teclado .tecla");
    for (let i = 0; i < btnTeclado.length; i++){
        btnTeclado[i].disabled = false;
     }
}
//geEnerar palabra aleatoria e introduce as lineas de la cantidad de letras de la palabra.
function palabraSecretaAleatoria(){
    let palabraRandom = palabras[Math.floor(Math.random() * palabras.length)];
    palabraSecreta = palabraRandom;
}

//Genera las lineas segun la cantidad de letras. ingresando un span en el html.
function crearLineas(){
    let parrafo = id("palabraSecreta");
    parrafo.innerHTML = "";
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
        const Srce = `../Multimedia/img${vidas}.png`;        
        imagen.src = Srce;
        vidas++;
    }
    if (vidas == 8){
        finJuego()
        mostrar();
       
    }
     else if (acertadas == palabraSecreta.length){
        mostrar()
    finJuego() 
    }
}
//funcion que cierra el teclado y restable elboton de juego nuevo.
function  finJuego(){
    const btnTeclado = document.querySelectorAll("#teclado .tecla");
    for (let i = 0; i < btnTeclado.length; i++){
        btnTeclado[i].disabled = true;
     } 
     btnNuevoJuego.disabled= false;
};
//muestra la ventana modal que anuncia si gano o Perdio
function mostrar(){
    let ganaste = "Felicidades Ganaste";
    let perdio = "Perdiste, la palabra secreta era " + palabraSecreta;
    if(vidas = 8){  

        modal_container.classList.add('show');        
        let mensaje = id("mensaje");
        mensaje.innerHTML = perdio;
        lottie.src = "/Multimedia/99490-skull.mp4";
      
      close.addEventListener('click', () => {
        modal_container.classList.remove('show');
      });
    } if (acertadas == palabraSecreta.length){
        modal_container.classList.add('show');
        let mensaje = id("mensaje");
        mensaje.innerHTML = ganaste;
        lottie.src ="/Multimedia/50743-best.mp4";

      close.addEventListener('click', () => {
        modal_container.classList.remove('show');
     })
    }
}