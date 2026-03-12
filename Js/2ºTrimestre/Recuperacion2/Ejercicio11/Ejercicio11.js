
/*
Recorrer el array de tareas iniciales y crea elementos <li> y dentro <span> con el texto
de cada tarea, añade un botón eliminar con la clase “btn-eliminar”. Crea una función
“crearElementoLista” que tenga como parámetro de entrada un texto y devuelva el <li>
a insertar:

*/


const tareasIniciales = [
 "Estudiar JavaScript",
 "Practicar DOM",
 "Hacer ejercicios"
 ];


 const lista = document.querySelector("#lista")

 tareasIniciales.forEach(function(elemento,indice){
   const li = crearElementoLista(elemento)
   lista.append(li)

 })

 function crearElementoLista(texto){

   const li =  document.createElement("li")
   const span = document.createElement("span")
   span.textContent = texto
   li.appendChild(span)

   const boton = document.createElement("button")
   boton.textContent= "eliminar"
   boton.classList.add("btn-Eliminiar")

   boton.addEventListener("click",function (e) {
      li.remove()
   })
   li.append(boton)
   return li
 }


 
