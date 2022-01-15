// Crear interfaces
interface Automovil {
  encender: boolean;
  velocidadMaxima: number;
  acelear(): void;
}

// Cree una interfaz para validar el auto (el valor enviado por parametro)
const conducirBatimovil = (auto: Automovil): void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
};

const batimovil: Automovil = {
  encender: false,
  velocidadMaxima: 0,
  acelear() {
    console.log("...... gogogo!!!");
  },
};

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Estados {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: Estados = {
  reir: true,
  comer: true,
  llorar: false,
};

const reir = (guason: Estados): void => {
  if (guason.reir) {
    console.log("JAJAJAJA");
  }
};

// Cree una interfaz para la siguiente funcion
interface CiudadGotica {
  (ciudadanos: string[]): number;
}
const ciudadGotica: CiudadGotica = (ciudadanos: string[]): number => {
  return ciudadanos.length;
};

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
interface PersonaInterface {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio: () => void;
}

class Persona implements PersonaInterface {
  public nombre: string = "Josue";
  public edad: number = 29;
  public sexo: string = "M";
  public estadoCivil: string = "Soltero";
  imprimirBio() {}
}
