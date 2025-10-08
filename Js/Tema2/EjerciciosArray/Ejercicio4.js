/*
4. Un programa que pida al usuario 10 números, calcule su media y luego muestre los que están por
encima de la media
*/

let array = [];
let count = 0;
let suma = 0;

do {
  let numeros = parseInt(prompt("Introduce un numero"));

  array.push(numeros);

  count++;

  suma += numeros;
} while (count != 10);

let media = suma / count;
console.log("La media es " + media);

for (i = 0; i < array.length; i++) {
  if (array[i] > media) {
    console.log("El numero " + array[i] + " es mayor que la media");
  } else {
    console.log("El numero " + array[i] + " es menor que la media");
  }
}
