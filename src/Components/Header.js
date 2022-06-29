import React, { useState } from "react";
import "./Header.css";

function Header() {
  const [search, setSearch] = useState();
  return (
    <div className="header">
      <div className="header1">
        <h1>Shopee</h1>
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
        ></input>
      </div>
      <div className="header2">
        <p>Cart</p>
        <p>delvinsaji</p>
      </div>
    </div>
  );
}

export default Header;
