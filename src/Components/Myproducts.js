import React, { useState, useEffect, useContext } from "react";
import "./Myproducts.css";
import { LoginContext } from "../context";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Productform(props) {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [desc, setDesc] = useState();
  const [image, setImage] = useState();
  const [category, setCategory] = useState();
  const [status, setStatus] = useState("In Stock");
  const [id, setId] = useState();
  const { token } = useContext(LoginContext);

  useEffect(() => {
    if (props.details !== "") {
      setName(props.details[0]);
      setPrice(props.details[1]);
      setDesc(props.details[2]);
      setImage(props.details[3]);
      setStatus(props.details[4]);
      setCategory(props.details[5]);
      setId(props.details[6]);
    }
  }, [props.details]);

  return (
    <div className="addproduct">
      <h5>{props.purpose} PRODUCT</h5>
      <div className="prodinfo">
        <div className="prod1">
          <div className="prodfield">
            <p>Product Name</p>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Product Name"
            ></input>
          </div>
          <div className="prodfield">
            <p>Description</p>
            <textarea
              value={desc}
              onChange={(e) => {
                setDesc(e.target.value);
              }}
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <div className="prod2">
          <div className="prodfield">
            <p>Price</p>
            <input
              type="text"
              value={price}
              onChange={(e) => {
                setPrice(e.target.value);
              }}
              placeholder="Price Name"
            ></input>
          </div>

          <div className="prodfield">
            <p>Image Url</p>
            <input
              type="text"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              placeholder="URL"
            ></input>
          </div>
          <div className="dropdown">
            <div className="prodfield">
              <p>Status</p>
              <select
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option value="In Stock">Available</option>
                <option value="Not In Stock">Not In Stock</option>
              </select>
            </div>
            <div className="prodfield">
              <p>Category</p>
              <select
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option value="Smartphone">Smartphone</option>
                <option value="Tablet">Tablet</option>
                <option value="Laptop">Laptop </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          if (props.purpose === "UPDATE") {
            console.log(name, category, price, desc, status, image);
            axios
              .post(
                `https://e1commerce.herokuapp.com/api/updateproduct/${id}/`,
                {
                  username: token[0],
                  category: category,
                  name: name,
                  price: price,
                  description: desc,
                  status: status,
                  image: image,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token[1]}`,
                  },
                }
              )
              .then((Response) => {
                alert("Product updated");
              })
              .catch((error) => {
                alert(error.data);
              });
            props.status(false);
          } else {
            axios
              .post(
                `https://e1commerce.herokuapp.com/api/addproduct/`,
                {
                  username: token[0],
                  category: category,
                  name: name,
                  price: price,
                  description: desc,
                  status: status,
                  image: image,
                },
                {
                  headers: {
                    Authorization: `Bearer ${token[1]}`,
                  },
                }
              )
              .then((Response) => {
                alert(Response.data);
              })
              .catch((error) => {
                alert(error.data);
              });
          }
        }}
      >
        {props.purpose} PRODUCT
      </button>
    </div>
  );
}

function Myproducts() {
  const { state } = useLocation();
  const [current, setCurrent] = useState([]);
  const { products } = state;
  const { token } = useContext(LoginContext);
  const [sts, setSts] = useState(false);
  return (
    <div>
      <h3 className="infohead">MY PRODUCTS</h3>
      {products
        ? products.map((obj) => (
            <div>
              <div
                onClick={() => {
                  setCurrent([
                    obj.name,
                    obj.price,
                    obj.desciption,
                    obj.image,
                    obj.status,
                    obj.category,
                    obj.id,
                  ]);
                  setSts(true);
                }}
                className="item1"
              >
                <img src={obj.image} width={60} alt="Product"></img>
                <p className="it">{obj.name}</p>
                <p>{obj.price}</p>
                <p>Quantity</p>
                <img
                  style={{ marginRight: "20px" }}
                  src={
                    "https://cdn-icons-png.flaticon.com/512/1215/1215092.png"
                  }
                  alt="Delete"
                  width={15}
                  onClick={() => {
                    axios
                      .get(
                        `https://e1commerce.herokuapp.com/api/deleteproduct/${obj.id}/`,
                        {
                          headers: { Authorization: `Bearer ${token[1]}` },
                        }
                      )
                      .catch((error) => {
                        alert(error.data);
                      });
                  }}
                />
              </div>
            </div>
          ))
        : ""}
      {sts ? (
        <Productform
          purpose={"UPDATE"}
          details={current}
          status={setSts}
        ></Productform>
      ) : (
        ""
      )}
      <div className="updateproduct"></div>
      <Productform purpose={"ADD"} details={""}></Productform>
    </div>
  );
}

export default Myproducts;
