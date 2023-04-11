import './How.css';
import { useNavigate } from 'react-router-dom';
import appImage from './../Images/Software.png';
import droneImage from './../Images/Drone.jpg';
import droneBoxImage from './../Images/Dallas5.JPG';
import React, { useRef, useState, useEffect } from 'react';
import appSignIn from './../Images/AppSignIn.png';
import appSignUp from './../Images/AppSignUp.png';


function How() {

    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const topRef = useRef(null);
    const [selectedFeature, setSelectedFeature] = useState(null);

    useEffect(() => {
        topRef.current.scrollIntoView();
    }, []);

    function handleAboutUsClick() {
        navigate('/AboutUs')
    }

    function handleHomeClick() {
        navigate('/')
    }

    function handleCategoryClick(category) {
        setSelectedCategory(category);
    }

    function handleFeatureClick(feature) {
        setSelectedFeature(feature);
    }


    return (
        <div className="HowBuilt">
            <div ref={topRef} />
            <header className="howBuiltHeader">
                <button className="button-header button-margin-howBuilt" onClick={handleHomeClick}>
                    Go Back
                </button>
                <p className="header-text">VALKYRIE CAPSTONE GROUP 19</p>
            </header>
            <section className="howBuiltSection">
                <h1 className="howBuiltTitle">How We Built Valkyrie:</h1>

                <div className="categories">
                    <div className="category" onClick={() => handleCategoryClick({ title: 'App/Pharmacy Portal' })}>
                        <h2 className="category-title">App/Pharmacy Portal</h2>
                        <img className="category-image-app" src={appImage} alt="App" />
                        <p className="category-description">
                            App/Pharmacy Portal
                        </p>
                    </div>

                    <div className="category" onClick={() => handleCategoryClick({ title: 'The Drone' })}>
                        <h2 className="category-title">Drone</h2>
                        <img className="category-image-drone" src={droneImage} alt="Drone" />
                        <p className="category-description">
                            Drone
                        </p>
                    </div>

                    <div className="category" onClick={() => handleCategoryClick({ title: 'Drone Box System' })}>
                        <h2 className="category-title">Payload Delivery System</h2>
                        <img className="category-image-box" src={droneBoxImage} alt="Drone Box" />
                        <p className="category-description">
                            Payload System
                        </p>
                    </div>
                </div>
                {selectedCategory && (
                    <div className="selected-category-info">
                        <h2>{selectedCategory.title} Features:</h2>
                        <div className="features-and-tabs">
                            {selectedCategory.title === 'App/Pharmacy Portal' && (
                                <div>
                                    <div className="feature-tabs">
                                        <button onClick={() => handleFeatureClick("signup")}>Sign-up/Login</button>
                                        <button onClick={() => handleFeatureClick("delivery")}>Delivery Address Confirmation</button>
                                        <button onClick={() => handleFeatureClick("product")}>Product Screens/Cart</button>
                                        <button onClick={() => handleFeatureClick("orderStatus")}>Order Status Updates</button>
                                        <button onClick={() => handleFeatureClick("tracking")}>Tracking</button>
                                    </div>
                                    {/* App/Pharmacy Portal content */}
                                    {selectedFeature === "signup" && (
                                        <div className="feature-section">
                                            <h3>Sign-up/Login:</h3>
                                            <div className="feature-content">
                                                <div className="image-container">
                                                    <img className="feature-image whiteAppImages" src={appSignIn} alt="Image 1" />
                                                    <img className="feature-image whiteAppImages" src={appSignUp} alt="Image 2" />
                                                </div>
                                                <p className="feature-description">
                                                    {/* Add the text description here */}
                                                    This is a description of the Sign-up/Login feature.
                                                </p>
                                            </div>
                                        </div>
                                    )}

                            {selectedFeature === "delivery" && (
                                <div className="feature-section">
                                    {/* Delivery Address Confirmation content */}
                                </div>
                            )}

                            {selectedFeature === "product" && (
                                <div className="feature-section">
                                    {/* Product Screens/Cart content */}
                                </div>
                            )}

                            {selectedFeature === "orderStatus" && (
                                <div className="feature-section">
                                    {/* Order Status Updates content */}
                                </div>
                            )}

                            {selectedFeature === "tracking" && (
                                <div className="feature-section">
                                    {/* Tracking content */}
                                </div>
                            )}
                        </div>
                            )}
                    </div>
                        {selectedCategory.title === 'The Drone' && (
                    <div>
                        <div>
                            <button onClick={() => handleFeatureClick("Parts")}>Parts</button>
                            <button onClick={() => handleFeatureClick("Battery")}>Battery</button>
                            <button onClick={() => handleFeatureClick("Autonomous Flight")}>Autonomous Flight</button>
                        </div>
                        {/* App/Pharmacy Portal content */}
                        {selectedFeature === "Parts" && (
                            <div className="feature-section">
                                {/* Sign-up/Login content */}
                            </div>
                        )}

                        {selectedFeature === "Battery" && (
                            <div className="feature-section">
                                {/* Delivery Address Confirmation content */}
                            </div>
                        )}

                        {selectedFeature === "Autonomous Flight" && (
                            <div className="feature-section">
                                {/* Product Screens/Cart content */}
                            </div>
                        )}
                    </div>
                )}
                {selectedCategory.title === 'Drone Box System' && (
                    <div>
                        <div>
                            <button onClick={() => handleFeatureClick("Box")}>Box</button>
                            <button onClick={() => handleFeatureClick("Electrical")}>Electrical Components</button>
                        </div>
                        {/* App/Pharmacy Portal content */}
                        {selectedFeature === "Box" && (
                            <div className="feature-section">
                                {/* Sign-up/Login content */}
                            </div>
                        )}
                        {selectedFeature === "Electrical" && (
                            <div className="feature-section">
                                {/* Delivery Address Confirmation content */}
                            </div>
                        )}
                    </div>
                )}
        </div>
    )
}
            </section >
        </div >
    );
}



export default How;
