(() => {
  interface Hero {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string;
  }

  let flash: Hero = { name: "Barry Allen", age: 28, powers: [1, 2, 3] };
  let superman: Hero = {
    name: "Clark ken",
    powers: [1, 2, 3, 4],
    getName() {
      return `${this.name}`;
    },
  };
})();
