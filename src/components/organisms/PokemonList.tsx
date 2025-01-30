import { useState, useEffect } from "react";
import SearchBar from "@atoms/SearchBar";
import Cards from "@molecules/Cards";
import { Pokemon } from "@customTypes/types";
import { useQuery } from "@tanstack/react-query";
import { fetchPokemonList } from "src/api/pokemonApi";
import { fetchPokemonByName } from "src/api/pokemonApi";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";

const PokemonList = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get("page")) || 0;
  const [page, setPage] = useState<number>(initialPage);
  const [searchTerm, setSearchTerm] = useState<string | null>(null);

  const { data, isLoading, isError, error, refetch } = useQuery<Pokemon[]>({
    queryKey: ["pokemons", searchTerm || page],
    queryFn: () =>
      searchTerm ? fetchPokemonByName(searchTerm) : fetchPokemonList(page),
    retry: false,
  });

  useEffect(() => {
    setSearchParams({ page: page.toString() });
  }, [page, setSearchParams]);

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
    return (
      <div className="flex flex-col justify-center items-center gap-10">
        <h3 className="mt-10 text-center text-4xl font-semibold">
          {error.message}
        </h3>
        {isNaN(Number(searchTerm)) ? (
          <p className="text-lg">Please write a numeric ID or correct name.</p>
        ) : Number(searchTerm) > 1025 ? (
          <p className="text-lg">
            There are currently no more than 1025 Pokémon!
          </p>
        ) : null}
        <button
          className="text-2xl border-2 border-black bg-amber-400 shadow-black shadow-md py-2 px-6 rounded-3xl hover:bg-amber-500 font-semibold"
          onClick={() => {
            setSearchTerm(null);
            refetch();
          }}
        >
          <Link to="/PokeShop/pokemon-list">Go Back</Link>
        </button>
      </div>
    );
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
