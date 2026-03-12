/*
 Selecciona todas las tarjetas y muestra cuántas hay.
2. Añade la clase "activa" solo a la primera tarjeta.
3. Añade la clase "grande" a todas las tarjetas usando un bucle. Y muestra cómo
van quedando las clases en cada tarjeta.
4. Verifica cuántas clases tiene la primera tarjeta

*/

const tarjetas = document.querySelectorAll(".tarjeta")

console.log(tarjetas.length)

tarjetas.forEach(function(tarjeta,indice){
    if(indice==0){
        tarjeta.classList.add("activa")
    }

    tarjeta.classList.add("grande")

    console.log(tarjeta.classList)
})

console.log("La tarjeta 1 tiene  " + tarjetas[0].classList.length + " clases" )