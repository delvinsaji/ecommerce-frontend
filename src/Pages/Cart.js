import React, { useContext, useState, useEffect } from "react";
import "./Cart.css";
import { LoginContext } from "../context";

function Cart() {
  const { token } = useContext(LoginContext);
  const [data, setData] = useState();

  useEffect(() => {
    if (token === "") {
      const d = JSON.parse(localStorage.getItem("cart"));
      setData(d);
    }
  }, []);

  return (
    <div className="scart">
      <div className="sscart">
        <h3>SHOPPING CART</h3>
        {data
          ? data.map((obj) => {
              toq = toquantity + obj.quantity;
              top = toprice + obj.price * obj.quantity;
              return (
                <div className="item">
                  <img
                    src={obj.image}
                    alt="Product"
                    height={100}
                    width={70}
                  ></img>
                  <p className="aaaa">{obj.name}</p>
                  <p className="aaa">Rs. {obj.price * obj.quantity}</p>
                  <p className="aaa">{obj.quantity}</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
                    alt="Delete"
                    width={15}
                  />
                </div>
              );
            })
          : ""}
      </div>
      <div className="billing">
        <h4>TOTAL ()</h4>
        <p>0</p>
        <div className="b">
          <button className="pay">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
