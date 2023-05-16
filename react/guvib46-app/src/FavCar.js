import React, { useState } from "react";

function FavCar(props) {
  //const [state, setState] = useState[initialState];
  const [car, setCar] = useState("Ford");

  return (
    <div>
      <h1>
        My favorite car is {car}!!!!! {props.data}
      </h1>
      <button type="button" onClick={() => setCar("Hyundai")}>
        Hyundai
      </button>
      <button type="button" onClick={() => setCar("Maruti")}>
        Maruti
      </button>
      <button type="button" onClick={() => setCar("Kia")}>
        Kia
      </button>
      <button type="button" onClick={() => setCar("Honda")}>
        Honda
      </button>
    </div>
  );
}

export default FavCar;
