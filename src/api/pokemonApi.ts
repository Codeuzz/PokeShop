import axios from "axios";
import { Pokemon } from "@customTypes/types";

export const fetchPokemonList = async (page: number): Promise<Pokemon[]> => {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`, {
    params: { limit: 12, offset: page * 12 },
  });

  return Promise.all(
    response.data.results.map(
      async ({ name, url }: { name: string; url: string }) => {
        const {
          data: { sprites, types, stats, id, height, weight },
        } = await axios.get(url);
        return { name, sprites, types, stats, id, height, weight };
      }
    )
  );
};

export const fetchPokemonByName = async (name: string): Promise<Pokemon[]> => {
  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return [
    {
      name: data.name,
      sprites: data.sprites,
      types: data.types,
      stats: data.stats,
      id: data.id,
      height: data.height,
      weight: data.weight,
    },
  ];
};
