import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

class App extends Component {
  render() {
    let users = [
      {
        name: "John",
        phone: "2323232323",
      },
      {
        name: "Jill",
        phone: "6756765678",
      },
      {
        name: "Mars",
        phone: "3434343434",
      },
      {
        name: "Jupi",
        phone: "43434343434",
      },
    ];
    return (
      <div>
        <Header />
        <div className="component-body-container">
          <button className="custom-btn add-btn"> Add </button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span> <br></br>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {/* <div className="grid-container">
            <span className="grid-item"></span> <br></br>
            <span className="grid-item"></span>
          </div>

          <div className="grid-container">
            <span className="grid-item"></span> <br></br>
            <span className="grid-item"></span>
          </div>

          <div className="grid-container">
            <span className="grid-item"></span> <br></br>
            <span className="grid-item"></span>
          </div>

          <div className="grid-container">
            <span className="grid-item"></span> <br></br>
            <span className="grid-item"></span>
          </div> */}

          {users.map((user) => {
            return (
              <div className="grid-container">
                <span className="grid-item">{user.name}</span>
                <span className="grid-item">{user.phone}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
