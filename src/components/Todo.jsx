import React from "react";
import PropTypes from "prop-types";

// props adalah sebuah object yg berisi sbuah children

const Todo = (props) => {
  return (
    <div className="todo">
      <div className="todo-text">{props.text}</div>
    </div>
  );
};

Todo.PropTypes = {
  text: PropTypes.string.isRequired
};

export default Todo;
