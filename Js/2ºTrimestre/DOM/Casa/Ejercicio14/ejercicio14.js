/*
Tareas: 
1. Al hacer click en "Aplicar Filtros":  
o Filtrar por categoría seleccionada (usando selectedIndex). 
o Si el checkbox “solo disponibles” está marcado (usar :checked), mostrar 
solo productos con stock > 0. 
o Ocultar productos que no cumplan los filtros añadiendo clase "oculto". 
2. Mostrar en consola cuántos productos se muestran 
3. Si no hay productos que mostrar, mostrar mensaje "No hay productos"

*/

const boton = document.querySelector("#aplicar-filtros")
const select = document.querySelector("#categoria")
const productos= document.querySelectorAll(".producto")
let count = 0

boton.addEventListener("click", () => {

    const opcion = select.selectedIndex
    const opcionSeleccionada = select.options[opcion].value

    const marcado = document.querySelector("#solo-disponibles:checked")

    productos.forEach(function(producto,indice){
        if(opcionSeleccionada != producto.dataSet.categoria &&
            opcionSeleccionada !=""
            
        ){

            producto.classList.add("oculto")
        

        }else{
            producto.classList.remove("oculto")
        }

        if(marcado && producto.dataset.stock<=0){
            producto.classList.add("oculto")
        }

        if(!producto.classList.contains("oculto")){
            count++
        }
    })

    if (count==0){
        console.log("No hay productos que mostrar")
    }else{
        console.log("El numero de productos es" + count)
    }

})