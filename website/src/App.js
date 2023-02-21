import dog from './Dallas.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        Valkyrie Drone Landing Page!
      </p>
      <nav>
        <a href="https://pharmacy.valkyriedrone.io"> Pharm portal</a>
      </nav>
      <img src={dog} />
      </header>
    </div>
  );
}

export default App;
