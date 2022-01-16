function printToConsole(constructor: Function) {
  //console.log(constructor);
}

const bloquearPrototipo = function (constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
};

//Factory Decorators
const printToConsoleConditional = (print: boolean = false): Function => {
  if (print) {
    return printToConsole;
  }

  return () => {};
};

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

function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
    const descriptor: PropertyDescriptor = {
      get() {
        console.log(this, "Getters");
        return "Josue";
      },
      set(this, val) {
        /* console.log(this, val); */
        Object.defineProperty(this, propertyKey, {
          value: val,
          writable: !isWritable,
          enumerable: false,
        });
      },
    };

    return descriptor;
  };
}

@bloquearPrototipo
@printToConsoleConditional(true)
export class Pokemon {
  @readOnly(true)
  public publicApi: string = `https://pokeapi.co`;

  constructor(public name: string) {}

  @checkValidPokemonId()
  savePokemonToDB(id: number) {
    console.log(`Pokemon guardado ${id}`);
  }
}
