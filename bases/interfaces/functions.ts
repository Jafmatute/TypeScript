(() => {
  interface addTwoNumbers {
    (a: number, b: number): number;
  }

  let addNumber: addTwoNumbers;

  addNumber = (a: number, b: number) => {
    return 10;
  };
})();
