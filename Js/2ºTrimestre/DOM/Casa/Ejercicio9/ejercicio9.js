/*

1. Añade la clase "destacado" a la caja.
2. Verifica si tiene la clase "contenedor" y muestra el resultado en consola.
3. Elimina la clase "contenedor".
4. Muestra todas las clases finales en consola
*/


function ejecutar() {
    const destacado = document.querySelector("#caja")

    destacado.classList.add("destacado")

    console.log(destacado.classList.contains("contenedor"))

    console.log(destacado.className)


    destacado.classList.remove("contenedor")

    console.log(destacado.className)



}