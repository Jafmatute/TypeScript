"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.name;
        }
        bio() {
            return `${this.name} (${this.team})`;
        }
    }
    /* private name: string; */
    /* private team: string; */
    /* public realName: string; */
    Avenger.avgAge = 35;
    const atman = new Avenger("Atman", "Capitan");
    console.log(atman);
    console.log(atman.bio());
    console.log(Avenger.getAvgAge());
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log(`Constructor Avengers llamado`);
        }
        /*
         * private solo se puede acceder desde la clase
         * protected  Accede desde la clase y las clases eztendidas
         * */
        getFullName() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
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
//# sourceMappingURL=main.js.map