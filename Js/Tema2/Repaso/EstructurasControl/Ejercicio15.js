/*
15. Crea un "calculador de cuadrados": pedirá al usuario un número y mostrará su cuadrado. Se
repetirá mientras el número introducido no sea cero.


*/

let num
do{
     num = parseInt(prompt("Introduce un numero"))
    alert(`El cuadrado de ${num} es  ${Math.pow(num,2)}`)
    


}while(num!==0)