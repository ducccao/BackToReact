import React, { Component } from "react";

const PrintHello = (ComposedComponent) =>
  class extends Component {
    onClick() {
      //  prompt("HOC");
      alert("HOC");
      console.log("C");
    }

    render() {
      return <ComposedComponent {...this.props} onClick={this.onClick} />;
    }
  };

export default PrintHello;
