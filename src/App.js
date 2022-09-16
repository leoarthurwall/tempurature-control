import "./index.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(-5);
  const [color, setColor] = useState("freezing");

  const Increase = () => {

    if (count === 50) return;

    const newTemp = count + 1;
    setCount(newTemp);

    if (newTemp >= 40) {
      setColor("roasting");
    } else if (newTemp >= 20) {
      setColor("hot");
    } else if (newTemp >= 10) {
      setColor("warm");
    } else if (newTemp > 0) {
      setColor("cold");
    } else {
      setColor("freezing");
    }
  };
  const Decrease = () => {

    if (count === -10 ) return;

    const newTemp = count - 1;
    setCount(newTemp);

    if (newTemp <= 0) {
      setColor("freezing");
    } else if (newTemp < 10) {
      setColor("cold");
    } else if (newTemp < 20) {
      setColor("warm");
    } else if (newTemp < 40) {
      setColor("hot");
    } else {
      setColor("roasting");
    }
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
