import './How.css';
import { useNavigate } from 'react-router-dom';
import appImage from './../Images/HomePage.PNG';
import droneImage from './../Images/Drone.jpg';
import droneBoxImage from './../Images/Dallas5.JPG';
import React, { useRef, useState, useEffect } from 'react';

function How() {

    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const topRef = useRef(null);

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
                        {/* Render your features here */}
                    </div>
                )}
            </section>
        </div>
    );
}



export default How;
