import React, { useRef, useState } from "react";

function Counter() {
  let ref = useRef(0);
  //   const [name, setName] = useState("Manikandan A");
  const [val, setVal] = useState(0);
  //   {
  //     current: 11
  //   }

  function handleClick() {
    // ref.current = ref.current + 1;
    // alert(`You clicked ${ref.current} times!!`);
    // alert(`Hi, ${ref.current} Welcome!!`);
    // setName("Manikandan Anbalagan!!!");
    // alert(`Hi, ${name} Welcome!!`);
    setVal(val + 1);
    alert(`You clicked ${val} times!!`);
  }
  return (
    <div>
      {console.log("Rendering!!!")}
      Counter:
      <button onClick={handleClick}>Click Me!!!</button>
    </div>
  );
}

export default Counter;
