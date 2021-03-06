import React, { useState } from "react";

import Paper from "../components/paper/Paper";
import Header from "../components/header/Header";
import TodoForm from "../components/TodoForm";
import Todos from "../components/Todos";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { text: "Learn React JS", isCompleted: false },
    { text: "Learn React Hooks", isCompleted: false },
    { text: "Learn Design from React", isCompleted: false }
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = (value) => {
    if (todos.length < 8) {
      const addedTodo = [...todos, { text: value, isCompleted: false }];

      setTodos(addedTodo);
    } else {
      alert("only 8 todos is allowed!");
    }
  };

  const clearTodos = () => !showAdd && setTodos([]);

  const completeTodo = (index) => {
    const addedTodo = [...todos];

    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;
    setTodos(addedTodo);
  };

  const showAddToogle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Header
        showAddToogle={showAddToogle}
        showAdd={showAdd}
        clearTodos={clearTodos}
      />

      <TodoForm addTodo={addTodo} showAdd={showAdd} />

      <Todos todos={todos} completeTodo={completeTodo} />
    </Paper>
  );
};

export default TodoList;
