import React from "react";
import "./Card.css";

const Card = ({ images }) => {
  return (
    <div className="CardContainer">
      {images.map((img, idx) => (
        <div
          className="card"
          key={idx}
          style={{
            background: `url("${img.url}") no-repeat center/cover`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Card;
