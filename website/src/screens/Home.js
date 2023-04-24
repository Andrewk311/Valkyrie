import './Home.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import drone from './../Images/Drone.jpg';
import speed from './../Images/SpeedIcon.jpg';
import safety from './../Images/SafetyIcon.jpg';
import convenience from './../Images/ConvenienceIcon.jpg';
import drone2 from './../Images/Drone2.jpg';
import drone3 from './../Images/Drone3.jpg';
import droneBox1 from './../Images/HowItBuiltPics/DroneWithBox.jpg';
import dronePicParts2 from './../Images/HowItBuiltPics/DronePicParts2.jpg';
import dallas from './../Images/Dallas2.jpg';
import tracking from './../Images/TrackOrder2.PNG';
import store from './../Images/StoreFront2.png';
import homescreen from './../Images/HomePage.PNG';
import settings from './../Images/Settings.PNG';
import orders from './../Images/OrderTable.png';
import inventory from './../Images/InventoryTable.png'
import lambdaLogo from './../Images//Logos/LambdaLogo.png';
import reactLogo from './../Images/Logos/ReactLogo.png';
import APIGatewayLogo from './../Images/Logos/APIGatewayLogo.png';
import missionPlannerLogo from './../Images/Logos/MissionPlannerLogo.png';
import expoLogo from './../Images/Logos/ExpoLogo.png';
import cognitoLogo from './../Images/Logos/CognitoLogo.png';
import dynamoLogo from './../Images/Logos/DynamoLogo.png';
import graphqlLogo from './../Images/Logos/GraphqlLogo.png';
import amplifyLogo from './../Images/Logos/AmplifyLogo.png';
import teamPic from './../Images/TeamPics/TeamPic.png';

const images = [drone, drone2, drone3, droneBox1];

function Home() {

    const navigate = useNavigate();
    const [activeSlide, setActiveSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
        }, 4000);
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
                    <a href="https://pharmacy.valkyriedrone.io" class="portal-button">Pharm Portal</a>
                </nav>
                <p className="header-title">VALKYRIE CAPSTONE GROUP 19</p>
                <div className="buttons-container">
                    <button className="button-header button-margin" onClick={handleAboutUsClick}>About Us</button>
                    <button className="button-header" onClick={handleHowClick}>How it's Built</button>
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
                <div className="carousel-container-about-home">
                    <div className="hero-carousel-about">
                        <div className="carousel-slides-about" 
                        style={{ 
                            transform:
                                windowWidth > 480
                                ? `translateX(-${activeSlide * 50}%)`
                                : `translateX(-${activeSlide * 0}%)`,}}>
                            {images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`carousel-image-container-about ${activeSlide === index ? "active" : ""}`}
                                >
                                    <img className="carousel-image-about" src={image} alt="Team moment" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className="featuresAndVid">
            <section className="features">
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
                <p>*Replace this with demo vid* </p>
            </section>
            <iframe className="YouTube" src="https://www.youtube.com/embed/MMpjPErWlhY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <section className="app-features">
                <div className="imageContainer">
                    <div className="app-features-image app-features-image-rounded">
                        <img src={homescreen} alt="app features" />
                    </div>
                    <div className="app-features-image app-features-image-rounded">
                        <img src={tracking} alt="app features" />
                    </div>
                    <div className="app-features-image app-features-image-rounded">
                        <img src={store} alt="app features" />
                    </div>
                    <div className="app-features-image app-features-image-rounded">
                        <img src={settings} alt="app features" />
                    </div>
                </div>
                <div className="app-features-text">
                    <h2>Stay Connected With Our App</h2>
                    <p>
                        With our user-friendly app, you can easily track your drone delivery in real-time, order from a wide range of pharmacy products, and manage your prescriptions. Experience seamless access to healthcare like never before.
                    </p>
                    <button className="whiteBtn">Download App</button>
                </div>
            </section>
            <section className="pharmacy-portal">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h2>Pharmacy Portal</h2>
                            <p>
                                On our pharmacy portal, pharmacists can log in to manage their
                                location's inventory and address incoming orders from users. They
                                have the ability to mark these orders as confirmed and then send them
                                out for transit.
                            </p>
                        </div>
                        <div className="col-md-6">
                            <div className="pharmacy-portal-image-container">
                                <div className="pharmacy-portal-image ">
                                    <img style={{width:'75%', height:'90%', borderRadius:'0.25rem'}} src={orders} alt="first image" />
                                </div>
                                <div className="pharmacy-portal-image ">
                                    <img style={{width:'75%', height:'90%', borderRadius:'0.25rem'}} src ={inventory}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="how-its-built">
                <div className="how-its-built-padding" >
                <h2>How It's Built</h2>
                            <p>
                                Our platform was built using a combination of cutting-edge technologies,
                                including AWS services, Mission Planner drone flight software, React JS,
                                and React Native/Expo. We've harnessed the power of these tools to create
                                a seamless and efficient experience for our users.
                            </p>
                            <p>
                                To learn more about the specific AWS services we used and how we've
                                implemented them, check out our detailed page.
                            </p>
                            <button
                                type="button"
                                className="whiteBtn"
                                onClick={handleHowClick}
                            >
                                How We Built It
                            </button>
                </div>
                <div className="logo-box">
                    <img className="logo-image" src={lambdaLogo} alt="serviceLogos"/>
                    <img className="logo-image" src={reactLogo} alt="serviceLogos"/>
                    <img className="logo-image" src={APIGatewayLogo} alt="serviceLogos"/>
                    <img className="logo-image" src={missionPlannerLogo} alt="serviceLogos"/>
                    <img className="logo-image" src={expoLogo} alt="serviceLogos"/>
                    <img className="logo-image" src={cognitoLogo} alt="serviceLogos"/>
                    <img className="logo-image" src={dynamoLogo} alt="serviceLogos"/>
                    <img className="logo-image" src={graphqlLogo} alt="serviceLogos"/>
                    <img className="logo-image" src={amplifyLogo} alt="serviceLogos"/>
                </div>
            </section>
            {/* Add an about section with some text and an image */}
            <section className="about">
            <div className="about-image">
                    <img src={teamPic} alt="team" /> 
                </div>
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

            </section>
        </div>
    );
}



export default Home;
