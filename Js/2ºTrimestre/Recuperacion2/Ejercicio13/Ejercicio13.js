/*

 Crea una función “cargarTareasIniciales” que nada más cargar el HTML cree las
tareas
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
tarea como completada. In

*/

const listaTareas = document.querySelector("#lista-tareas")
const botonagregar = document.querySelector("#btn-agregar")
let count = 1
const tareas = [
    "Estudiar JS",
    "Practicar DOM",
    "Hacer ejercicios"
]

tareas.forEach(function(tarea,indice){
    const tarjeta = cargarTareasIniciales(tarea)
    listaTareas.append(tarjeta)
})
botonagregar.addEventListener("click", function (){
     const li = document.createElement("li")
    const span = document.createElement("span")
    span.classList.add("texto")
    span.textContent= "Tarea " + count
    li.append(span)
    count++
    listaTareas.append(li)
})



function cargarTareasIniciales(tarea){
    const li = document.createElement("li")
    const span = document.createElement("span")
    span.classList.add("texto")
    span.textContent= tarea
    li.append(span)

    

    const botonEl = document.createElement("button")
    botonEl.textContent="X"
    botonEl.classList.add("btn-eliminar")
    li.append(botonEl)

    botonEl.addEventListener("click", () =>{
        li.remove()
        console.log("Tarea eliminada " + tarea)
    })

    
    span.addEventListener("click", function (){
        span.classList.toggle("completada")
    })
    
    return li
    


}
