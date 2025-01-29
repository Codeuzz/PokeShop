import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex flex-col items-center gap-10 pt-3 w-full">
      <h1 className="text-7xl font-extrabold italic">Poke Shop</h1>
      <h3 className="text-4xl font-semibold italic">Buy the best Pokemon!</h3>
      <Link
        to="/PokeShop/pokemon-list"
        className="text-lg border-2 border-black bg-amber-400 shadow-black shadow-md py-2 px-6 rounded-3xl hover:bg-amber-500"
      >
        Get My Pokemon
      </Link>
      <img src="./firstpoke.png" className="max-w-xl" />
    </div>
  );
};

export default Home;
