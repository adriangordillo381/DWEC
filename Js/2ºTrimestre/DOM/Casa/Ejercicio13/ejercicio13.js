/*
* Crea una función “cargarTareasIniciales” que nada más cargar el HTML cree las
tareas:
- Estudiar Javascript.
- Practicar DOM.
- Hacer ejercicios.
Las 3 tareas son <li> que tendrán un <span> dentro con el nombre de la tarea y la clase
“texto”. También un botón con la clase “btn-eliminar” y como texto “X”.
* Cuando se haga click en “btn-agregar” que cree una nueva tarea con el texto “Tarea
X” donde X es un contador que empieza en 1 y se irá incrementando.
* Al hacer click en “btn-eliminar”, eliminar el <li> entero. Indicar en consola “Tarea
eliminada: X” donde X es el texto de la tarea recién eliminada.
* Al hacer click encima del <li> que tendrá la clase “texto” hacer que se ponga la tarea
como completada usando la clase “completada” y si se vuelve a pulsar que se quite la
tarea como completada. Indicar en consola “tarea marcada como X” donde X es
completada o pendiente.

*/

const ul = document.querySelector("#lista-tareas")
const btnAgregar = document.querySelector("#btn-agregar")
let count = 1 

document.addEventListener("DOMContentLoaded",() =>{
    cargarTareasIniciales()
})

btnAgregar.addEventListener("click", () => {
    const nuevoli= crearElementos("Tarea " + count)
    ul.appendChild(nuevoli)
    count++
})

ul.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-eliminar")){
        const li = e.target.parentElement
        const tarea =li.querySelector(".texto").textContent
        li.remove()
        console.log("Tarea eliminada" + tarea) 
       }
       if(e.target.classList.contains("texto")){
       const completada = e.target.classList.toggle("completada")
        console.log("Tarea marcada como " +(completada ? "completada" : "pendiente"))

            
       }
    
})
function cargarTareasIniciales() {
    ul.appendChild(crearElementos("Estudiar JavaScript"))
    ul.appendChild(crearElementos("Practicar DOM"))
    ul.appendChild(crearElementos("Hacer ejercicios"))


    
}

function crearElementos(tarea){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.classList.add("texto")
    span.textContent=tarea
    const boton = document.createElement("button")
    boton.classList.add("btn-eliminar")
    boton.textContent="X"
    li.appendChild(span)
    li.appendChild(boton)

    return li

}