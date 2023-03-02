import './How.css';
import {
    Howitsbuilt
} from './../ui-components';
import { useNavigate } from 'react-router-dom';

function How() {

    const navigate = useNavigate();

    function handleAboutUsClick() {
        navigate('/AboutUs')
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
                <button onClick={handleAboutUsClick}>About Us</button>
                <button onClick={handleHomeClick}>Home</button>
                <Howitsbuilt />
            </header>
        </div>
    );
}



export default How;
