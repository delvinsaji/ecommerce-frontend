import React, { useEffect, useState, useContext } from "react";
import "./ProductPage.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Star from "../Components/Star";
import { LoginContext } from "../context";

function ProductPage() {
  const { token } = useContext(LoginContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [firstprice, setFirstprice] = useState(0);
  const [value, setValue] = useState(1);
  const [desc, setDesc] = useState();
  const [log, setLog] = useState("bla1");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    axios
      .post(`https://e1commerce.herokuapp.com/api/product/${id}/`, {
        user: "null",
      })
      .then((Response) => {
        setData(Response.data);
        setPrice(Response.data.price);
        setFirstprice(Response.data.price);
      })
      .catch((error) => {
        alert(error.data);
      });
  }, [id]);

  return (
    <div>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
        className="goback"
      >
        GO BACK
      </p>
      <div className="details">
        <img className="image1" src={data ? data.image : ""} alt="Product" />
        <div className="namedesc">
          <h5 className="name">{data ? data.name : ""}</h5>
          <p>
            {data ? data.product_reviews.length : ""}{" "}
            {(data ? data.product_reviews.length === 1 : false)
              ? "Review"
              : "Reviews"}
          </p>
          <p>Price: {data ? data.price : ""}</p>
          <p>{data ? data.desciption : ""}</p>
        </div>
        <div className="cart">
          <p className="x">Price: {price ? price : ""}</p>
          <p className="x">Status: {data ? data.status : ""}</p>
          <div className="quantity">
            <p>Qty</p>
            <div className="operator">
              <p
                onClick={() => {
                  if (quantity !== 1) {
                    setPrice(firstprice * (quantity - 1));
                    setQuantity(quantity - 1);
                  }
                }}
                className="sign"
              >
                -
              </p>
              <p className="quan">{quantity}</p>
              <p
                onClick={() => {
                  setPrice((quantity + 1) * firstprice);
                  setQuantity(quantity + 1);
                }}
                className="sign"
              >
                +
              </p>
            </div>
          </div>
          <div className="butto">
            <button
              onClick={() => {
                if (token === "") {
                  data["quantity"] = quantity;
                  if (localStorage.getItem("cart") === null) {
                    let cartobj = [data];
                    localStorage.setItem("cart", JSON.stringify(cartobj));
                  } else {
                    let i = JSON.parse(localStorage.getItem("cart"));
                    i.push(data);
                    localStorage.setItem("cart", JSON.stringify(i));
                  }
                } else {
                  axios
                    .post(
                      `https://e1commerce.herokuapp.com/api/addcart/`,
                      {
                        username: token[0],
                        quantity: quantity,
                        product: data.id,
                      },
                      {
                        headers: {
                          Authorization: `Bearer ${token[1]}`,
                        },
                      }
                    )
                    .then((Response) => {
                      if (Response.data === "The item is already in cart") {
                        alert("The item is already in cart");
                      } else {
                        navigate("/cart");
                      }
                    })
                    .catch((error) => {
                      alert(error.data);
                    });
                }
              }}
            >
              {" "}
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <h6 className="Rev">Reviews</h6>
      {data
        ? data.product_reviews.map((obj) => (
            <div className="review">
              <p className="username">{obj.username.username}</p>
              <Star value={Number(obj.rating)}></Star>
              <p className="rde">{obj.desc}</p>
            </div>
          ))
        : ""}
      <div className="addreview">
        <h6 className="Rev add">WRITE A REVIEW</h6>
        <div className="in">
          <p>Rating</p>
          <select className="select" value={value} onChange={handleChange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">3</option>
          </select>
          <p>Review</p>
          <textarea
            value={desc}
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            className="textbox"
          ></textarea>
        </div>
        <p className={log}>
          Please{" "}
          <p
            className="reg"
            onClick={() => {
              navigate("/login");
            }}
          >
            {" "}
            Log in{" "}
          </p>{" "}
          to add a review
        </p>
        <button
          onClick={() => {
            if (token !== "") {
              axios
                .post(
                  "https://e1commerce.herokuapp.com/api/addreview/",
                  {
                    username: token[0],
                    id: data.id,
                    rating: value,
                    description: desc,
                  },
                  {
                    headers: {
                      Authorization: `Bearer ${token[1]}`,
                    },
                  }
                )
                .then((Response) => {
                  if (Response.data === "Review already exists") {
                    alert("Review for the user already exists for the product");
                  }
                })
                .catch((error) => {
                  alert(error.data);
                });
            } else {
              setLog("bla2");
            }
          }}
        >
          ADD REVIEW
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
