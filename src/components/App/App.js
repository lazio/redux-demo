import React, { useState, useEffect } from "react";
import Game from "../Game/Game.js";
import GameOver from "../GameOver/GameOver.js";
import Login from "../Login/Login";
import "./App.css";

const DUCKS_TO_WIN = 1;

function saveResult(username) {
  const savedResults = localStorage.getItem("duckhunt");
  const results = savedResults ? JSON.parse(savedResults) : {};
  const updatedResults = Object.assign(results, { [username]: 1 });
  const stringifiedResults = JSON.stringify(updatedResults);
  localStorage.setItem("duckhunt", stringifiedResults);
}

function App() {
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [username, setUsername] = useState("");

  const onDuckHit = () => {
    setScore((prevScore) => (prevScore += 1));
  };

  const onRestart = () => {
    setScore(0);
    setGameOver(false);
  };

  useEffect(() => {
    if (score >= DUCKS_TO_WIN) {
      setGameOver(true);
      saveResult(username);
    }
  }, [score, username]);

  if (gameOver) {
    return <GameOver restart={onRestart} />;
  }

  if (username) {
    return <Game score={score} onDuckClick={onDuckHit} />;
  }

  return <Login setUsername={setUsername} />;
}

export default App;
