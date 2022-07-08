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
          <div className="prod1">
            <div className="prodfield">
              <p>Product Name</p>
              <input type="text" placeholder="Product Name"></input>
            </div>
            <div className="prodfield">
              <p>Description</p>
              <textarea placeholder="Description"></textarea>
            </div>
          </div>
          <div className="prod2">
            <div className="prodfield">
              <p>Price</p>
              <input type="text" placeholder="Price Name"></input>
            </div>

            <div className="prodfield">
              <p>Image Url</p>
              <input type="text" placeholder="URL"></input>
            </div>
            <div className="dropdown">
              <div className="prodfield">
                <p>Status</p>
                <select>
                  <option value="Available">Available</option>
                  <option value="Not In Stock">Not In Stock</option>
                </select>
              </div>
              <div className="prodfield">
                <p>Category</p>
                <select>
                  <option value="Smartphone">Smartphone</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <button>ADD PRODUCT</button>
      </div>
    </div>
  );
}

export default Myproducts;
