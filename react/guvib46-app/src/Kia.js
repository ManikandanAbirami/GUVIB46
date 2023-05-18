import React from "react";

function Kia(props) {
  return (
    <div>
      <button onClick={() => props.setCar("Kia")}>KIA</button>
    </div>
  );
}

export default Kia;
