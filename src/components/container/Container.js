import React from "react";
import "./Container.css";
import Button from "../button/Button";
import Card from "../card/Card";

const Container = () => {
  return (
    <section className="hero">
      <Card />
      <Button />
    </section>
  );
};

export default Container;
