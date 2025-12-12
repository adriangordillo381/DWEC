/*
5. Crea un programa que pida al usuario dos números y diga si son iguales o, en caso contrario,
cuál es el mayor de ellos
*/

let num1 = parseInt(prompt("Introduce un numero"));
let num2 = parseInt(prompt("Introduce un numero"));

if (num1 == num2) {
  console.log("Son iguales");
} else if (num1 > num2) {
  console.log("El numero " + num1 + " es mayor");
} else {
  console.log("El numero " + num2 + " es mayor");
}
