import { Link, useNavigate } from "react-router-dom";
import { FaUtensils, FaSearch } from "react-icons/fa";
import { useState } from "react";
import "../css/Header.css";

export default function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/recipes/search?name=${encodeURIComponent(searchQuery)}`);
            setSearchQuery("");
        }
    };

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <header className="header-container">
            <div className="logo-section" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
                <FaUtensils className="logo-icon" />
                <h1 className="logo-text">MealDB Explorer</h1>
            </div>

            <form className="search-section" onSubmit={handleSearch}>
                <div className="search-input-wrapper">
                    <FaSearch className="search-icon" />
                    <input
                        type="text"
                        placeholder="Search recipes..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="header-search-input"
                    />
                    <button type="submit" className="search-btn">Search</button>
                </div>
            </form>

            <nav className="nav-links">
                <Link to="/about">About</Link>
            </nav>
        </header>
    );
}
