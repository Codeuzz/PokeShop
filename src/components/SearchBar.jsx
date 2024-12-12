import { useState } from "react";

const SearchBar = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm.toLowerCase().trim());
    };

    return (
        <form onSubmit={handleSearch} className="flex gap-2">
            <label htmlFor="search" className="text-lg"> 
                Search for a Pokemon / ID 
                <input
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border-2 border-black bg-red-300 rounded px-2"
                />
            </label>
            <button
                type="submit"
                className="border-2 border-black bg-amber-400 px-2 rounded-xl hover:bg-amber-500"
            >
                Search
            </button>
        </form>
    );
};


export default SearchBar