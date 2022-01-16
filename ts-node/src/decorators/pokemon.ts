function printToConsole(constructor: Function) {
  console.log(constructor);
}

const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  }

  return () => {};
};

//Factory Decorators
function checkValidPokemonId() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log({ target, propertyKey, descriptor });
    const originalMethod = descriptor.value;
    descriptor.value = (id: number) => {
      if (id < 1 || id > 800) {
        return console.error(`el id del Pokemon debe estar entre 1 y 800`);
      } else {
        return originalMethod(id);
      }
    };
  };
}

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  public publicApi: string = `https://pokeapi.co`;

  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado ${id}`);
  }
}
