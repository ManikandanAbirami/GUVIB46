import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <button className="custom-btn"> Add </button>
        <div>
          <span>Name</span> <br></br>
          <span>Phone</span>
        </div>
      </div>
    );
  }
}

export default App;
