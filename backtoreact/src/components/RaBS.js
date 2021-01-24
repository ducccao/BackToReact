import React, { useState } from "react";
import * as ReactBootstrap from "react-bootstrap";

const Button = ReactBootstrap.Button;
const Form = ReactBootstrap.Form;
const FormGroup = ReactBootstrap.FormGroup;
const FormControl = ReactBootstrap.FormControl;

const Comment = 0;

const RaBS = () => {
  const [showFrom, setShowForm] = useState(false);

  const click = () => {
    setShowForm(!showFrom);
  };

  return (
    <div>
      <Button onClick={click}>button</Button>

      {showFrom ? <Form>form</Form> : <FormGroup>f group</FormGroup>}
    </div>
  );
};

export default RaBS;
