/*
Ejercicio 7. Nos han encargado que realicemos un codificador/decodificador de
mensajes sencillo para poder transmitir los mensajes de la empresa de forma segura.
Para ello, nos dan un array donde cada letra tiene una posición en el vector fija, de
forma que, por ejemplo, si nos dan el número 5 codificado, se descodifica buscando en 
la posición 5 del array, y esa será la letra descodificada. Si por ejemplo tenemos el
array:
Si son dicen que codifiquemos la palabra “CASA”, ésta debe codificarse como 4-2-6-2.
Como puede verse, los dígitos van separados por un guión. Ojo, los dígitos del array
son siempre en mayúsculas.

Código dado:
let vectorCodificacion = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
"Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " "]
*/

function codificar() {
  let vectorCodificacion = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "Ñ",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
  ];

  let mensaje = prompt("Que mensaje quieres codificar").toUpperCase();

  let letras = mensaje.split("");
  let indices = [];

  for (const letra of letras) {
    let indice = vectorCodificacion.indexOf(letra);
    indices.push(indice);
  }
  alert(indices);
}
