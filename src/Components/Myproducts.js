import React from "react";
import "./Myproducts.css";

function Myproducts() {
  return (
    <div>
      <h3 className="infohead">MY PRODUCTS</h3>
      <div className="item1">
        <img src="a" alt="Product"></img>
        <p className="it">Name</p>
        <p>Price</p>
        <p>Quantity</p>
        <img
          src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
          alt="Delete"
          width={15}
        />
      </div>
      <div className="addproduct">
        <h5>ADD PRODUCT</h5>
        <div className="prodinfo">
          <div className="prodfield">
            <p>Product Name</p>
            <input type="text" placeholder="Product Name"></input>
          </div>
          <div className="prodfield">
            <p>Product Name</p>
            <input type="text" placeholder="Product Name"></input>
          </div>
          <div className="prodfield">
            <p>Product Name</p>
            <input type="text" placeholder="Product Name"></input>
          </div>
          <div className="prodfield">
            <p>Product Name</p>
            <input type="text" placeholder="Product Name"></input>
          </div>
          <div className="prodfield">
            <p>Product Name</p>
            <input type="text" placeholder="Product Name"></input>
          </div>
          <div className="prodfield">
            <p>Product Name</p>
            <input type="text" placeholder="Product Name"></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Myproducts;
