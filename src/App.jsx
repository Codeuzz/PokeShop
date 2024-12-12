import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import PokemonList from './components/PokemonList'
import './App.css'
import Cart from './components/Cart'


function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon-list" element={<PokemonList />} />
      <Route path="/pokemon-info" element={<PokemonList />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  )
}

export default App
