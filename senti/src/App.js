import React from "react";
import Spinner from 'react-bootstrap/Spinner';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1 id="brand">SENTI</h1>
        <h2 id="tag">Blazingly fast sentiment analysis.</h2>
      </header>
      <Spinner id="spinner" animation="border" />
      <h5 id="tag">UNDER CONSTRUCTION</h5>
      <h5 id="tag">工事中</h5>
    </div>
  );
}

export default App;
