import {getPokemon, getPokemonAll} from "./pokemon-api.js";



//Main

(async () => {
    // getPokemon("charmander").then((pokemon) => {
    //     console.log(pokemon);
    // });

  const list = await getPokemonAll();
  console.log(list)


})();