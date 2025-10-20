/*
13. Lo mismo que el ejercicio anterior,
 pero esta vez mostrará una diagonal con otro carácter:
O***
*O**
**O*

*/

let altofilas = parseInt(prompt("Introduce el altofilas"));
let anchocolumnas = parseInt(prompt("Introduce el anchocolumnas"));

for (let i = 1; i <= altofilas; i++) {
  for (let j = 1; j <= anchocolumnas; j++) {
    if (i == j) {
      document.write("O");
    } else {
      document.write("*");
    }
  }
  document.write("<br>");
}
