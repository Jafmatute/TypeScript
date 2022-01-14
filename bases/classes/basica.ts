(() => {
  class Avenger {
    /* private name: string; */
    /* private team: string; */
    /* public realName: string; */

    static avgAge: number = 35;

    constructor(
      private name: string,
      private team?: string,
      public realName?: string
    ) {}
  }
  const atman: Avenger = new Avenger("Atman", "Capitan");
  console.log(atman);
})();
