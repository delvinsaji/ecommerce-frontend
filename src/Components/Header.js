import React, { useState, useContext } from "react";
import "./Header.css";
import { LoginContext } from "../context";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const { token } = useContext(LoginContext);
  const [search, setSearch] = useState();

  return (
    <div className="header">
      <div className="header1">
        <h1
          className="main_header"
          onClick={() => {
            navigate("/");
          }}
        >
          Shopee
        </h1>
        <input
          className="search"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
        ></input>
      </div>
      <div className="header2">
        <div className="cart1">
          <img
            src="https://cdn-icons-png.flaticon.com/512/872/872243.png"
            width={20}
            alt="Cart icon"
          />
          <p
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </p>
        </div>
        {token === "" ? (
          <p
            onClick={() => {
              navigate("/login");
            }}
            className="username"
          >
            Login
          </p>
        ) : (
          <p
            onClick={() => {
              navigate("/profile");
            }}
            className="username"
          >
            {token[0]}
          </p>
        )}
      </div>
    </div>
  );
}

export default Header;
