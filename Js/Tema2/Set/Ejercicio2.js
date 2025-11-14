/*
Ejercicio 2
Hacer una función que reciba un array como parámetro y devuelva true
 si todos los elementos del array
son únicos y false si hay algún elemento repetido.
 Al pulsar el botón del ejercicio debe mostrar un alert
indicando "Todos los elementos son únicos" o
 "Hay elementos repetidos"
*/

function introducirArray() {
  let array = [1, 2, 3, 4, 5, 6];
  elementosUnicos(array);
}

function elementosUnicos(array) {
  const arrayset = new Set(array);

  if (array.length === arrayset.size) {
    alert("No hay elementos repetidos");
    return true;
  } else {
    alert("Si hay elementos repetidos");
    return false;
  }
}

/*
Tenemos un array con los votos de unas votaciones Nacionales,
 en cada casilla del array está la provincia,
dos puntos y sus votos. Ejemplo: ["Madrid: 125", "Barcelona: 89",
 "Valencia: 45", "Sevilla: 32","Madrid:
31"]. Por un error se han duplicado las provincias 
en vez de sumarse los votos (pertenecen a varias
localidades) y queremos saber cuáles
 son las provincias que han votado.
  Hacer una función que reciba el
array de votos y 
devuelva un array con las provincias que han votado.
 Al pulsar el botón del ejercicio
debe mostrar un alert con las provincias
 que han votado cada una en una línea:
"Han votado las provincias:
//X
//X"
*/

function provincias() {
  let votos = [
    "Madrid: 125",
    "Barcelona: 89",
    "Valencia: 45",
    "Sevilla: 32",
    "Madrid: 31",
  ];

  let setProvincias = new Set();

  for (let i = 0; i < votos.length; i++) {
    let partes = votos[i].split(":");
    let provincia = partes[0];

    setProvincias.add(provincia);

    let provinciasFinal = [...setProvincias];

    alert("Han votado las provincias:\n" + provinciasFinal.join("\n"));
  }
}
