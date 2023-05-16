import React, { Component } from "react";
import "./Header.css";

const Header = function (props) {
  return (
    <div className="header">
      {props.heading} --- {props.course}
    </div>
  );
};

// class Header extends Component {
//   render() {
//     return (
//       <div className="header">{`${this.props.heading} - ${this.props.course}`}</div>
//     );
//   }
// }

export default Header;
