import colours from "../utils/pokemon-types";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddToCart from "./shared/AddToCart";

const PokemonInfo = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error("Failed to fetch Pokemon data:", error);
      }
    };
    fetchData();
  }, [name]);

  if (!pokemon)
    return (
      <h3 className="m-10 text-center text-5xl font-semibold italic">
        Loading...
      </h3>
    );
  return (
    <div
      style={{ backgroundColor: colours[pokemon.types[0].type.name] || "#777" }}
      className="min-w-full min-h-screen bg-gray-100 flex  justify-center items-center "
    >
      <div className="w-3/4 bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-start relative">
        <div className="w-full flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold capitalize">{pokemon.name}</h1>
          <div>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
            <AddToCart item={pokemon} />
          </div>
        </div>
        <div className="flex gap-10 items-center justify-center flex-wrap">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
            // className="w-60"
          />
          <div>
            <h3 className="text-2xl font-semibold">Type:</h3>
            <div className="flex gap-2">
              {pokemon.types.map((typ) => (
                <span
                  key={typ.type.name}
                  style={{ backgroundColor: colours[typ.type.name] || "#777" }}
                  className="px-4 py-1 text-white rounded-lg"
                >
                  {typ.type.name}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-semibold mt-4">Base Stats:</h3>
            {pokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="flex justify-between w-60">
                <span>{stat.stat.name}:</span>
                <span className="font-bold">{stat.base_stat}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
