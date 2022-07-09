import React, { useEffect, useState, useContext } from "react";
import "./Recommended.css";
import axios from "axios";
import { LoginContext } from "../context";

function Recommended() {
  const [data, setData] = useState();
  const [page, setPage] = useState(1);
  const { token } = useContext(LoginContext);
  useEffect(() => {
    axios
      .get(
        `https://e1commerce.herokuapp.com/api/recommended/delvinsaji/${token[0]}`
      )
      .then((Response) => {
        setData(Response.data);
      })
      .catch((error) => {
        alert(error.data);
      });
  }, [page, token]);

  return (
    <div>
      <h2 className="products_heading">Recommended Products</h2>
      <div className="row 1">
        <div className="row_element">
          <img src={data ? data[0].image : ""} height={150} alt="Product" />
          <p>{data ? data[0].name : ""}</p>
        </div>
        <div className="row_element">
          <img src={data ? data[1].image : ""} height={150} alt="Product" />
          <p>{data ? data[1].name : ""}</p>
        </div>
        <div className="row_element">
          <img src={data ? data[2].image : ""} height={150} alt="Product" />
          <p>{data ? data[2].name : ""}</p>
        </div>
        <div className="row_element">
          <img src={data ? data[3].image : ""} height={150} alt="Product" />
          <p>{data ? data[3].name : ""}</p>
        </div>
      </div>
      <div className="row 2">
        <div className="row_element">
          <img src={data ? data[4].image : ""} height={150} alt="Product" />
          <p>{data ? data[4].name : ""}</p>
        </div>
        <div className="row_element">
          <img src={data ? data[5].image : ""} height={150} alt="Product" />
          <p>{data ? data[5].name : ""}</p>
        </div>
        <div className="row_element">
          <img src={data ? data[6].image : ""} height={150} alt="Product" />
          <p>{data ? data[6].name : ""}</p>
        </div>
        <div className="row_element">
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

export default Recommended;
