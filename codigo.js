let carrito = [];
let total = 0;

function mostrarCarrito() {
    const carritoElemento = document.getElementById('carrito');
    carritoElemento.classList.toggle('oculto');
}

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;

    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalElemento = document.getElementById('total');

    listaCarrito.innerHTML = '';

    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - S/ ${item.precio.toFixed(2)}`;
        listaCarrito.appendChild(li);
    });

    totalElemento.textContent = total.toFixed(2);
}

function realizarCompra() {
    alert("Compra exitosa");

    carrito = [];
    total = 0;

    actualizarCarrito();
}

/* --- SCROLL DEL HEADER --- */
const header = document.querySelector("#header");
const contenedor = document.querySelector("#contenedor");

window.addEventListener("scroll", function(){
    if(contenedor.getBoundingClientRect().top < 10){
        header.classList.add("scroll");
    } else {
        header.classList.remove("scroll");
    }
});

/* --- MODAL REGISTRO (SI EXISTE) --- */
if (document.getElementById("openModal")) {
    document.getElementById("openModal").onclick = function () {
        document.getElementById("modal").style.display = "flex";
    };
}

if (document.getElementById("modal")) {
    document.getElementById("modal").onclick = function (e) {
        if (e.target === this) {
            this.style.display = "none";
        }
    };
}
