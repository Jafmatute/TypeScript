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

    getFullNameXmen() {
      console.log(super.getFullName());
    }
  }

  const wolverine = new Xmen("Wolwerine", "Logan", true);

  console.log(wolverine);
  wolverine.getFullNameXmen();
})();
