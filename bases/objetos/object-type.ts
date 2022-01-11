(() => {
  let flash: { name: string; age?: number; powers: string[] } = {
    name: "Barry Allen",
    age: 24,
    powers: ["Super velocidad", "viajar en el tiempo"],
  };
  /* Asignar nuevos valores al objeto */

  flash = {
    name: "clark ken",
    /* age: 33, */
    powers: ["volar", "fuerza", "velocidad"],
    /* getName() {
      return this.name;
    }, */
  };
})();
