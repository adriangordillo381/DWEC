/*
Crear una función que pida una cadena por teclado y muestre su tamaño

2. Crea una función que pida la clave Secreta por pantalla, si la introduce correctamente aparece el
mensaje “Has acertado” (también serán válidas: secreta, SECRETA, SeCrEtA...)


3. Crea una función que recorra una cadena y separe los caracteres con un guión (Que no aparezca guión
al final)
*/

function mostrarTamaño() {
  let cadena = prompt("Introduce una cadena");
  alert(cadena.length);
}

function claveSecreta() {
  let clave = prompt("Introduce una clave secreta");
  if (clave.toLowerCase() == "secreta") {
    console.log("Has acertado");
  } else {
    console.log("no has acertado");
  }
}

function recorrerCadena() {
  let cadena = prompt("Introduce una cadena ");
  let rdo = "";
  for (const caracter of cadena) {
    if (rdo == "") {
      rdo += caracter;
    } else {
      rdo += "-" + caracter;
    }
  }
}
