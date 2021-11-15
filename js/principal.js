let bienvenida = prompt ("Cómo es tu nombre?")
alert (`Hola ${bienvenida}! Bienvenido a Lei Doiny Cakes!` )

let inicio = document.createElement ("div");
inicio.innerHTML = "<div> <p>Inicia Sesión</p> </div>" ;
document.getElementById("menu").appendChild(inicio);

inicioSesion = () => {
    let mail = prompt("Ingrese su mail")
    alert (`Ha ingresado sesión con ${mail}`)
}

inicio.addEventListener ("click",inicioSesion)

    

let carro = document.getElementById("Carrito")
respuestaClick = () => { 
alert (`Tu carrito tiene ${localStorage.getItem("carrito")}`)
}
carro.addEventListener ("click",respuestaClick)

let nombre = document.getElementsByClassName("nombre").value;
let celular = document.getElementsByClassName("celular").value;
let mail = document.getElementsByClassName("mail").value;


miFormulario = document.getElementById("Bueno");
miFormulario.addEventListener("click", validarFormulario);

function validarFormulario(e){
    e.preventDefault();
    console.log(`Los datos ingresados son ${nombre} y ${mail}`);}

 /* LOS EVENTOS FUNCIONAN PERO NO ME DAN LA INFO QUE NECESITO :( */