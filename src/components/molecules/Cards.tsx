import { Link } from "react-router-dom";
import colours from "../../utils/pokemon-types";
import AddToCart from "@atoms/AddToCart";
import { Pokemon } from "@customTypes/types";

interface CardsProps {
  data: Pokemon[];
}

const Cards = ({ data }: CardsProps) => {
  return (
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="w-60 bg-purple-500 border-2 gap-2 rounded-2xl py-2 px-2 flex flex-col items-center relative"
        >
          <h4 className="text-2xl uppercase font-semibold">{item.name}</h4>
          <img
            src={item.sprites.front_default}
            alt={item.name}
            className="w-full"
          />
          <div className="flex gap-2">
            {item.types.map((typ, index) => (
              <span
                key={index}
                className={`rounded-lg px-1`}
                style={{ backgroundColor: colours[typ.type.name] || "#777" }}
              >
                {typ.type.name}
              </span>
            ))}
          </div>
          <Link
            className="border-2 border-black bg-amber-400 px-2 rounded-xl hover:bg-amber-500"
            to={`/PokeShop/pokemon-list/${item.id}`}
            title="Pokemon Details"
          >
            Details
          </Link>
          <AddToCart item={item} />
        </div>
      ))}
    </>
  );
};

export default Cards;
