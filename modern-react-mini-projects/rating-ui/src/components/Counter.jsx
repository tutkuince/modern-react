import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(() => {
    console.log("Init count state...");
    return 0;
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
    </>
  );
};

export default Counter;
