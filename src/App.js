import { useState, useEffect } from "react";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const data = localStorage.getItem("countValue");
    if (data) {
      setCount(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("countValue", JSON.stringify(count));
  });

  return (
    <div>
      <span>
        <button onClick={() => setCount((pre) => pre + 1)}>+</button>
      </span>
      <span>
        <p> {count}</p>
      </span>
      <span>
        <button onClick={() => setCount((pre) => pre - 1)}>-</button>
      </span>
    </div>
  );
}

export default App;
