import React, { useState, useContext } from "react";
import "./Personal.css";
import { LoginContext } from "../context";
import { useLocation } from "react-router-dom";

function Personal() {
  const { state } = useLocation();
  const { username, name, email, age } = state;
  const [username1, setUsername] = useState(username);
  const [name1, setName] = useState(name);
  const [email1, setEmail] = useState(email);
  const [age1, setAge] = useState(age);
  const [oldp, setOldp] = useState();
  const [newp, setNewp] = useState();
  const { token } = useContext(LoginContext);

  return (
    <div className="personal">
      <h3 className="infohead">ACCOUNT INFORMATION</h3>
      <div className="inf">
        <div className="in">
          <p>Username</p>
          <input
            type="text"
            value={username1}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>
        <div className="in">
          <p>Name</p>
          <input
            type="text"
            value={name1}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="in">
          <p>E-mail</p>
          <input
            type="text"
            value={email1}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="in">
          <p>Age</p>
          <input
            type="text"
            value={age1}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          ></input>
        </div>
      </div>
      <button className="up">UPDATE DETAILS</button>
      <p className="change">CHANGE PASSWORD</p>
      <div className="change1">
        <p>Old Password</p>
        <input
          type="password"
          value={oldp}
          onChange={(e) => {
            setOldp(e.target.value);
          }}
        ></input>
        <p>New Password</p>
        <input
          type="password"
          value={newp}
          onChange={(e) => {
            setNewp(e.target.value);
          }}
        ></input>
      </div>
      <button className="up u">CHANGE PASSWORD</button>
    </div>
  );
}

export default Personal;
