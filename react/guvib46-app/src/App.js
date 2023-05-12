import React, { Component } from "react";
import Header from "./Header";
import "./App.css";

// let users = [
//   {
//     id: 1,
//     name: "John",
//     phone: "2323232323",
//   },
//   {
//     id: 2,
//     name: "Jill",
//     phone: "6756765678",
//   },
//   {
//     id: 3,
//     name: "Mars",
//     phone: "3434343434",
//   },
//   {
//     id: 4,
//     name: "Jupi",
//     phone: "43434343434",
//   },
//   {
//     id: 5,
//     name: "Venus",
//     phone: "43434343434",
//   },
// ];

class App extends Component {
  constructor() {
    super();
    this.state = {
      userListToShow: [],
    };
  }
  // delete() {
  //   alert("Delete button clcked!!!");
  // }
  render() {
    return (
      <div>
        <Header heading="Welcome to GUVIB46" course="MERN Stack" />
        <div className="component-body-container">
          <button className="custom-btn add-btn"> Add </button>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {this.state.userListToShow.map((user) => {
            return (
              <div key={user.id} className="grid-container">
                <span className="grid-item">{user.name}</span>
                <span className="grid-item">{user.phone}</span>
                <span className="grid-item">
                  <button
                    className="custom-btn delete-btn"
                    onClick={this.delete}
                  >
                    Delete
                  </button>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
