"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Velocidad", "Viajar en el tiempo"],
    };
    // Asignar nuevos valores al objeto
    flash = {
        name: "clark ken",
        //age:21
        powers: ["volar", "fuerza", "velocidad"],
        getName() {
            return this.name;
        },
    };
})();
