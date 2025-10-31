/*
2. Nos dan la lista de la compra en un array([“Leche”, “Café”, “Té”, “Miel”).
 Crea un botón para añadir
“Carne” al principio de la lista de la compra y “Azúcar” al final de la lista.
 Si ya se ha añadido “Carne” o
“Azúcar” no se vuelve a añadir, se muestra el mensaje 
“Ya se ha añadido este producto a la lista de la
compra”.
Crea un botón “Alergias” que pida un producto al que eres alérgico y
 lo elimina de la lista de la compra,
indicando “He eliminado X producto de la cesta porque eres alérgico”,
 si no se encuentra el producto en
la cesta, mostrará “No existen alergias en la cesta”.
Crea un botón “Modificar” que pida un producto a buscar y si lo encuentra modifique 
su valor, por ejemplo, que busque “Té” y te permita modificarlo a “Té verde”
*/
let array = ["Leche", "Cafe", "Te", "Miel"];

function añadir() {
  if (array.includes.carne || array.includes.azucar) {
    alert("Ya se han añadido estos productos a la cesta");
    return;
  }

  let carne = array.unshift("Carne");
  let azucar = array.push("Azucar");

  alert(array);
}

function alergias() {
  let productoEliminar = prompt("Introduce un producto al que eres alergico");

  let indice = array.indexOf(productoEliminar);

  if (indice == -1) {
    alert("El producto no existe");
    return;
  }
  array.splice(indice, 1);
  alert(array);
}

function modificar() {
  let producto = prompt("Que producto quieres buscar");

  if (array.includes(producto)) {
    let nuevo = prompt("Introduce nuevo nombre para " + producto);
    let indice = array.indexOf(producto);

    array[indice] = nuevo;

    alert(array);
  } else {
    console.log(`El producto ${producto} no existe`);
  }
}
