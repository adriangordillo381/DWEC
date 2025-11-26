/*
Ejercicio 2
Hacer una función que reciba un array como parámetro y devuelva true si todos los elementos del array
son únicos y false si hay algún elemento repetido. Al pulsar el botón del ejercicio debe mostrar un alert
indicando "Todos los elementos son únicos" o "Hay elementos repetidos"
*/

function introducirArray() {
    let array = [1,2,3,3,4,4,5,5,6,7]
    elementosUnicos(array)
}

function elementosUnicos(array) {

    const set = new Set(array)

    if (array.length == set.size){
        alert("Todos los elementos son unicos")
        return true
    }else {
        alert("Hay elementos repetidos")
        return false
    }
    
}