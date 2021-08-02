let bienvenida = "Bienvenida/o a"
let lei = "Lei Doiny Cakes"


console.log("Hola" + bienvenida + lei);

let guardar= prompt( "Ingrese su nombre y apellido");
    if(guardar == ""){
    alert("No ingresaste tu nombre")}
    else{ alert("Hola"+ " "+ guardar + "!"+ " "+ bienvenida + " " + lei)} 
    
/* let edad = parseInt(prompt("Que edad tenes?"))
console.log(guardar)
console.log(guardar) */

let año= prompt("Adivina cuando empezamos a cocinar!")

if(año == 2018){
    alert ("Ganaste!:)")
} 
else {
    alert ("Intentalo nuevamente! :(")
}    