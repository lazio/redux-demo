import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Duck from "../Duck/Duck.js";
import Scoreboard from "../Scoreboard/Scoreboard.js";

function getRandomArbitrary(min, max) {
  const randomValue = Math.random() * (max - min) + min;
  return randomValue.toFixed();
}

function Game({ score, onDuckClick }) {
  console.log(123123, score);

  const [duck, setDuck] = useState(null);

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

      return () => clearInterval(renderDuck);
    }, 3000);
  }, []);

  return (
    <div className="Game">
      {duck}
      <Scoreboard score={score} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    score: state.scoreReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDuckClick: () => dispatch({ type: "HIT" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
