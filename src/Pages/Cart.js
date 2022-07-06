import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="scart">
      <div className="sscart">
        <h3>SHOPPING CART</h3>
        <div className="item">
          <img src="a" alt="Product"></img>
          <p>Name</p>
          <p>Price</p>
          <p>Quantity</p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
            alt="Delete"
            width={15}
          />
        </div>
      </div>
      <div className="billing">
        <h4>TOTAL ()</h4>
        <p>345</p>
        <div className="b">
          <button className="pay">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
