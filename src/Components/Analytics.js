import React, { useEffect, useState, useContext } from "react";
import "./Analytics.css";
import { LineChart } from "recharts";
import axios from "axios";
import { LoginContext } from "../context";

function Analytics() {
  const [data, setData] = useState();
  const [total, setTotal] = useState();
  const [line, setLine] = useState([]);
  const { token } = useContext(LoginContext);
  useEffect(() => {
    axios
      .get(
        `https://e1commerce.herokuapp.com/api/visitedanalytics/${token[0]}/`,
        {
          headers: {
            Authorization: `Bearer ${token[1]}`,
          },
        }
      )
      .then((Response) => {
        setData(Response.data);
        setTotal(data[Response.data.length - 1]);
      })
      .catch((error) => {
        alert(error.data);
      });
  }, []);

  return <div></div>;
}

export default Analytics;
