// Pedimos el tamaño de la matriz
let tamaño = parseInt(prompt("Introduce el tamaño de la matriz"));
let array = [];

for (let i = 0; i < tamaño; i++) {
  array[i] = [];
  for (let j = 0; j < tamaño; j++) {
    let celdas = prompt(
      "Dime el valor de la fila " + (i + 1) + " de la columna " + (j + 1)
    );
    array[i][j] = celdas;
  }
}

let tabla = "<table>";

for (let i = 0; i < tamaño; i++) {
  tabla += "<tr>";
  for (let j = 0; j < tamaño; j++) {
    tabla += "<td>" + array[i][j] + " </td>";
  }
  tabla += "</tr>";
}
tabla += "</table>";
document.getElementById("tabla").innerHTML = tabla;
