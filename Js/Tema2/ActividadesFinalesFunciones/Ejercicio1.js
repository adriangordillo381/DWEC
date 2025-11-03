/*
1.- Escribe un script con, al menos, estos valores:
 3, 3.5, “3”, "3.5", “7aaa”, “aaa7” y “hola”. Recorre el
array y muestra por consola el resultado de aplicar las funciones
 parseInt, parseFloat, isNan, Number y
String, a cada uno de los elementos del array. 
¿Hay algún resultado que no esperabas?
*/

function MostrarFunciones() {
  let numeros = [3, 3.5, "3", "3.5", "7aaa", "aaa7", "hola"];
  let cadena = "";

  for (const elemento of numeros) {
    console.log(`Elemento: ${elemento}`);
    console.log(`  parseInt: ${parseInt(elemento)}`);
    console.log(`  parseFloat: ${parseFloat(elemento)}`);
    console.log(`  isNaN: ${isNaN(elemento)}`);
    console.log(`  Number: ${Number(elemento)}`);
    console.log(`  String: ${String(elemento)}`);
  }
}

/*
2 Crea una función llamada "DibujarLinea3", 
que dibuje una línea con 3 asteriscos en la pantalla.
*/

function DibujarLinea3() {
  return "***";
}

/*
3.- Crea una función llamada "DibujarCuadrado3x3", que dibuje un cuadrado (en la pantalla)
 formado por
3 filas con 3
 asteriscos cada una (esta función deberá
  llamar a la función creada en el ejercicio anterior).
*/

function DibujarCuadrado3x3() {
  let rdo = "";
  for (let i = 0; i < 3; i++) {
    rdo += DibujarLinea3() + "\n";
  }
  alert(rdo);
}

/*
4.- Crea una función llamada "DibujarLinea", 
que dibuje una línea con X asteriscos (en la pantalla). La
función tendrá un parámetro de entrada con el número de asteriscos a mostrar.

*/
function DibujarLinea() {
  let num = parseInt(prompt("Introduce un numero"));
  console.log(linea(num));
}

function linea(numero) {
  let linea = "";
  for (let i = 0; i < numero; i++) {
    linea += "*";
  }
  return linea;
}

/*
5.- Crea una función llamada "DibujarCuadrado", 
que dibuje un cuadrado formado por X filas con X
asteriscos cada una (esta función deberá llamar a
 la función creada en el ejercicio anterior). El script
pedirá al usuario el tamaño del cuadrado,
 y llamará a la función con ese dato
*/

function DibujarCuadrado() {
  let tamaño = parseInt(prompt("Introduce el tamaño"));
  let lin = "";
  for (let i = 0; i < tamaño; i++) {
    lin += linea(tamaño) + "\n";
  }
  console.log(lin);
}

/*
6.- Crea una función "DibujarRectangulo" que dibuje en
 pantalla un rectángulo del ancho y alto que se
indiquen como parámetros. El script pedirá
 al usuario el tamaño del rectángulo, y 
 llamará a la función con
ese dato.
*/

function DibujarRectangulo(alto, ancho) {
  alto = parseInt(prompt("Introduce el alto"));
  ancho = parseInt(prompt("Introduce el ancho"));
  for (let i = 0; i < alto; i++) {
    console.log("*");
  }
}
