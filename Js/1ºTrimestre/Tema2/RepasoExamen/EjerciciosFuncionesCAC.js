/*
1.Crear una función que pida una cadena por teclado y muestre su tamaño
*/

function tamaño() {
    let cadena = prompt("Introduce una cadena")

    let tamaño = cadena.length
    alert(tamaño)
    
}

/*
2. Crea una función que pida la clave Secreta por pantalla, si la introduce correctamente aparece el
mensaje “Has acertado” (también serán válidas: secreta, SECRETA, SeCrEtA...)
*/

function secreta() {
    let clave = prompt("introduce la palabra secreta").toLowerCase()

    if(clave === "secreta"){
        alert("Has acertado")
    }else{
        alert("clave incorrecta")
    }

}


/*
3. Crea una función que recorra una cadena y separe los caracteres con un guión (Que no aparezca guión
al final)

*/


function recorrerCadena() {
    
    let cadena = "hola que tal"
    let partes = ""

    for (let i = 0; i < cadena.length; i++) {
       
        
        if (partes === "") {
            
            partes = cadena[i];
        } else {
            
            partes += "-" + cadena[i];
        }
    }
    console.log(partes)
    }
        

/*
1. Función que defina una variable cadena con "hola que tal yo bien" y busque "tal" para mostrar la cadena
desde "tal" al final.
*/

function cortarCadena() {
    let cadena = "hola que tal yo bien"

    let parte = cadena.substring(8)
    alert(parte)
    
}

/*

2. Función que defina una cadena, la corte y la meta en un array. Luego debe recorrer el array e indicar
que en el índice X del array está tal cadena.

*/

function cadenaArray() {
    let cadena = "hola que tal"



    let palabras = cadena.split(" ")


    for (let i = 0; i< palabras.length; i++) {
        

        alert(`En el indice ${i} del array ${palabras} está ${palabras[i]} cadena`)
    }

}

/*
Actividades 3Actividad 3 – Cadenas
Crear una función que tenga como parámetro de entrada un DNI y le ponga un 0 o no al principio según
corresponda (si tiene 7 caracteres, hay que ponerle un 0 delante).*/

function dni(dni) {
    if (dni.length!=8){
        let dninuevo = dni.padStart(8,"0")
        alert(dninuevo)
    
    }else {
        alert(dni)
    
    }
    
}

function introducirDni() {
    let dni1 = prompt("introduce un dni")

    alert(dni(dni1))
    
}