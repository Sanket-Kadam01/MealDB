import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/recipes/search?name=${encodeURIComponent(query)}`);
        }
    };

    return (
        <form className="meal-searchbar-form" onSubmit={handleSearch}>
            <input
                className="meal-search-input"
                type="search"
                placeholder="Search recipes..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />

            <button className="meal-search-button" type="submit">
                Search
            </button>
        </form>
    );
}
