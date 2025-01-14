// Variables
let carrito = [];
const cartButton = document.getElementById("cart-button");
const modalCarrito = document.getElementById("modalCarrito");
const cerrarCarrito = document.getElementById("cerrarCarrito");
const listaCarrito = document.getElementById("listaCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const vaciarCarrito = document.getElementById("vaciarCarrito");

// Actualizar carrito en la interfaz
function actualizarCarrito() {
    listaCarrito.innerHTML = ""; // Limpiar lista
    let total = 0;
    
    // Recorrer los productos del carrito y agregarlos al modal
    carrito.forEach((producto) => {
        const li = document.createElement("li");
        li.textContent = `${producto.nombre} - $${producto.precio}`;
        listaCarrito.appendChild(li);
        total += producto.precio;
    });
    
    totalCarrito.textContent = total;
    cartButton.textContent = `Carrito (${carrito.length})`;
}

// Agregar producto al carrito
function agregarProductoCarrito(event) {
    const boton = event.target;
    const nombre = boton.getAttribute("data-nombre");
    const precio = parseFloat(boton.getAttribute("data-precio"));
    
    // Agregar el producto al carrito
    carrito.push({ nombre, precio });
    actualizarCarrito();
}

// Abrir modal del carrito
cartButton.addEventListener("click", () => {
    modalCarrito.style.display = "block";
});

// Cerrar modal del carrito
cerrarCarrito.addEventListener("click", () => {
    modalCarrito.style.display = "none";
});

// Vaciar carrito
vaciarCarrito.addEventListener("click", () => {
    carrito = [];
    actualizarCarrito();
    modalCarrito.style.display = "none";
});

// Asignar evento de agregar al carrito a los botones correspondientes
const botonesAgregarCarrito = document.querySelectorAll(".agregarCarrito");
botonesAgregarCarrito.forEach(boton => {
    boton.addEventListener("click", agregarProductoCarrito);
});
