(() => {
  class Avenger {
    /* name; */
    /* power; */

    constructor(name = "sin reconocer", power = 0) {
      this.name = name;
      this.power = power;
    }
  }

  class FlyingAvenger extends Avenger {
    /* flying; */

    constructor(name, power) {
      super(name, power);
      this.flying = true;
    }
  }

  const hulk = new Avenger("Hulk", 10000);
  const falcon = new FlyingAvenger("Falcon", 100);

  console.warn(hulk);
  console.log(falcon);
})();
