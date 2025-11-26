import { useNavigate } from "react-router-dom";
import "../css/About.css";

export default function About() {
    const navigate = useNavigate();

    return (
        <div style={{ background: '#f8f9fa', minHeight: '100vh' }}>
            <div className='container py-5'>
                <div className='row justify-content-center'>
                    <div className='col-lg-10'>
                        {/* Back Button */}
                        <button
                            className='btn btn-outline-success mb-4'
                            onClick={() => navigate('/')}
                            style={{ borderRadius: 8, fontWeight: 600 }}
                        >
                            ← Back to Home
                        </button>

                        {/* Main About Section */}
                        <div className='card' style={{ borderRadius: '1rem', boxShadow: '0 2px 8px rgba(32,178,170,0.10)', marginBottom: '2rem' }}>
                            <div className='card-header' style={{ background: 'linear-gradient(135deg, #28a745 0%, #20b2aa 100%)', color: 'white', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', padding: '2rem' }}>
                                <h2 className='mb-0' style={{ fontWeight: 700 }}>About MealDB Explorer</h2>
                            </div>
                            <div className='card-body' style={{ padding: '2rem' }}>
                                <p style={{ fontSize: '16px', color: '#333', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                    Welcome to <strong>MealDB Explorer</strong> - your gateway to culinary discovery!
                                    Our application brings the world of cooking to your fingertips with thousands of recipes
                                    from diverse cuisines and cultures.
                                </p>
                                <p style={{ fontSize: '16px', color: '#333', lineHeight: 1.8, marginBottom: '2rem' }}>
                                    Whether you're a beginner looking to explore simple meals or an experienced cook seeking inspiration,
                                    MealDB Explorer offers a comprehensive collection of recipes with detailed ingredients, step-by-step
                                    instructions, and video tutorials.
                                </p>

                                {/* Features Section */}
                                <h4 style={{ color: '#28a745', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>✨ Features</h4>
                                <div className='row'>
                                    <div className='col-md-6 mb-3'>
                                        <div style={{ background: '#e0f7f7', borderLeft: '4px solid #28a745', padding: '1.5rem', borderRadius: 8 }}>
                                            <h6 style={{ color: '#20b2aa', fontWeight: 700, marginBottom: '0.5rem' }}>🍽️ Extensive Recipe Collection</h6>
                                            <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                                                Browse thousands of recipes from cuisines around the world.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <div style={{ background: '#e0f7f7', borderLeft: '4px solid #28a745', padding: '1.5rem', borderRadius: 8 }}>
                                            <h6 style={{ color: '#20b2aa', fontWeight: 700, marginBottom: '0.5rem' }}>🔍 Smart Search</h6>
                                            <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                                                Find recipes instantly by ingredient, cuisine, or meal type.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <div style={{ background: '#e0f7f7', borderLeft: '4px solid #28a745', padding: '1.5rem', borderRadius: 8 }}>
                                            <h6 style={{ color: '#20b2aa', fontWeight: 700, marginBottom: '0.5rem' }}>🎥 Video Tutorials</h6>
                                            <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                                                Watch step-by-step cooking videos for visual guidance.
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-md-6 mb-3'>
                                        <div style={{ background: '#e0f7f7', borderLeft: '4px solid #28a745', padding: '1.5rem', borderRadius: 8 }}>
                                            <h6 style={{ color: '#20b2aa', fontWeight: 700, marginBottom: '0.5rem' }}>⭐ User Ratings</h6>
                                            <p style={{ color: '#666', fontSize: '14px', margin: 0 }}>
                                                See community ratings and feedback for recipes.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* How It Works */}
                                <h4 style={{ color: '#28a745', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>🚀 How It Works</h4>
                                <ol style={{ fontSize: '15px', color: '#333', lineHeight: 1.8 }}>
                                    <li className='mb-2'>
                                        <strong>Browse Categories:</strong> Explore recipes by meal type (Beef, Chicken, Dessert, Seafood, etc.)
                                    </li>
                                    <li className='mb-2'>
                                        <strong>Search Recipes:</strong> Use our search bar to find recipes by name or ingredient
                                    </li>
                                    <li className='mb-2'>
                                        <strong>Get Details:</strong> View complete ingredient lists and cooking instructions
                                    </li>
                                    <li className='mb-2'>
                                        <strong>Watch Videos:</strong> Access YouTube tutorials for visual cooking guides
                                    </li>
                                    <li>
                                        <strong>Leave Feedback:</strong> Rate recipes and share your cooking experience
                                    </li>
                                </ol>

                                {/* Data Source */}
                                <h4 style={{ color: '#28a745', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>📊 Data Source</h4>
                                <p style={{ fontSize: '15px', color: '#333', lineHeight: 1.8 }}>
                                    Our recipe database is powered by <strong>TheMealDB API</strong>, a free and open-source database
                                    containing thousands of recipes from various cuisines worldwide. Each recipe includes detailed information
                                    about ingredients, measurements, cooking instructions, and video tutorials.
                                </p>

                                {/* Vision */}
                                <h4 style={{ color: '#28a745', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>🎯 Our Vision</h4>
                                <p style={{ fontSize: '15px', color: '#333', lineHeight: 1.8 }}>
                                    At MealDB Explorer, we believe that cooking should be accessible to everyone. Our mission is to
                                    democratize culinary knowledge and inspire people to explore new cuisines, techniques, and flavors.
                                    Whether you're cooking for yourself, your family, or hosting friends, we're here to make your
                                    cooking journey enjoyable and successful.
                                </p>

                                {/* Contact */}
                                <h4 style={{ color: '#28a745', fontWeight: 700, marginTop: '2rem', marginBottom: '1rem' }}>📧 Get in Touch</h4>
                                <p style={{ fontSize: '15px', color: '#333', lineHeight: 1.8 }}>
                                    Have questions, suggestions, or feedback? We'd love to hear from you!
                                    Feel free to reach out to us through our contact channels.
                                </p>

                                {/* Call to Action */}
                                <div style={{ marginTop: '2rem', padding: '2rem', background: '#e0f7f7', borderRadius: '1rem', textAlign: 'center' }}>
                                    <h5 style={{ color: '#20b2aa', fontWeight: 700, marginBottom: '1rem' }}>Ready to Cook?</h5>
                                    <button
                                        className='btn btn-success btn-lg'
                                        onClick={() => navigate('/')}
                                        style={{
                                            background: 'linear-gradient(135deg, #28a745 0%, #20b2aa 100%)',
                                            border: 'none',
                                            color: 'white',
                                            fontWeight: 600,
                                            borderRadius: 8
                                        }}
                                    >
                                        Explore Recipes Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>
                            <p style={{ fontSize: '14px' }}>
                                Made with ❤️ for food lovers everywhere
                            </p>
                            <p style={{ fontSize: '13px', color: '#999' }}>
                                © 2025 MealDB Explorer. All rights reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
