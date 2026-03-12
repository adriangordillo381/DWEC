/*
    Tareas:
1. Selecciona el elemento con id "miercoles".
2. Obtén su hermano anterior y muéstralo.
3. Obtén su hermano siguiente y muéstralo.
4. Desde el hermano anterior, obtén su hermano anterior.

*/

function ejecutar(){
    const miercoles = document.querySelector("#miercoles")

    const hermanoAnterior = miercoles.previousElementSibling
    console.log(hermanoAnterior)

    const hermanosiguiente= miercoles.nextElementSibling
    console.log(hermanosiguiente)

    const hermanoAnteriorb = hermanoAnterior.previousElementSibling
    console.log(hermanoAnteriorb)
}