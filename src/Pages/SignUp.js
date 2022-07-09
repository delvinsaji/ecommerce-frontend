import React, { useState, useContext } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context";
import axios from "axios";

function Signup() {
  const { setToken } = useContext(LoginContext);
  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();
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
        <p>Age</p>
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
          placeholder="Age"
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
            .post("https://e1commerce.herokuapp.com/api/createprofile/", {
              username: username,
              name: name,
              password: password,
              age: age,
              email: email,
            })
            .then((Response) => {
              axios
                .post("https://e1commerce.herokuapp.com/api/token/", {
                  username: username,
                  password: password,
                })
                .then((Response) => {
                  setToken([username, Response.data.access]);
                  navigate("/");
                })
                .catch((error) => {
                  alert(error.data);
                });
            })
            .catch((error) => {
              alert(error.data);
            });
        }}
        className="logb"
      >
        SIGN UP
      </button>
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
