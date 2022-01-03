"use strict";
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
