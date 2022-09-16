import "./index.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(10);
  const [color, setColor] = useState("hot");

  const Increase = () => {
    const newTemp = count + 1
    setCount(newTemp);
  };
  const Decrease = () => {
    const newTemp = count - 1
    setCount(newTemp);
  };

  return (
    <div className="App-Container">
      <div className="Temp-Container">
        <div className={`Temp-Display ${color}`}>{count}°C</div>
      </div>
      <div className="Button-Container">
        <button onClick={Increase}>+</button>
        <button onClick={Decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
