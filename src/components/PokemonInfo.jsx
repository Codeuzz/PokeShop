

const PokemonInfo = ({data, setVisibleInfo}) => {
    return (
        <div className={`min-w-[700px] z-10 min-h-full bg-purple-500 border-2 gap-2 rounded-2xl p-10 flex flex-col items-center absolute top-0
        -left-36`}>
            <h4 className="text-2xl uppercase font-semibold">{data.name}</h4>
            <img src={data.sprites.other.showdown.front_shiny} alt={data.name} className="w-56"/>
                    <div className="flex gap-2">
                        <span className="bg-green-400 px-1 rounded-lg ">Grass</span> 
                        <span className="bg-red-400 px-1 rounded-lg">Fire</span> 
                    </div>
            <button 
                className="bg-purple-300 shadow-md shadow-black p-1 rounded-full absolute -right-2 -top-2" 
                onClick={() => setVisibleInfo(false)}
            >Close</button>
        </div>
    )
}

export default PokemonInfo