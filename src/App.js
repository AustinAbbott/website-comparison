import React from "react";
// import logo from './logo.svg';
import consoleLog from "./functions.js";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputsFull: false };
  }

  testFunc = (event) => {
    event.preventDefault();
    console.log("yes yes yes");
  };


  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <h2>Compare Two Websites</h2>
          <form onSubmit={this.testFunc}>
            <div>
              <div>
                <label>URL1:</label>
                <input type="text" id="URL1" />
              </div>
              <div>
                <label>URL2:</label>
                <input type="text" id="URL2" />
                <br></br>
                <br></br>
                <button>Send It!</button>
              </div>
            </div>
          </form>
        </header>
      </div>
    );
  }
}

export default App;
