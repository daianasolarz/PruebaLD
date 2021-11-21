$(() => { 
/*{ let bienvenida = prompt ("Cómo es tu nombre?")
alert (`Hola ${bienvenida}! Bienvenido a Lei Doiny Cakes!` )

let inicio = document.createElement ("div");
inicio.innerHTML = "<div id='prueba'> <p>Inicia Sesión</p> </div>" ;
$("#menu").append(inicio);

function inicioSesion () {
    let mail = prompt("Ingrese su mail")
    alert (`Ha ingresado sesión con ${mail}`)
}

$("#prueba").on("click",inicioSesion)

 let carro = $("#Carrito")
respuestaClick = () => { 
alert (`Tu carrito tiene ${localStorage.getItem("carrito")}`)
}
carro.on("click",respuestaClick);
 */



$("#Carrito").on("click",function(){
    $("#Toggle").slideToggle();

$("#Toggle").fadeIn(3000); 

/* let nombre = $(".nombre").value;
let mail = $("mail").value;


let miFormulario = $("#Bueno");
miFormulario.on("click", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log(`Los datos ingresados son ${nombre} y ${mail}`);}
 
})*/


});})