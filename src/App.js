import React from "react";
// import logo from './logo.svg';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
        <div>
          <div>
            <label>URL1:</label>
            <input type="text" id="URL1" oninput="fetchDom()" />
          </div>
          <div>
            <label>URL2:</label>
            <input type="text" id="URL2" oninput="fetchDom()" />
            <br></br>
            <br></br>
            <buttton>Submit</buttton>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
