import React from "react";
import PropTypes from "prop-types";
import style from './paper.module.css';

// props adalah sebuah object yg berisi sbuah children

const Paper = ({ children }) => {
  return (
    <div className={ style.container }>
      <div className={ style.frame }>{children}</div>
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
