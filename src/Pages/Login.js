import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="login">
      <h3>LOGIN</h3>
      <div className="info">
        <p>Username</p>
        <input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Username"
        ></input>
        <p>Password</p>
        <input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        ></input>
      </div>
      <button className="logb">LOGIN</button>
      <p className="regmain">
        Do not have an account?{" "}
        <p
          className="reg"
          onClick={() => {
            navigate("/register");
          }}
        >
          {" "}
          Register{" "}
        </p>{" "}
        here
      </p>
    </div>
  );
}

export default Login;
