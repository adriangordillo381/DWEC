let animalesEnArca = [
  "Leon;carnívoro;macho",
  "Leon;carnívoro;hembra",
  "Elefante;herbívoro;macho",
  "Elefante;herbívoro;hembra",
  "Delfin;acuático;macho",
  "Delfin;acuático;hembra",
  "Tigre;carnívoro;macho",
  "Jirafa;herbívoro;hembra",
  "Cebra;herbívoro;macho",
  "Tiburon;acuático;hembra",
];

let curiosidades = [
  "Este animal será el encargado de dar la bienvenida hoy a los nuevos visitantes.",
  "¡Este animal ha ganado una ración extra de comida!",
  "Este animal será el primero en salir del arca cuando llegue el momento.",
  "Este animal tendrá el mejor camarote del arca hoy.",
  "Este animal liderará el paseo matutino por la cubierta.",
];

let posiblesFechasDiluvio = [
  "15/03/2026",
  "22/06/2026",
  "10/09/2026",
  "25/03/2026",
  "01/06/2026",
];

function mostrarResultado(mensaje) {
  document.getElementById("resultado").innerHTML =
    "<h2>Resultados:</h2>" + mensaje;
}
//Filtar por tipo de animal
function ejercicio1() {
  let tipoanimal = prompt(
    "Introduce un tipo de animal (carnívoro(C), herbívoro(H), acuático(A)) "
  ).toLowerCase();
  let rdo = filtrarPorTipos(tipoanimal).join("\n");
  alert(rdo);
}
// Ejercicio 2: Añadir Animal
function ejercicio2() {
  let animalNuevo = prompt("Introduce un animal nuevo").toLowerCase();
  let tipo = prompt("Introduce un tipo carnivoro/herbivoro/acuatico");
  let sexo = prompt("Introduce el sexo");

  for (const animal of animalesEnArca) {
    let nuevoanimal = animal.split(";");
    if (animalNuevo == nuevoanimal[0] && sexo == nuevoanimal[2]) {
      alert("Ya existe un animal con el mismo nombre y sexo en el arca");
    } else {
      let cadena = animalNuevo + tipo + sexo;
      animalesEnArca.push(cadena);
      alert("Animal insertado con exito");
    }
  }
}
//Contar por tipo de animal
function ejercicio3() {
  tiposAnimales();
}
//Animal aleatorio
function ejercicio4() {
  let rdo = "";
  let resultado = "<h3>🐾 Animal Aleatorio Seleccionado:</h3>";
  let aleatorio = Math.floor(Math.random() * animalesEnArca.length);
  let curiosidad = Math.floor(Math.random() * curiosidades.length);

  let aleatorio2 = animalesEnArca[aleatorio];
  let curiosidad2 = curiosidades[curiosidad];

  let p = aleatorio2.split(";");
  rdo += "<p> Nombre:" + p[0] + "</p>";
  rdo += "<p> Tipo:" + p[1] + "</p>";
  rdo += "<p> Sexo:" + p[2] + "</p>";
  rdo += "<p> Curiosidad:" + curiosidad2 + "</p>";
  mostrarResultado(rdo);
}

function ejercicio5() {}
function mostrarTodosAnimales() {}

function filtrarPorTipos(tipoanimal) {
  let nuevo = [];

  switch (tipoanimal) {
    case "c":
      for (const animal of animalesEnArca) {
        let nuevoanimal = animal.split(";");
        if (nuevoanimal[1] == "carnívoro") {
          nuevo.push(nuevoanimal[0]);
        }
      }
      break;

    case "h":
      for (const animal of animalesEnArca) {
        let nuevoanimal = animal.split(";");
        if (nuevoanimal[1] == "herbívoro") {
          nuevo.push(nuevoanimal[0]);
        }
      }
      break;
    case "a":
      for (const animal of animalesEnArca) {
        let nuevoanimal = animal.split(";");
        if (nuevoanimal[1] == "acuático") {
          nuevo.push(nuevoanimal[0]);
        }
      }
      break;

    default:
      if (nuevo.length > 0) {
        alert("no se encontraron animales");
      } else {
        alert("animales encontrados :" + nuevo.join() + " \n");
      }
      break;
  }
  return nuevo;
}

/*Ejercicio3
Ejercicio 3(1.5 puntos)
En principio tenemos 3 tipos de animales, pero se pueden añadir más en un futuro, por
lo que usar un array asociativo para contar por tipo de animal y mostrar en
“Resultado” debajo del .html:
<h3>Conteo de Animales por Tipo:</h3>
Y posteriormente el tipo de animal, dos puntos y su cantidad. Ejemplo:
carnívoro: 3
herbívoro: 4
acuático: 3*/

function tiposAnimales() {
  let resultado = [];
  for (const elemento of animalesEnArca) {
    let partes = elemento.split(";");
    let tipo = partes[1];
    if (resultado[tipo] == undefined) {
      resultado[tipo] = 1;
    } else {
      resultado[tipo] += 1;
    }
  }
  let resultado2 = "<h3>Conteo de animales por tipo</h3>";

  for (const a in resultado) {
    resultado2 += a + " :" + resultado[a] + "<br>";
  }
  mostrarResultado(resultado2);
}

/*Ejercicio 6*/

function mostrarTodosAnimales() {
  let cadena = "";
  let totalanimales = animalesEnArca.length;

  for (const animal of animalesEnArca) {
    nuevoanimal = animal.split(";");

    cadena +=
      nuevoanimal[0] +
      " - Tipo " +
      nuevoanimal[1] +
      " sexo " +
      nuevoanimal[2] +
      "<br>";
  }
  cadena += "El total de animales es " + totalanimales;
  mostrarResultado(cadena);
}
