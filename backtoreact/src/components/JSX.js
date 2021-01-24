import React from "react";
import moduleName from "prop-types";

const JSX = (props) => {
  return <div> Hi {props.name} </div>;
};

JSX.propTypes = {
  name: PropTypes.string.isRequired,
};

export default JSX;
