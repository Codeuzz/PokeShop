import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";
import Cards from "./Cards";
import { Pokemon } from "../types/types";

const PokemonList = () => {
  const [data, setData] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    setData([]);

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`, {
        params: {
          limit: 12,
          offset: page * 12,
        },
      });
      const pokemonWithSprites: Pokemon[] = await Promise.all(
        response.data.results.map(
          async ({ name, url }: { name: string; url: string }) => {
            const {
              data: { sprites, types, stats, id, height, weight },
            } = await axios.get(url);
            return { name, sprites, types, stats, id, height, weight };
          }
        )
      );
      setData(pokemonWithSprites);
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (term: string) => {
    if (!term) return fetchData();

    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${term}`
      );
      const { sprites, types, stats, id, height, weight, name } = response.data;
      setData([{ name, sprites, types, stats, id, height, weight }]);
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <h3 className="m-10 text-center text-5xl font-semibold italic">
        Loading...
      </h3>
    );
  }
  if (error) {
    return <p>Please write a numeric id</p>;
  }

  return (
    <div className="flex flex-col items-center gap-10 pt-3 relative w-full">
      <SearchBar onSearch={handleSearch} />
      <h1 className="text-5xl font-semibold">Pokemon List</h1>
      <div
        id="pokemon-list"
        className={`grid gap-6 ${data.length > 1 ? "grid-cols-4" : ""}`}
      >
        <Cards data={data} />
      </div>
      <div className="flex gap-4 mb-10">
        {page > 0 && (
          <button
            className="border-2 border-black bg-amber-400 px-2 rounded-xl hover:bg-amber-500"
            onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : prev))}
            disabled={loading || page === 0}
          >
            <i className="fa-solid fa-arrow-left"></i> Prev 12
          </button>
        )}

        <button
          className="border-2 border-black bg-amber-400 px-2 rounded-xl hover:bg-amber-500"
          onClick={() => setPage((prev) => prev + 1)}
          disabled={loading}
        >
          Next 12 <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
