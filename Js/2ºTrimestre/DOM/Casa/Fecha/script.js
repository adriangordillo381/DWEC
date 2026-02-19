// --- DATOS DE ENTRADA ---
// Creamos un objeto de fecha con el día de hoy
const fechaHoy = new Date(); 

// --- FUNCIÓN CALCULAR GARANTÍA ---
function calcularVencimiento() {
    // 1. Clonamos la fecha actual para no modificar la original
    // (Es buena práctica para no perder la fecha de "hoy")
    let fechaVencimiento = new Date(fechaHoy);

    alert("Fecha de compra: " + fechaVencimiento.toLocaleDateString());

    // 2. MODIFICAR MESES: Sumamos 24 meses
    // .getMonth() nos da el mes actual y .setMonth() lo cambia
    fechaVencimiento.setMonth(fechaVencimiento.getMonth() + 24);

    alert("La garantía vence el: " + fechaVencimiento.toLocaleDateString());

    // 3. MODIFICAR DÍAS: Vamos a darle un margen de 15 días extra
    fechaVencimiento.setDate(fechaVencimiento.getDate() + 15);

    alert("Con el margen de cortesía (15 días), vence el: " + fechaVencimiento.toLocaleDateString());
}

// Ejecutamos la función para probar
calcularVencimiento();

// --- DATOS DE PRUEBA ---
const fechaActual = new Date();

// --- FUNCIÓN COMPARAR FORMATOS ---
function mostrarDiferenciaFormatos() {
    
    // 1. toLocaleDateString() -> SOLO FECHA
    // Resultado típico: "19/2/2026"
    const soloFecha = fechaActual.toLocaleDateString();
    alert("Con toLocaleDateString ves solo el día: " + soloFecha);

    // 2. toLocaleString() -> FECHA Y HORA
    // Resultado típico: "19/2/2026, 16:13:45"
    const fechaYHora = fechaActual.toLocaleString();
    alert("Con toLocaleString ves también la hora: " + fechaYHora);
    
}

mostrarDiferenciaFormatos();


/*

¿Cuándo usar cada uno en tus ejercicios?
Usa toLocaleDateString(): Para cosas "estáticas" donde la hora no importa, como la fecha de caducidad de una reserva de butaca o el vencimiento de una garantía.

Usa toLocaleString(): Para registros de actividad (logs). Por ejemplo, si en el carrito de la compra quieres poner un mensaje que diga: "Pedido realizado el 19/2/2026 a las 16:15".

*/