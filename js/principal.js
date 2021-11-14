let bienvenida = prompt ("Cómo es tu nombre?")
alert (`Hola ${bienvenida}! Bienvenido a Lei Doiny Cakes!` )

let inicio = document.createElement ("div");
inicio.innerHTML = "<div> <p>Inicia Sesión</p> </div>" ;
document.getElementById("menu").appendChild (inicio);

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

