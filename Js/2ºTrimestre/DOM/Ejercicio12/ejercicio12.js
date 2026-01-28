/*
Recorre el array de productos y llama a una función llamada crearTarjetaProducto con
el objeto literal como parámetro. Esta función crea un div con la clase “tarjeta” que
tendrá como hijos:
- <h3> con el nombre del producto.
- <p> con <span> con la clase “precio” y el precio del producto con € al final.
- <p> con “Stock: X unidades” si hay stock y <p> con texto AGOTADO y color del
texto rojo y negrita en si no hay stock.
*/

const productos = [
  { nombre: "Portátil Gaming", precio: 999, stock: 5 },
  { nombre: "Teclado Mecánico", precio: 89, stock: 12 },
  { nombre: "Ratón Inalámbrico", precio: 29, stock: 20 },
  { nombre: "Monitor 27''", precio: 299, stock: 0 },
  { nombre: "Webcam HD", precio: 59, stock: 8 },
];

productos.forEach((producto) => {
  crearTarjetaProducto(producto);
});

function crearTarjetaProducto(producto) {
  const contenedor = document.querySelector("contenedor-productos");

  const tarjeta = document.createElement("div");
  tarjeta.classList.add("tarjeta");

  const nombre = document.createElement("h3");
  nombre.textContent = producto.nombre;
  tarjeta.appendChild(nombre);

  const pPrecio = document.createElement("p");
  const spanPrecio = document.createElement("span");
  spanPrecio.classList.add("precio");
  spanPrecio.textContent = producto.precio + " €";
  pPrecio.appendChild(spanPrecio);
  tarjeta.appendChild(pPrecio);

  const pStock = document.createElement("p");
  if (producto.stock > 0) {
    pStock.textContent = "Stock: " + producto.stock + " unidades";
  } else {
    pStock.textContent = "AGOTADO";
    pStock.style.color = "red";
    pStock.style.fontWeight = "bold";
  }
  tarjeta.appendChild(pStock);

  contenedor.appendChild(tarjeta);
}
