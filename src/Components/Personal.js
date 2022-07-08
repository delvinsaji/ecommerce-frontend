import React, { useState } from "react";
import "./Personal.css";

function Personal() {
  const [username, setUsername] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [oldp, setOldp] = useState();
  const [newp, setNewp] = useState();
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
      <button className="up">CHANGE PASSWORD</button>
    </div>
  );
}

export default Personal;
