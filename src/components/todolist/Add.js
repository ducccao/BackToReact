import React, { useState } from "react";
import {
  Box,
  Button,
  FormGroup,
  FormControl,
  Typography,
  makeStyles,
  InputLabel,
  TextField,
} from "@material-ui/core";

import axios from "axios";

import ListTodo from "./ListTodo";
import Todo from "./Todo";

const styles = makeStyles((theme) => ({
  add: {
    //  backgroundColor: "blue",
  },
  root: {
    "& input": {
      color: "white",
      background: "#252424",
      borderRadius: 5,
    },
    borderRadius: 5,
    width: "80%",
  },
  btn: {
    height: "56px",
    width: "20%",
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    marginLeft: "-2px",
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
    <Box width="50%" className={classes.add}>
      <TextField
        label="Add Todo"
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
