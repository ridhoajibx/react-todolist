import React from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";

import styles from "./header.module.css";

const Header = ({ showAddToogle, showAdd, clearTodos }) => {
  return (
    <section className={styles.header}>
      <Button onCLick={showAddToogle} text={showAdd ? "Finish" : "Add"} />

      <h1 className={styles.headerTitle}>todo List</h1>

      <Button color="red" onCLick={clearTodos} text="Clear" align="right" />
    </section>
  );
};

Header.propTypes = {
  showAddToogle: PropTypes.func.isRequired,
  showAdd: PropTypes.bool.isRequired,
  clearTodos: PropTypes.func.isRequired
};

export default Header;
