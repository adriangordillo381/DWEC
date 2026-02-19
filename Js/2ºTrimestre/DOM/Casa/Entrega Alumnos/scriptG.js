let tareas = [];
let contador = 0;
// Punto 6: Variable global para rastrear qué filtro está seleccionado
let filtroActivo = "Todos"; 

const input = document.querySelector("#inputTarea");
const select = document.querySelector("#selectTipo");
const boton = document.querySelector("#btnAnadir");
const listaTareas = document.querySelector("#listaTareas");
// Punto 6: Contenedor para los botones de filtro
const contenedorFiltros = document.querySelector("#filtros"); 

/**
 * 2. AÑADIR TAREA
 */
function añadirTarea() {
    if (input.value == "") {
        alert("Esta vacio");
        return;
    }

    contador++;
    let tarea = {
        id: contador,
        descripcion: input.value,
        tipo: select.value,
        completada: false,
        fechacompletada: null
    };
    tareas.push(tarea);

    input.value = "";
    
    // El enunciado pide volver a dibujar filtros y tareas después de añadir
    dibujarFiltros(); 
    dibujarTarea();
}

const plantillaTarea = document.querySelector("#templateTarea");

/**
 * 3. DIBUJAR LAS TAREAS
 */
function dibujarTarea() {
    listaTareas.innerHTML = ""; 

    // Punto 3 y 6: Filtrar el array antes de recorrerlo
    const tareasAMostrar = tareas.filter(t => {
        if (filtroActivo === "Todos") return true;
        return t.tipo === filtroActivo;
    });

    // Caso cuando no hay tareas (Punto 3)
    if (tareasAMostrar.length == 0) {
        const li = document.createElement("li");
        li.classList.add("sin-tareas");
        li.textContent = "No hay tareas";
        listaTareas.appendChild(li);
        return;
    }

    // Recorremos el array filtrado para clonar el template
    tareasAMostrar.forEach(function (tarea) {
        const clon = plantillaTarea.content.cloneNode(true);

        const descripcion = clon.querySelector(".tarea-desc");
        descripcion.textContent = tarea.descripcion;

        const tipo = clon.querySelector(".tarea-tipo");
        tipo.textContent = tarea.tipo;

        // Gestión de la fecha (Punto 3)
        const fecha = clon.querySelector(".tarea-fecha");
        if (tarea.fechacompletada != null) {
            fecha.textContent = tarea.fechacompletada;
        } else {
            fecha.remove(); // Si no hay fecha, eliminamos el span
        }

        const li = clon.querySelector("li");
        const btnCompletar = clon.querySelector(".btn-completar");
        
        // Estado completada (Punto 3)
        if (tarea.completada == true) {
            li.classList.add("completada");
            btnCompletar.textContent = "Deshacer";
        } else {
            btnCompletar.textContent = "Completada";
        }

        const btnEliminar = clon.querySelector(".btn-eliminar");

        // Asignar eventos a los botones del clon
        btnEliminar.addEventListener("click", () => {
            eliminarTarea(tarea.id);
        });
        
        btnCompletar.addEventListener("click", () => {
            completarTarea(tarea.id);
        });

        listaTareas.appendChild(clon);
    });
}

/**
 * 6. FILTROS DINÁMICOS - Obtener tipos únicos
 */
function obtenerTipos() {
    let tipos = [];
    tareas.forEach(t => {
        // Si el tipo no está en el array, lo incluimos (Punto 6)
        if (!tipos.includes(t.tipo)) {
            tipos.push(t.tipo);
        }
    });
    // Añadir "Todos" al inicio
    tipos.unshift("Todos");
    return tipos;
}

/**
 * 6. FILTROS DINÁMICOS - Dibujar botones
 */
function dibujarFiltros() {
    contenedorFiltros.innerHTML = ""; // Limpiar filtros previos
    const tipos = obtenerTipos();

    // Regla especial: si el filtro activo desaparece, volver a "Todos"
    if (!tipos.includes(filtroActivo)) {
        filtroActivo = "Todos";
    }

    tipos.forEach(tipo => {
        const divFiltro = document.createElement("div");
        divFiltro.classList.add("filtro");
        divFiltro.textContent = tipo;

        // Añadir clase activo si coincide
        if (tipo === filtroActivo) {
            divFiltro.classList.add("activo");
        }

        // Evento para cambiar el filtro
        divFiltro.addEventListener("click", () => {
            filtroActivo = tipo;
            dibujarFiltros(); // Redibujar para actualizar la clase "activo"
            dibujarTarea();   // Redibujar tareas con el nuevo filtro
        });

        contenedorFiltros.appendChild(divFiltro);
    });
}

/**
 * 4. COMPLETAR TAREA
 */
function completarTarea(idRecibido) {
    const tareaBuscada = tareas.find(t => t.id === idRecibido);
    tareaBuscada.completada = !tareaBuscada.completada;

    if (tareaBuscada.completada) {
        tareaBuscada.fechacompletada = new Date().toLocaleString("es-ES");
    } else {
        tareaBuscada.fechacompletada = null;
    }

    dibujarTarea();
}

/**
 * 5. ELIMINAR TAREA
 */
function eliminarTarea(idRecibido) {
    tareas = tareas.filter(t => t.id !== idRecibido);
    // Al eliminar, redibujamos ambos para actualizar botones de tipo si fuera necesario
    dibujarFiltros(); 
    dibujarTarea();
}

// EVENTO PRINCIPAL
boton.addEventListener("click", () => {
    añadirTarea();
});

// Inicialización al cargar la página
dibujarFiltros();
dibujarTarea();