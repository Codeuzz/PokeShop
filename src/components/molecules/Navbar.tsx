import { Link } from "react-router-dom";
import { useCartStore } from "@store/useCartStore";

const Navbar = () => {
  const { numberItems } = useCartStore();

  return (
    <nav className="w-full p-5 border-b-4 border-black flex justify-start items-center">
      <Link to="/PokeShop/">
        <img src="./pokeball.png" className="w-10" />
      </Link>
      <ul className="flex justify-around text-xl items-start w-full">
        <li>
          <Link to="/PokeShop/">Home</Link>
        </li>
        <li>
          <Link to="/PokeShop/pokemon-list">Pokemon</Link>
        </li>
        <li>
          <Link
            to="/PokeShop/cart"
            className="py-2 px-4 border-2 border-black rounded-2xl hover:bg-amber-400 relative"
          >
            <i className="fa-solid fa-cart-shopping "></i>
            <div className="absolute rounded-xl bg-amber-400 px-2 py-0 -top-4 -right-3">
              {numberItems}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
