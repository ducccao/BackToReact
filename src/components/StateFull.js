import React, { Component } from "react";

class StateFull extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState((prevState, props) => ({
      toggle: !prevState.toggle,
    }));
  }

  render() {
    return (
      <div onClick={this.onClick}>
        Hi {this.props.name}
        <br />
        Toggle is: {this.state.toggle}
        {console.log(this.state.toggle)}
      </div>
    );
  }
}

export default StateFull;
