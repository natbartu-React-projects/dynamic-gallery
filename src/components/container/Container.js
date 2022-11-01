import React, { useState } from "react";
import "./Container.css";
import Button from "../button/Button";
import Card from "../card/Card";

const Container = () => {
  const [images, setImages] = useState([
    { url: "https://source.unsplash.com/random/1" },
    { url: "https://source.unsplash.com/random/2" },
    { url: "https://source.unsplash.com/random/3" },
    { url: "https://source.unsplash.com/random/4" },
    { url: "https://source.unsplash.com/random/5" },
    { url: "https://source.unsplash.com/random/6" },
  ]);

  return (
    <section className="hero">
      <h1>Dynamic Gallery</h1>
      <Card images={images} />
      <Button images={images} setImages={setImages} />
    </section>
  );
};

export default Container;
