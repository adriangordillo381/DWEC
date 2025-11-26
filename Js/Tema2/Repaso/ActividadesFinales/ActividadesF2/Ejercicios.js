
/*
Ejercicio 1. Realiza un script que pida número de filas y columnas y escriba una tabla.
Dentro cada una de las celdas deberá escribirse un número consecutivo en orden
descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.
*/
function crearTabla() {
    let filas = parseInt(prompt("Introduce el numero de filas"))
    let col = parseInt(prompt("Introduce el numero de columnas"))
    rdo="<table border=1>"
    let mult = filas * col


    for (i=0;i<filas;i++){
        rdo+="<tr>" 
        
        for(j=0;j<col;j++){
            rdo+="<td>" + mult + "</td>"
            mult--
        }

        rdo+="</tr>"
    }
    
    rdo+="</table>"

document.getElementById("tabla").innerHTML = rdo
    
}

/*
Ejercicio 2. Llamar a la función sacarAleatorio que lo que hace es iterar 10 veces y
sacar un número aleatorio entre 0 y 10, si el número aleatorio es 5, devolver en la
iteración en la que ha salido dicho número mostrando el mensaje
 "El 5 ha salido en la iteración X".
Si han pasado las 10 iteraciones y no ha salido el 5 indicarlo mostrando "No ha salido el
5".
*/

function sacarAleatorio() {
    let elementos = (10-0) +0
    for (let i = 0; i < 10; i++) {
    let aleatorio = Math.floor(Math.random() * elementos +1)

    if (aleatorio==5){
        let indice = i
        return "El 5 ha salido en la iteracion " + indice
    }      
}
        return "No ha salido el cinco"
    
    
}

function aleatorio() {
    console.log(sacarAleatorio())
}

/*
Ejercicio 3. Ocultar los últimos dígitos de un nombre de usuario, quedándonos solo con
los 3 primeros y el resto que los rellene con asteriscos.
*/

function ocultarUsuario() {
    let nombreUsuario = "agordillob05"
    let rdo=""

    for(let i=0;i<nombreUsuario.length;i++){
        if(i<3){
            rdo+= nombreUsuario[i]
        }else{
            rdo+="*"
        }
    }
    console.log(rdo)
}

/*
Ejercicio 4. Crear un ejercicio que pida el número de divs a mostrar y cuántos párrafos
tendrán dichos divs. Se deberá escribir en pantalla los divs con una clase que definas
que lo que haga sea poner un color de fondo y un margen inferior de 10px para
separar los divs y dentro de cada div tantos párrafos con el texto Parrafo X donde X
será las veces que ha aparecido, por ejemplo: Parrafo:1, Parrafo:2...
*/

function div() {

    let numdiv = parseInt(prompt("Introduce un numero de divs"))
    let nump = parseInt(prompt("Introduce un numero de parrafos"))
    let rdo=""
    let count=0

    for (let i=0;i<numdiv;i++){
        rdo+="<div class='estilos'>"

        for (let j = 0; j < nump; j++) {
            count++
            rdo+="<p>" + "Parrafo:  " + count + " </p>"
        }
        rdo+="</div>"
    }

    document.getElementById("div").innerHTML = rdo
}


/*

Ejercicio 5. Nos dan un array con los números de la ONCE de los últimos 10 días:
“12345”,“00124”,“04586”,“98472”,“71920”,“54102”,“00013”,“29863”,“10978”,“47101”
Se debe pedir al usuario que inserte el número que quiere comprobar y mostrará “El
número X ha sido premiado en los últimos 10 días” o “El número X no ha sido
premiado. Sigue intentándolo”.
Hay que tener en cuenta que el usuario puede poner el número “13” y el programa
mostrará que sí ha salido premiado, por lo que habrá que controlar los ceros a la
izquierda: Si el usuario pone “13” el mensaje será “El número 00013 ha sido
premiado….

*/

function once() {
let numeros = ["12345","00124","04586","98472","71920","54102","00013","29863","10978","47101"]
let buscar = prompt("Introduce el numero que quieres buscar")
let buscarnuevo = buscar.padStart(5,"0")
let encontrado = false
for (const numero of numeros) {
    if(buscarnuevo==numero){
        console.log("El numero " + numero + " ha aparecido en los ultimos diez dias")
        encontrado = true
    }
}
if(!encontrado){
    console.log("numero no valido")
}
   
}


/*
Ejercicio 6. Nos han encargado realizar un programa para el recuento de votos de las
mejores luces de navidad de Extremadura, para ellos nos dan un array donde está el
nombre del pueblo y el número de puntos asignados. Como los puntos vienen de
distintas entidades y organismos para su recogida, puede haber la misma ciudad
repetida varias veces, por lo que sumaremos los puntos a la misma ciudad. Ejemplo, si
nos dan el array: Zafra-8puntos, Mérida-23puntos, Badajoz-13puntos, Zafra-4puntos,
Mérida-1punto. Debemos mostrar que Zafra ha obtenido 12 puntos, Mérida 24 puntos
y Badajoz 13 puntos.
7.1. Ordenar las ciudades para que se muestren según sus puntos de mayor a menor,
en el ejemplo anterior se mostraría: Mérida: 24 puntos, Badajoz: 13 puntos y Zafra: 12
puntos. Mostrar al usuario el resultado en una ventana emergente.
Código necesario:
Array de puntos:
["Zafra-8puntos", "Mérida-23puntos", "Badajoz-4puntos", "Zafra-3puntos",
"Almendralejo-12puntos", "Mérida-4puntos", "Badajoz-15puntos", "Zafra-2puntos",
"Mérida-7puntos", "Zafra-11puntos", "Almendralejo-31puntos", "Aceuchal-3puntos",
"Almendralejo-7puntos", "La Parra-17puntos", "Aceuchal-15puntos", "Zafra-6puntos"]
*/

function votos() {
    let ciudadespuntos =[
"Zafra-8puntos",
 "Mérida-23puntos", "Badajoz-4puntos", "Zafra-3puntos",
"Almendralejo-12puntos", "Mérida-4puntos", "Badajoz-15puntos", "Zafra-2puntos",
"Mérida-7puntos", "Zafra-11puntos", "Almendralejo-31puntos", "Aceuchal-3puntos",
"Almendralejo-7puntos", "La Parra-17puntos", "Aceuchal-15puntos", "Zafra-6puntos"]
let nuevo = []

for (const elemento of ciudadespuntos) {
    let partes = elemento.split("-")
    let ciudad = partes[0]
    let puntosN = parseInt(partes[1]) 

    if(nuevo[ciudad] == undefined){
        nuevo[ciudad] = puntosN
    }else{
        nuevo[ciudad]+=puntos
    }

    for (const ciudades of nuevo) {
        
    }
}

}