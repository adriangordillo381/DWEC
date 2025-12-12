class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log("Hola, soy " + this.nombre);
  }
}

let persona1 = new Persona("Ana");
let persona2 = new Persona("Luis");

persona1.saludar();
persona2.saludar();
