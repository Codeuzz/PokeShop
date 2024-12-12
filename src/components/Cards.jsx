import { Link } from "react-router-dom"
import PokemonInfo from "./PokemonInfo"
import { useState } from "react"

const Cards = ({data}) => {
    // const [visibleInfo, setVisibleInfo] = useState(false);
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    // console.log(data, "hii") 
    return (
        <>
            {data.map((item) => 
            
                <div className="w-60 bg-purple-500 border-2 gap-2 rounded-2xl py-2 px-2 flex flex-col items-center relative">  
                    <h4 className="text-2xl uppercase font-semibold">{item.name}</h4>
                    <img src={item.sprites.front_shiny} alt={item.name} className="w-full"/>
                    <div className="flex gap-2">
                        <span className="bg-green-400 px-1 rounded-lg ">Grass</span> 
                        <span className="bg-red-400 px-1 rounded-lg">Fire</span> 
                    </div>
                    <button className="border-2 border-black bg-amber-400 px-2 rounded-xl">Add to Cart</button>
                    <button
                        className="bg-purple-300 shadow-md shadow-black p-1 rounded-full absolute -right-2 -top-2"
                        onClick={() => setSelectedPokemon(item)}
                    >
                        Infos
                    </button>
                    {selectedPokemon && selectedPokemon.name === item.name && (
                        <PokemonInfo data={item} visibleInfo={selectedPokemon !== null} setVisibleInfo={setSelectedPokemon} />
                    )}
                </div>
                
            )}    
            
        </>
    )
}

export default Cards