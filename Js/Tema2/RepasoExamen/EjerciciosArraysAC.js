/*
Actividad 1 – Arrays
1. Crea un array de elementos y muestra dichos elementos por pantalla separados por "#", ahora haz lo
mismo con uno bidimensional:
let anidado1 = ["anidado1", "anidado2", "anidado3"]
 let anidado2 = ["a1", "a2", "a3"]
 let matriz = [anidado1, anidado2]
Recorre la matriz y muestra los elementos separados por “#”, mostrando el mensaje: “Indice X:
elem1#elem2#elem3”

*/


function arrayTexto() {
    
    let anidado1 = ["anidado1", "anidado2", "anidado3"]
    let anidado2 = ["a1", "a2", "a3"]
    let matriz = [anidado1, anidado2]

    let texto = anidado1.join("#")

    alert(texto)
    let cadena=""
    for(let i=0; i <matriz.length;i++){
        let cadena = matriz[i].join("#")

        alert(`El indice ${i}: ${cadena}`)
    }


}

/*
1. Mostrar los elementos de un array del final al principio usando pop.

*/

function pop() {

    let array = [1,2,3,4,5,6,7]
    let arrayreves =[]
    for (let i = 0; i < array.length; i++) {
    let ultimo  = array.pop()
    arrayreves.push(ultimo)

    }

    alert(arrayreves)

}


/*

2. Nos dan un array de frutas [“banana”, “naranja”, “mango”, “limon”]. Crear un script que pregunte al
usuario qué fruta quiere buscar en el array, si no existe dicha fruta mostrará “Esta fruta no existe en el
array” en caso contrario mostrará “Sí hay aguacate en el array”. La fruta se puede poner en mayúsculas y
minúsculas y la seguirá encontrando.
*/


function buscarFruta() {
    let frutas = ["banana", "naranja", "mango", "limon"]
    
    let fruta = prompt("Introduce una fruta").toLowerCase()

    if (frutas.includes(fruta)){
        console.log(`Si hay ${fruta} en el array`)
    }else{
        console.log(`Esta ${fruta} no existe en el array`)
    }
    
}


/*
Actividad 3 – Arrays
1. Si tenemos una cadena en minúsculas “miel”. ¿Cómo podemos transformarla en una cadena con la
primera letra en mayúsculas(Miel)?
*/

function tranformarCadena(){

    let cadena = "miel"

   let Miel =  cadena.charAt(0).toUpperCase() + cadena.slice(1)
    console.log(Miel)
}


/*
2. Nos dan la lista de la compra en un array([“Leche”, “Café”, “Té”, “Miel”). Crea un botón para añadir
“Carne” al principio de la lista de la compra y “Azúcar” al final de la lista. Si ya se ha añadido “Carne” o
“Azúcar” no se vuelve a añadir, se muestra el mensaje “Ya se ha añadido este producto a la lista de la
compra”.
Crea un botón “Alergias” que pida un producto al que eres alérgico y lo elimina de la lista de la compra,
indicando “He eliminado X producto de la cesta porque eres alérgico”, si no se encuentra el producto en
la cesta, mostrará “No existen alergias en la cesta”.
Crea un botón “Modificar” que pida un producto a buscar y si lo encuentra modifique su valor, por
ejemplo, que busque “Té” y te permita modificarlo a “Té verde”.
*/

function meterProducto() {
    
    let compra = ["Leche", "Café", "Té", "Miel"]

    let carne = prompt("Introduce el produco carne")
    let azucar = prompt("introduce el azucar")

    if (compra.includes(carne) || compra.includes(azucar)){
        console.log("Ya se ha añadido este producto a la compra")
    }else{
        añadirElemento(carne,azucar)
        console.log("Los añado")
    }
    
}

function añadirElemento(producto1,producto2) {
    
    let compra = ["Leche", "Café", "Té", "Miel"]

    compra.unshift(producto1)
    compra.push(producto2)



    
}
function alergias() {
    let compra = ["Leche", "Café", "Té", "Miel"]

    let alergia = prompt("Introduce una producto ")

    if (compra.includes(alergia)){
        let indice = compra.indexOf(alergia)
        compra.splice(indice,1)
        alert(`He eliminado el producto ${alergia} de 
        la cesta porque eres alergico`)
    }else{
        alert("No existen alegias en la cesta")
    }
    
}

function modificar() {
    let compra = ["Leche", "Café", "Té", "Miel"]

    let producto = prompt("introduce un producto para buscar")

    if (compra.includes(producto)){
         let indice = compra.indexOf(producto)
        compra[indice]= prompt("Modifica el producto")
        console.log(compra)
    }else{
        console.log("la compra no incluye ese producto")
    }
    
}