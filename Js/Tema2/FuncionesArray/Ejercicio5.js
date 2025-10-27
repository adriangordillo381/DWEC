/*
Recorrer la cadena hola#que#tal con un for usando split y sin join 
. Guardando el resultado en un array usando split y join
*/

let cadena = " hola#que#tal"
let partes = cadena.split("#")
let rdo = []


for (let i=0;i<=partes.length;i++){
    rdo.push(partes[i])
}

console.log(rdo)