(() => {

const addNumbers = (a:number, b:number):number => a+b;
const greet = (name:string):string=> `Bienvenido ${name}`;
const saveTheWorld = () => `El mundo esta salvado!`;

//Declarar de forma general para todas
let myFunction:Function;

//Asignar(Pasando la referencia)

// let myFunction:(y:number, x:number) => number;
myFunction = addNumbers;
console.log(myFunction(1,2));

// let myFunction:(y:string) => string;
myFunction = greet;
console.log(myFunction('Josue'));

// let myFunction:() => string;
myFunction = saveTheWorld;
console.log(myFunction());


})()
