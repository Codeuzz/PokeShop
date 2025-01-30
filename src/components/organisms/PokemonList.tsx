import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "@atoms/SearchBar";
import Cards from "@molecules/Cards";
import { Pokemon } from "@customTypes/types";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "src/api/pokemonApi";
import { fetchPokemonByName } from "src/api/pokemonApi";

const PokemonList = () => {
  const [page, setPage] = useState<number>(0);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const { data, isLoading, isError, error } = useQuery<Pokemon[], Error>({
    queryKey: ["pokemons", searchTerm || page],
    queryFn: () =>
      searchTerm ? fetchPokemonByName(searchTerm) : fetchPokemonList(page),
  });

  const handleSearch = (term: string) => {
    setSearchTerm(term || null);
  };

  if (isLoading) {
    return (
      <h3 className="m-10 text-center text-5xl font-semibold italic">
        Loading...
      </h3>
    );
  }
  if (isError) {
    console.log(error);
    return <p>Please write a numeric id</p>;
  }

  return (
    <div className="flex flex-col items-center gap-10 pt-3 relative w-full">
      <SearchBar onSearch={handleSearch} />
      <h1 className="text-5xl font-semibold">Pokemon List</h1>
      <div
        id="pokemon-list"
        className={`grid gap-6 ${data && data.length > 1 ? "grid-cols-4" : ""}`}
      >
        <Cards data={data} />
      </div>
      <div className="flex gap-4 mb-10">
        {page > 0 && (
          <button
            className="border-2 border-black bg-amber-400 px-2 rounded-xl hover:bg-amber-500"
            onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : prev))}
            disabled={isLoading || page === 0}
          >
            <i className="fa-solid fa-arrow-left"></i> Prev 12
          </button>
        )}

        <button
          className="border-2 border-black bg-amber-400 px-2 rounded-xl hover:bg-amber-500"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={isLoading}
        >
          Next 12 <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
