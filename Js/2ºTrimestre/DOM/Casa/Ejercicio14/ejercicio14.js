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
    // Con el select index cogemos el indice de la seleccion escogida y despues lo obtenemos del array con select.options[].value
    const opcion = select.selectedIndex
    const opcionSeleccionada = select.options[opcion].value     /*En este ejercicio en vez de centrarnos en  mostrar en en                                                           producto que es nos centramos en ocultar los que no son*/



    const marcado = document.querySelector("#solo-disponibles:checked")

    productos.forEach(function(producto,indice){
        if(opcionSeleccionada != producto.dataSet.categoria && //Si la opcion seleccionada no es igual a la categoria Y si
            opcionSeleccionada !=""){                            // no es la opcion todas añademelo a la clase oculto


            producto.classList.add("oculto")
        

        }else{
            producto.classList.remove("oculto")//Si SI es la opcion seleccionada borrame todas las demas clases que estan añadidas en oculto
        }

        if(marcado && producto.dataset.stock<=0){
            producto.classList.add("oculto") // Si solo disponibles esta marcado y es menor que cero añademelo a la clase oculto
        }

        if(!producto.classList.contains("oculto")){
            count++ //Si el producto no contiene la clase oculto se cuenta para mostrar el numero en consola
        }
    })

    if (count==0){
        console.log("No hay productos que mostrar")
    }else{
        console.log("El numero de productos es" + count)
    }

})