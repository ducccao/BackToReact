import React, { useState } from "react";
import {
  Box,
  Button,
  FormGroup,
  FormControl,
  Typography,
  makeStyles,
  TextField,
} from "@material-ui/core";

import axios from "axios";

import ListTodo from "./ListTodo";
import Todo from "./Todo";

const styles = makeStyles((theme) => ({
  root: {
    "& input": {
      color: "white",
      background: "#252424",
      borderRadius: 5,
    },
    borderRadius: 5,
    width: "66vw",
    maxWidth: "70vw",
  },
  btn: {
    height: "56px",
    marginLeft: 12,
  },
}));

const Add = (props) => {
  const classes = styles();
  const [todo, setTodo] = useState("");

  const change = (e) => {
    setTodo(e.target.value);
  };
  const click = (e) => {
    props.addTodo(todo);
    setTodo("");
  };

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      props.addTodo(todo);
      setTodo("");
    }
  };
  return (
    <Box>
      <TextField
        onKeyPress={handleKeyPress}
        variant="outlined"
        color="secondary"
        className={classes.root}
        onChange={change}
        value={todo}
      />
      <Button onClick={click} variant="contained" className={classes.btn}>
        Add
      </Button>
    </Box>
  );
};

export default Add;
