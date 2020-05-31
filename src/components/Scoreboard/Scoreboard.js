import React from "react";

import "./Scoreboard.css";

function Scoreboard({ score }) {
  return (
    <div className="scoreboard">
      <div className="scoreboard-number">{score}</div>
      <div className="scoreboard-title">SCORE</div>
    </div>
  );
}

export default Scoreboard;
