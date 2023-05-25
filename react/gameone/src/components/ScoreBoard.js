import React from "react";
import "./ScoreBoard.css";

function ScoreBoard({ scores, xPlay }) {
  const { xScore, oScore } = scores;
  return (
    <div className="scoreboard">
      <span className={`score x-score ${!xPlay && "inactive"}`}>
        X - {xScore}
      </span>
      <span className={`score o-score ${xPlay && "inactive"}`}>
        O - {oScore}
      </span>
    </div>
  );
}

export default ScoreBoard;
