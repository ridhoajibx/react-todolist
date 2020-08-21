import React, { useState } from "react";

import Paper from "../components/Paper";
import Header from "../components/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React JS" },
    { text: "Learn React Hooks" },
    { text: "Learn Design from React" }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    const addedTodo = [...todos, { text: value }];

    setTodos(addedTodo);
  };

  const showAddToogle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header showAddToogle={showAddToogle} />

      <TodoForm addTodo={addTodo} showAdd={showAdd} />

      <Todos todos={todos} />
    </Paper>
  );
};

export default TodoList;
