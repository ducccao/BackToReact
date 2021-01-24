import React, { Component } from "react";

class PitFall extends Component {
  state = {
    user: "",
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser() {
    $.get(`/api/users/self`).then((user) => {
      this.setState({ user });
    });
  }
  render() {
    return <div>{this.state.user}</div>;
  }
}

export default PitFall;
