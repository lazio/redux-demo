import React from "react";

import Leaderboard from "../Leaderboard/Leaderboard";

import "./GameOver.css";

function GameOver({ restart }) {
  return (
    <div className="game-over">
      <div className="game-over-title">Game over</div>
      <Leaderboard />
      <button className="restart" onClick={restart}>
        restart
      </button>
    </div>
  );
}

export default GameOver;
