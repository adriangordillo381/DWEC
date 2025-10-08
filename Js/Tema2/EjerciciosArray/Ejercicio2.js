/*
2. Crea un programa que pregunte al usuario cuantos números va a introducir (por ejemplo, 5), le
pida todos esos números, los guarde en un array y finalmente calcule y muestre la media de esos
números
*/

let cantidad = parseInt(prompt("Introduce una cantidad de numeros"));
let array = [];
let suma = 0;
for (i = 0; i < cantidad; i++) {
  let numeros = parseInt(prompt("Introduce los numeros"));
  array.push(numeros);
  suma += numeros;
}
let media = suma / cantidad;

console.log(media);
