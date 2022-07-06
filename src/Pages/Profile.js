import React from "react";
import "./Profile.css";
import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h3>MY ACCOUNT</h3>
      <div className="sections">
        <Link className="li" to="personal">
          Personal Details
        </Link>
        <Link className="li" to="address">
          My Address
        </Link>
        <Link className="li" to="myproducts">
          My Products
        </Link>
      </div>
      <div className="ma">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Profile;
