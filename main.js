const Productos = [{id:1, nombre: "Chocotorta", precio:"$2600", tipo: "torta", img: "./imagenes/Chotot.jpg"},
                {id:2, nombre: "ChocOreo", precio:"$2750", tipo: "torta", img: "./imagenes/Oreo.jpg"},
                {id:3, nombre: "Maracuya", precio:"$2800", tipo: "torta", img: "./imagenes/Maracuya.jpg"},
                {id:4, nombre: "Frutos Rojos", precio:"$2800", tipo: "torta", img: "./imagenes/Frutos rojos.jpg"},
                {id:5, nombre: "Lemonpie", precio:"$2500", tipo: "torta", img: "./imagenes/DSC_8720.jpg"},
                {id:6, nombre: "Mousse de Chocolate", precio:"2600", tipo: "torta", img: "./imagenes/DSC_8362.jpg"},
                {id:7, nombre: "Desayuno 1", precio:"$3000", tipo: "especial", img: "./imagenes/Desayuno 1.jpeg"},
                {id:8, nombre: "Huevos de Pascua", precio:"$2400", tipo: "especial", img: "./imagenes/Huevos.jpeg"},
                {id:9, nombre: "Vasitos", precio:"$850", tipo: "especial", img: "./imagenes/Vasos.jpeg"},
                {id:10, nombre: "Degustación", precio:"$4500", tipo: "especial", img: "./imagenes/cakes.jpeg"},
                {id:11, nombre: "Brownie", precio:"$2300", tipo: "especial", img: "./imagenes/brownie.jpg"},
                {id:12, nombre: "Día Especial", precio:"$2800", tipo: "torta", img: "./imagenes/padre.jpeg"}]


let containerProductos = document.querySelector("#containerProductos")
let containerCarrito = document.querySelector("#containerCarrito")

function mostrarProd (array) {
    containerProductos.innerHTML = "";
    array.forEach(e => {
        containerProductos.innerHTML += `
        <div class="card m-3 align-items-center" style="width: 12rem;">
        <img src="${e.img}" class="card-img-top" alt="...">
        <div class="card-body align-items-center">
          <h5 class="card-title m-3">${e.nombre}</h5>
          <p>${e.precio}</p>
          <button type="button" class="btn btn-dark" onclick="capturar (${e.id})"> Añadir al Carrito</button>
          </div>
      </div>`
        
    });
}

function mostrarCarrito(array){
    let i=1;
    containerCarrito.innerHTML="";
    for(e of array){
    containerCarrito.innerHTML+=`
            <tr>
                <th scope="row">${i++}</th>
                <td>${e.nombre}</td>
                <td>${e.precio}</td>
            </tr>`        
    }}
  
    function agregarStorage(producto){
        let storage= localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [];
        storage.push(producto);
        return storage;
    }
    function guardarStorage(array){
        localStorage.setItem("carrito", JSON.stringify(array));
    }
    
    function capturar(id){
        let productoSelec=Productos.find(e=> e.id == id);
        guardarStorage(agregarStorage(productoSelec));
        mostrarCarrito(JSON.parse(localStorage.getItem("carrito")));
        sumarProductos();
    }

mostrarProd(Productos)