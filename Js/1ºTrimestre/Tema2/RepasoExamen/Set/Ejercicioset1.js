/*
Ejercicio 1
Nos dan un array [5, 3, 2, 5, 5, 9, 4, 5]. Cuenta el número de elementos únicos (no repetidos) que hay.
*/

let array = [5, 3, 2, 5, 5, 9, 4, 5]

const set = new Set(array)

console.log(`En el array ${array}  hay ${set.size}
    elementos unicos`)