import React, { useContext } from "react";
import "./Profile.css";
import { useNavigate, Outlet } from "react-router-dom";
import { LoginContext } from "../context";

function Profile() {
  const { setToken } = useContext(LoginContext);
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
            Address
          </p>
          <p
            className="y"
            onClick={() => {
              navigate("myproducts");
            }}
          >
            My Products
          </p>
          <p
            className="y"
            onClick={() => {
              navigate("orders");
            }}
          >
            Orders
          </p>
          <p
            className="y"
            onClick={() => {
              setToken("");
              navigate("/");
            }}
          >
            Log Out
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
