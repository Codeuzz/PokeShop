import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import PokemonList from "./components/PokemonList";
import "./App.css";
import Cart from "./components/Cart";
import PokemonInfo from "./components/PokemonInfo";

function App() {
  return (
    <Routes>
      <Route path="/PokeShop/" element={<Home />} />
      <Route path="/PokeShop/pokemon-list" element={<PokemonList />} />
      <Route path="/PokeShop/pokemon-info" element={<PokemonList />} />
      <Route path="/PokeShop/cart" element={<Cart />} />
      <Route path="/PokeShop/pokemon-list/:name" element={<PokemonInfo />} />
    </Routes>
  );
}

export default App;
