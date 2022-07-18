import React, { useContext, useState, useEffect } from "react";
import "./Cart.css";
import { LoginContext } from "../context";
import axios from "axios";

function Cart() {
  const { token } = useContext(LoginContext);
  const [data, setData] = useState();
  const [stat, setStat] = useState(1);
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
        })
        .catch((error) => {
          alert(error.data);
        });
    }
  }, [stat, token]);
  return (
    <div className="scart">
      <div className="sscart">
        <h3>SHOPPING CART</h3>
        {data
          ? data.map((obj) => {
              if (obj.price && token !== "") {
                return <div>{}</div>;
              } else {
                return (
                  <div className="item">
                    <img
                      src={token === "" ? obj.image : obj.product.image}
                      alt="Product"
                      height={90}
                      width={80}
                    ></img>
                    <p className="aaaa">
                      {token === "" ? obj.name : obj.product.name}
                    </p>
                    <p className="aaa">
                      Rs.{" "}
                      {(token === "" ? obj.price : obj.product.price) *
                        obj.quantity}
                    </p>
                    <p className="aaa">{obj.quantity}</p>
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
                      alt="Delete"
                      width={15}
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        if (token !== "") {
                          axios
                            .post(
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
                            )
                            .then((Response) => {
                              setStat(stat + 1);
                            })
                            .catch((error) => {
                              alert(error.data);
                            });
                        }
                      }}
                    />
                  </div>
                );
              }
            })
          : ""}
      </div>
      <div className="billing">
        <h4>TOTAL ({data ? data[data.length - 1].quantity : ""})</h4>
        <p>{data ? data[data.length - 1].price : ""}</p>
        <div className="b">
          <button className="pay">PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
