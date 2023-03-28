import './Home.css';
import {
  LandingPage 
 } from './../ui-components';
 import { useNavigate } from 'react-router-dom';
 import drone from './../Images/Drone.jpg';
 import speed from './../Images/SpeedIcon.jpg';
 import safety from './../Images/SafetyIcon.jpg';
 import convenience from './../Images/ConvenienceIcon.jpg';

function Home() {

    const navigate = useNavigate();

    function handleAboutUsClick() {
        navigate('/AboutUs')
    }

    function handleHowClick() {
        navigate('/HowitsBuilt')
    }

    return (
        <div className="App">
          <header className="homePageHeader">
            <nav>
              <a href="https://pharmacy.valkyriedrone.io" class="portal-button">Pharm portal</a>
            </nav>
            <p style={{fontWeight:'bold'}}>VALKYRIE CAPSTONE GROUP 19</p>
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
            <div className="hero-image">
              <img src={drone} alt="drone" />
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
            </div>
            <div className="about-image">
              <img src="./images/team.jpg" alt="team" /> {/* import your team image */}
            </div>
          </section>
        </div>
    );
}

 

export default Home;
