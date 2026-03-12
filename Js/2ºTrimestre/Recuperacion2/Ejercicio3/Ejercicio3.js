/*
Tareas:
1. Selecciona el elemento con id "parrafo-importante".
2. Obtén su elemento padre y muéstralo en consola.
3. Desde el padre, obtén su primer hijo y muéstralo.
4. Desde el padre, obtén su último hijo y muéstralo.

*/

function ejecutar(){
    const parrafo = document.querySelector("#parrafo-importante")

    const padre = parrafo.parentElement
    console.log(padre)

    const primerHijo = padre.firstChild
    console.log(primerHijo)

    const ultimoHijo= padre.lastElementChild
    console.log(ultimoHijo)
}