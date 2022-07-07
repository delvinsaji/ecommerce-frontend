import React from "react";
import "./Profile.css";
import { useNavigate, Outlet } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div className="profile">
      <h3>MY ACCOUNT</h3>
      <div className="sections">
        <p
          className="y"
          onClick={() => {
            navigate("personal");
          }}
        >
          Personal Details
        </p>
        <p
          className="y"
          onClick={() => {
            navigate("address");
          }}
        >
          My Address
        </p>
        <p
          className="y"
          onClick={() => {
            navigate("myproducts");
          }}
        >
          My Products
        </p>
      </div>
      <div className="ma">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Profile;
