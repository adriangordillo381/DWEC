const arrayProductos = [
    "123;Monitor UltraWide;349.99;Monitor curvo de 34 pulgadas ideal para programar.;https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    "245;Teclado Mecánico;120.50;Teclado RGB con switches blue para una escritura táctil.;https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    "367;Ratón Ergonómico;55.00;Ratón inalámbrico diseñado para largas jornadas de trabajo.;https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    "423;Auriculares Studio;89.00;Cancelación de ruido activa y sonido de alta fidelidad.;https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    "518;Silla Gaming;199.00;Comodidad extrema para tus sesiones de código.;https://www.powerplanetonline.com/cdnassets/silla_gaming_813_blanco_negro_001v2_l.jpg",
    "696;Webcam 4K;75.25;Resolución Ultra HD para tus reuniones de equipo.;https://resource.logitech.com/w_80,h_50,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio/gallery/brio-gallery-2.png?v=1"
];


let productosObjeto = arrayProductos.map((producto) => {

    const [id,nombre,precio,descripcion,URL_Imagen] = producto.split(";")

    return {
        id: id,
        nombre: nombre,
        precio: parseFloat(precio),
        descripcion: descripcion,
        imagen: URL_Imagen    }


})

productosObjeto.forEach(function(p){
    productoGrid.appendChild(dibujarProducto(p))
})

const plantillaTarjeta = document.querySelector("#plantillaTarjeta")
const productoGrid = document.querySelector("#productGrid")

function dibujarProducto(producto){
    const clon = plantillaTarjeta.textContent.cloneNode(true)

    const nombre = clon.querySelector(".product-title")
    nombre.textContent = producto.nombre 
    const precio = clon.querySelector(".product-price")
    const descripcion = clon.querySelector(".product-desc")
    descripcion.textContent= producto.descripcion
    precio.textContent= producto.precio
    const btnAñadir = clon.querySelector(".add-btn")
    btnAñadir.dataset.id= producto.id
    
    return clon
}

let carrito = []
function añadirProductos(producto){
     const productoencontrado = carrito.find(product => product.id == producto.id)

    if(!productoencontrado){
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            descripcion: producto.descripcion,
            imagen: producto.imagen,
            cantidad :1
        })
    }else{
        productoencontrado.cantidad++
    }

    dibujarProducto()
    
}


const plantillacarrito = document.querySelector("#elementoCarrito") 
const productoCarrito = document.querySelector("#cart-item")

function dibujarCarrito(producto){

    
    const clon = plantillacarrito.conntent.cloneNode(true)
    const imagen = clon.querySelector(".cart-item-img")
    imagen.src = producto.URL_Imagen
    const nombre = clon.querySelector(".cart-item-title")
    nombre.textContent = producto.nombre + "x" + producto.cantidad
    const precio = clon.querySelector(".cart-item-price")
    precio.textContent = producto.precio 
    
    


}