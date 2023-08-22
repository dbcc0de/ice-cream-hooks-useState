import React from "react";
import "./App.css";
import AdDesigner from "./components/AdDesigner";
import Header from "./components/Header";
import Votes from "./components/Votes";
import Ad from "./components/Ad";

function App() {
  return (
    <div className="App">
      {/* {user: "chirpus"} */}
      <Header user="chirpus" />
      <Ad flavor="Chocolate" lightTheme={false} fontSize={20} />
      <Ad flavor="Vanilla" lightTheme={true} fontSize={20} />
      <Ad flavor="Strawberry" lightTheme={false} fontSize={20} />
      <div className="main-container">
        <AdDesigner />
        <Votes />
      </div>
    </div>
  );
}

export default App;
