import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import PokemonList from './components/PokemonList'
import './App.css'
import Cart from './components/Cart'
import PokemonInfo from './components/PokemonInfo'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon-list" element={<PokemonList />} />
      <Route path="/pokemon-info" element={<PokemonList />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/pokemon-list/:name" element={<PokemonInfo />} />
    </Routes>
  )
}

export default App
