import React from "react";
import "./Main.css";
import Banner from "../Components/Banner";
import Products from "../Components/Products";
import Recommended from "../Components/Recommended";

function Main() {
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      <Recommended></Recommended>
    </div>
  );
}

export default Main;
