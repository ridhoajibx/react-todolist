import React from "react";
import Todo from "./Todo";

const Todos = () => {
  const todos = [
    {
      text: "Learn React JS"
    }
  ];
  return (
    <section className="todos">
      {todos.map((todo) => {
        return <Todo text={todo.text} />;
      })}
    </section>
  );
};

export default Todos;
