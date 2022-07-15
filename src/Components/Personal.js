import React, { useState, useContext } from "react";
import "./Personal.css";
import { LoginContext } from "../context";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Personal() {
  const { state } = useLocation();
  const { username, name, email, age } = state;
  const [username1, setUsername] = useState(username);
  const [name1, setName] = useState(name);
  const [email1, setEmail] = useState(email);
  const [age1, setAge] = useState(age);
  const [oldp, setOldp] = useState("");
  const [newp, setNewp] = useState("");
  const { token, setToken } = useContext(LoginContext);

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
      <button
        className="up"
        onClick={() => {
          axios
            .post(
              `https://e1commerce.herokuapp.com/api/updateprofile/${token[0]}/`,
              { username: username1, name: name1, age: age1, email: email1 },
              {
                headers: {
                  Authorization: `Bearer ${token[1]}`,
                },
              }
            )
            .then((Response) => {
              if (Response.data === "Successfully updated") {
                token[0] = username1;
                setToken(token);
                console.log(token);
                alert("Successfully Updated");
              } else {
                alert("Username already exists");
              }
            })
            .catch((error) => {
              alert(error.data);
            });
        }}
      >
        UPDATE DETAILS
      </button>
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
      <button
        className="up u"
        onClick={() => {
          axios
            .post(
              `https://e1commerce.herokuapp.com/api/updatepassword/${token[0]}/`,
              { old_password: oldp, new_password: newp },
              {
                headers: {
                  Authorization: `Bearer ${token[1]}`,
                },
              }
            )
            .then((Response) => {
              if (Response.data === "The password entered is incorrect") {
                alert("The password entered is incorrect");
              } else {
                alert("Password changed");
              }
            });
        }}
      >
        CHANGE PASSWORD
      </button>
    </div>
  );
}

export default Personal;
