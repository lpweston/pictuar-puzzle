import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Upload from "./Components/Upload/Upload";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Upload path="/" />
      </Router>
    </div>
  );
}

export default App;
