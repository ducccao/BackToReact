import { func } from "prop-types";
import React from "react";

const Hi = (props) => <h1>Hi {props.name} </h1>;

function Home() {
  return <Hi />;
}

Hi.propTypes = {
  name: React.PropTypes.string.isRequired,
};

export default Hi;
