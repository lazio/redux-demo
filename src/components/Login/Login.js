import React, { useRef } from "react";

import "./Login.css";

function Login({ setUsername }) {
  const inputRef = useRef();

  const loginWIthUsername = (e) => {
    e.preventDefault();
    if (inputRef.current.value) {
      setUsername(inputRef.current.value);
    }
  };

  return (
    <form onSubmit={loginWIthUsername} className="form">
      <input type="text" ref={inputRef} className="form-input" />
      <input type="submit" className="form-submit" />
    </form>
  );
}

export default Login;
