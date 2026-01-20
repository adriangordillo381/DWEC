/*
1. Selecciona el h2 que está dentro del div con id "contenedor" y muestra el texto
que tiene dentro.
2. Selecciona todos los li con clase "oferta". Mostrar cada uno con el texto:
Oferta 1: X…
3. Selecciona todos los li (estén o no en oferta) y muestre cuántos hay.
4. Muestra en consola cuántos productos en oferta hay.

*/


function ejecutar() {
    const h2 = document.querySelector(" #contenedor h2")
    console.log(h2.textContent)
    const li = document.querySelectorAll(".oferta")
    li.forEach(function(elemento,indice) {
        console.log("oferta " + (indice+1) + elemento.textContent)
    });

    const todosli= document.querySelectorAll("li")
    console.log(todosli.length)
    console.log(li.length)
    
}