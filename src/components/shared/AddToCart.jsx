import { useDispatch } from "react-redux";
import { addCartItem } from "../../utils/slices/cartSlice";

const AddToCart = ({item}) => {
    const dispatch = useDispatch();
  
    const addItem = (pokemon) => {
      dispatch(addCartItem(pokemon));
  
      
    };

    return (
        <button
            className="bg-purple-300 shadow-md shadow-black py-1 px-3 rounded-full absolute -right-2 -top-2 hover:bg-amber-400"
            onClick={() => addItem(item)}
            title="Add To Cart"
          >
            <i className="fa-solid fa-plus" />
        </button>
    )
}

export default AddToCart