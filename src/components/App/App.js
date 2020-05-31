import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Game from "../Game/Game.js";
import GameOver from "../GameOver/GameOver.js";
import Login from "../Login/Login";
import "./App.css";

const DUCKS_TO_WIN = 1;
const STORAGE_NAME = "duckhunt";

function saveResult(username) {
  const savedResults = localStorage.getItem(STORAGE_NAME);
  const results = savedResults ? JSON.parse(savedResults) : {};
  const updatedResults = Object.assign(results, { [username]: 1 });
  const stringifiedResults = JSON.stringify(updatedResults);
  localStorage.setItem(STORAGE_NAME, stringifiedResults);
}

function App({ score, onReset }) {
  const [gameOver, setGameOver] = useState(false);
  const [username, setUsername] = useState("");

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

  return <Login setUsername={setUsername} />;
}

const mapStateToProps = (state) => {
  return {
    score: state.scoreReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onReset: () => dispatch({ type: "RESET" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
