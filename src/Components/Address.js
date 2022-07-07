import React, { useState } from "react";
import "./Address.css";

function Address() {
  const [addcss, setAddcss] = useState("removeaddress");
  const [housename, setHousename] = useState();
  const [cityname, setCityname] = useState();
  const [statename, setStatename] = useState();
  const [pin, setPin] = useState();
  return (
    <div>
      <h3 className="infohead">SHIPPING ADDRESS</h3>
      <div className="addressmain">
        <div className="address">
          <div>
            <p>houseName</p>
            <p>cityName</p>
            <p>stateName</p>
            <p>pin</p>
          </div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
            alt="Delete"
            width={15}
          />
        </div>
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
            setAddcss("removeaddress");
          }}
        >
          Add Address
        </button>
      </div>
    </div>
  );
}

export default Address;
