import colours from "../../utils/pokemon-types";
import { useNavigate, useParams } from "react-router-dom";
import AddToCart from "@atoms/AddToCart";
import { usePokemon } from "src/hooks/pokemonQueries";

const PokemonInfo = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = usePokemon(name || "");

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
      <h3 className="m-10 text-center text-5xl font-semibold italic">
        There was an error fetching the pokemon details {error?.message}
      </h3>
    );
  }
  return (
    <div
      style={{ backgroundColor: colours[data.types[0].type.name] || "#777" }}
      className="min-w-full min-h-screen bg-gray-100 flex  justify-center items-center "
    >
      <div className="w-3/4 bg-white p-8 rounded-xl shadow-lg flex flex-col items-center justify-start relative">
        <div className="w-full flex justify-between items-center mb-4">
          <h1 className="text-4xl font-bold capitalize">{data.name}</h1>
          <div>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-lg"
              onClick={() => navigate(-1)}
            >
              Go Back
            </button>
            <AddToCart item={data} />
          </div>
        </div>
        <div className="flex gap-10 items-center justify-center flex-wrap">
          <img
            src={data.sprites.other["official-artwork"].front_default}
            alt={data.name}
            // className="w-60"
          />
          <div>
            <h3 className="text-2xl font-semibold">Type:</h3>
            <div className="flex gap-2">
              {data.types.map((typ) => (
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
            {data.stats.map((stat) => (
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
