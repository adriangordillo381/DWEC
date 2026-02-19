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

const carrito = []
const plantillacarrito= document.querySelector("#elementoCarrito")
const clonplantillacarrito= plantillacarrito.content.cloneNode("#elementoCarrito")
let listaLimpia = arrayProductos.map((producto)=>{

    //Le pasamos los atributos en las variables en las que queremos partir el producto 
    const  [id,nombre,precio,descripcion,URL_imagen] = producto.split(";")
    // Nombremos los atributos del objeto y los rellenamos con las variables de arriba
    return {
        id: parseInt(id),
        nombre: nombre,
        precio: parseFloat(precio),
        descripcion: descripcion,
        imagen: URL_imagen
    }

}) 

   const plantilla = document.querySelector("#plantillaTarjeta")
   const grid = document.querySelector("#productGrid")
   
listaLimpia.forEach(function(producto,indice){
    

    const clon = dibujarProducto(producto)
    const botonAñadir = clon.querySelector(".add-btn")
    botonAñadir.addEventListener("click", () => {
        añadirProductos(producto)
    })
    grid.appendChild(clon)
})
 
    
    function dibujarProducto(producto){
        const clon = plantilla.content.cloneNode(true)
        const nombre = clon.querySelector(".product-title")
        nombre.textContent= producto.nombre;
        const precio = clon.querySelector(".product-price")
        precio.textContent=producto.precio + "€"
        const descripcion = clon.querySelector(".product-desc")
        descripcion.textContent=producto.descripcion
        const imagen = clon.querySelector(".product-image")
        imagen.src= producto.imagen
        const botonAñadir = clon.querySelector(".add-btn")
        botonAñadir.dataset.id= producto.id
        

        return clon

    }

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

    dibujarCarrito() // Llama a la función que dibuja TODO
}


function dibujarCarrito(){
    const cartItems = document.querySelector("#cartItems")
    cartItems.innerHTML = "" // Limpia todo antes de dibujar
    let cantidadproductos = 0


    carrito.forEach((producto, indice) => {
        const clon = plantillacarrito.content.cloneNode(true)
        clon.querySelector(".cart-item-img").src = producto.imagen
        clon.querySelector(".cart-item-title").textContent = producto.nombre
        clon.querySelector(".cart-item-price").textContent = producto.precio 

        const btnEliminar = clon.querySelector(".remove-btn")
        
        btnEliminar.addEventListener("click", () => {
            carrito.splice(indice,1)
            dibujarCarrito() // Redibuja todo
        })

        cartItems.appendChild(clon)
        cantidadproductos += producto.cantidad
    })

    document.querySelector(".cart-badge").textContent = cantidadproductos
}

   //Abrir carrito

   function abrirCarrito(){

    const sidebar = document.querySelector(".sidebar")
    const iconocarrito = document.querySelector("#iconoCarrito")

    const cerrar = sidebar.querySelector(".close-cart")
    iconocarrito.addEventListener("click", (e) => {
        sidebar.classList.add("active")
    })

     cerrar.addEventListener("click", (e) => {
        sidebar.classList.remove("active")
    })
   }

   abrirCarrito()

   /*Sí, con splice también funciona, pero hay que tener cuidado porque si haces forEach mientras modificas el array, te puedes saltar elementos o provocar errores. Seria hacia adelante asi for (let i = carrito.length - 1; i >= 0; i--)*/
    
function vaciarCesta(){
    const btnVaciar = document.querySelector("#clearCart")

    btnVaciar.addEventListener("click", () => {
        carrito.forEach(function(producto,indice){
            carrito.length = 0
            dibujarCarrito()

        })
    })
}
 vaciarCesta()

function alertComprar(){
    const btnComprar= document.querySelector("#comprarCarrito")
    
    btnComprar.addEventListener("click" ,() => {
        let mensaje=""
        carrito.forEach(function(product,indice){
            const nombre = product.nombre
            const precio = product.precio
            const cantidad = product.cantidad
            mensaje += `${nombre} (X${cantidad})- ${precio*cantidad} €\n`
            
        })
        alert(mensaje)
        
    })
}


alertComprar()
