import React, { useState } from "react";

export default function Counter2() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  const increment = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <div>
      <h1>Counter2 is : {count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <div>
        <button onClick={() => setCount(initialCount)}>reset</button>
      </div>
    </div>
  );
}
