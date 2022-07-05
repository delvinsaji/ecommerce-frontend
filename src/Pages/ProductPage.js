import React, { useEffect, useState } from "react";
import "./ProductPage.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductPage() {
  const { id } = useParams();
  const [data, setData] = useState();
  useEffect(() => {
    axios
      .post(`https://e1commerce.herokuapp.com/api/product/${id}/`, {
        user: "null",
      })
      .then((Response) => {
        setData(Response.data);
      })
      .catch((error) => {
        alert(error.data);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <h1>Hello </h1>
    </div>
  );
}

export default ProductPage;
