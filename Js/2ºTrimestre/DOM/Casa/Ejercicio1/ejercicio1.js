/*
Tareas (escribe el código JavaScript):
1. Selecciona el elemento h1 por su ID y muestra su contenido en consola.
2. Selecciona el primer párrafo con clase "intro" y muestra su texto.
3. Selecciona TODOS los párrafos con clase "intro"(Salida: Intro 1: “…”) y
muestra cuántos hay.
4. Selecciona TODOS los párrafos (sin importar la clase) y muestra cuántos hay.

*/
function ejecutar() {
    
    const elemento = document.querySelector("#titulo")
    console.log(elemento.textContent)
    const primerparrafo = document.querySelector("p")
    console.log(primerparrafo.textContent)
    const todosparrafos = document.querySelectorAll("p.intro")
    todosparrafos.forEach (function(elemento,indice) {
        console.log("intro " + (indice+1) + elemento.textContent)
    });

    const parrafos = document.querySelectorAll("p") 
    console.log(parrafos.length)
}