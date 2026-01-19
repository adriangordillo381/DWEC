/*
v id="caja" class="contenedor">Mi caja</div>
Tareas:
1. Añade la clase "destacado" a la caja.
2. Verifica si tiene la clase "contenedor" y muestra el resultado en consola.
3. Elimina la clase "contenedor".
4. Muestra todas las clases finales en consola.

*/

function funcionar() {
  const caja = document.querySelector("#caja");
  caja.classLis.add("destacado");

  caja.classList.contains("contenedor");
  console.log(caja);

  caja.classList.remove("contenedor");
  console.log(caja);
}
