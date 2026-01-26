/*
Recorre cada producto y muestra en consola: el nombre del producto, ID, precio y
stock.
Si el stock es cero, añadir a dicho producto la clase “sin-stock” para que se ponga en
rojo, añadir también el atributo “disponible” a false, para indicar que no está disponible
(true en caso contrario). Cambiar el texto del stock a AGOTADO.
Si el precio es menor a 500 es una oferta, por lo que hay que añadir la clase “oferta” y el
atributo esOferta a true

*/

function ejecutar() {
    const productos = document.querySelectorAll(".producto")
    
    productos.forEach(function(producto,indice){
        console.log(`producto ${(indice + 1)}`)
        console.log(producto.dataset.nombre)
        console.log(producto.dataset.id)
        console.log(producto.dataset.precio)
        console.log(producto.dataset.stock)

        if (parseInt(producto.dataset.stock ) == 0){
            producto.classList.add("sin-stock")

         producto.setAttribute("disponible",false)


            producto.querySelector(".stock").textContent="AGOTADO"
        }else{
            producto.setAttribute("disponible",true)
        }
        
        if(parseInt(producto.dataset.precio) < 500){
            producto.classList.add("oferta")

             const oferta = producto.dataset.oferta="true"
             console.log(oferta)
        }
    })
}