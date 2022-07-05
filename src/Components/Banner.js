import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
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
      <img
        onClick={() => {
          navigate(`product/${data[0].id}/`);
        }}
        src={data ? data[count].image : ""}
        alt="Product Pic"
      />
      <div className="details">
        <h4
          onClick={() => {
            navigate(`product/${data[0].id}/`);
          }}
        >
          {data ? data[count].name : ""}
        </h4>
        <h6
          onClick={() => {
            navigate(`product/${data[0].id}/`);
          }}
        >
          Rs{data ? data[count].price : ""}
        </h6>
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
