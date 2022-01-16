import { Pokemon } from "./decorators/pokemon";

const charmander = new Pokemon("Charmander");

//(Pokemon.prototype as any).customName = 'Pikachu';
charmander.publicApi = "www.gooogle.com";
charmander.savePokemonToDB(1200);
