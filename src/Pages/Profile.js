import React from "react";
import "./Profile.css";
import { useNavigate, Outlet } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  function nav(stri) {
    navigate(stri);
  }

  return (
    <div className="profile">
      <h3>MY ACCOUNT</h3>
      <div className="sections">
        <p onClick={nav("personal")}>Personal Details</p>
        <p onClick={nav("address")}> My Address</p>
        <p onClick={nav("myproducts")}> My Products</p>
      </div>
      <div className="ma">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Profile;
