const tortas = [{
        nombre: "chocotorta",
        precio: 1480,
        ranking: 1,
        tipo: "tortas",
    },
    {
        nombre: "maracuya",
        precio: 2580,
        ranking: 2,
        tipo: "tortas",
    },
    {
        nombre: "Frutos Rojos",
        precio: 3200,
        ranking: 3,
        tipo: "tortas",
    },
    {
        nombre: "ChocOreo",
        precio: 3580,
        ranking: 4,
        tipo: "tortas",
    },

    {
        nombre: "LemonPie",
        precio: 3500,
        ranking: 5,
        tipo: "tortas",
    },

    {
        nombre: "Mousse",
        precio: 2600,
        ranking: 6,
        tipo: "tortas",
    }
]

const especiales = [{
        nombre: "Desayuno 1",
        precio: 2400,
        ranking: 8,
        tipo: "Especial"
    },
    {
        nombre: "Pascua",
        precio: 3800,
        ranking: 9,
        tipo: "Especial"
    },
    {
        nombre: "Vasos",
        precio: 2745,
        ranking: 10,
        tipo: "Especial"
    },
    {
        nombre: "Minis",
        precio: 3870,
        ranking: 8,
        tipo: "Especial"
    },
    {
        nombre: "Brownies",
        precio: 2690,
        ranking: 12,
        tipo: "Especial"
    },
    {
        nombre: "specialDay",
        precio: 3800,
        ranking: 8,
        tipo: "Especial"
    },
]

const ranking1 = tortas.find(tortas => tortas.ranking === 2);
console.log(ranking1)

const ranking2 = especiales.filter(especiales => especiales.ranking === 8);
console.log(ranking2)

class Productos {
    constructor(nombre, precio, ranking, tipo) {
        this.nombre = nombre;
        this.precio = precio;
        this.ranking = ranking;
        this.tipo = tipo;
    }
}

const nuevoProducto = () => {
    let nombretorta = prompt("Cual es nombre de la torta?");
    let precioTorta = Number(prompt("Cual es el precio de la torta?"));
    let ranking = parseInt(prompt("Qué ranking tiene?"));
    let tipo = prompt("Es una torta o un producto especial?")

    const productoNuevo = new Productos(nombretorta, precioTorta, ranking, tipo);
    alert("El nuevo producto es " + nombretorta);

    if ((productoNuevo.tipo === "torta") || (productoNuevo.tipo === "Torta")) {
        tortas.push(productoNuevo);
    } else {
        especiales.push(productoNuevo);
    }

}

nuevoProducto()
console.log(tortas)
console.log (especiales)
/* ___________________________________________________________________ */