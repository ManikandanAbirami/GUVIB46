import React, { Component } from "react";
import Header from "./Header";
import "./AddUser.css";

class AddUser extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      name: "",
      phone: "",
    };
  }
  inputChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
    console.log(this.state);
  };
  onSubmit = (e) => {
    e.prevenDefault();
    this.props.addUserHandler(this.state);
  };
  render() {
    const { name, phone } = this.state;
    return (
      <div>
        <Header heading="Welcome to Add User Page"></Header>
        <div className="component-body-container">
          <button className="custom-btn">Back</button>
          <form className="user-form" onSubmit={this.onSubmit.bind(this)}>
            <label htmlFor="name" className="label-control">
              Name:
            </label>
            <br />
            <input
              id="name"
              type="text"
              className="input-control"
              name="name"
              onChange={this.inputChange}
            ></input>
            <br />
            <br />
            <label htmlFor="phone" className="label-control">
              Phone:
            </label>
            <br />
            <input
              id="phone"
              type="text"
              className="input-control"
              name="phone"
              onChange={this.inputChange}
            ></input>
            <div className="user-info-container">
              <span className="user-to-add-heading">User to be added:</span>{" "}
              <br />
              <span className="user-info">Name: {name}</span> <br />
              <span className="user-info">Phone: {phone}</span> <br />
            </div>
            <button type="submit" className="custom-btn add-btn">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddUser;
