/*
Tareas:
1. Crea un título h2 que diga "Ciudades de España".
2. Crea una lista <ul> con todos los elementos del array.
3. Inserta todo en el div usando innerHTML.
4. Muestra un alert que diga “Lista creada con X ciudades”

*/

const contenedor = document.querySelector("#contenedor-lista")

contenedor.innerHTML= ` 
    <h2> Ciudades de España</h2>

    <ul>
        <li>Madrid</li>
        <li>Barcelona</li>
        <li>Valencia</li>
        <li>Sevilla</li>
        
    
    </ul>

`
const ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla"];
alert("lista creada con " + ciudades.length + " ciudades")


