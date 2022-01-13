(() => {
  type Hero = { name: string; age: number; powers: number[] };

  let myCustomVariable: string | number | Hero = "Josue";

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
