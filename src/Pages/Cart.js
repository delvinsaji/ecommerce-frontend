import React, { useContext, useState, useEffect } from "react";
import "./Cart.css";
import { LoginContext } from "../context";
import axios from "axios";

function Cart() {
  const { token } = useContext(LoginContext);
  const [data, setData] = useState();

  useEffect(() => {
    if (token === "") {
      const d = JSON.parse(localStorage.getItem("cart"));
      setData(d);
    } else {
      axios
        .get(`https://e1commerce.herokuapp.com/api/getcart/${token[0]}`, {
          headers: { Authorization: `Bearer ${token[1]}` },
        })
        .then((Response) => {
          setData(Response.data);
        });
    }
  }, []);

  console.log(data);

  return (
    <div className="scart">
      <div className="sscart">
        <h3>SHOPPING CART</h3>
        {data
          ? data.map((obj) => {
              return (
                <div className="item">
                  <img
                    src={obj.product.image}
                    alt="Product"
                    height={90}
                    width={80}
                  ></img>
                  <p className="aaaa">{obj.product.name}</p>
                  <p className="aaa">Rs. {obj.product.price * obj.quantity}</p>
                  <p className="aaa">{obj.quantity}</p>
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
                    alt="Delete"
                    width={15}
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      axios.post(
                        "https://e1commerce.herokuapp.com/api/deletecart/",
                        {
                          username: token[0],
                          product: obj.product.id,
                        },
                        {
                          headers: {
                            Authorization: `Bearer ${token[1]}`,
                          },
                        }
                      );
                    }}
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
