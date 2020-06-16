import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Game from "../Game/Game.js";
import GameOver from "../GameOver/GameOver.js";
import Login from "../Login/Login";
import "./App.css";

const DUCKS_TO_WIN = 3;
const STORAGE_NAME = "duckhunt";

function saveResult(username) {
  const savedResults = localStorage.getItem(STORAGE_NAME);
  const results = savedResults ? JSON.parse(savedResults) : {};
  const updatedResults = Object.assign(results, { [username]: 1 });
  const stringifiedResults = JSON.stringify(updatedResults);
  localStorage.setItem(STORAGE_NAME, stringifiedResults);
}

function App() {
  const [gameOver, setGameOver] = useState(false);
  const dispatch = useDispatch();
  const score = useSelector((state) => state.scoreReducer);
  const username = useSelector((state) => state.usernameReducer);
  const onReset = () => dispatch({ type: "RESET" });

  const onRestart = () => {
    onReset();
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
    return <Game />;
  }

  return <Login />;
}

export default App;
