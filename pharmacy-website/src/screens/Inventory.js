import './Inventory.css';

function Inventory() {
    return (
        <div className="App">
            <div className='App-header'>
              <p style={{ color:'#92989B', fontWeight: 'bold', whiteSpace:'pre-line', textAlign:'center'}}>VALKYRIE{"\n"}
              <p style={{ color:'#92989B', fontWeight: 'normal', whiteSpace:'pre-line', textAlign:'center', marginTop:'5px'}}>Inventory</p>
              </p>
            </div>
            <img className='image' src={require('./../logo.png')}></img>
        </div>
    );
}

export default Inventory;