/*

Tareas:
1. Al hacer click en "Aplicar Filtros":
o Filtrar por categoría seleccionada (usando selectedIndex).
o Si el checkbox “solo disponibles” está marcado (usar :checked), mostrar
solo productos con stock > 0.
o Ocultar productos que no cumplan los filtros añadiendo clase "oculto".
2. Mostrar en consola cuántos productos se muestran
3. Si no hay productos que mostrar, mostrar mensaje "No hay productos"

*/

const btnAplicar = document.querySelector("#aplicar-filtros");
const selectCategoria = document.querySelector("#categoria");
const checkboxDisponibles = document.querySelector("#solo-disponibles");
const productos = document.querySelectorAll(".producto");
const contenedorProductos = document.querySelector("#productos");

btnAplicar.addEventListener("click", function() {
    // 1. Obtener categoría usando selectedIndex
    const indice = selectCategoria.selectedIndex;
    const categoriaFiltro = selectCategoria.options[indice].value;

    // 1. Verificar si el checkbox está marcado
    const soloDisponibles = checkboxDisponibles.checked;

    let contadorVisibles = 0;

    // Recorremos los productos para aplicar filtros
    productos.forEach(function(producto) {
        const categoriaProd = producto.dataset.categoria;
        const stockProd = parseInt(producto.dataset.stock);

        // Lógica de filtros
        const cumpleCategoria = (categoriaFiltro === "" || categoriaFiltro === categoriaProd);
        const cumpleDisponibilidad = (!soloDisponibles || stockProd > 0);

        if (cumpleCategoria && cumpleDisponibilidad) {
            producto.classList.remove("oculto");
            contadorVisibles++;
        } else {
            producto.classList.add("oculto");
        }
    });

    // 2. Mostrar en consola cuántos se muestran
    console.log("Productos visibles: " + contadorVisibles);

    // 3. Si no hay productos, mostrar mensaje
    // Borramos mensaje previo si existía para no acumularlos
    const mensajePrevio = document.querySelector(".mensaje-vacio");
    if (mensajePrevio) mensajePrevio.remove();

    if (contadorVisibles === 0) {
        const mensaje = document.createElement("p");
        mensaje.textContent = "No hay productos";
        mensaje.classList.add("mensaje-vacio");
        contenedorProductos.append(mensaje);
        console.log("No hay productos");
    }
});