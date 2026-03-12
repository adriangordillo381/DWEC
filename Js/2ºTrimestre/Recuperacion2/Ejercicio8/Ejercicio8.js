/*
Recorre cada producto y muestra en consola: el nombre del producto, ID, precio y
stock.
Si el stock es cero, añadir a dicho producto la clase “sin-stock” para que se ponga en
rojo, añadir también el atributo “disponible” a false, para indicar que no está disponible
(true en caso contrario). Cambiar el texto del stock a AGOTADO.
Si el precio es menor a 500 es una oferta, por lo que hay que añadir la clase “oferta” y el
atributo esOferta a true.


*/

function ejecutar(){
    const productos = document.querySelectorAll(".producto")

    productos.forEach(function(producto, indice){
        
        // 1. Lógica de Stock
        if(producto.dataset.stock == "0"){
            producto.classList.add("sin-stock") // Esto añade la clase para el CSS
            producto.dataset.disponible = false
            producto.dataset.stock = "AGOTADO"
        } else {
            producto.dataset.disponible = true
        }

        // 2. Lógica de Precio (Oferta)
        if(producto.dataset.precio < 500){
            // AQUÍ: Te faltaba el classList.add para que se aplique el estilo visual
            producto.classList.add("oferta") 
            producto.dataset.esOferta = true
        }

        // 3. Mostrar en consola (Nombre, ID, Precio y Stock)
        console.log("--- Producto " + (indice + 1) + " ---")
        console.log("Nombre: " + producto.dataset.nombre)
        console.log("ID: " + producto.dataset.id)
        console.log("Precio: " + producto.dataset.precio)
        console.log("Stock: " + producto.dataset.stock)
    })
}