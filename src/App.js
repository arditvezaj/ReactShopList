import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [outputItems, setOutputItems] = useState([
    { name: "Bread", id: "1" },
    { name: "Soda", id: "2" },
  ]);
  const [enteredItem, setEnteredItem] = useState("");
  const [isValid, setIsValid] = useState(true);

  const changeText = (event) => {
    setEnteredItem(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const submitInput = (event) => {
    event.preventDefault();
    if (enteredItem.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setOutputItems((prevItems) => {
      const updatedItems = [...prevItems];
      updatedItems.push({ name: enteredItem, id: Math.random().toString() });

      return updatedItems;
    });
    setEnteredItem("");
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <div>
        <h2>My Shopping List</h2>
        <ul>
          {outputItems.map((item) => (
            <li key={item.id} id={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
        <form onSubmit={submitInput}>
          <input type="text" value={enteredItem} onChange={changeText} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
