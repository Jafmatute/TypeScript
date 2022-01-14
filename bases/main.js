"use strict";
(() => {
    /*
     * No se puede crear instancias de una clase abstract
     * Cascaron para otras clases extends
     * otras clases pueden tener sus propias funciones
     * asegurase que cumplan con las caracteristicas de su clase abstract
     * */
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
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
    const wolverine = new Xmen("Wolverine", "Logan");
    const magneto = new Villian("Magneto", "Magnus");
    console.log(wolverine.salvarMundo());
    console.log(magneto.conquistarMundo());
    const printName = (character) => {
        console.log(character.name);
    };
    printName(wolverine);
})();
//# sourceMappingURL=main.js.map