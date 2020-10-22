import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputsFull: false, URL1: "", URL2: "" };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  sendURLs = (e) => {
    e.preventDefault();
    console.log(this.state.URL1, this.state.URL2);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Compare Two Websites</h2>
          <form onSubmit={this.sendURLs}>
            <div>
              <div>
                <label>URL1:</label>
                <input
                  type="text"
                  id="URL1"
                  name="URL1"
                  value={this.state.URL1}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>URL2:</label>
                <input
                  type="text"
                  id="URL2"
                  name="URL2"
                  value={this.state.URL2}
                  onChange={this.handleChange}
                />
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
