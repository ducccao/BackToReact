import React from "react";

class Hi extends React.Component {
  constructor(props) {
    super(props);
    let firstName = this.props.name.split(" ")[0];
    this.state = {
      name: firstName,
    };
  }

  render() {
    return <h1> Hi! {this.props.name} </h1>;
  }
}

export default Hi;
