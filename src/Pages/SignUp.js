import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div className="login">
      <h3>SIGN UP</h3>
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
        <p>Name</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Name"
        ></input>
        <p>E-mail</p>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="E-mail"
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
      <button className="logb">SIGN UP</button>
      <p className="regmain">
        Already have an account?{" "}
        <p
          className="reg"
          onClick={() => {
            navigate("/login");
          }}
        >
          {" "}
          Login{" "}
        </p>{" "}
        here
      </p>
    </div>
  );
}

export default Signup;
