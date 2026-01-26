/*
Recorre todos los productos y muestra en console.log:
Producto 1:
ID:
Nombre:
Precio:
Stock:
Modifica el primer producto y ponle un precio de 69 y añade un nuevo atributo llamado
“enOferta” con valor true. Mostrar el valor de las modificaciones.

*/


function ejecutar() {
    const  productos = document.querySelectorAll(".producto")

productos.forEach(function(producto,indice){
    console.log(`producto ${indice+1}`)
    console.log( producto.dataset.id)
    console.log(producto.dataset.nombre)
    console.log(producto.dataset.precio)
    console.log(producto.dataset.stock)

    if(indice==0){
        producto.setAttribute("data-precio",69),
        console.log(producto.dataset.precio)

        producto.setAttribute("enOferta",true)
        console.log(producto.getAttribute("enOferta"))
    }


    
})
}


