import React, { useEffect, useState } from "react";
import FavCar from "./FavCar";

function Timer(props) {
  const [count, setCount] = useState(0);

  //useEffect(<function>, <dependency>optional)
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return (
    <div>
      <h1>
        Count down for starts {count}!!!!!
        <FavCar data={props.course}></FavCar>
      </h1>
    </div>
  );
}

export default Timer;
