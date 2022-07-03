import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [search, setSearch] = useState();
  return (
    <div className="header">
      <div className="header1">
        <h1>Shopee</h1>
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
        <div className="cart">
          <img
            src="https://cdn-icons-png.flaticon.com/512/872/872243.png"
            width={20}
          />
          <p>Cart</p>
        </div>
        <p className="username">delvinsaji</p>
      </div>
    </div>
  );
}

export default Header;
