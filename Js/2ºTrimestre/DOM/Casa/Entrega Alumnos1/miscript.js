const imagenesConciertos = [
    "images/BigTime.webp",
    "images/GreenDay.webp",
    "images/Bunbury.webp",
    "images/Evanescence.webp",
    "images/Hans.webp"
];


const divConciertos = document.querySelector(".conciertos")


imagenesConciertos.forEach(function(imagen,indice){
    const img = document.createElement("img")

    img.src= imagen

    divConciertos.appendChild(img)
})


let imagenSeleccionada = null
divConciertos.addEventListener("click", (e) =>{
    const imagenes = document.querySelectorAll("img")

    imagenes.forEach(function(imagen,indice){
        imagen.style.border="none"

    })
    e.target.style.border= "4px solid blue"

    imagenSeleccionada= e.target.src
    
})

const listaReservas = []


function noReservaButacas() {
    const reservas = document.querySelector("#reservas")

    const parrafo = document.createElement("p")

    parrafo.textContent="No hay reservas todavia"

    parrafo.style.textAlign="center"
    parrafo.style.fontWeight="bold"
    parrafo.style.color= "gray"
    
    reservas.appendChild(parrafo)
}
noReservaButacas()
function reservas(){
    
    if (listaReservas.length == 0){
        noReservaButacas().style.display= "block"
    }else {
        noReservaButacas().style.display= "none"
    }
}

const asientos = document.querySelectorAll(".asiento")
const btnReservar = document.querySelector(".btn btn-danger botonReservar")

function asientoOcupado(){
    asientos.forEach(function(asiento,indice){
        asiento.addEventListener("click",(e) =>{
            e.target.classList.add(".ocupado")

        })

        btnReservar.addEventListener("click",(e)=>{
        
    })
    })

    
}