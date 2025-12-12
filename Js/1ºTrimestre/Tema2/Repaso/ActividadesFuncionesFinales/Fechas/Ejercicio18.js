
function facturas(fecha) {
    let partes = fecha.split("-")
    let dia = parseInt(partes[0])
    let mes = parseInt(partes[1])-1
    let año = parseInt(partes[2])

    let f = new Date(año,mes,dia)

    f.setDate(f.getDate()+20)

    if (f.getDay()==6){
        f.setDate(f.getDate()-1)
    }else if(f.getDay()==0){
        f.setDate(f.getDate()-2)
    }

    let diafinal= f.getDate().toString().padStart(2,"0")
    let mesfinal= (f.getMonth()+1).toString().padStart(2,"0")
    let añofinal = f.getFullYear()

    return diafinal + "-" + mesfinal + "-" + añofinal

}


function introducirFecha() {

    let fecha= prompt("Introduce una fecha")

    console.log(facturas(fecha))
    
}