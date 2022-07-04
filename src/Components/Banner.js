import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";

function Banner() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    axios
      .get("https://e1commerce.herokuapp.com/api/topfive/")
      .then((Response) => {
        setData(Response.data);
      })
      .catch((error) => {
        alert(error.data);
      });
  }, []);
  console.log(data);
  return (
    <div className="banner">
      <p
        className="mover"
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        {"<"}
      </p>
      <img src={data ? data[count].image : ""} alt="Product Pic" />
      <div className="details">
        <h4>{data ? data[count].name : ""}</h4>
        <h6>Rs{data ? data[count].price : ""}</h6>
      </div>
      <p
        className="mover"
        onClick={() => {
          if (count < 4) {
            setCount(count + 1);
          }
        }}
      >
        {">"}
      </p>
    </div>
  );
}

export default Banner;
