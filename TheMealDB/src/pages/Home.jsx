import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//import { FaUtensils, FaThLarge } from "react-icons/fa";

import { fetchCategories, fetchRandomRecipe } from "../api/mealApi";
import CategoryCard from "../components/CategoryCard";
import RecipeCard from "../components/recipeCard";
import SearchBar from "../components/searchBar";

import {
    FaHamburger,
    FaFish,
    FaDrumstickBite,
    FaLeaf,
    FaBreadSlice,
    FaPizzaSlice,
    FaEgg,
    FaUtensils,
    FaThLarge,
} from "react-icons/fa";

import "../css/Home.css";


export default function Home() {
    const [categories, setCategories] = useState([]);
    const [randomRecipe, setRandomRecipe] = useState(null);
    const [loadingRandom, setLoadingRandom] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const navigate = useNavigate();

    // Map icon for each MealDB category (fallback to default icon)
    const categoryIconMap = {
        Beef: <FaDrumstickBite />,
        Chicken: <FaDrumstickBite />,
        Dessert: <FaPizzaSlice />,
        Lamb: <FaDrumstickBite />,
        Pasta: <FaBreadSlice />,
        Pork: <FaHamburger />,
        Seafood: <FaFish />,
        Vegan: <FaLeaf />,
        Vegetarian: <FaLeaf />,
        Breakfast: <FaEgg />,
        Miscellaneous: <FaUtensils />,
    };

    useEffect(() => {
        fetchCategories()
            .then(data => setCategories(data?.content || []))
            .catch(err => console.error("Failed to fetch categories:", err));

        fetchRandomRecipe()
            .then(data => setRandomRecipe(data?.meals?.[0] || null))
            .catch(err => console.error("Failed to fetch random recipe:", err));
    }, []);

    const handleRandomClick = async () => {
        try {
            setLoadingRandom(true);
            const data = await fetchRandomRecipe();
            const meal = data?.meals?.[0] || null;
            if (meal) navigate(`/recipe/${meal.idMeal}`);
        } catch (err) {
            console.error("Failed to fetch random recipe:", err);
        } finally {
            setLoadingRandom(false);
        }
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category.strCategory);
        navigate(`/category/${category.strCategory}`);  // navigate to category page
    };

    return (
        <div className="meal-home">

            {/* 🔥 Category Navigation (Same UI as grocery sample) */}
            <div className="category-navigation">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="category-grid">
                                <div
                                    className={`category-item ${selectedCategory === "All" ? "active" : ""}`}
                                    onClick={() => setSelectedCategory("All")}
                                >
                                    <div className="category-icon"><FaThLarge /></div>
                                    <span className="category-name">All</span>
                                </div>

                                {categories.map(cat => (
                                    <div
                                        key={cat.idCategory}
                                        className={`category-item ${selectedCategory === cat.strCategory ? "active" : ""}`}
                                        onClick={() => handleCategoryClick(cat)}
                                    >
                                        <div className="category-icon">
                                            {categoryIconMap[cat.strCategory] || <FaUtensils />}
                                        </div>
                                        <span className="category-name">{cat.strCategory}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section
                className="hero-banner-meal text-white"
                style={{
                    backgroundImage:
                        "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1470&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="container text-center">
                    <h1 className="display-4 fw-bold">Discover Delicious Recipes</h1>
                    <p className="lead mb-4">Explore meals from around the world — fast & inspiring.</p>

                    <button
                        className="btn btn-warning btn-lg"
                        onClick={handleRandomClick}
                        disabled={loadingRandom}
                    >
                        {loadingRandom ? "Searching..." : "I'm feeling hungry"}
                    </button>
                </div>
            </section>

            {/* Random Recipe Card */}
            <section className="container featured-section">
                <div className="featured-prompt">
                    <h2>What are you in the mood for?</h2>
                    <p>Discover your favorite recipes by exploring our categories or use the search bar to find exactly what you crave.</p>
                </div>
            </section>

            {/* Search Bar */}
            <section className="container search-section-wrapper">
                <SearchBar />
            </section>

            {/* Category Grid (Magazine Style) */}
            <section className="container categories-section mb-5">
                <h2 className="mb-3">Browse Categories</h2>
                <div className="card-grid">
                    {categories.map(cat => (
                        <CategoryCard key={cat.idCategory} category={cat} />
                    ))}
                </div>
            </section>
        </div>
    );
}
