import React from "react";
import Container from "./components/container/Container";

const App = ({ children }) => {
  return (
    <>
      {children}
      <Container />
    </>
  );
};

export default App;
