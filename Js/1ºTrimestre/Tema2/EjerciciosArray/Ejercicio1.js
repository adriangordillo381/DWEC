/*Crea un programa que pida al usuario 6 números y luego los muestre en orden inverso
 (pista: usa un array para almacenarlos y "for" para mostrarlos)*/

let array = new Array();
let cont = 0;

while (cont <= 6) {
  let num = parseInt(prompt("Introduce un numero"));
  array.push(num);
  cont++;
}

for (i = array.length - 1; i >= 0; i--) {
  alert("El elemento " + i + " toma el valor " + array[i]);
}
