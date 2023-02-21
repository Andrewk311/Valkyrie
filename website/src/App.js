import dog from './Dallas.JPG';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
          Valkyrie Drone Landing Page!
        </p>
        <Link to="https://pharmacy.valkyriedrone.io">
          <button>Go to Pharm portal</button>
        </Link>
        <img src={dog} />
      </header>
    </div>
  );
}

export default App;
