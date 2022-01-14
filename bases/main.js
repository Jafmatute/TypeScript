"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }
    /* private name: string; */
    /* private team: string; */
    /* public realName: string; */
    Avenger.avgAge = 35;
    const atman = new Avenger("Atman", "Capitan");
    console.log(atman);
})();
//# sourceMappingURL=main.js.map