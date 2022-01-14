(() => {
  class Avenger {
    constructor(public name: string, public realName: string) {
      console.log(`Constructor Avengers llamado`);
    }
    /*
     * private solo se puede acceder desde la clase
     * protected  Accede desde la clase y las clases eztendidas
     * */
    protected getFullName() {
      return `${this.name} ${this.realName}`;
    }
  }

  class Xmen extends Avenger {
    constructor(name: string, realName: string, isMutant: boolean) {
      super(name, realName);
      console.log(`Constructor del Xmen`);
    }

    get fullName() {
      return `${this.name} -- ${this.realName}`;
    }

    set fullName(name: string) {
      if (name.length < 3) {
        throw new Error("El nombre debe tener mas de 3 caracteres");
      }
      this.name = name;
    }

    getFullNameXmen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen("Wolwerine", "Logan", true);

  //Setters
  wolverine.fullName = "Jo";
  // getters
  console.log(wolverine.fullName);

  //wolverine.getFullNameXmen();
})();
