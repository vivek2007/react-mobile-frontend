import React from "react";
import "../App.css";

class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <div>{props.children}</div>
      </div>
    );
  }
}

export default Layout;
