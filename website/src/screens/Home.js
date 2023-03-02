import './Home.css';
import {
  LandingPage 
 } from './../ui-components';
 import { useNavigate } from 'react-router-dom';

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
            <header className="App-header">
                <nav>
                    <a href="https://pharmacy.valkyriedrone.io"> Pharm portal</a>
                </nav>
                <button onClick={handleAboutUsClick}>About Us</button>
                <button onClick={handleHowClick}>How its Built</button>
                <LandingPage />
            </header>
        </div>
    );
}

 

export default Home;
