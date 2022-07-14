import React, { useEffect, useState, useContext } from "react";
import "./Profile.css";
import { useNavigate, Outlet } from "react-router-dom";
import { LoginContext } from "../context";
import axios from "axios";

function Profile() {
  const { setToken, token } = useContext(LoginContext);
  const navigate = useNavigate();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .get(`https://e1commerce.herokuapp.com/api/getprofile/${token[0]}/`, {
        headers: { Authorization: `Bearer ${token[1]}` },
      })
      .then((Response) => {
        setData(Response.data);
      })
      .catch((error) => {
        alert(error.data);
      });
  });
  return (
    <div>
      <h3 className="acc">MY ACCOUNT</h3>
      <div className="profile">
        <div className="sections">
          <p
            className="y"
            onClick={() => {
              navigate("personal", {
                state: {
                  username: data.username,
                  name: data.name,
                  age: data.age,
                  email: data.email,
                },
              });
            }}
          >
            Personal Details
          </p>
          <p
            className="y"
            onClick={() => {
              navigate("address", { state: { address: data.address } });
            }}
          >
            Address
          </p>
          <p
            className="y"
            onClick={() => {
              navigate("myproducts", { state: { products: data.products } });
            }}
          >
            My Products
          </p>
          <p
            className="y"
            onClick={() => {
              navigate("orders", { state: { orders: data.orders } });
            }}
          >
            Orders
          </p>
          <p
            className="y"
            onClick={() => {
              navigate("analytics");
            }}
          >
            Analytics
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
