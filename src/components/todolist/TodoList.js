import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  FormGroup,
  FormControl,
  Typography,
  makeStyles,
  Container,
} from "@material-ui/core";
import Add from "./Add";
import ListTodo from "./ListTodo";
import Todo from "./Todo";
import axios from "axios";
import FilterByID from "./FilterByID";

const styles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#585858",
    minHeight: "100vh",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  groupInput: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  ListTodo: {},
  heading: {
    padding: 24,
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
  },
}));

const TodoList = () => {
  const classes = styles();
  const [todoList, setTodoList] = useState([]);

  const [isAdd, setIsAdd] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  function getData() {
    const url = `https://600d3950f979dd001745c8a3.mockapi.io/api/todo`;
    const config = {};
    setIsLoading(true);
    axios
      .get(url, config)
      .then((rs) => {
        console.log(rs);
        setTodoList(rs.data);
        setIsLoading(false);
      })
      .catch((er) => {
        console.log(er);
      });

    return () => {
      //cleanup;
    };
  }

  useEffect(() => {
    //  effect;
    getData();
  }, [isAdd, isEdit]);

  const addTodo = (todo) => {
    const url = `https://600d3950f979dd001745c8a3.mockapi.io/api/todo`;
    console.log(todo);
    const data = {
      value: todo,
    };

    const config = {};

    axios
      .post(url, data, config)
      .then((data) => {
        console.log(data);
        setIsAdd(!isAdd);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const handleEditTodo = (todo, id, setEditLoading) => {
    const url = `https://600d3950f979dd001745c8a3.mockapi.io/api/todo/${id}`;
    const data = {
      value: todo,
    };
    const config = {};

    axios
      .put(url, data, config)
      .then((data) => {
        console.log(data);
        setIsEdit(!isEdit);
        setEditLoading(false);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const handleDelTodo = (id) => {
    const url = `https://600d3950f979dd001745c8a3.mockapi.io/api/todo/${id}`;
    const config = {};
    axios
      .delete(url, config)
      .then((rs) => {
        console.log(rs);
        setIsEdit(!isEdit);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  const findTodo = (id) => {
    const url = `https://600d3950f979dd001745c8a3.mockapi.io/api/todo/${id}`;
    const config = {};
    axios
      .get(url, config)
      .then((rs) => {
        console.log(rs);
        let data = [{ ...rs.data }];

        setTodoList(data);
      })
      .catch((er) => {
        setIsEdit(!isEdit);
        console.log(er);
      });
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.header}>
          <Typography className={classes.heading}>To Do List</Typography>
        </Box>
        <Box className={classes.groupInput}>
          <Add addTodo={addTodo} />
          <FilterByID findTodo={findTodo} />
        </Box>

        <Box className={classes.ListTodo}>
          <ListTodo>
            {todoList.map((td) => {
              return (
                <Todo
                  key={td.id}
                  todoValues={td}
                  handleEditTodo={handleEditTodo}
                  handleDelTodo={handleDelTodo}
                />
              );
            })}
          </ListTodo>
        </Box>
      </Container>
    </Box>
  );
};

export default TodoList;
