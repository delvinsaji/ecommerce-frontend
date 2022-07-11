import React, { useEffect, useState } from "react";
import "./Search.css";
import { useParams } from "react-router-dom";
import axios from "axios";

function Search(props) {
  const params = useParams();
  const id = params.id;
  const [page, setPage] = useState(1);
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        `https://e1commerce.herokuapp.com/api/search/?search_value=${id}&page=${page}`
      )
      .then((Response) => {
        setData(Response.data);
      });
  }, []);
  console.log(data);
  return (
    <div>
      <h6
        style={{ fontWeight: "normal", fontSize: "20px", marginLeft: "15px" }}
      >
        Search results for {id}
      </h6>
    </div>
  );
}

export default Search;
