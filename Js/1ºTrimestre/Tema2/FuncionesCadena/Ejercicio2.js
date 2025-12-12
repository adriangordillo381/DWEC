/*
1. Función que defina una variable cadena con "hola que tal yo bien" y busque "tal" para mostrar la cadena
desde "tal" al final.
2. Función que defina una cadena, la corte y la meta en un array. Luego debe recorrer el array e indicar
que en el índice X del array está tal cadena.
*/

function variable() {
  let cadena = "Hola que tal yo bien ";
  let posicion = cadena.indexOf("tal");
  let resto = cadena.substring(posicion);
  console.log(resto);
}
