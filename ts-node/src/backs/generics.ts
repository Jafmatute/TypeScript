import {
  printObject,
  genericFunction,
  genericFunctionArrow,
} from "../generics/generics";
import { HeroInterface, Villain } from "../interfaces/";
/* import { HeroInterface } from "./interfaces/hero";
import { Villain } from "./interfaces/villain"; */

/* printObject(123);
printObject("Hola Mundo");
printObject({ id: 123, name: "Hulk" });
printObject([1, 2, 3, 4]); */

/* console.log(genericFunctionArrow(3.1416).toFixed(2));
console.log(genericFunction("Hola").charAt(1));
console.log(genericFunction(new Date()).getDay()); */

const deadpool = {
  name: "DeadPool",
  realName: "Wade Winston Wilson",
  dangerLevel: 130,
};

console.log(genericFunctionArrow<HeroInterface>(deadpool).name);
