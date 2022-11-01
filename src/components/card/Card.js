import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [images, setImages] = useState([
    { url: "https://source.unsplash.com/random/1" },
    { url: "https://source.unsplash.com/random/2" },
    { url: "https://source.unsplash.com/random/3" },
    { url: "https://source.unsplash.com/random/4" },
    { url: "https://source.unsplash.com/random/5" },
    { url: "https://source.unsplash.com/random/6" },
  ]);

  return (
    <div className="CardContainer">
      {images.map((img, idx) => (
        <div
          className="card"
          key={idx}
          style={{ background: `url("${img.url}") no-repeat center/cover` }}
        ></div>
      ))}
    </div>
  );
};

export default Card;
