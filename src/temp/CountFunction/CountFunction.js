import { useState } from "react";

const CountFunction = (props) => {
  console.log("test")

  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(count - 1)
  };
  const increment = () => {
    setCount(count + 1)
  };

  return (
    <div style={{ display: "flex" }}>
      <button onClick={decrement}>-</button>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default CountFunction;
