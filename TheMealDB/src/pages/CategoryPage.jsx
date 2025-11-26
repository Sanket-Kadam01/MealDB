import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchMealsByCategory } from "../api/mealApi";
import RecipeCard from "../components/recipeCard";
import Pagination from "../components/Pagination";
import { FaArrowLeft } from "react-icons/fa";
import "../css/CategoryPage.css";

export default function CategoryPage() {
    const { categoryName } = useParams();
    const navigate = useNavigate();
    const [meals, setMeals] = useState([]);
    const [page, setPage] = useState(0);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetchMealsByCategory(categoryName, page)
            .then(data => {
                console.log("API Response:", data);
                setMeals(data?.content || data?.meals || []);
                setTotal(data?.totalElements || data?.meals?.length || 0);
            })
            .catch(err => console.error("Failed to fetch meals by category:", err))
            .finally(() => setLoading(false));
    }, [categoryName, page]);

    return (
        <div className="category-page">
            {/* Header with Back Button */}
            <div className="category-header">
                <div className="container">
                    <button className="back-btn" onClick={() => navigate("/")}>
                        <FaArrowLeft /> Back to Home
                    </button>
                    <h1 className="category-title">{categoryName}</h1>
                    <p className="category-subtitle">Explore delicious {categoryName.toLowerCase()} recipes</p>
                </div>
            </div>

            {/* Meals Grid */}
            <div className="container meals-section">
                {loading ? (
                    <p className="loading-text">Loading recipes...</p>
                ) : meals.length > 0 ? (
                    <>
                        <div className="recipes-grid">
                            {meals.map(meal => (
                                <RecipeCard key={meal.idMeal} recipe={meal} />
                            ))}
                        </div>
                        {total > 0 && <Pagination page={page} total={total} onPageChange={setPage} />}
                    </>
                ) : (
                    <p className="no-meals">No recipes found in this category.</p>
                )}
            </div>
        </div>
    );
}
