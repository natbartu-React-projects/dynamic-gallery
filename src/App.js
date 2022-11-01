import React from "react";
import Container from "./components/container/Container";

const App = ({ children }) => {
  return (
    <div className="App">
      {children}
      <Container />
    </div>
  );
};

export default App;
