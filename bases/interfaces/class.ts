(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutanPower(id: number): string;
  }

  interface Human {
    age: Number;
  }

  class Mutan implements Xmen, Human {
    public age: number = 0;
    public name: string = "no name";
    public realName: string = "no name";
    mutanPower(id: number) {
      return `${this.name}`;
    }
  }
})();
