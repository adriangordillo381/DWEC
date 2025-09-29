let numero1 = parseInt(prompt("introduce un numero"));
let numero2 = parseInt(prompt("introduce un numero"));

if (numero2 != 0) {
  let division = numero1 / numero2;
  alert(division);
} else if (numero2 == 0) {
  alert("Error: No se puede dividir entre cero");
}
