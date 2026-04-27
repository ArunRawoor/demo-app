// Timer.jsx
import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Timer</h2>
      <h3>{count} Seconds</h3>
    </div>
  );
}

export default Timer;