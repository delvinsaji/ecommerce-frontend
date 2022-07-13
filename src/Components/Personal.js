import React, { useState, useEffect, useContext } from "react";
import "./Personal.css";
import axios from "axios";
import { LoginContext } from "../context";

function Personal() {
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [age, setAge] = useState();
  const [oldp, setOldp] = useState();
  const [newp, setNewp] = useState();
  const { token } = useContext(LoginContext);
  useEffect(() => {
    axios
      .get(`https://e1commerce.herokuapp.com/api/getprofile/${token[0]}/`, {
        headers: { Authorization: `Bearer ${token[1]}` },
      })
      .then((Response) => {
        setName(Response.data.name);
        setEmail(Response.data.email);
        setAge(Response.data.age);
      });
  });
  return (
    <div className="personal">
      <h3 className="infohead">ACCOUNT INFORMATION</h3>
      <div className="inf">
        <div className="in">
          <p>Username</p>
          <input
            type="text"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>
        <div className="in">
          <p>Name</p>
          <input
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div className="in">
          <p>E-mail</p>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <div className="in">
          <p>Age</p>
          <input
            type="text"
            value={age}
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
