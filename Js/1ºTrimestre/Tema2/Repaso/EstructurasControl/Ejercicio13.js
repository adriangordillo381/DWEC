/*
Lo mismo que el ejercicio anterior, pero esta vez mostrará una diagonal con otro carácter:
O***
*O**
**O*
*/

let alto =parseInt(prompt("introduce el alto"))
let ancho =parseInt(prompt("introduce el ancho"))

for (let i = 0; i < alto; i++) {
    let fila=""
    for (let j = 0; j < ancho; j++) {
        if(i==j){
            fila+="O"
        }else{
            fila+="*"
        }
        
    }
    console.log(fila)
    
}