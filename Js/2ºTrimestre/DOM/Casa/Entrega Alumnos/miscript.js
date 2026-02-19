let tareas = []
let contador = 0

const input = document.querySelector("#inputTarea")
const select = document.querySelector("#selectTipo")
const boton = document.querySelector("#btnAnadir")
const listaTareas = document.querySelector("#listaTareas")



function añadirTarea(){
if (input.value == ""){
    alert("Esta vacio")
    return
}

    contador++
    let tarea={
        id:contador,
        descripcion: input.value,
        tipo: select.value,
        completada: false,
        fechacompletada:null
    }
    tareas.push(tarea)

    input.value = ""
}
const plantillaTarea = document.querySelector("#templateTarea")

function dibujarTarea(){
    listaTareas.innerHTML = "" //Se vacia la lista para que no se dupliquen las tareas viejas
    
    if (tareas.length== 0){
       const li = document.createElement("li")//Lo creo

        li.classList.add("sin-tareas")//Añado la clase nueva
        li.textContent="No hay tareas"//Relleno el contenido 

        listaTareas.appendChild(li) //Lo añado al ul del html

        return

    }
    tareas.forEach(function(tarea,indice){
        const clon = plantillaTarea.content.cloneNode(true)

        const descripcion= clon.querySelector(".tarea-desc")
        descripcion.textContent = tarea.descripcion

        const tipo = clon.querySelector(".tarea-tipo")
        tipo.textContent= tarea.tipo

        if (tarea.fechacompletada!= null){
            const fecha = clon.querySelector(".tarea-fecha")
            fecha.textContent= tarea.fechacompletada
        }else {
            const fecha = clon.querySelector(".tarea-fecha")
            fecha.remove()
        }

        const li = clon.querySelector("li")
        const btnCompletar = clon.querySelector(".btn-completar")
        if(tarea.completada==true){
          
            li.classList.add("completada")
            
            btnCompletar.textContent="Deshacer"
        }else{
            
            btnCompletar.textContent="Completada"
        }
        const btnEliminar = clon.querySelector(".btn-eliminar")

        btnEliminar.addEventListener("click",()=>{
            eliminarTarea(tarea.id)
        })
        btnCompletar.addEventListener("click",() => {
            completarTarea(tarea.id)
        })

        listaTareas.appendChild(clon)

    })

    


}

function completarTarea(idRecibido){
    const tareaBuscada = tareas.find(t => t.id === idRecibido )
    tareaBuscada.completada= !tareaBuscada.completada


    if (tareaBuscada.completada){
        tareaBuscada.fechacompletada = new Date().toLocaleString("es-Es")
    }else{
        tareaBuscada.fechacompletada= null
    }

    dibujarTarea()

}


function eliminarTarea(idRecibido){
    tareas = tareas.filter(t => t.id !== idRecibido)//Filter crea una lista con la que quiero borrar y queremos lo contrario. Lo que ponga en la condicion es lo que se guarda. Osea si queremos quitar la tarea y quedarnos con las demas tengo que poner en la condicion que se quede con las que no coincidan. No cambia el array origuanl te da uno nuevo que tienes que guardar en la variable original para obtener el nuevo sin la que hemos eliminado
    dibujarTarea()
}


boton.addEventListener("click", () =>{
    añadirTarea()
    dibujarTarea()

})










