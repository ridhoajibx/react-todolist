import React from "react";
import PropTypes from "prop-types";

// props adalah sebuah object yg berisi sbuah children

const Paper = ({ children }) => {
  return (
    <div className="container">
      <div className="frame">{children}</div>
    </div>
  );
};

Paper.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Paper;
