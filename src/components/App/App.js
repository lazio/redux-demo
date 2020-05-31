import React, { useState, useEffect } from "react";
import Duck from "../Duck/Duck.js";
import Scoreboard from "../Scoreboard/Scoreboard.js";
import GameOver from "../GameOver/GameOver.js";
import "./App.css";

const DUCKS_TO_WIN = 1;

function getRandomArbitrary(min, max) {
  const randomValue = Math.random() * (max - min) + min;
  return randomValue.toFixed();
}

function App() {
  const [duck, setDuck] = useState(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const onDuckClick = () => {
    setScore((prevScore) => (prevScore += 1));
    setDuck(null);
  };

  useEffect(() => {
    const renderDuck = setInterval(() => {
      const position = {
        x: getRandomArbitrary(0, window.innerWidth),
        y: getRandomArbitrary(0, window.innerHeight),
      };

      setDuck(<Duck position={position} onClick={onDuckClick} />);

      return () => clearInterval(renderDuck);
    }, 3000);
  }, []);

  useEffect(() => {
    if (score >= DUCKS_TO_WIN) {
      setGameOver(true);
    }
  }, [score]);

  if (gameOver) {
    return <GameOver />;
  }

  return (
    <div className="App">
      {duck}
      <Scoreboard score={score} />
    </div>
  );
}

export default App;
