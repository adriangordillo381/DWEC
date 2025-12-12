/*
1.- Escribe un script con, al menos, estos valores: 3, 3.5, “3”, "3.5", “7aaa”, “aaa7” y “hola”. Recorre el
array y muestra por consola el resultado de aplicar las funciones parseInt, parseFloat, isNan, Number y
String, a cada uno de los elementos del array. ¿Hay algún resultado que no esperabas?
*/

function numericas() {
    
    let array = [3,3.5,"3","3.5","7aaa","aaa7","hola"]
    
    for (const elemento of array) {
        
        console.log(parseInt(elemento))
        console.log(parseFloat(elemento))
        console.log(isNaN(elemento))
        console.log(Number(elemento))
        console.log(String(elemento))
        
    }
}

/*
Crea una función llamada "DibujarLinea3", que dibuje una línea con 3 asteriscos en la pantalla*/
function dibujarLinea3() {
    console.log("***")
    
}

/*
3.- Crea una función llamada "DibujarCuadrado3x3", que dibuje un cuadrado (en la pantalla) formado por
3 filas con 3 asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio anterior).
*/
function dibujarCuadrado3x3() {
    
    for(i=1;i<=3;i++){
        dibujarLinea()
    }

}

/*
4.- Crea una función llamada "DibujarLinea", que dibuje una línea con X asteriscos (en la pantalla). La
función tendrá un parámetro de entrada con el número de asteriscos a mostrar
*/

function dibujarLinea(num) {
    let linea =""
    for (let i = 0; i < num; i++) {
        linea+="*"
        
    }
    return linea
}

function asteriscos() {
    
    let asteriscos = parseInt(prompt("Introduce un numero"))

    console.log(dibujarLinea(asteriscos))

}

/*
5.- Crea una función llamada "DibujarCuadrado", que dibuje un cuadrado formado por X filas con X
asteriscos cada una (esta función deberá llamar a la función creada en el ejercicio anterior). El script
pedirá al usuario el tamaño del cuadrado, y llamará a la función con ese dato.*/

function dibujarCuadrado(tamaño) {
    let lineas=""
    for (let i = 0; i < tamaño; i++){
        
       lineas+= dibujarLinea(tamaño) + "\n"    
    }
    console.log(lineas)
    
}


function introducirTamaño() {

    let tamaño = parseInt(prompt("Introduce un tamaño"))

    dibujarCuadrado(tamaño)
    
}

/*

6.- Crea una función "DibujarRectangulo" que dibuje en pantalla un rectángulo del ancho y alto que se
indiquen como parámetros. El script pedirá al usuario el tamaño del rectángulo, y llamará a la función con
ese dato.
*/


function DibujarRectangulo(alto,ancho) {
    
    let rectangulo=""
    for (let i = 0; i <alto; i++) {
        let linea =""
        for (let j = 0; j < ancho; j++) {
            linea+="*"
            
        }
         rectangulo+=linea +"\n"
   
    }
    return rectangulo
    
}

function tamañoRectangulo() {

    let alto = parseInt(prompt("introduce el alto"))
    let ancho = parseInt(prompt("introduce el ancho"))

    console.log(DibujarRectangulo(alto,ancho))
    
}

/*
7.- Crea una función "Cubo" que devuelva el cubo de un número real que se indique como parámetro. La
función tendrá que comprobar que el parámetro es un número (o que se pueda convertir a un número), en
caso contrario, devolverá false.
Prueba esta función para calcular el cubo de 3.2 y el de 5, y también prueba a pasarle “hola” como
parámetro. ¿Qué ocurre?
*/


function cubo(num) {

   num = Number(num)

    if (!isNaN(num)){
         return Math.pow(num,3)
    }else{
        alert("No has introducido un numero")
    }
    
}

function introducirNumero() {
    let num = prompt("introduce un numero")
    let cubonum = cubo(num)
    alert(cubonum)
    
}

/*
 11.- Escribe una función que dado un string, devuelva un array con las palabras que forman el string.
¿Qué pasa si el string tiene 3 espacios en blanco seguidos? ¿Se puede solucionar?

*/

function split(cadena) {

    cadena = prompt("Introduce una cadena")
    return cadena.trim().split(/\s+/)

}

function introducirCadena() {

    let cadena1 = prompt("Introduce una cadena")
    console.log(split(cadena1))
    
}

/*
12.- Escribe una función que se le pase un nombre completo (string) y devuelve el nombre abreviado (es
decir, el nombre y la primera letra del primer apellido, seguido de un punto). Escribe también el código
necesario para probarla
*/

function nombre(nombreC) {
    
    let nombreNuevo = nombreC.split(" ")

    let nombre1 = nombreNuevo[0]
    let letra =nombreNuevo[1].charAt(0)

    return nombre1 +  " " +letra
}

function introducirNombre() {

    let nombreCompleto = prompt("Introducd un nombre completo")
    
    console.log(nombre(nombreCompleto))
}


/*
13.- Crea una función que oculte parte de una dirección de email. Por ejemplo, si se le pasa
“1234567890@gmail.com”, devolverá “12345…@gmail.com”, es decir, sustituye la 2ª mitad del email
(antes de la @) por “...”. Escribe también el código necesario para probarla.
*/


function cortarEmail(email) {
    
    arrayemail = email.split("@")

    nuevamitad = arrayemail[0].slice(0,4)

    return nuevamitad + "...@" + arrayemail[1]

}

function introducirEmail() {

    let email = prompt("Introduce un email")
    
    console.log(cortarEmail(email))
    
}

/*
14.- Define una función que sustituya los espacios en blanco por un guión y, además, convierta todo el
texto en minúsculas. Escribe también el código necesario para probarla.
*/


function espaciosGuion(texto) {
   
    let textominus = texto.toLowerCase()

    let textoguion = textominus.replaceAll(" ","-")
    return textoguion
    
}

function sustituirEspacios() {
    let text = prompt("Introduce un texto")
    console.log(espaciosGuion(text))
    

}

/*
15.- Escribe una función que reciba dos parámetros, string1 y string2, y que devuelva true si string1
contiene a string2, o false en caso contrario
*/

function incluye(string1,string2) {
    
   
    
    if (string1.includes(string2)){
        return true
    }else{
        return false
    }
    

}

function Strings() {

    let cadena1 = prompt("introduce una cadena")
    let cadena2 = prompt("introduce una cadena")
    console.log(incluye(cadena1,cadena2))
    
}


/*
16.- Crea una función que genere un número aleatorio, entre dos valores dados. Utiliza esta función para
simular el funcionamiento de un dado.
*/

function dado() {

    let num = Math.floor(Math.random())
    
}


/*
17.- Define una función que devuelva una cadena de texto con el día actual. Además, hay que pasarle el
separador. Suponiendo que el separador es “-”, el formato de salida será “dd-mm-yyyy”

*/

function fecha() {

    let fechaActual = new Date().toString()

    //let cadena = fechaActual.toString()

    let separada= fechaActual.replaceAll(" ","-")
    alert(separada)
    

}

