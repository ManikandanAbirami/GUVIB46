import React from "react";
import GrandChild from "./GrandChild";

function Child(props) {
  return (
    <div>
      <GrandChild></GrandChild>
    </div>
  );
}

export default Child;
