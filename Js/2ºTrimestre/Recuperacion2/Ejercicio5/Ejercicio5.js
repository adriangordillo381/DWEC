/*
Tareas:
1. Selecciona el div con id "caja".
2. Obtén todos sus hijos y muestra cuántos son.
3. Recorre todos los hijos con un bucle for y muestra el tagName de cada uno.

*/
function ejecutar(){
    const padre = document.querySelector("#caja")

const hijos = padre.children

console.log(hijos.length)
for (let i = 0; i < hijos.length; i++) {
        // Mostramos el tagName de cada hijo
        console.log("Hijo " + (i + 1) + ": " + hijos[i].tagName);
    }
}
