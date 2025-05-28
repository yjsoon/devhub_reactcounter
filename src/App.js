import "./App.css";
import { useState } from "react";

function App() {
  // array destructuring
  const [counter, setCounter] = useState(0);

  function increase() {
    setCounter(counter + 1);
  }

  function decrease() {
    setCounter(counter - 1);
  }

  function reset() {
    setCounter(0);
  }

  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={increase}>Increment</button>
      <button onClick={decrease}>Decrement</button>
      <br />
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
