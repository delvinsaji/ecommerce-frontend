import React, { useEffect, useState, useContext } from "react";
import "./Analytics.css";
import axios from "axios";
import { LoginContext } from "../context";

function Analytics() {
  const [vdata, setVdata] = useState();
  const [odata, setOdata] = useState();
  const [vtotal, setVtotal] = useState();
  const [ototal, setOtotal] = useState();
  const { token } = useContext(LoginContext);
  console.log(token);
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
        setVdata(Response.data);
        setVtotal(vdata[Response.data.length - 1]);
      })
      .catch((error) => {
        alert(error.data);
      });
    axios
      .get(
        `https://e1commerce.herokuapp.com/api/ordersanalytics/${token[0]}/`,
        {
          headers: {
            Authorization: `Bearer ${token[1]}`,
          },
        }
      )
      .then((Response) => {
        setOdata(Response.data);
        setOtotal(odata[Response.data.length - 1]);
      })
      .catch((error) => {
        alert(error.data);
      });
  }, []);

  return (
    <div>
      <h3 style={{ fontWeight: "normal" }}>
        Numbers of users visited my products
      </h3>
      <table style={{ border: "1px solid white" }}>
        <tr>
          <th>Date</th>
          <th>User count</th>
        </tr>
        {vtotal
          ? Object.keys(vtotal).map((obj, index) => (
              <tr>
                <td style={{ border: "1px solid white" }}>{obj}</td>
                <td style={{ textAlign: "center", border: "1px solid white" }}>
                  {vtotal[obj]}
                </td>
              </tr>
            ))
          : ""}
      </table>
      <h3 style={{ fontWeight: "normal" }}>
        Numbers of users ordered my products
      </h3>
      <table style={{ border: "1px solid white" }}>
        <tr>
          <th>Date</th>
          <th>User count</th>
        </tr>
        {ototal
          ? Object.keys(ototal).map((obj, index) => (
              <tr>
                <td style={{ border: "1px solid white" }}>{obj}</td>
                <td style={{ textAlign: "center", border: "1px solid white" }}>
                  {ototal[obj]}
                </td>
              </tr>
            ))
          : ""}
      </table>
    </div>
  );
}

export default Analytics;
