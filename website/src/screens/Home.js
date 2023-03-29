import './Home.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import drone from './../Images/Drone.jpg';
import speed from './../Images/SpeedIcon.jpg';
import safety from './../Images/SafetyIcon.jpg';
import convenience from './../Images/ConvenienceIcon.jpg';
import drone2 from './../Images/Drone2.jpg';
import drone3 from './../Images/Drone3.jpg';
import dallas from './../Images/Dallas2.jpg';
import tracking from './../Images/TrackOrder.png';

const images = [drone, drone2, drone3];

function Home() {

    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 6000);
        return () => clearTimeout(timer);
    }, [activeSlide]);


    function handleAboutUsClick() {
        navigate('/AboutUs')
    }

    function handleHowClick() {
        navigate('/HowitsBuilt')
    }

    const prevSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
    };

    const nextSlide = () => {
        setActiveSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        console.log(activeSlide);
        console.log(images[activeSlide])
    };

    return (
        <div className="App">
            <header className="homePageHeader">
                <nav>
                    <a href="https://pharmacy.valkyriedrone.io" class="portal-button">Pharm portal</a>
                </nav>
                <p style={{ fontWeight: 'bold' }}>VALKYRIE CAPSTONE GROUP 19</p>
                <div className="buttons-container">
                    <button className="button-header button-margin" onClick={handleAboutUsClick}>About Us</button>
                    <button className="button-header" onClick={handleHowClick}>How its Built</button>
                </div>
            </header>
            {/* Add a hero section with a title, subtitle and a button */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">Valkyrie</h1>
                    <p className="hero-subtitle">
                        The fastest and safest way to deliver pharmaceuticals to rural areas
                    </p>
                </div>
                {/* Add a hero image with a drone */}
                <div className="hero-carousel">
                    <div className="carousel-slides">
                        <div className={`carousel-image-container ${activeSlide === 0 ? 'active' : ''}`}>
                            <img className="carousel-image" src={images[0]} alt="drone" />
                        </div>
                        <div className={`carousel-image-container ${activeSlide === 1 ? 'active' : ''}`}>
                            <img className="carousel-image" src={images[1]} alt="speed" />
                        </div>
                        <div className={`carousel-image-container ${activeSlide === 2 ? 'active' : ''}`}>
                            <img className="carousel-image" src={images[2]} alt="safety" />
                        </div>
                    </div>
                    {/* <img src={images[0]}></img> */}
                    <button className="carousel-button prev" onClick={prevSlide}>Prev</button>
                    <button className="carousel-button next" onClick={nextSlide}>Next</button>
                </div>
            </section>
            {/* Add a features section with some icons, titles and descriptions */}
            <section className="features">
                {/* Add a feature card for speed */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <img src={speed} alt="speed" /> {/* import your speed icon */}
                    </div>
                    <h3 className="feature-title">Speed</h3>
                    <p className="feature-description">
                        Valkyrie drones can deliver your medications in minutes, not hours or
                        days.
                    </p>
                </div>
                {/* Add a feature card for safety */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <img src={safety} alt="safety" /> {/* import your safety icon */}
                    </div>
                    <h3 className="feature-title">Safety</h3>
                    <p className="feature-description">
                        Valkyrie drones are equipped with an insulated box and autonomous flight to safely deliver products.
                    </p>
                </div>
                {/* Add a feature card for convenience */}
                <div className="feature-card">
                    <div className="feature-icon">
                        <img src={convenience} alt="convenience" /> {/* import your convenience icon */}
                    </div>
                    <h3 className="feature-title">Convenience</h3>
                    <p className="feature-description">
                        Valkyrie drones can deliver to any location within our service area,
                        no matter how remote or inaccessible.
                    </p>
                </div>
            </section>
            <section className="app-features">
                <div className="app-features-image">
                    <img src={tracking} alt="app features" />
                </div>
                <div className="app-features-text">
                    <h2>Stay Connected With Our App</h2>
                    <p>
                        With our user-friendly app, you can easily track your drone delivery in real-time, order from a wide range of pharmacy products, and manage your prescriptions. Experience seamless access to healthcare like never before.
                    </p>
                    <button className="button-header">Download App</button>
                </div>
            </section>

            {/* Add an about section with some text and an image */}
            <section className="about">
                <div className="about-text">
                    <h2>About Us</h2>
                    <p>
                        We are a team of passionate engineers who believe that everyone deserves access to quality medications.
                        We created Valkyrie to solve the problem of delivering pharmaceuticals
                        to rural areas, where many people live too far from pharmacies or
                        face transportation challenges. Our mission is to make healthcare
                        more accessible, affordable and convenient for everyone.
                    </p>
                    <button className="button-header" onClick={handleAboutUsClick}>Learn more</button>
                </div>
                <div className="about-image">
                    <img src={dallas} alt="team" /> {/* import your team image */}
                </div>
            </section>
        </div>
    );
}



export default Home;
