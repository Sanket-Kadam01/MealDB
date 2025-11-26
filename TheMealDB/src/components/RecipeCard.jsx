import { Link } from "react-router-dom";

export default function RecipeCard({ recipe }) {
    // API returns: idMeal, strMeal, strMealThumb
    const mealName = recipe?.strMeal || recipe?.name || "Recipe";
    const mealImage = recipe?.strMealThumb || recipe?.thumbnail || "/placeholder.svg";
    const mealId = recipe?.idMeal || recipe?.id;

    // Use a simple fallback description
    const mealDescription = "Explore this delicious recipe and discover how to prepare it.";

    return (
        <div className="recipe-card-product">
            <div className="recipe-image-container">
                <img
                    src={mealImage}
                    className="recipe-image"
                    alt={mealName}
                    onError={(e) => e.target.src = "/placeholder.svg"}
                />
            </div>
            <div className="recipe-info">
                <h5 className="recipe-name">{mealName}</h5>
                <p className="recipe-description">{mealDescription}</p>
                <Link to={`/recipe/${mealId}`} className="btn-view-recipe">
                    View Recipe
                </Link>
            </div>
        </div>
    );
}
