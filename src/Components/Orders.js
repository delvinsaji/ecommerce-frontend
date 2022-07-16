import React, { useContext } from "react";
import "./Orders.css";
import { useLocation } from "react-router-dom";
import { LoginContext } from "../context";

function Orders() {
  const { token } = useContext(LoginContext);
  const { state } = useLocation();
  const { orders } = state;
  console.log(orders);
  return (
    <div>
      <h3 className="infohead">ORDERS</h3>
      {orders
        ? orders.map((obj) => (
            <div className="item2">
              <img src={obj.products.image} alt="Product" width={80}></img>
              <p
                className="it"
                style={{ fontSize: "20px", marginRight: "0px" }}
              >
                {obj.products.name}
              </p>
              <p>{obj.products.price * obj.quantity}</p>
              <p>{obj.quantity}</p>
              <p>{obj.delivered ? " Delivered" : "Not Delivered"}</p>
              <img
                style={{ marginRight: "15px" }}
                src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
                alt="Delete"
                width={15}
              />
            </div>
          ))
        : ""}
    </div>
  );
}

export default Orders;
