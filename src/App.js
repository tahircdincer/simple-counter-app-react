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
        <div className="count">
          <p>{count} </p>
        </div>
        >
        <button className="btn counter__increment--value" onClick={increment}>
          +
        </button>
        <button className="btn counter__minus--value" onClick={minus}>
          -
        </button>
      </div>
    </div>
  );
}
