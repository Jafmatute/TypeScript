(() => {
  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activos: boolean;
    poder: number;
  };

  const avengers: Avengers = {
    nick: "samuel n. Jackson",
    ironman: "Robert Downey Jr",
    vision: "Paul Bettany",
    activos: true,
    poder: 2000,
  };

  const { vision, poder } = avengers;
  console.log(
    `SuperHeroe: ${vision.toUpperCase()} tiene un poder de: ${poder.toFixed(2)}`
  );

  const printAvengers = ({ ironman, ...rest }: Avengers) => {
    console.log(rest);
  };

  printAvengers(avengers);
})();
