"use strict";
(() => {
    // Tipos
    const batman = 'Bruce';
    const superman = 'Clark';
    const existe = false;
    // Tuplas
    const parejaHeroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    // Arreglos
    const aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    let PowerHeros;
    (function (PowerHeros) {
        PowerHeros[PowerHeros["acuaman"] = 0] = "acuaman";
        PowerHeros[PowerHeros["batman"] = 1] = "batman";
        PowerHeros[PowerHeros["flash"] = 5] = "flash";
        PowerHeros[PowerHeros["superman"] = 100] = "superman";
    })(PowerHeros || (PowerHeros = {}));
    const fuerzaFlash = PowerHeros.flash;
    const fuerzaSuperman = PowerHeros.superman;
    const fuerzaBatman = PowerHeros.batman;
    const fuerzaAcuaman = PowerHeros.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    const poder = '100';
    // const largoDelPoder:number = poder.length;
    const largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
// Funciones Básicas
function sumar(a, b) {
    return a + b;
}
const contar = (heroes) => {
    return heroes.length;
};
const superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
//Parametros por defecto
const llamarBatman = (llamar = true) => {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
// Rest?
const unirheroes = (personas, ...restArgs) => {
    return personas.join(", ");
};
// Tipo funcion
const noHaceNada = (numero, texto, booleano, arreglo) => { };
// Crear el tipo de funcion que acepte la funcion "noHaceNada"
let noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(() => {
    const fullName = (firstName, lastName, upper = true) => {
        if (upper) {
            return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        }
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName('Tony', 'Stark', false);
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'No last name'}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log(name);
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName}`;
    };
    const name = fullName('Tony', 'Stark');
    console.log(name);
})();
(() => {
    const fullName = (firstName, ...restArgs) => {
        return `${firstName} ${restArgs.join(' ')}`;
    };
    const superman = fullName('Clark', 'Joseph', 'ken');
    console.log({ superman });
})();
(() => {
    const addNumbers = (a, b) => a + b;
    const greet = (name) => `Bienvenido ${name}`;
    const saveTheWorld = () => `El mundo esta salvado!`;
    //Declarar de forma general para todas
    let myFunction;
    //Asignar(Pasando la referencia)
    // let myFunction:(y:number, x:number) => number;
    myFunction = addNumbers;
    console.log(myFunction(1, 2));
    // let myFunction:(y:string) => string;
    myFunction = greet;
    console.log(myFunction('Josue'));
    // let myFunction:() => string;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(() => {
    const hero = 'flash';
    function getName() {
        return hero;
    }
    const activeBatiSignal = () => {
        return `bati signal`;
    };
    console.log(typeof activeBatiSignal);
    const heroName = getName();
    console.log(heroName);
})();
// Objetos
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4,
};
const bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        // El metodo disparar es opcional
        console.log("Disparando");
    },
};
const villanos = [
    {
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false,
    },
    {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true,
    },
    {
        nombre: "James Logan",
        edad: undefined,
        mutante: true,
    },
];
const charles = {
    poder: "psiquico",
    estatura: 1.78,
};
const apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"],
};
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique;
mystique = charles;
mystique = apocalipsis;
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
(() => {
    let flash = {
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
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "viajar en el tiempo"],
    };
    //Asignar nuevos valores al objeto
    flash = {
        name: "clark ken",
        age: 33,
        powers: ["volar", "fuerza", "velocidad"],
    };
})();
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Velocidad", "Viajar en el tiempo"],
    };
    let superman = {
        name: "Clark ken",
        age: 24,
        powers: ["Velocidad", "fuerza"],
    };
})();
(() => {
    let myCustomVariable = "Josue";
    //#1
    console.log(myCustomVariable);
    //#2
    myCustomVariable = 123;
    console.log(myCustomVariable);
    //#3
    myCustomVariable = {
        name: "Clark ken",
        age: 32,
        powers: [1, 2, 3],
    };
    console.log(myCustomVariable);
})();
(() => {
    let avengers;
    let exists;
    let power;
    avengers = 'Dr strange';
    // console.log(avengers.charAt(0));
    console.log(avengers.charAt(0)); //Casteo
    avengers = 12.2;
    // console.log(avengers.toFixed(2));
    console.log(avengers.toFixed(2)); //Casteo
    console.log(exists);
    console.log(power);
})();
(() => {
    // const numbers:(string|number |boolean)[] = [1,2,3,4,5,'6',7,8,9,10];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const villians = ['Duende Verde', 'Optopus', 'Tanos'];
    villians.forEach(villian => {
        console.log(villian.toUpperCase());
    });
    console.log(numbers);
})();
(() => {
    let isSuperman = true;
    let isBatman = false;
    isSuperman = true && false;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    // enum AudioLevel {
    //   min,
    //   medium,
    //   max
    // }
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let currentAudio = AudioLevel.medium;
    console.log(currentAudio);
    console.log(AudioLevel);
})();
(() => {
    const error = (msg) => {
        throw new Error(msg);
    };
    const error2 = (msg) => {
        if (false) {
            throw new Error(msg);
        }
        return 1;
    };
    error('Ocurrio un error');
    error2('Ocurrio un error devuleve un numero');
})();
(() => {
    let nada = undefined;
    // let nada2: number = undefined;
    // strickNullChecks
    // let isActive:(boolean|undefined) = undefined;
    // let isActive:(boolean) = undefined;
    console.log(nada);
})();
(() => {
    let avengers = 10;
    const villians = 20;
    if (avengers < villians) {
        console.log("problemas");
    }
    else {
        console.log('Nos salvamos');
    }
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linternaVerde = 'Linterna verde';
    const panteraNegra = `Heroe: Pantera Negra`;
    console.log(`soy: ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta presente');
})();
(() => {
    const hero = ['dr strange', 100, false];
    hero[0] = 'wolwerine';
    hero[1] = 123;
    hero[2] = true;
    console.log(hero);
})();
(() => {
    function callBatman() {
        return;
    }
    const callSuperman = () => {
        return;
    };
    const batman = callBatman();
    const superman = callSuperman();
    console.log(batman);
    console.log(superman);
})();
//# sourceMappingURL=main.js.map