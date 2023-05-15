import React, { useEffect, useState } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  //useEffect(<function>, <dependency>optional)
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <div>
      <h1>Count down starts {count}!!!!!</h1>
    </div>
  );
}

export default Timer;
