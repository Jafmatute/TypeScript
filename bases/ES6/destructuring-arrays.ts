(() => {
  const avengersArr: string[] = ["Capitan America", "Ironman", "Hulk"];

  //tupla
  const avengersTupla: [string, boolean, number] = ["ironman", true, 120];

  const [, ironman] = avengersArr;
  console.log(ironman);

  const [iron, bol, num] = avengersTupla;
  console.log(bol);
})();
