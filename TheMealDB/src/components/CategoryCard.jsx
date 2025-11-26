import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
    return (
        <div className="category-card-product">
            <div className="category-image-container">
                <img src={category.strCategoryThumb} className="category-image" alt={category.strCategory} />
            </div>
            <div className="category-info">
                <h5 className="category-name">{category.strCategory}</h5>
                <p className="category-description">
                    {category.strCategoryDescription
                        ? category.strCategoryDescription.slice(0, 60) + (category.strCategoryDescription.length > 60 ? "..." : "")
                        : "Explore this delicious category."}
                </p>
                <Link to={`/category/${category.strCategory}`} className="btn btn-view-meals">
                    View Meals
                </Link>
            </div>
        </div>
    );
}
