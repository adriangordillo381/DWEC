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

function DibujarRectangulo(ancho, alto) {
  for (let i = 0; i < alto; i++) {
    let linea = "";
    for (let j = 0; j < ancho; j++) {
      linea += "*";
    }
    console.log(linea);
  }
}

// Función que PIDE los datos y llama a la otra
function pedirDatos() {
  let ancho = parseInt(prompt("Introduce el ancho del rectángulo:"));
  let alto = parseInt(prompt("Introduce el alto del rectángulo:"));

  DibujarRectangulo(ancho, alto);
}

/*
7.- Crea una función "Cubo" que devuelva el cubo de un número real que se indique como parámetro. La
función tendrá que comprobar que el parámetro es un número (o que se pueda convertir a un número), en
caso contrario, devolverá false.
Prueba esta función para calcular el cubo de 3.2 y el de 5, y también prueba a pasarle “hola” como
parámetro. ¿Qué ocurre?
    */

function Cubo(num) {
  let real = parseFloat(num);

  if (!isNaN(real)) {
    return real ** 3;
  } else {
    return false;
  }
}

function CalcularCubo() {
  let num = parseInt(prompt("Introduce un numero para hacer su cubo"));
  let rdo = Cubo(num);

  if (rdo != false) {
    alert(`El cubo de ${num} es ${rdo}`);
  } else {
    alert("El valor introducido no es un numero valido");
  }
}

/*
8.- Crea una función "Menor" que devuelva el menor de dos números que recibirá como parámetros. 
*/

function Menor(num1, num2) {
  {
    if (num1 < num2) {
      alert(`El numero ${num1} es menor que ${num2}`);
    } else {
      alert(`El numero ${num2} es menor que ${num1} `);
    }
  }
}

function CalcularMenor() {
  let num1 = parseInt(prompt("Introduce un numero"));
  let num2 = parseInt(prompt("Introduce otro numero"));

  alert(Menor(num1, num2));
}

/*
9.- Crear 4 funciones: PideNumero, EsPositivo, CalculaMitad y HazTodo
La función PideNumero, pedirá al usuario que introduzca un número y devuelve el número introducido.
Las funciones EsPositivo y CalculaMitad, no imprimen nada en la consola, simplemente devuelven los
valores correspondientes.
La función HazTodo no tendrá ningún parámetro, llamará a las otras tres funciones y mostrará la
siguiente información en la consola:
‘El número X es POSITIVO/NEGATIVO’
‘La mitad de X es Y’
Fuera de las funciones, solo habrá una llamada a la función HazTodo.

*/

function PideNumero() {
  let num = parseInt(prompt("Introduce un numero"));
  return num;
}

function EsPositivo(num) {
  if (num > 0) {
    return true;
  } else {
    return false;
  }
}

function CalculaMitad(num) {
  let mitad = num / 2;
  return mitad;
}

function HazTodo() {
  let num = PideNumero();

  if (EsPositivo(num)) {
    alert(`El número ${num} es POSITIVO`);
  } else {
    alert(`El número ${num} es NEGATIVO`);
  }

  alert(`La mitad de  ${num} es ${CalculaMitad(num)}`);
}

/*
11.- Escribe una función que dado un string, devuelva un array con las palabras que forman el string.
¿Qué pasa si el string tiene 3 espacios en blanco seguidos? ¿Se puede solucionar?

*/

function partirString() {
  let cadena = "Hola que tal";

  let partes = cadena.split(" ");

  alert(partes);
}

/*
12.- Escribe una función que se le pase un nombre completo (string) y devuelve el nombre abreviado (es
decir, el nombre y la primera letra del primer apellido, seguido de un punto). Escribe también el código
necesario para probarla.
*/

function NombreAbreviado(nombreCompleto) {
  // quitamos espacios extra y separamos por espacio
  let partes = nombreCompleto.trim().split(/\s+/);

  // cogemos el nombre (primera palabra)
  let nombre = partes[0];

  // cogemos la primera letra del primer apellido
  let inicial = partes[1][0];

  // formamos el nombre abreviado
  let abreviado = `${nombre} ${inicial}.`;

  return abreviado;
}

function HazTodo2() {
  let nombreCompleto = prompt("Introduce tu nombre completo:");

  // comprobamos que el usuario escribió algo
  if (nombreCompleto) {
    let resultado = NombreAbreviado(nombreCompleto);
    alert(`Tu nombre abreviado es: ${resultado}`);
  } else {
    alert("No has introducido ningún nombre.");
  }
}

/*16.- Crea una función que genere un número aleatorio, entre dos valores dados. Utiliza esta función para
simular el funcionamiento de un dado
*/

function tirarDado() {
  let resultado = Math.floor(Math.random() * 6) + 1;
  alert("Salió: " + resultado);
}

/*

17.- Define una función que devuelva una cadena de texto con el día actual. Además, hay que pasarle el
separador. Suponiendo que el separador es “-”, el formato de salida será “dd-mm-yyyy”
*/

function diaActual(separador) {
  let hoy = new Date();

  let dia = hoy.getDate();
  let mes = hoy.getMonth() + 1;
  let año = hoy.getFullYear();

  if (dia < 10) dia = "0" + dia;
  if (mes < 10) mes = "0" + mes;

  return dia + separador + mes + separador + año;
}
