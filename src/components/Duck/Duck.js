import React from "react";

import "./Duck.css";

const DUCK_SIZE = 100;

function Duck({ position, onClick }) {
  const x = position.x - DUCK_SIZE > DUCK_SIZE ? position.x - DUCK_SIZE : 0;
  const y = position.y - DUCK_SIZE > DUCK_SIZE ? position.y - DUCK_SIZE : 0;

  return (
    <div
      className="duck"
      onClick={onClick}
      style={{
        left: x + "px",
        top: y + "px",
      }}
    ></div>
  );
}

export default Duck;
