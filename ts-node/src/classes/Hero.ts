import powers, { Power } from "../data/powers";

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}

  /*
   * ? si lo encuentra(null - check)
   * ! dar seguridad que lo encuentra
   ** */
  get power(): string {
    return (
      powers.find((power) => power.id === this.powerId)?.descripcion ||
      "not found"
    );
  }
}

export class Hero2 {}
export class Hero3 {}

export const PI = 3.1416;
export const name = "Josue";
