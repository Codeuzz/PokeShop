import React from "react";
import { useDispatch } from "react-redux";
import { addCartItem } from "../../utils/slices/cartSlice";
import { useState } from "react";
import { Pokemon } from "@customTypes/types";

const AddToCart = ({ item }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const addItem = (pokemon: Pokemon) => {
    dispatch(addCartItem(pokemon));

    setMessage(`${pokemon.name} added to cart!`);
    setTimeout(() => setMessage(""), 2000);
  };

  return (
    <>
      <button
        className="bg-purple-300 shadow-md shadow-black py-1 px-3 rounded-full absolute -right-2 -top-2 hover:bg-amber-400"
        onClick={() => addItem(item)}
        title="Add To Cart"
      >
        <i className="fa-solid fa-plus" />
      </button>
      {message && (
        <p className="bg-green-200 py-1 px-2 rounded-md font-bold text-purple-500 absolute -top-6">
          {message}
        </p>
      )}
    </>
  );
};

export default AddToCart;
