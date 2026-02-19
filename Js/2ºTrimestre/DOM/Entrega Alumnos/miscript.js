let array = [];
let contadorTareas = 1;
let completada = false;

const inputTarea = document.querySelector("#inputTarea");
const select = document.querySelector("#selectTipo");

const botonAñadir = document.querySelector("#btnAnadir");

botonAñadir.addEventListener(() => {
  añadirTarea();
});
function añadirTarea() {
  if (inputTarea == "") {
    alert("La tarea esta vacia");
  } else {
    let tarea = {
      id: contadorTareas,
      descripcion: inputTarea.value,
      tipo: select,
      completada: completada,
      fechaCompletada: null,
    };

    array.push(tarea);
    inputTarea.value = "";
  }
}
