import React from "react";
import PropTypes from "prop-types";

const Header = ({ showAddToogle }) => {
  return (
    <section className="header">
      <button
        className="header-btn main-black-color active"
        onClick={showAddToogle}
      >
        Add
      </button>
      <h1 className="header-title">todo Lists</h1>
      <button className="header-btn main-red-color active">Clear</button>
    </section>
  );
};

Header.propTypes = {
  showAddToogle: PropTypes.func.isRequired
};

export default Header;
