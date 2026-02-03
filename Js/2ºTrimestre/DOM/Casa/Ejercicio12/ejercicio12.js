/*

Recorre el array de productos y llama a una función llamada crearTarjetaProducto con 
el objeto literal como parámetro. Esta función crea un div con la clase “tarjeta” que 
tendrá como hijos: - <h3> con el nombre del producto. - <p> con <span> con la clase “precio” y el precio del producto con € al final. - <p> con “Stock: X unidades” si hay stock y <p> con texto AGOTADO y color del 
texto rojo y negrita en si no hay stock.

*/



// Array de productos 
const productos = [ 
{ nombre: "Portátil Gaming", precio: 999, stock: 5 }, 
{ nombre: "Teclado Mecánico", precio: 89, stock: 12 }, 
{ nombre: "Ratón Inalámbrico", precio: 29, stock: 20 }, 
{ nombre: "Monitor 27''", precio: 299, stock: 0 }, 
{ nombre: "Webcam HD", precio: 59, stock: 8 } 
]; 

const contenedor = document.querySelector("#contenedor-productos")


productos.forEach(function(producto,indice){
    contenedor.append(creatTarjetaProducto(producto))
})

function creatTarjetaProducto(producto) {
    const div = document.createElement("div")

    div.classList.add("tarjeta")

    const h3 = document.createElement("h3")
    h3.textContent = producto.nombre

    const p = document.createElement("P")
    const span = document.createElement("span")
    p.append(span)

    span.classList.add("precio")
    span.textContent = producto.precio + "€"
    
    const p2= document.createElement("p")

    if(producto.stock > 0){
        p2.textContent= "Stock: " + producto.stock + " unidades" 
    }else{
        p2.textContent="Agotado"
        p2.style.color= "red"
        p2.style.fontWeight="Bold"
    }

    div.append(h3,p,p2)

    return div
}