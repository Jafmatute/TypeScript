import { getPokemon } from "./generics/get-pokemon";

getPokemon(4)
  .then((rsp) => {
    console.log(rsp);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Fin get Pokemon"));
