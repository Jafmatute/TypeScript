(() => {
  interface Client {
    name: string;
    age?: number;
    address?: Address;
    /* address?: { id: number; zip: string; city: string }; */
  }

  interface Address {
    id: number;
    zip: string;
    city: string;
  }

  const client: Client = {
    name: "Josue",
    age: 29,
    address: { id: 125, zip: "Ky SA", city: "ottawa" },
  };

  const cliente2: Client = {
    name: "Luz",
    age: 19,
    /* address: { id: 126, zip: "CX ZA", city: "otawwa" }, */
  };
})();
