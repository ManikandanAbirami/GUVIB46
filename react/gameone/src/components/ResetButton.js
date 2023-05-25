import React from "react";
import "./ResetButton.css";

function ResetButton({ resetBoard }) {
  return (
    <button className="reset-btn" onClick={resetBoard}>
      Reset
    </button>
  );
}

export default ResetButton;
