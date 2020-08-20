import React from "react";

const Header = () => {
  return (
    <section className="header">
      <button className="header-btn main-black-color active">Add</button>
      <h1 className="header-title">todo Lists</h1>
      <button className="header-btn main-red-color active">Clear</button>
    </section>
  );
};

export default Header;
