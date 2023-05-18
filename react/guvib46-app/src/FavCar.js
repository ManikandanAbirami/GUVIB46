import React, { useState } from "react";
import Hyundai from "./Hyundai";
import Kia from "./Kia";
import Maruti from "./Maruti";

function FavCar(props) {
  //const [state, setState] = useState[initialState];
  const [car, setCar] = useState("Ford");
  // var a = 10;
  // a = 20;

  return (
    <div>
      <h1>
        My favorite car is {car}!!!!! {props.data}
      </h1>
      <Hyundai setCar={setCar}></Hyundai>
      <Kia setCar={setCar}></Kia>
      <Maruti setCar={setCar}></Maruti>
    </div>
  );
}

export default FavCar;
