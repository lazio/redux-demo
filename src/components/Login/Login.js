import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import "./Login.css";

function Login() {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const setUsername = (username) => {
    dispatch({ type: "SET_USERNAME", username });
  };

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
