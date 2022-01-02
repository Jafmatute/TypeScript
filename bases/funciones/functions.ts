(() => {

const hero :string = 'flash';

function getName():string {

return hero;

}

const activeBatiSignal = ():string => {

  return `bati signal`;
}

console.log(typeof activeBatiSignal);
const heroName = getName();
console.log(heroName);



})()
