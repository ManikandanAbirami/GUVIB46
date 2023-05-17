import React from "react";
import { useParams } from "react-router-dom";

function Param() {
  let { num } = useParams();
  return <div>Just displaying the ID that we got from useParam: {num}</div>;
}

export default Param;
