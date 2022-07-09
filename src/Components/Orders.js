import React from "react";
import "./Orders.css";

function Orders() {
  return (
    <div>
      <h3 className="infohead">ORDERS</h3>
      <div className="item2">
        <img src="a" alt="Product"></img>
        <p className="it">Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Date</p>
        <p>Delivered</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
          alt="Delete"
          width={15}
        />
      </div>
    </div>
  );
}

export default Orders;
