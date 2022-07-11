import React, { useEffect, useState } from "react";
import "./Search.css";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Search(props) {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [page, setPage] = useState(1);
  const links = [
    `https://e1commerce.herokuapp.com/api/search/?search_value=${id}&page=${page}`,
    `https://e1commerce.herokuapp.com/api/spricesort/${0}/${page}/${id}/`,
    `https://e1commerce.herokuapp.com/api/spricesort/${1}/${page}/${id}/`,
    `https://e1commerce.herokuapp.com/api/sdatetimesort/${0}/${page}/${id}/`,
  ];

  const [data, setData] = useState();
  const [stat, setStat] = useState(links[0]);

  useEffect(() => {
    axios.get(stat).then((Response) => {
      setData(Response.data);
    });
  }, [page, stat]);

  console.log(data);
  return (
    <div>
      <div className="searchhead">
        <h6
          style={{ fontWeight: "normal", fontSize: "20px", marginLeft: "15px" }}
        >
          Search results for {id}
        </h6>
        <div className="sort">
          <p>Sort: </p>
          <select
            onChange={(e) => {
              let x = e.target.value;
              if (x === "Pricehl") {
                setStat(links[1]);
              } else if (x === "Pricelh") {
                setStat(links[2]);
              } else {
                setStat(links[3]);
              }
            }}
          >
            <option value={"None"}></option>
            <option value={"Pricehl"}>Price: Low to High</option>
            <option value={"Pricelh"}>Price: High to Low</option>
            <option value={"recent"}>Recently added</option>
          </select>
        </div>
      </div>
      <div className="searchmain">
        {data
          ? data.map((obj) => (
              <div
                onClick={() => {
                  navigate(`product/${obj.id}/`);
                }}
                className="row_element"
              >
                <img src={obj.image} height={150} alt="Product" />
                <p>{obj.name}</p>
                <p style={{ fontSize: "10px", marginTop: "5px" }}>
                  Rs.{obj.price}
                </p>
              </div>
            ))
          : ""}
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

export default Search;
