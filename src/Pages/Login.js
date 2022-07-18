import React, { useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context";

function Login() {
  const { setToken } = useContext(LoginContext);
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
      <button
        onClick={() => {
          axios
            .post("https://e1commerce.herokuapp.com/api/token/", {
              username: username,
              password: password,
            })
            .then((Response) => {
              setToken([username, Response.data.access]);
              window.sessionStorage.setItem("username", username);
              window.sessionStorage.setItem("token", Response.data.access);
              navigate("/");
            })
            .catch((error) => {
              alert(error.data);
            });
        }}
        className="logb"
      >
        LOGIN
      </button>
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
