import React from "react";
import "./Leaderboard.css";

function getLeaders() {
  const leaders = localStorage.getItem("duckhunt");
  return JSON.parse(leaders);
}

function Leaderboard() {
  const leaders = getLeaders();

  return (
    <ol className="leaderboard">
      {Object.keys(leaders).map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ol>
  );
}

export default Leaderboard;
