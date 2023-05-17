import React, { Component } from "react";
import Header from "./Header";
import "./ShowUser.css";
import { Link } from "react-router-dom";

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

class ShowUser extends Component {
  constructor() {
    super();
    this.state = {
      userListToShow: [],
    };
    console.log("The call is from CONSTRUCTOR");
  }
  componentDidMount() {
    let newUser = {
      id: 1,
      name: "Person A",
      phone: "3423434344",
    };
    let userList = this.state.userListToShow;
    userList.push(newUser);
    this.setState({ userListToShow: userList });
    console.log("The call is from COMPONENT DID MOUNT");
  }

  componentDidUpdate() {
    console.log("The call is from COMPONENT DID UPDATE");
  }

  componentWillUnmount() {
    console.log("The call is from COMPONENT WILL UNMOUNT");
  }
  // delete() {
  //   alert("Delete button clcked!!!");
  // }
  render() {
    console.log("The call is from RENDER METHOD");
    return (
      <div>
        <Header heading="Welcome to GUVIB46" course="MERN Stack" />
        <div className="component-body-container">
          <Link to="/add">
            <button className="custom-btn add-btn"> Add </button>
          </Link>
          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {this.props.userList.map((user) => {
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

export default ShowUser;
