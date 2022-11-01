import React from "react";
import Container from "./components/container/Container";

const App = ({ children }) => {
  return (
    <section className="hero">
      {children}
      <Container />
    </section>
  );
};

export default App;
