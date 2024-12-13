import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SearchBar from "./SearchBar";
import Cards from "./Cards";

const PokemonList = () => {
  const [data, setData] = useState(null);
  const [pokeData, setPokeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    setData(null);

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/`, {
        params: {
          limit: 12,
          offset: page * 12,
        },
      });
      const pokemonWithSprites = await Promise.all(
        response.data.results.map(async ({ name, url }) => {
          const {
            data: { sprites, types, stats, id, height, weight },
          } = await axios.get(url);
          return { name, sprites, types, stats, id, height, weight };
        }),
      );
      setData(pokemonWithSprites);
    } catch (err) {
      setError(true);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (term) => {
    if (!term) return fetchData();

    setLoading(true);
    setError(false);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${term}`,
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
        {page > 0 && <button
          className="border-2 border-black bg-amber-400 px-2 rounded-xl hover:bg-amber-500"
          onClick={() => setPage((prev) => (prev > 0 ? prev - 1 : prev))}
          disabled={loading || page === 0}
        >
          <i className="fa-solid fa-arrow-left"></i> Prev 12
        </button>
        }
        
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
