import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { searchRecipesByName } from "../api/mealApi";
import RecipeCard from "../components/recipeCard";

export default function SearchResults() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get("name");

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        if (name) {
            searchRecipesByName(name)
                .then(data => setRecipes(data?.meals || []))
                .catch(err => console.error("Failed to search recipes:", err));
        }
    }, [name]);

    return (
        <div className="container my-4">
            <h2>Search Results for "{name}"</h2>

            {recipes.length > 0 ? (
                <div className="d-flex flex-wrap gap-3">
                    {recipes.map(recipe => <RecipeCard key={recipe.idMeal} recipe={recipe} />)}
                </div>
            ) : (
                <p>No recipes found.</p>
            )}
        </div>
    );
}
