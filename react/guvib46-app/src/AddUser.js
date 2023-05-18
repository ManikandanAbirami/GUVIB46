import React, { Component } from "react";
import Header from "./Header";
import "./AddUser.css";
import { Link } from "react-router-dom";

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
    e.preventDefault();
    this.props.addUserHandler(this.state);
    this.setState({ id: 0, name: "", phone: "" });
  };
  render() {
    const { name, phone } = this.state;
    return (
      <div>
        <Header
          message={this.props.message}
          heading="Welcome to Add User Page"
          name={this.props.name}
        ></Header>
        <div className="component-body-container">
          <Link to="/">
            <button className="custom-btn">Back</button>
          </Link>
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
