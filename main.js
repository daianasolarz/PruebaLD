const Productos = [{
        id: 1,
        nombre: "Chocotorta",
        precio: "2600",
        tipo: "torta",
        img: "./imagenes/Chotot.jpg"
    },
    {
        id: 2,
        nombre: "ChocOreo",
        precio: "2750",
        tipo: "torta",
        img: "./imagenes/Oreo.jpg"
    },
    {
        id: 3,
        nombre: "Maracuya",
        precio: "2800",
        tipo: "torta",
        img: "./imagenes/Maracuya.jpg"
    },
    {
        id: 4,
        nombre: "Frutos Rojos",
        precio: "800",
        tipo: "torta",
        img: "./imagenes/Frutos rojos.jpg"
    },
    {
        id: 5,
        nombre: "Lemonpie",
        precio: "2500",
        tipo: "torta",
        img: "./imagenes/DSC_8720.jpg"
    },
    {
        id: 6,
        nombre: "Mousse de Chocolate",
        precio: "2600",
        tipo: "torta",
        img: "./imagenes/DSC_8362.jpg"
    },
    {
        id: 7,
        nombre: "Desayuno 1",
        precio: "3000",
        tipo: "especial",
        img: "./imagenes/Desayuno 1.jpeg"
    },
    {
        id: 8,
        nombre: "Huevos de Pascua",
        precio: "2400",
        tipo: "especial",
        img: "./imagenes/Huevos.jpeg"
    },
    {
        id: 9,
        nombre: "Vasitos",
        precio: "850",
        tipo: "especial",
        img: "./imagenes/Vasos.jpeg"
    },
    {
        id: 10,
        nombre: "Degustación",
        precio: "4500",
        tipo: "especial",
        img: "./imagenes/cakes.jpeg"
    },
    {
        id: 11,
        nombre: "Brownie",
        precio: "2300",
        tipo: "especial",
        img: "./imagenes/brownie.jpg"
    },
    {
        id: 12,
        nombre: "Día Especial",
        precio: "2800",
        tipo: "torta",
        img: "./imagenes/padre.jpeg"
    }
]


let containerProductos = document.querySelector("#containerProductos")
let containerCarrito = document.querySelector("#containerCarrito")
let carito = document.getElementById("Carrito")



function mostrarProd(array) {
    containerProductos.innerHTML = "";
    array.forEach(e => {
        containerProductos.innerHTML += `
        <div class="card m-4 align-items-center justify-content-center" style="width: 15rem;">
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class="card-body align-items-center">
          <h5 class="card-title m-5">${e.nombre}</h5>
          <p class="m-5">$${e.precio}</p>
          <button type="button" class="btn btn-dark" id="comprare" onclick="capturar (${e.id})"> Añadir al Carrito</button>
          </div>
      </div>`

    });
}

function mostrarCarrito(array) {
    let i = 1;
    containerCarrito.innerHTML = "";
    for (e of array) {
        containerCarrito.innerHTML += `
            <tr>
                <th scope="row" id="num">${i++}</th>
                <td>${e.nombre}</td>
                <td>$${e.precio}</td>
                <td><button class="btn btn-danger" onclick="quitar(${e.id})">X</button></td>
            </tr>`;
    }

    containerCarrito.innerHTML += `
            <tr>
                <td class="text-center" colspan="3" >Total</td>
                <div style="display-none" id="totalCarrito"></div>
                <td colspan="1">$<span id="totalTotal">0</span></td>
                <div id="acava">
                <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalToggleLabel">Gracias por tu compra!</h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      Con qué medio pagas?
                    </div>
                    <div class="modal-footer">
                      <button class="btn btn-dark" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Online</button>
                      <button class="btn btn-dark" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal" data-bs-dismiss="modal">Efectivo</button>
                    </div>
                  </div>
                </div>
                </div>
                <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalToggleLabel2"></h5>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" id="detalle">
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
                </div>
                <a class="btn btn-dark" data-bs-toggle="modal" href="#exampleModalToggle" role="button" onclick="mediodePago()">Pagar</a></div>
                </tr>
    `

}


function agregarStorage(producto) {
    let storage = sessionStorage.getItem("carrito") ? JSON.parse(sessionStorage.getItem("carrito")) : [];
    storage.push(producto);
    return storage;
}

function guardarStorage(array) {
    sessionStorage.setItem("carrito", JSON.stringify(array));
}


function capturar(id) {
    let productoSelec = Productos.find(e => e.id == id);
    guardarStorage(agregarStorage(productoSelec));
    mostrarCarrito(JSON.parse(sessionStorage.getItem("carrito")));
    sumarProductos();

}

function quitar(id) {
    let carrito = JSON.parse(sessionStorage.getItem("carrito"));
    let carritoFinal = carrito.filter(e => e.id != id);
    guardarStorage(carritoFinal);
    mostrarCarrito(JSON.parse(sessionStorage.getItem("carrito")));
    sumarProductos();
}

function sumarProductos() {
    let suma = 0;
    let productosCarrito = JSON.parse(sessionStorage.getItem("carrito"))
    for (e of productosCarrito) {
        suma += Number(e.precio)
    }
    let total = Number(document.querySelector("#totalCarrito").innerHTML);

    suma + total;

    let totales = document.getElementById("totalTotal").innerHTML = suma + total;
    return totales
}



function mediodePago() {
    let monto = sumarProductos();
    let credito3 = monto * 1.03
    let credito = monto * 1.01

    document.getElementById("detalle").innerHTML = ` 
    <p> Totales a pagar:
    <br>
    - MercadoPago/Tarjeta de Crédito:$ ${credito}<br>
    - 3 cuotas con tarjeta de Crédito:$ ${credito3}<br>
    - Tarjeta de débito/Efectivo: $${monto}</p>`

}

mostrarProd(Productos);



$(() => {

    $("#Toggle").slideUp();

    $("#Carrito").on("click", function () {
            $("#Toggle").slideToggle();

        }


    )
})