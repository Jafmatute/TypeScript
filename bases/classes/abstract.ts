(() => {
  /*
   * No se puede crear instancias de una clase abstract
   * Cascaron para otras clases extends
   * otras clases pueden tener sus propias funciones
   * asegurase que cumplan con las caracteristicas de su clase abstract
   * */

  abstract class Mutante {
    constructor(public name: string, public realName: string) {}
  }

  class Xmen extends Mutante {
    salvarMundo() {
      return `Mundo a salvo!!`;
    }
  }
  class Villian extends Mutante {
    conquistarMundo() {
      return `Mundo conquistado`;
    }
  }

  const wolverine: Xmen = new Xmen("Wolverine", "Logan");
  const magneto: Villian = new Villian("Magneto", "Magnus");
  console.log(wolverine.salvarMundo());
  console.log(magneto.conquistarMundo());

  const printName = (character: Mutante) => {
    console.log(character.name);
  };

  printName(wolverine);
})();
