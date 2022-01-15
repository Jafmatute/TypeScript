import axios from "axios";

export const getPokemon = async (pokemondId: number) => {
  console.log(`Quien es ese pokemon`);
  const resp = await axios.get(
    `https://pokeapi.co/api/v2/pokemon/${pokemondId}`
  );
  console.log(resp);

  return 1;
};
