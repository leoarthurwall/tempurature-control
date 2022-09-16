import "./index.css";
import {useState} from 'react'

function App() {
    const[count, setCount] = useState(10)

    const Increase = () => {
      setCount(count + 1)
    }
    const Decrease = () => {
      setCount(count - 1)
    }


  return (
    <div className="App-Container">
      <div className="Temp-Container">
        <div className="Temp-Display">{count}°C</div>
      </div>
      <div className="Button-Container">
        <button onClick={Increase}>+</button>
        <button onClick={Decrease}>-</button>
      </div>
    </div>
  );
}

export default App;
