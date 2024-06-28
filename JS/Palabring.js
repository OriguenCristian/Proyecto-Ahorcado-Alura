const inputPalabraIngresada = document.getElementById("textIngresado")
export let palabraIngresada = []
 
const getValueInput =() => {
  
  palabraIngresada.push(inputPalabraIngresada.value)
  console.log(palabraIngresada)
}