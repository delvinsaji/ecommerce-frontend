import React, { useEffect, useState } from "react";
import "./Products.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Visited from "../Functions/Visited";

function Products() {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  useEffect(() => {
    axios
      .get(`https://e1commerce.herokuapp.com/api/allproducts/${page}/`)
      .then((Response) => {
        setData(Response.data);
      })
      .catch((error) => {
        alert(error.data);
      });
  }, [page]);
  return (
    <div>
      <h2 className="products_heading">Products</h2>
      <div className="row 1">
        <div
          onClick={() => {
            navigate(`product/${data[0].id}/`);
          }}
          className="row_element"
        >
          <img src={data ? data[0].image : ""} height={150} alt="Product" />
          <p>{data ? data[0].name : ""}</p>
        </div>
        <div
          onClick={() => {
            navigate(`product/${data[1].id}/`);
          }}
          className="row_element"
        >
          <img src={data ? data[1].image : ""} height={150} alt="Product" />
          <p>{data ? data[1].name : ""}</p>
        </div>
        <div
          onClick={() => {
            navigate(`product/${data[2].id}/`);
          }}
          className="row_element"
        >
          <img src={data ? data[2].image : ""} height={150} alt="Product" />
          <p>{data ? data[2].name : ""}</p>
        </div>
        <div
          onClick={() => {
            navigate(`product/${data[3].id}/`);
          }}
          className="row_element"
        >
          <img src={data ? data[3].image : ""} height={150} alt="Product" />
          <p>{data ? data[3].name : ""}</p>
        </div>
      </div>
      <div className="row 2">
        <div
          onClick={() => {
            navigate(`product/${data[4].id}/`);
          }}
          className="row_element"
        >
          <img src={data ? data[4].image : ""} height={150} alt="Product" />
          <p>{data ? data[4].name : ""}</p>
        </div>
        <div
          onClick={() => {
            navigate(`product/${data[5].id}/`);
          }}
          className="row_element"
        >
          <img src={data ? data[5].image : ""} height={150} alt="Product" />
          <p>{data ? data[5].name : ""}</p>
        </div>
        <div
          onClick={() => {
            navigate(`product/${data[6].id}/`);
          }}
          className="row_element"
        >
          <img src={data ? data[6].image : ""} height={150} alt="Product" />
          <p>{data ? data[6].name : ""}</p>
        </div>
        <div
          onClick={() => {
            navigate(`product/${data[7].id}/`);
          }}
          className="row_element"
        >
          <img src={data ? data[7].image : ""} height={150} alt="Product" />
          <p>{data ? data[7].name : ""}</p>
        </div>
      </div>
      <div className="paginator">
        <p
          onClick={() => {
            if (page !== 1) {
              setPage(page - 1);
            }
          }}
        >
          {"<"}
        </p>
        <p>{page}</p>
        <p
          onClick={() => {
            setPage(page + 1);
          }}
        >
          {">"}
        </p>
      </div>
    </div>
  );
}

export default Products;
