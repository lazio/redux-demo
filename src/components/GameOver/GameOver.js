import React from "react";

import Leaderboard from "../Leaderboard/Leaderboard";

import "./GameOver.css";

function GameOver() {
  return (
    <div class="game-over">
      <div className="game-over-title">Game over</div>
      <Leaderboard />
    </div>
  );
}

export default GameOver;
