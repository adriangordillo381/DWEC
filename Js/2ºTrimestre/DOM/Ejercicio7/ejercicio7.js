/*
Ejercicio 7
Recorre todos los productos y muestra en console.log:
Producto 1:
ID:
Nombre:
Precio:
Stock:
Modifica el primer producto y ponle un precio de 69 y añade un nuevo atributo llamado
“enOferta” con valor true. Mostrar el valor de las modificaciones.
*/

function funcionar() {
  const producto1 = document.querySelectorAll(".producto");

  producto1.forEach(function (producto, indice) {
    console.log("Producto + "(indice + 1));
    console.log("ID " + producto.dataset.id);
    console.log();
  });
}
