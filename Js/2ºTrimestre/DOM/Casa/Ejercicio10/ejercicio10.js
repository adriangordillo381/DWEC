/*
    . Selecciona todas las tarjetas y muestra cuántas hay. 
2. Añade la clase "activa" solo a la primera tarjeta. 
3. Añade la clase "grande" a todas las tarjetas usando un bucle. Y muestra cómo 
van quedando las clases en cada tarjeta. 
4. Verifica cuántas clases tiene la primera tarjeta. 
*/

function ejecutar() {
    


const tarjetas = document.querySelectorAll(".tarjeta")

tarjetas.forEach(function (tarjeta,indice) {

    if(indice==0){
        tarjeta.classList.add("activa")
    }

    tarjeta.classList.add("grande")

     console.log("La tarjeta " + (indice+1)+ " tiene estas clases " + tarjeta.className)
    
})

console.log("Eñl numero de clases de la primera tarjeta es " + tarjetas[0].classList.length)

}

/*function ejecutar() {

    // 1. Selecciona todas las tarjetas y muestra cuántas hay
    const tarjetas = document.querySelectorAll(".tarjeta");
    console.log("Número de tarjetas:", tarjetas.length);

    // 2 y 3. Recorrer las tarjetas
    tarjetas.forEach(function (tarjeta, indice) {

        // 2. Añadir la clase "activa" solo a la primera tarjeta
        if (indice === 0) {
            tarjeta.classList.add("activa");
        }

        // 3. Añadir la clase "grande" a todas las tarjetas
        tarjeta.classList.add("grande");

        // Mostrar las clases de cada tarjeta
        console.log("Tarjeta " + (indice + 1) + " clases:", tarjeta.className);
    });

    // 4. Ver cuántas clases tiene la primera tarjeta
    if (tarjetas.length > 0) {
        console.log(
            "Número de clases de la primera tarjeta:",
            tarjetas[0].classList.length
        );
    }
}

*/
