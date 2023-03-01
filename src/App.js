import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
const [outputItem, setOutputItem] = useState("lemon");

const changeText = (event) => {
  setOutputItem(event.target.value)
}

const submitInput = (event) => {
  event.preventDefault();
  
};

  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h2>My Shopping List</h2>
          <ul>
            <li>{outputItem}</li>
            <li>Rice</li>
            <li>Bread</li>
          </ul>
          <form onSubmit={submitInput}>
          <input type="text" onChange={changeText}/>
          </form>
        </div>
    </div>
  );
}

export default App;
