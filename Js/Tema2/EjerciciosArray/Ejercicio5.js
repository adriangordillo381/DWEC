/*
5. Desarrolla un programa que pedirá nombres al usuario hasta que se introduzca un nombre vacío,
momento en el que dejarán de pedirse más nombres y se mostrará en pantalla la lista de los
nombres que se han introducido ordenados alfabéticamente.
*/

let nombre;

let arraynombre = [];

while (true) {
  if (nombre != "") {
    arraynombre.push(nombre);
  } else {
    break;
  }
}
