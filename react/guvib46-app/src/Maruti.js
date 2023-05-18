import React from "react";

function Maruti(props) {
  return (
    <div>
      <button onClick={() => props.setCar("Maruti")}>MARUTI</button>
    </div>
  );
}

export default Maruti;
