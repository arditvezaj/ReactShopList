import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>My Shopping List</h2>
          <ul on>
            <li>Lemons</li>
            <li>Rice</li>
            <li>Bread</li>
          </ul>
        </div>
    </div>
  );
}

export default App;
