import React, { useContext } from "react";
import AppContext from "./AppContext";

function GrandChild(props) {
  const { setUserName } = useContext(AppContext);
  return (
    <div>
      <button
        onClick={() => {
          setUserName("Manikandan Anbalagan");
        }}
      >
        Change Username
      </button>
    </div>
  );
}

export default GrandChild;
