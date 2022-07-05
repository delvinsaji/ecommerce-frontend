import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState();
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [firstprice, setFirstprice] = useState(0);
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
  console.log(data);
  return (
    <div>
      <p
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
          <p>{data ? data.product_reviews.length : ""} Reviews</p>
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
              >
                -
              </p>
              <p>{quantity}</p>
              <p
                onClick={() => {
                  setPrice((quantity + 1) * firstprice);
                  setQuantity(quantity + 1);
                }}
              >
                +
              </p>
            </div>
          </div>
          <div className="butto">
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
