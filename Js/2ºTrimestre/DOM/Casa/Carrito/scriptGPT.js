// --- Variables globales ---
const carrito = []  // Array del carrito
const plantillaproducto = document.querySelector("#elementoCarrito")  // Template del carrito

// --- Dibujar productos en la página ---
listaLimpia.forEach(function(producto,indice){
    const clon = dibujarProducto(producto)

    // 🔹 Aquí añadimos el listener al botón "Añadir al carrito"
    const botonAñadir = clon.querySelector(".add-btn")  // Botón dentro de cada clon
    botonAñadir.addEventListener("click", () => {
        añadirProductos(producto)
    })  // 🔹 Listener agregado

    grid.appendChild(clon)
})

// --- Función para añadir productos al carrito ---
function añadirProductos(producto){
    const productoEnCarrito = carrito.find(p => p.id === producto.id)

    if(!productoEnCarrito){
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            descripcion: producto.descripcion,
            imagen: producto.imagen,
            cantidad :1
        })
    }else{
        productoEnCarrito.cantidad++
    }

    dibujarCarrito() // Redibuja todo el carrito
}

// --- Función para dibujar el carrito ---
function dibujarCarrito(){
    const cartItems = document.querySelector("#cartItems")
    cartItems.innerHTML = "" // Limpia todo antes de dibujar
    let cantidadproductos = 0

    carrito.forEach((producto, indice) => {
        const clon = plantillaproducto.content.cloneNode(true)
        clon.querySelector(".cart-item-img").src = producto.imagen
        clon.querySelector(".cart-item-title").textContent = producto.nombre
        clon.querySelector(".cart-item-price").textContent = producto.precio 

        // 🔹 Aquí añadimos el listener al botón "Eliminar del carrito"
        const btnEliminar = clon.querySelector(".remove-btn")
        btnEliminar.addEventListener("click", () => {
            carrito.splice(indice,1)
            dibujarCarrito() // Redibuja todo
        })  // 🔹 Listener agregado

        cartItems.appendChild(clon)
        cantidadproductos += producto.cantidad
    })

    // 🔹 Actualiza el badge del carrito
    document.querySelector(".cart-badge").textContent = cantidadproductos
}

// --- Abrir y cerrar carrito ---
function abrirCarrito(){
    const sidebar = document.querySelector(".sidebar")
    const iconocarrito = document.querySelector("#iconoCarrito")
    const cerrar = sidebar.querySelector(".close-cart")

    // 🔹 Abrir carrito al clickear el icono
    iconocarrito.addEventListener("click", () => {
        sidebar.classList.add("active")
    })  // 🔹 Listener agregado

    // 🔹 Cerrar carrito al clickear la X
    cerrar.addEventListener("click", () => {
        sidebar.classList.remove("active")
    })  // 🔹 Listener agregado
}

// 🔹 Llamar a la función para que los listeners del carrito funcionen
abrirCarrito()
