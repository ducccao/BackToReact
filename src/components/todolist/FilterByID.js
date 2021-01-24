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
  root: {},
  find: {
    width: "80%",
    "& input": {
      color: "white",
      background: "#252424",
      borderRadius: 5,
      "& ::-webkit-input-placeholder": {
        color: "white",
      },
    },
  },
  btn: {
    width: "20%",
    height: "56px",
  },
  er: {
    color: "yellow",
  },
}));

const FilterByID = (props) => {
  const classes = styles();
  const [findValue, setFindValue] = useState("");
  const [err, setErr] = useState(false);

  const handleFind = (e) => {
    props.findTodo(findValue);
  };
  const handleChange = (e) => {
    setFindValue(e.target.value);
    if (isNaN(e.target.value)) {
      setErr(true);
    } else {
      setErr(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.which === 13) {
      handleFind(e);
    }
  };
  return (
    <Box width="50%" className={classes.root}>
      <TextField
        onKeyPress={handleKeyPress}
        onChange={handleChange}
        className={classes.find}
        color="secondary"
        variant="outlined"
        label="Find Todo"
        helperText={
          err === true ? (
            <Typography className={classes.er}>
              Find Value Must Be A Number{" "}
            </Typography>
          ) : (
            ""
          )
        }
      />
      <Button onClick={handleFind} variant="contained" className={classes.btn}>
        Find
      </Button>
    </Box>
  );
};

export default FilterByID;
