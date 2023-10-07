import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : null)}
          to="/"
          end
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.active : null)}
          to="/products"
        >
          Products
        </NavLink>
      </ul>
    </nav>
  );
};

export default Header;
