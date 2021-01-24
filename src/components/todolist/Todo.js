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
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import axios from "axios";

import ListTodo from "./ListTodo";

const styles = makeStyles((theme) => ({
  todo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    border: "1px solid black",
    padding: "12px 0",
    marginBottom: 12,
    marginTop: 12,
    width: "100%",
    borderRadius: 5,
  },
  btn: {
    margin: 6,
  },
  todoID: {
    color: "black",
    margin: 6,
    fontWeight: "bold",
    fontSize: "24px",
  },
  todoContent: {
    color: "black",
    margin: 6,
    fontWeight: "bold",
    fontSize: "24px",
  },
  todoGroupContent: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  editContent: {
    width: "80%",
  },
  edit: {
    marginLeft: 6,
    width: "100%",
  },
}));

const Todo = (props) => {
  const classes = styles();
  //console.log(props);
  const { id, value } = props.todoValues;
  const [editClick, setEditClick] = useState(false);
  const [todo, setTodo] = useState("");
  const [isEditLoading, setIsEditLoading] = useState(false);

  const HandleEditClick = (e) => {
    setEditClick(!editClick);
  };

  const handleSuccessEdit = (e) => {
    setIsEditLoading(true);
    props.handleEditTodo(todo, id, setIsEditLoading);
    setEditClick(!editClick);
  };

  const handleEditChange = (e) => {
    console.log("ID = ", id);
    setTodo(e.target.value);
  };

  const handleDelClick = (e) => {
    props.handleDelTodo(id);
  };

  const handleKeypress = (e) => {
    if (e.which === 13) {
      handleSuccessEdit(e);
    }
  };

  return (
    <div>
      {editClick ? (
        <Box className={classes.todo}>
          <Box className={classes.editContent}>
            <TextField
              className={classes.edit}
              onKeyPress={handleKeypress}
              onChange={handleEditChange}
              value={todo}
            />
          </Box>

          <Box className={classes.todoGroupBtn}>
            <Button
              variant="contained"
              className={classes.btn}
              onClick={handleSuccessEdit}
            >
              <CheckIcon color="inherit" />
            </Button>
            <Button
              onClick={HandleEditClick}
              variant="contained"
              className={classes.btn}
            >
              <CloseIcon color="error" />
            </Button>
          </Box>
        </Box>
      ) : (
        <div>
          {isEditLoading ? (
            "loading"
          ) : (
            <Box className={classes.todo}>
              <Box className={classes.todoGroupContent}>
                <Box className={classes.todoID}>{id}.</Box>
                <Box className={classes.todoContent}>{value}</Box>
              </Box>

              <Box className={classes.todoGroupBtn}>
                <Button
                  variant="contained"
                  className={classes.btn}
                  onClick={HandleEditClick}
                >
                  <EditIcon color="action" />
                </Button>
                <Button variant="contained" className={classes.btn}>
                  <DeleteForeverIcon color="error" onClick={handleDelClick} />
                </Button>
              </Box>
            </Box>
          )}
        </div>
      )}
    </div>
  );
};

export default Todo;
