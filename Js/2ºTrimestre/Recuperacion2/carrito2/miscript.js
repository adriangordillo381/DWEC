/**
* Datos de entrada: Array de productos serializados (Simulando una fuente externa)
* Formato: "IDProducto;Nombre;Precio;Descripción;URL_Imagen"
*/
const arrayProductos = [
    "123;Monitor UltraWide;349.99;Monitor curvo de 34 pulgadas ideal para programar.;https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500",
    "245;Teclado Mecánico;120.50;Teclado RGB con switches blue para una escritura táctil.;https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
    "367;Ratón Ergonómico;55.00;Ratón inalámbrico diseñado para largas jornadas de trabajo.;https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
    "423;Auriculares Studio;89.00;Cancelación de ruido activa y sonido de alta fidelidad.;https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    "518;Silla Gaming;199.00;Comodidad extrema para tus sesiones de código.;https://www.powerplanetonline.com/cdnassets/silla_gaming_813_blanco_negro_001v2_l.jpg",
    "696;Webcam 4K;75.25;Resolución Ultra HD para tus reuniones de equipo.;https://resource.logitech.com/w_80,h_50,c_limit,q_auto,f_auto,dpr_2.0/d_transparent.gif/content/dam/logitech/en/products/webcams/brio/gallery/brio-gallery-2.png?v=1"
];


const productos = arrayProductos.map(function (elemento) {
    const partes = elemento.split(";")

    return {
        idProducto: parseInt(partes[0]),
        nombre: partes[1],
        precio: parseFloat(partes[2]),
        descripcion: partes[3],
        URL_imagen: partes[4]

    }
})

//Selectores
const plantilla = document.querySelector("#plantillaTarjeta")
const grid = document.querySelector("#productGrid")
const elementoCarrito = document.querySelector("#elementoCarrito")
const cesta = document.querySelector("#cartItems")

let count = 0
const carrito = []
//Añadirle los productos al grid
productos.forEach(function(product,indice){
    const producto = rellenarPlantillaProducto(product)
    grid.append(producto)
    carrito.push(producto)
    

})
//Clonar template y rellenarlo
function rellenarPlantillaProducto(producto){
    const clonPlantilla = plantilla.content.cloneNode(true)
    let imagen = clonPlantilla.querySelector(".product-image")
    imagen.src = producto.URL_imagen
    let nombre = clonPlantilla.querySelector(".product-title")
    nombre.textContent = producto.nombre
    let descripcion = clonPlantilla.querySelector(".product-desc")
    descripcion.textContent = producto.descripcion
    let precio = clonPlantilla.querySelector(".product-price")
    precio.textContent = producto.precio
    
    const botonAñadir = clonPlantilla.querySelector(".add-btn")
    botonAñadir.dataset.id = producto.idProducto

    botonAñadir.addEventListener("click", (e) =>{
        
        
    })

    

    return clonPlantilla
}



//Añadir productos al carrito
function añadirProductosHtml(producto){
    const clonCarrito = elementoCarrito.content.cloneNode(true)
    const imagen1 = clonCarrito.querySelector(".cart-item-img")
    imagen1.src = producto.URL_imagen
    const nombre1 = clonCarrito.querySelector(".cart-item-title")
    nombre1.textContent = producto.nombre
    const precio1 = clonCarrito.querySelector(".cart-item-price")
    precio1.textContent = producto.precio

    const btnEliminar = clonCarrito.querySelector(".remove-btn")

    btnEliminar.addEventListener("click", ()=>{
        find
    })

    return clonCarrito

}