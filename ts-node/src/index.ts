import { printObject, genericFunction } from "./generics/generics";

/* printObject(123);
printObject("Hola Mundo");
printObject({ id: 123, name: "Hulk" });
printObject([1, 2, 3, 4]); */

console.log(genericFunction(3.1416));
console.log(genericFunction(new Date()).toFixed(2));
