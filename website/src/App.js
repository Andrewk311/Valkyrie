import dog from './Dallas.JPG';
import './App.css';
import {
  LandingPage 
 } from './ui-components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <p>
        Valkyrie Drone Landing Page!
      </p> */}
      <nav>
        <a href="https://pharmacy.valkyriedrone.io"> Pharm portal</a>
      </nav>
      <LandingPage />
      </header>
    </div>
  );
}

 

export default App;
