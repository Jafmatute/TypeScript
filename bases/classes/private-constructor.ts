(() => {
  class Apocalipsis {
    static instance: Apocalipsis;

    private constructor(public name: string) {}

    static callApocalipsis(): Apocalipsis {
      if (!Apocalipsis.instance) {
        Apocalipsis.instance = new Apocalipsis("yo soy un apocalipsis, yeyey");
      }

      return Apocalipsis.instance;
    }

    changeName(newName: string): void {
      this.name = newName;
    }
  }

  const apocalipsis = Apocalipsis.callApocalipsis();
  const apocalipsis2 = Apocalipsis.callApocalipsis();
  const apocalipsis3 = Apocalipsis.callApocalipsis();
  apocalipsis.changeName("Xavier");
  /* const apocalipsis = new Apocalipsis("soy apocalipsis, yeye");
  const apocalipsis2 = new Apocalipsis("soy apocalipsis2, yeye");
  const apocalipsis3 = new Apocalipsis("soy apocalipsis3, yeye"); */

  console.log(apocalipsis, apocalipsis2, apocalipsis3);
})();
