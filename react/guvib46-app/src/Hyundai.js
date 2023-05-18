import React from "react";

function Hyundai(props) {
  return (
    <div>
      <button onClick={() => props.setCar("Hyundai")}>HYUNDAI</button>
    </div>
  );
}

export default Hyundai;
