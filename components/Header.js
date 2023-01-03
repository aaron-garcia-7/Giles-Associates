import React from "react";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.retainer}>
        <h1>Giles & Associates</h1>
        <ul className={styles.navLinks}>
          <li>
            <a href="">Why Us</a>
          </li>
          <li>
            <a href="">Perks</a>
          </li>
          <li>
            <a href="">Location</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Call Now</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
