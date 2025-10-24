/*
1. Si tenemos una cadena en minúsculas “miel”. ¿Cómo podemos transformarla en una cadena con la
primera letra en mayúsculas(Miel)

*/

let cadena = "miel";

let letram = cadena[0].toUpperCase();

let resto = cadena.slice(1);

alert(letram + resto);
