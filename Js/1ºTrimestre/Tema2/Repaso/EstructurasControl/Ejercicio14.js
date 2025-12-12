/*
14. Crea un programa que pida al usuario su identificador y contraseña de manera indefinida hasta
que introduzca el identificador “alibaba” y la contraseña “sesamo”. Si al tercer intento no ha
introducido los datos correctos, mostrará un mensaje diciendo que el identificador/contraseña no
son correctos.


*/

let contraseña=""
let id=""
let respuesta = true
let count = 0

do{
    
id = prompt("Introduce un id")    
contraseña= prompt("Introduce una contraseña")
count++


if (contraseña=="sesamo" && id == "alibaba"){
    respuesta=false
}else if (count==3){
    alert("Identificador/contraseña no son correctos")
    break;
}

}while(respuesta)
