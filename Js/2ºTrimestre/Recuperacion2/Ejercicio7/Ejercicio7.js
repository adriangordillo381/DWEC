/*
Producto 1:
ID:
Nombre:
Precio:
Stock:
Modifica el primer producto y ponle un precio de 69 y añade un nuevo atributo llamado
“enOferta” con valor true. Mostrar el valor de las modificaciones.

*/

const productos = document.querySelectorAll(".producto")

productos.forEach(function(producto,indice){
    const id = producto.getAttribute("data-id")
    const nombre = producto.dataset.nombre
    const precio = producto.dataset.precio
    const stock = producto.getAttribute("data-stock")

    console.log("Producto " + (indice+1) +  " "+ id + " " + nombre + " "+ precio + " " + stock)

    if (indice==0){
        producto.dataset.precio="69"
        producto.dataset.enOferta = true
        console.log("-----Modificacion Realizada")
    console.log(`Nuevo precio  ${producto.dataset.precio}`)
    console.log("En oferta? " + producto.dataset.enOferta)
    }
    
    
    
})