let carrito = [];
let totalCarrito = 0;

function agregarAlCarrito(nombre, precio, imagen ) {
    const producto = {
        nombre: nombre,
        precio: precio,
        imagen: imagen,
    };
    carrito.push(producto);
    totalCarrito += precio;
    actualizarCarrito();
}

function eliminarDelCarrito(index) {
    totalCarrito -= carrito[index].precio;
    carrito.splice(index, 1);
    actualizarCarrito();
}

function realizarPago() {
    if (carrito.length > 0) {
        alert("Pago realizado correctamente.");
        carrito = [];
        totalCarrito = 0;
        actualizarCarrito();
    } else {
        alert("El carrito está vacío.");
    }
}

function actualizarCarrito() {
    const contenedorCarrito = document.querySelector('.contenedor-carrito');
    contenedorCarrito.innerHTML = '';

    carrito.forEach((producto, index) => {
        const itemCarrito = document.createElement('div');
        itemCarrito.classList.add('item-carrito');
        itemCarrito.innerHTML = `
            <img src="img/producto${index + 1}.jpg" alt="${producto.nombre}">
            <h4>${producto.nombre}</h4>
            <p>Precio: $${producto.precio}</p>
            <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        contenedorCarrito.appendChild(itemCarrito);
    });

    const totalCarritoElemento = document.getElementById('total-carrito');
    totalCarritoElemento.textContent = `Total: $${totalCarrito}`;

    const pagarBoton = document.getElementById('pagar');
    if (carrito.length > 0) {
        pagarBoton.disabled = false;
    } else {
        pagarBoton.disabled = true;
    }
}
