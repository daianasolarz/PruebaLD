/* let bienvenida = "Bienvenida/o a"
let lei = "Lei Doiny Cakes"


let guardar= prompt( "Ingrese su nombre y apellido");
    if(guardar == ""){
    alert("No ingresaste tu nombre")} else{ 
    alert("Hola"+" "+ guardar +"!"+" "+ bienvenida +" "+ lei)}  */

let nombre = prompt("Ingrese su nombre")
do{
alert(`Hola ${nombre}, Bienvenido a Lei Doiny Cakes!`)
nombre = prompt("Ingrese su nombre nuevamente o escriba ESC para salir del programa")
}while (nombre != "ESC");
    
/* let edad = parseInt(prompt("Que edad tenes?"))
console.log(guardar)
console.log(guardar) */

let year= Number(prompt("Adivina cuando empezamos a cocinar!"));

if(year == 2018){
    alert ("Ganaste!:)")
} 
else{
    alert ("Intentalo nuevamente! :(")
}   

