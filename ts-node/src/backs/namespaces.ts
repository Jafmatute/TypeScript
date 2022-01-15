import { Hero as SuperHero, Hero2 } from "../classes/Hero";
import powers, { Power } from "../data/powers";
/* import * as HeroClass from "./classes/Hero"; */

const Hero = 124;

const ironman = new SuperHero("IronMan", 1, 22);
/* const ironman = new HeroClass.Hero("IronMan", 123, 22); */
console.log(ironman.power);

console.log(powers);
