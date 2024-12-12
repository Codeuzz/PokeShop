import colours from "./utils/pokemon-types";

const PokemonInfo = ({data, setVisibleInfo}) => {

    console.log(data, "ici PokemonInfo")
    return (
        <div 
             style={{ backgroundColor: colours[data.types[0].type.name] || '#777' }}
            className={`min-w-[600px] z-50 min-h-full bg-red-400 border-2 rounded-2xl p-10 flex justify-around items-center absolute top-0
            -left-36`}
        >
            <div className="flex flex-col items-center">
                <h4 className="text-2xl uppercase font-semibold">{data.name}</h4>
                <img src={data.sprites.other.showdown.front_shiny} alt={data.name} className="w-52"/>
            </div>
            <div className="flex flex-col items-start gap-2">
                <div className="flex gap-2">
                    {data.types.map(typ => 
                        <span className={`rounded-lg px-1 border-2 border-black`}
                        style={{ backgroundColor: colours[typ.type.name] || '#777' }}
                        >{typ.type.name}</span> 
                    )}
                </div>
                <div>
                    <h4 className="font-semibold text-lg">Base Stats:</h4>
                    {data.stats.map(stati =>
                        <div className="flex gap-2">
                            <span className="">{stati.stat.name}: </span>
                            <span className="font-bold">{stati.base_stat} </span>
                        </div>
                    )}
                </div>
            </div>
           
            <button 
                className="bg-purple-300 shadow-md shadow-black p-1 rounded-full absolute -right-2 -top-2" 
                onClick={() => setVisibleInfo(false)}
            >Close</button>
        </div>
    )
}

export default PokemonInfo