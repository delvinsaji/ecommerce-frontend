import React from "react";
import "./Starn.css";

function Star(props) {
  return (
    <div className="star-rating">
      {[...Array(props.value)].map((star) => {
        return <span className="star">&#9733;</span>;
      })}
      {[...Array(5 - props.value)].map((star) => {
        return <span className="star1">&#9733;</span>;
      })}
    </div>
  );
}

export default Star;
