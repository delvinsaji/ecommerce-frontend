import React, { useState, useContext } from "react";
import "./Address.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { LoginContext } from "../context";

function Address() {
  const { state } = useLocation();
  const { address } = state;
  const [addcss, setAddcss] = useState("removeaddress");
  const [housename, setHousename] = useState();
  const [cityname, setCityname] = useState();
  const [statename, setStatename] = useState();
  const [pin, setPin] = useState();
  const { token } = useContext(LoginContext);
  return (
    <div>
      <h3 className="infohead">SHIPPING ADDRESS</h3>
      <div className="addressmain">
        {address
          ? address.map((obj) => (
              <div className="address">
                <div>
                  <p>{obj.houseName}</p>
                  <p>{obj.cityName}</p>
                  <p>{obj.stateName}</p>
                  <p>{obj.pin}</p>
                </div>
                <img
                  style={{ cursor: "pointer" }}
                  src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
                  alt="Delete"
                  width={15}
                />
              </div>
            ))
          : ""}
        <div
          className="address ad"
          onClick={() => {
            setAddcss("addaddress");
          }}
        >
          <p>Add Address</p>
          <img
            src="https://cdn-icons.flaticon.com/png/512/4210/premium/4210903.png?token=exp=1657192920~hmac=a8a6021dc6a22682c4c479ab667743ab"
            alt="add"
            width={15}
          />
        </div>
      </div>
      <div className={addcss}>
        <h6>Add Address</h6>
        <div className="addressinfo">
          <div className="addressinfo1">
            <p>House Name</p>
            <input
              type="text"
              value={housename}
              onChange={(e) => {
                setHousename(e.target.value);
              }}
              placeholder="House Name"
            ></input>
          </div>
          <div className="addressinfo1">
            <p>City</p>
            <input
              type="text"
              value={cityname}
              onChange={(e) => {
                setCityname(e.target.value);
              }}
              placeholder="City Name"
            ></input>
          </div>
          <div className="addressinfo1">
            <p>State</p>
            <input
              type="text"
              value={statename}
              onChange={(e) => {
                setStatename(e.target.value);
              }}
              placeholder="House Name"
            ></input>
          </div>
          <div className="addressinfo1">
            <p>Pin</p>
            <input
              type="text"
              value={pin}
              onChange={(e) => {
                setPin(e.target.value);
              }}
              placeholder="House Name"
            ></input>
          </div>
        </div>
        <button
          className="addressb"
          onClick={() => {
            axios
              .post(
                `https://e1commerce.herokuapp.com/api/addaddress/${token[0]}/`,
                {
                  houseName: housename,
                  cityName: cityname,
                  stateName: statename,
                  pin: pin,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token[1]}`,
                  },
                }
              )
              .then((Response) => {
                alert("Address added");
                setAddcss("removeaddress");
              })
              .catch((error) => {
                alert(error.data);
              });
          }}
        >
          Add Address
        </button>
      </div>
    </div>
  );
}

export default Address;
