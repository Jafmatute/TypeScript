import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async (pokemondId: number): Promise<Pokemon> => {
  console.log(`Quien es ese pokemon`);
  const { data } = await axios.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemondId}`
  );
  console.log(data.abilities[0].ability.url);

  return data;
};
