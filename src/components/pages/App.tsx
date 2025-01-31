import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "@organisms/Home";
import PokemonList from "@organisms/PokemonList";
import "src/App.css";
import Cart from "@organisms/Cart";
import PokemonInfo from "@organisms/PokemonInfo";
import { Articles } from "@organisms/Articles";

function App() {
  return (
    <Routes>
      <Route path="/PokeShop/" element={<Home />} />
      <Route path="/PokeShop/pokemon-list" element={<PokemonList />} />
      <Route path="/PokeShop/pokemon-info" element={<PokemonList />} />
      <Route path="/PokeShop/cart" element={<Cart />} />
      <Route path="/PokeShop/pokemon-list/:name" element={<PokemonInfo />} />
      <Route path="/PokeShop/articles" element={<Articles />} />
    </Routes>
  );
}

export default App;
