

function mediaArray(){
    let array = []
    let suma = 0
   let cantidad =  parseInt(prompt("Cuantos numeros va a introducir?"))

   for (let i = 0; i < cantidad; i++) {
    let numero = parseInt(prompt("Introduce un numero"))
    array.push(numero)
    suma+=numero

   }

   let media = suma/cantidad
   alert(media)
   alert(array)
}


function nombres(){
    
    let nombres = []
let nombre = prompt("Introduce un nombre")
    

    while (nombre!=""){
     
    nombres.push(nombre)


    }
    
    nombres.sort()



}
/*7. Dado un array con elementos repetidos, escribe el código para que saber cuál es el elemento que
más veces aparece en el array*/

function repetido() {
    let colores = ["amarillo","verde","azul","rojo","amarillo","verde","verde","rojo","rojo","rojo"]
    let repeticiones = {}
    for (const color of colores) {

        if (repeticiones[color] == null){
            repeticiones[color]=1
        }else{
            repeticiones[color]+=1
        }
        
    }

    let vecesrepetido = 0
    let elementomax = null
    
    for (const color in  repeticiones) {
        if(repeticiones[color] > vecesrepetido){
            vecesrepetido = repeticiones[color]
            elementomax = color
        }
    }

    alert(`El elemento ${elementomax} es el que mas veces se ha repetido, se ha repetido ${vecesrepetido} veces`)
    
}


/*
Programa que pida 2 números y muestre todos los números impares que hay entre estos 2
números introducidos (ambos inclusive) separados por un guión. Sin usar arrays y sin que quede
un guión al final.
*/

function guionimpares(){

    let num1 = parseInt(prompt("Introduce un numero"))
    let num2 = parseInt(prompt("Introduce otro numero"))

    let texto = ""
    for (let i = num1; i <= num2; i++) {
        if (i%2!=0){
            if(texto === ""){
                texto =  i
            }else{
                texto+= "-" + i
            }
        }
        
    }

}

