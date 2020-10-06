import React from "react";
import PropTypes from "prop-types";
import style from './todo.module.css';

// props adalah sebuah object yg berisi sbuah children

const Todo = ({ text, completeTodo, index, isCompleted }) => {
  return (
    <div className={ style.todo } onClick={() => completeTodo(index)}>
      <div
        className={ style.todoText }
        style={{ textDecoration: isCompleted ? "line-through" : "initial" }}
      >
        {text}
      </div>
    </div>
  );
};

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completeTodo: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isCompleted: PropTypes.bool.isRequired
};

export default Todo;
