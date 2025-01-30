import { useState } from "react";
import { Pokemon } from "@customTypes/types";
import { useCartStore } from "@store/useCartStore";

interface AddToCartProps {
  item: Pokemon;
}

const AddToCart = ({ item }: AddToCartProps) => {
  const [message, setMessage] = useState<string>("");
  const { addItem, isAlreadyInCart } = useCartStore();

  const addPokemon = (pokemon: Pokemon) => {
    if (isAlreadyInCart(pokemon.id)) {
      setMessage(`${pokemon.name} already in cart!`);
    } else {
      addItem(pokemon);
      setMessage(`${pokemon.name} added to cart!`);
    }

    setTimeout(() => setMessage(""), 1000);
  };

  return (
    <>
      <button
        className="bg-purple-300 shadow-md shadow-black py-1 px-3 rounded-full absolute -right-2 -top-2 hover:bg-amber-400 "
        onClick={() => addPokemon(item)}
        title="Add To Cart"
      >
        <i className="fa-solid fa-plus" />
      </button>
      {message && (
        <p
          className={`${
            message.includes("added")
              ? "text-purple-400 bg-green-200"
              : "text-white bg-red-600"
          } py-1 px-2 rounded-md font-bold  absolute -top-6`}
        >
          {message}
        </p>
      )}
    </>
  );
};

export default AddToCart;
