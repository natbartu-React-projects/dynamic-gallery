import React from "react";
import Container from "./components/container/Container";
import Images from "./components/images/Images";

const App = ({ children }) => {
  return (
    <div className="App">
      {children}
      <Images />
      <Container />
    </div>
  );
};

export default App;
