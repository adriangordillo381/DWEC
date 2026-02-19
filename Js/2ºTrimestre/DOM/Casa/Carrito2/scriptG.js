const arrayProductos = [
    "123;Monitor UltraWide;349.99;Monitor curvo de 34 pulgadas ideal para programar.;https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    "245;Teclado Mecánico;120.50;Teclado RGB con switches blue para una escritura táctil.;https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    "367;Ratón Ergonómico;55.00;Ratón inalámbrico diseñado para largas jornadas de trabajo.;https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    "423;Auriculares Studio;89.00;Cancelación de ruido activa y sonido de alta fidelidad.;https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    "518;Silla Gaming;199.00;Comodidad extrema para tus sesiones de código.;https://www.powerplanetonline.com/cdnassets/silla_gaming_813_blanco_negro_001v2_l.jpg",
    "696;Webcam 4K;75.25;Resolución Ultra HD para tus reuniones de equipo.;https://resource.logitech.com/w_80,h_50,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio/gallery/brio-gallery-2.png?v=1"
];

// --- 1. CONVERTIR EL ARRAY ---
let productosObjeto = arrayProductos.map((producto) => {
    const [id, nombre, precio, descripcion, URL_Imagen] = producto.split(";")
    return {
        id: id,
        nombre: nombre,
        precio: parseFloat(precio),
        descripcion: descripcion,
        imagen: URL_Imagen
    }
})

// --- 2. DIBUJAR PRODUCTO (CATÁLOGO) ---
const plantillaTarjeta = document.querySelector("#plantillaTarjeta")
const productoGrid = document.querySelector("#productGrid")

function dibujarProducto(producto) {
    // Clonamos el contenido del template
    const clon = plantillaTarjeta.content.cloneNode(true)

    const nombre = clon.querySelector(".product-title")
    nombre.textContent = producto.nombre 
    
    const precio = clon.querySelector(".product-price")
    precio.textContent = producto.precio + "€"
    
    const descripcion = clon.querySelector(".product-desc")
    descripcion.textContent = producto.descripcion

    const imagen = clon.querySelector(".product-img")
    imagen.src = producto.imagen
    
    const btnAñadir = clon.querySelector(".add-btn")
    btnAñadir.dataset.id = producto.id

    // Evento para añadir productos (Ejercicio 3)
    btnAñadir.addEventListener("click", () => {
        añadirProductos(producto)
    })
    
    return clon
}

// Pintamos los productos en el grid inicial
productosObjeto.forEach(function(p){
    productoGrid.appendChild(dibujarProducto(p))
})

// --- 3. AÑADIR PRODUCTOS AL CARRITO ---
let carrito = []
const cartBadge = document.querySelector("#cartBadge") // El numerito del carrito

function añadirProductos(producto) {
    const productoencontrado = carrito.find(product => product.id == producto.id)

    if (!productoencontrado) {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            descripcion: producto.descripcion,
            imagen: producto.imagen,
            cantidad: 1
        })
    } else {
        productoencontrado.cantidad++
    }

    alert("Has añadido " + producto.nombre + " al carrito")
    dibujarCarrito() // Llamamos a dibujar el carrito cada vez que añadimos
}

// --- 4. DIBUJAR EL CARRITO ---
const plantillacarrito = document.querySelector("#elementoCarrito") 
const contenedorCarrito = document.querySelector("#cartItems") // Donde se pegan los items
const totalPrecioHTML = document.querySelector("#cartTotal")

function dibujarCarrito() {
    // Limpiamos el contenedor para que no se repitan los productos
    contenedorCarrito.innerHTML = ""
    let cuentaTotal = 0
    let cantidadTotalBadge = 0

    carrito.forEach(function(producto) {
        const clon = plantillacarrito.content.cloneNode(true)
        
        const imagen = clon.querySelector(".cart-item-img")
        imagen.src = producto.imagen
        
        const nombre = clon.querySelector(".cart-item-title")
        nombre.textContent = producto.nombre + " x" + producto.cantidad
        
        const precio = clon.querySelector(".cart-item-price")
        precio.textContent = (producto.precio * producto.cantidad).toFixed(2) + "€"

        // Implementar eliminación de un producto (Ejercicio 6)
        clon.querySelector(".remove-item").addEventListener("click", () => {
            eliminarProducto(producto.id)
        })
        
        contenedorCarrito.appendChild(clon)

        // Calculamos totales
        cuentaTotal += producto.precio * producto.cantidad
        cantidadTotalBadge += producto.cantidad
    })

    // Actualizamos el total y el badge del icono
    totalPrecioHTML.textContent = cuentaTotal.toFixed(2) + "€"
    cartBadge.textContent = cantidadTotalBadge
}

// --- 5. ELIMINAR PRODUCTO DEL CARRITO ---
function eliminarProducto(id) {
    // Sobreescribimos el carrito quedándonos con todos menos el borrado
    carrito = carrito.filter(p => p.id != id)
    dibujarCarrito() // Refrescamos la vista
}

// --- 6. VACIAR CESTA ---
const btnVaciar = document.querySelector("#emptyCart")

btnVaciar.addEventListener("click", () => {
    carrito = [] // Vaciamos la variable
    dibujarCarrito() // Refrescamos la vista
    alert("Has vaciado la cesta")
})

// --- 7. ABRIR Y CERRAR CARRITO ---
const iconoCarrito = document.querySelector("#cartBtn")
const btnCerrar = document.querySelector("#closeCart")
const sidebarCarrito = document.querySelector("#cartSidebar")

iconoCarrito.addEventListener("click", () => {
    sidebarCarrito.classList.add("active")
})

btnCerrar.addEventListener("click", () => {
    sidebarCarrito.classList.remove("active")
})

// --- 8. BOTÓN COMPRAR ---
const btnComprar = document.querySelector("#checkoutBtn")

btnComprar.addEventListener("click", () => {
    if (carrito.length === 0) {
        alert("El carrito está vacío")
    } else {
        let resumen = "Productos comprados:\n"
        carrito.forEach(p => {
            resumen += `${p.nombre} - Cant: ${p.cantidad} - Precio: ${(p.precio * p.cantidad).toFixed(2)}€\n`
        })
        alert(resumen)
    }
})