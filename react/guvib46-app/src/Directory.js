import React, { Component } from "react";
import AddUser from "./AddUser";

export class Directory extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
    };
  }

  addUser = (newUser) => {
    let userList = this.state.userList;
    if (userList.length > 0) {
      //userList[2 - 1]
      //userList[1].id = 2
      //2 + 1 = 3
      newUser.id = userList[userList.length - 1].id + 1;
    } else {
      newUser.id = 1;
    }
    userList.push(newUser);
    this.setState({ userList: userList });
    console.log(this.state.userList);
  };
  render() {
    return <AddUser addUserHandler={this.addUser}></AddUser>;
  }
}

export default Directory;
