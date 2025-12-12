

function creartabla() {
    

let tamaño = parseInt(prompt("Tamaño de la matriz"))
let resultado="<table border=1>"



for (let filas = 1; filas <= tamaño;filas++){
    resultado+="<tr>"
    for (let col = 1; col <= tamaño;col++){
        let valor = parseInt(prompt("introduce un valor para las celdeas"))
        resultado+="<td> " + valor + "</td>"
    }
    resultado+="</tr>"
    
}

resultado+="</table>"

document.getElementById("tabla").innerHTML= resultado
}    