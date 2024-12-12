import { Link } from "react-router-dom"
import colours from "./utils/pokemon-types"

const Cards = ({data}) => {
    return (
        <>
            {data.map((item) => 
            
                <div className="w-60 bg-purple-500 border-2 gap-2 rounded-2xl py-2 px-2 flex flex-col items-center relative">  
                    <h4 className="text-2xl uppercase font-semibold">{item.name}</h4>
                    <img src={item.sprites.front_default} alt={item.name} className="w-full"/>
                    <div className="flex gap-2">
                        {item.types.map(typ => 
                            <span className={`rounded-lg px-1`}
                            style={{ backgroundColor: colours[typ.type.name] || '#777' }}
                            >{typ.type.name}</span> 
                        )}
                    </div>
                    <button className="border-2 border-black bg-amber-400 px-2 rounded-xl">Add to Cart</button>
                    <Link
                        className="bg-purple-300 shadow-md shadow-black p-1 rounded-full absolute -right-2 -top-2"
                        to={`/pokemon-list/${item.id}`}
                    >
                        Infos
                    </Link>
                </div>
                
            )}    
            
        </>
    )
}

export default Cards