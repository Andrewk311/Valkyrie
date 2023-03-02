import './AboutUs.css';
import {
    Aboutus 
   } from './../ui-components';
import { useNavigate } from 'react-router-dom';

   
function AboutUs() {

    const navigate = useNavigate();

    function handleHowClick() {
        navigate('/HowitsBuilt')
    }

    function handleHomeClick() {
        navigate('/')
    }

    return (
        <div className="App">
            <header className="App-header">
                <nav>
                    <a href="https://pharmacy.valkyriedrone.io"> Pharm portal</a>
                </nav>
                <button onClick={handleHowClick}>How its Built</button>
                <button onClick={handleHomeClick}>Home</button>
                <Aboutus />
            </header>
        </div>
    );
}

 

export default AboutUs;
