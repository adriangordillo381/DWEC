/*
1. Añade la clase "destacado" a la caja.
2. Verifica si tiene la clase "contenedor" y muestra el resultado en consola.
3. Elimina la clase "contenedor".
4. Muestra todas las clases finales en consola.

*/

const caja = document.querySelector("#caja")

caja.classList.add("contenedor")

const resultado = caja.classList.toggle("contenedor")

console.log(resultado)

caja.classList.remove("contenedor")

console.log(caja.classList)
