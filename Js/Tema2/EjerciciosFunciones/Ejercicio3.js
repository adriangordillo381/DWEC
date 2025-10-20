/*
Crear una función que tenga como parámetro de entrada un DNI y le ponga
 un 0 o no al principio según
corresponda (si tiene 7 caracteres, hay que ponerle un 0 delante).
*/

function comprobarDni() {
  let dni = prompt("Introduce un dni");
  let rdo = cerosDni(dni);
  alert("el dni es " + rdo);
}

function cerosDni(dni) {
  let dninuevo = dni.padStart(8, "0");
  return dninuevo;
}
