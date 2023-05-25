import React, { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";

function App() {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  // const board = ["X", "X", "X", "X", "X", "X", "X", "X", "X"];

  const [xPlay, setXplay] = useState(true);

  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });

  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxId) => {
    // console.log("Box ID: " + boxId);
    const updateBoard = board.map((value, id) => {
      if (id === boxId) {
        return xPlay === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updateBoard);

    if (winner) {
      if (winner === "O") {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    console.log(scores);

    setBoard(updateBoard);
    setXplay(!xPlay);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < win.length; i++) {
      const [x, y, z] = win[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        // console.log(board[x]);
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlay={xPlay}></ScoreBoard>
      <Board
        board={board}
        onClick={gameOver ? resetBoard : handleBoxClick}
      ></Board>
      <ResetButton resetBoard={resetBoard}></ResetButton>
    </div>
  );
}

export default App;
