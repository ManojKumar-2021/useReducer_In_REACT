import React, { useState } from "react";
import "./styles.css";

export default function USESTATE() {
  const [count, setCounte] = useState(1);

  function Increment() {
    setCounte(count + 1);
  }

  function Decrement() {
    setCounte(count - 1);
  }
  return (
    <div className="App">
      <h1>useState</h1>
      <h1>{count}</h1>
      <button onClick={Increment}>increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  );
}
