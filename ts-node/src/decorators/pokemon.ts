function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  }

  return () => {};
};

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  public publicApi: string = `https://pokeapi.co`;

  constructor(public name: string) {}
}
