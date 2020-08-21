import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToogle, showAdd, clearTodos }) => {
  return (
    <section className="header">
      <button
        className="header-btn main-black-color active"
        onClick={showAddToogle}
      >
        {/* This is ternarry operator for showAdd state props */}
        {showAdd ? "Finish" : "Add"}
      </button>
      <h1 className="header-title">todo Lists</h1>
      <button className="header-btn main-red-color active" onClick={clearTodos}>
        Clear
      </button>
    </section>
  );
};

Header.propTypes = {
  showAddToogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
