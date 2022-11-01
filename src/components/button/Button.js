import React from "react";
import "./Button.css";

const Button = ({ images, setImages }) => {
  const getNewImage = () => {
    setImages([
      ...images,
      {
        url: `https://source.unsplash.com/random/${Math.floor(
          Math.random() * 100
        )}`,
      },
    ]);
  };

  return (
    <div className="btnContainer">
      <button>Remove</button>
      <button onClick={getNewImage}>Add</button>
    </div>
  );
};

export default Button;
