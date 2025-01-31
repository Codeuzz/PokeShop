import { fetchPokemonById } from "src/api/pokemonApi";
import { useQuery } from "@tanstack/react-query";

export const usePokemon = (id: string) => {
  return useQuery({
    queryKey: ["pokemon", id],
    queryFn: () => fetchPokemonById(id),
    enabled: !!id,
  });
};
