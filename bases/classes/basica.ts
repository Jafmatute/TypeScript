(() => {
  class Avenger {
    private name: string;
    public team?: string;
    realName?: string;
    static avgAge: number;

    constructor(name: string, team?: string, realName?: string) {
      this.name = name;
      this.team = team;
      this.realName = realName;
    }
  }

  const atman: Avenger = new Avenger("Atman", "Capitan");
  console.log(atman);
})();
