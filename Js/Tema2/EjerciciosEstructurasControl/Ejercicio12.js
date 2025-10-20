/*
12. Crea un programa que pida al usuario el ancho (por ejemplo, 4)
 y el alto (por ejemplo, 3) y
muestre un rectángulo formado por esa cantidad de asteriscos:
****
****
****
*/

let ancho = parseInt(prompt("Introduce el ancho"));
let alto = parseInt(prompt("Introduce el alto"));

for (let i = 1; i <= alto; i++) {
  for (let j = 1; j <= ancho; j++) {
    document.write("*");
  }
  document.write("<br>");
}
