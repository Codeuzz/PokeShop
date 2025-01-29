import { useState } from "react";
import { Pokemon } from "@customTypes/types";
import { useCartStore } from "@store/useCartStore";

interface AddToCartProps {
  item: Pokemon;
}

const AddToCart = ({ item }: AddToCartProps) => {
  const [message, setMessage] = useState<string>("");
  const { addItem, isAlreadyInCart, alreadyMsg, addedMsg } = useCartStore();

  const addPokemon = (pokemon: Pokemon) => {
    addItem(pokemon);

    if (isAlreadyInCart) {
      setMessage(`${pokemon.name} ${alreadyMsg}`);
    } else {
      setMessage(`${pokemon.name} ${addedMsg}`);
    }

    setTimeout(() => setMessage(""), 800);
  };

  return (
    <>
      <button
        className="bg-purple-300 shadow-md shadow-black py-1 px-3 rounded-full absolute -right-2 -top-2 hover:bg-amber-400"
        onClick={() => addPokemon(item)}
        title="Add To Cart"
      >
        <i className="fa-solid fa-plus" />
      </button>
      {message && (
        <p
          className={`${
            isAlreadyInCart ? "bg-red-200 " : "bg-green-200 "
          } py-1 px-2 rounded-md font-bold text-purple-500 absolute -top-6`}
        >
          {message}
        </p>
      )}
    </>
  );
};

export default AddToCart;
