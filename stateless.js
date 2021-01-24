import React from "react";

const cpn = (props) => <div> {props.content} </div>;

const cpn2 = React.createClass({
  render: function () {
    return <div> {this.props.content} </div>;
  },
});
