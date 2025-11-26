import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchRecipeById } from "../api/mealApi";
import "../css/RecipeDetails.css";

export default function RecipeDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchRecipeById(id)
            .then(data => {
                const found = data?.meals?.[0] || null;
                if (found) {
                    setRecipe(found);
                    setError(null);
                } else {
                    setError("Recipe not found");
                    setRecipe(null);
                }
            })
            .catch(err => {
                console.error("Failed to fetch recipe details:", err);
                setError("Recipe not found");
                setRecipe(null);
            })
            .finally(() => setLoading(false));
    }, [id]);

    // Collect all ingredients and measures
    const getIngredients = () => {
        const ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = recipe?.[`strIngredient${i}`];
            const measure = recipe?.[`strMeasure${i}`];
            if (ingredient && ingredient.trim()) {
                ingredients.push({ ingredient, measure: measure || "" });
            }
        }
        return ingredients;
    };

    if (loading) {
        return (
            <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
                <div className='container mt-5 text-center'>
                    <h3>Loading...</h3>
                </div>
            </div>
        );
    }

    if (error || !recipe) {
        return (
            <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
                <div className='container mt-5 text-center'>
                    <h3 className="text-danger">{error || 'Recipe not found'}</h3>
                    <button className='btn btn-secondary mt-3' onClick={() => navigate('/')}>
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const ingredients = getIngredients();

    // Format cooking instructions into steps
    const formatInstructions = (instructions) => {
        if (!instructions) return [];
        // Split by periods or common step indicators
        return instructions
            .split(/\.\s+/)
            .filter(step => step.trim().length > 0)
            .map(step => step.trim());
    };

    const instructionSteps = formatInstructions(recipe.strInstructions);

    return (
        <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10'>
                        <div className='row g-4 align-items-stretch'>
                            {/* Recipe Image */}
                            <div className='col-md-5'>
                                <div style={{ background: '#fff', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(40,167,69,0.10)', padding: 24, textAlign: 'center', height: '100%' }}>
                                    {recipe.strMealThumb ? (
                                        <img
                                            src={recipe.strMealThumb}
                                            alt={recipe.strMeal}
                                            style={{ maxHeight: 340, width: '100%', objectFit: 'contain', borderRadius: '1rem', border: '1px solid #e0f7f7', background: '#f8f9fa' }}
                                        />
                                    ) : (
                                        <div style={{ height: 340, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f0f0f0' }}>
                                            No image available
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Recipe Info */}
                            <div className='col-md-7'>
                                <div style={{ background: '#fff', borderRadius: '1.5rem', boxShadow: '0 4px 24px rgba(40,167,69,0.10)', padding: 32, height: '100%' }}>
                                    <h2 style={{ color: '#28a745', fontWeight: 700 }}>{recipe.strMeal || "Unnamed Recipe"}</h2>

                                    <div className='d-flex align-items-center gap-3 mb-3'>
                                        <span className='badge bg-success' style={{ fontSize: 14, fontWeight: 500 }}>Easy to Prepare</span>
                                        {recipe.strCategory && (
                                            <span className='badge' style={{ background: '#28a745', fontSize: 14, fontWeight: 500 }}>
                                                {recipe.strCategory}
                                            </span>
                                        )}
                                        {recipe.strArea && (
                                            <span className='badge' style={{ background: '#20b2aa', fontSize: 14, fontWeight: 500 }}>
                                                {recipe.strArea}
                                            </span>
                                        )}
                                    </div>

                                    <div className='mb-4' style={{ color: '#666', fontSize: 15, lineHeight: 1.6 }}>
                                        <strong style={{ color: '#333' }}>Quick Overview</strong>
                                        <div style={{ marginTop: 8 }}>
                                            A delicious {recipe.strCategory?.toLowerCase() || 'recipe'} from {recipe.strArea || 'various regions'}.
                                            Follow the detailed instructions below to prepare this meal at home.
                                        </div>
                                    </div>

                                    <div className='row mt-4 mb-4'>
                                        <div className='col-6 mb-2'>
                                            <div style={{ background: '#e0f7f7', borderRadius: 8, padding: 12, fontSize: 15 }}>
                                                <span role='img' aria-label='time'>⏱️</span> Easy Steps
                                            </div>
                                        </div>
                                        <div className='col-6 mb-2'>
                                            <div style={{ background: '#e0f7f7', borderRadius: 8, padding: 12, fontSize: 15 }}>
                                                <span role='img' aria-label='ingredients'>🥘</span> {ingredients.length} Ingredients
                                            </div>
                                        </div>
                                    </div>

                                    <div className='d-flex gap-3'>
                                        <button className='btn btn-secondary btn-lg' style={{ background: '#e0f7f7', color: '#20b2aa', border: 'none', fontWeight: 600, borderRadius: 8 }} onClick={() => navigate('/')}>
                                            Back Home
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Ingredients Section */}
                        <div id='ingredients-section' className='card mt-4' style={{ borderRadius: '1rem', boxShadow: '0 2px 8px rgba(32,178,170,0.10)' }}>
                            <div className='card-header' style={{ background: 'linear-gradient(135deg, #28a745 0%, #20b2aa 100%)', color: 'white', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}>
                                <h5 className='mb-0'>🥘 Ingredients ({ingredients.length})</h5>
                            </div>
                            <div className='card-body'>
                                <div className='row'>
                                    {ingredients.map((item, idx) => (
                                        <div key={idx} className='col-md-6 mb-3'>
                                            <div style={{ background: '#f8f9fa', borderLeft: '4px solid #28a745', padding: '12px 16px', borderRadius: 6 }}>
                                                <div style={{ fontWeight: 600, color: '#333', marginBottom: 4 }}>
                                                    {item.ingredient}
                                                </div>
                                                <div style={{ color: '#666', fontSize: '14px' }}>
                                                    {item.measure || 'As needed'}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Instructions Section */}
                        <div className='card mt-4' style={{ borderRadius: '1rem', boxShadow: '0 2px 8px rgba(32,178,170,0.10)' }}>
                            <div className='card-header' style={{ background: 'linear-gradient(135deg, #28a745 0%, #20b2aa 100%)', color: 'white', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}>
                                <h5 className='mb-0'>📝 Cooking Instructions</h5>
                            </div>
                            <div className='card-body'>
                                {instructionSteps.length > 0 ? (
                                    <ol style={{ paddingLeft: 0, listStyle: 'none' }}>
                                        {instructionSteps.map((step, idx) => (
                                            <li key={idx} style={{ marginBottom: '1.5rem', paddingLeft: 0, display: 'flex', gap: '12px' }}>
                                                <div style={{
                                                    background: 'linear-gradient(135deg, #28a745 0%, #20b2aa 100%)',
                                                    color: 'white',
                                                    borderRadius: '50%',
                                                    width: '32px',
                                                    height: '32px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontWeight: 700,
                                                    fontSize: '14px',
                                                    flexShrink: 0,
                                                    marginTop: '2px'
                                                }}>
                                                    {idx + 1}
                                                </div>
                                                <div style={{
                                                    color: '#333',
                                                    fontSize: '15px',
                                                    lineHeight: 1.6,
                                                    paddingTop: '4px'
                                                }}>
                                                    {step}.
                                                </div>
                                            </li>
                                        ))}
                                    </ol>
                                ) : (
                                    <div style={{ color: '#666', fontSize: '15px' }}>No instructions provided.</div>
                                )}
                            </div>
                        </div>

                        {/* Video Section */}
                        {recipe.strYoutube && (
                            <div className='card mt-4' style={{ borderRadius: '1rem', boxShadow: '0 2px 8px rgba(32,178,170,0.10)' }}>
                                <div className='card-header' style={{ background: 'linear-gradient(135deg, #28a745 0%, #20b2aa 100%)', color: 'white', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}>
                                    <h5 className='mb-0'>🎬 Video Tutorial</h5>
                                </div>
                                <div className='card-body'>
                                    <div className="ratio ratio-16x9" style={{ borderRadius: '0.5rem', overflow: 'hidden' }}>
                                        <iframe
                                            src={recipe.strYoutube.replace("watch?v=", "embed/")}
                                            title={recipe.strMeal}
                                            allowFullScreen
                                        />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
