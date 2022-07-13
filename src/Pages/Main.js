import React, { useContext } from "react";
import "./Main.css";
import Banner from "../Components/Banner";
import Products from "../Components/Products";
import Recommended from "../Components/Recommended";
import { LoginContext } from "../context";

function Main() {
  const { token } = useContext(LoginContext);
  return (
    <div>
      <Banner></Banner>
      <Products></Products>
      {token === "" ? "" : <Recommended></Recommended>}
    </div>
  );
}

export default Main;
