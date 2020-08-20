import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="container">
      <div className="frame">
        <section className="header">
          <button className="header-btn main-black-color active">Add</button>
          <h1 className="header-title">todo Lists</h1>
          <button className="header-btn main-red-color active">Clear</button>
        </section>

        <section className="add">
          <form className="add-form">
            <input className="add-input" type="text" name="" id="" />
            <button className="add-btn main-black-color active">Add</button>
          </form>
        </section>

        <section className="todos">
          <div className="todo">
            <span className="todo-text">Learning React!</span>
          </div>

          <div className="todo">
            <span className="todo-text">Learning React Hooks!</span>
          </div>

          <div className="todo">
            <span className="todo-text">Learning Styling in React!</span>
          </div>
        </section>
      </div>
    </div>
  );
}
