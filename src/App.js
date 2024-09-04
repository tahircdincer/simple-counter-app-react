import React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);
  function increment() {
    setCount((prevCount) => prevCount + 1);
  }
  function minus() {
    setCount((prevCount) => prevCount - 1);
  }
  return (
    <div className="container">
      <div className="counter__value">
        {count}
        <button className="counter__increment--value" onClick={increment}>
          +
        </button>
        <button className="counter__minus--value" onClick={minus}>
          -
        </button>
      </div>
    </div>
  );
}
