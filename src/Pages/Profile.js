import React from "react";
import "./Profile.css";
import { useNavigate, Outlet } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <div>
      <h3 className="acc">MY ACCOUNT</h3>
      <div className="profile">
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
    </div>
  );
}

export default Profile;