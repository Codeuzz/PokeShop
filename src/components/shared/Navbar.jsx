import { Link } from "react-router-dom"
const Navbar = () => {

    return (
        <nav className="w-full p-5 border-b-4 border-black flex justify-start items-center">
                    <Link to="/"><img src="pokeball.png" className="w-10" /></Link>    
            <ul className="flex justify-around text-xl items-start w-full">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/pokemon-list">Pokemon</Link>
                </li>
                <li>
                    <Link to="/cart" className="py-2 px-4 border-2 border-black rounded-2xl hover:bg-amber-400"><i className="fa-solid fa-cart-shopping "></i></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar