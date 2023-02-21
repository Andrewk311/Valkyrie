import dog from './dallas2.JPG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          PHARM portal
        </p>
        <nav>
          <a href="https://www.valkyriedrone.io"> Back to landing page</a>
        </nav>
        <img src={dog}/>
      </header>
    </div>
  );
}

export default App;
