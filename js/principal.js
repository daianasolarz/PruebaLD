let bienvenida = prompt ("Cómo es tu nombre?")
alert (`Hola ${bienvenida}! Bienvenido a Lei Doiny Cakes!` )

let eleccion;

do{
    eleccion = prompt ("Queres ir al carrito directo?")
    console.log(eleccion)
} while (eleccion === "no")