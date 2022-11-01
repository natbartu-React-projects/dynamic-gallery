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

  const removeImage = () => {
    setImages(images.slice(0, -1));
  };

  return (
    <div className="btnContainer">
      <button onClick={removeImage}>Remove</button>
      <button onClick={getNewImage}>Add</button>
    </div>
  );
};

export default Button;
