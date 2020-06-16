import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Duck from "./components/Duck/Duck.js";
import Scoreboard from "./components/Scoreboard/Scoreboard.js";

function getRandomArbitrary(min, max) {
  const randomValue = Math.random() * (max - min) + min;
  return randomValue.toFixed();
}

function Game() {
  const [duck, setDuck] = useState(null);
  const dispatch = useDispatch();
  const score = useSelector((state) => state.scoreReducer);
  const onDuckClick = () => dispatch({ type: "HIT" });

  const onDuckHit = () => {
    onDuckClick();
    setDuck(null);
  };

  useEffect(() => {
    const renderDuck = setInterval(() => {
      const position = {
        x: getRandomArbitrary(0, window.innerWidth),
        y: getRandomArbitrary(0, window.innerHeight),
      };

      setDuck(<Duck position={position} onClick={onDuckHit} />);
    }, 3000);

    return () => clearInterval(renderDuck);
  }, []);

  return (
    <div className="Game">
      {duck}
      <Scoreboard score={score} />
    </div>
  );
}

export default Game;
