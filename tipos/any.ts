(() => {

let avengers:  any;
let exists;
let power;

  avengers = 'Dr strange';
  // console.log(avengers.charAt(0));
  console.log((avengers as string).charAt(0)); //Casteo

avengers = 12.2;

// console.log(avengers.toFixed(2));
console.log((<number>avengers).toFixed(2)); //Casteo

console.log(exists);
console.log(power);



})()
