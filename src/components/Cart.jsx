import {
  resetCartItems,
  addCartItem,
  removeCartItem,
} from "../utils/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  // console.log(cartItems)
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col w-full items-center gap-4">
      <div className=" min-h-96 w-1/4 border-4 border-black m-auto mt-10 rounded-xl flex flex-col items-center">
        <h1 className="text-4xl font-semibold italic">Cart</h1>
        <ul>
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <li className="flex items-center gap-2" key={item.id}>
                <button
                  className="bg-amber-400 px-2 rounded-xl hover:bg-amber-500"
                  onClick={() => dispatch(removeCartItem(item))}
                  title="Remove From Cart"
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
                <Link
                  to={`/PokeShop/pokemon-list/${item.id}`}
                  className="text-2xl"
                >
                  {item.name}{" "}
                </Link>
              </li>
            ))
          ) : (
            <li>No Pokemon</li>
          )}
        </ul>
      </div>
      <button
        onClick={() => dispatch(resetCartItems())}
        className="border-2 border-black bg-amber-400 px-2 rounded-xl hover:bg-amber-500"
      >
        Empty Cart
      </button>
    </div>
  );
};

export default Cart;
