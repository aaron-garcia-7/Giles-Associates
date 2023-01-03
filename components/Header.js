import React from "react";
import { Link } from "react-scroll";
import styles from "../styles/header.module.css";

const Header = ({ fromTop, scrollDown }) => {
  const headerStyles = {
    transform:
      fromTop && scrollDown ? "translate(0, -100%)" : "translate(0, 0)",
  };

  return (
    <header className={styles.header} style={headerStyles}>
      <div className={styles.retainer}>
        <h1>Giles & Associates</h1>
        <ul className={styles.navLinks}>
          <li>
            <Link
              to="whyUs"
              smooth={"easeInOutQuint"}
              duration={800}
              delay={60}
            >
              Why Us
            </Link>
          </li>
          <li>
            <Link
              to="perks"
              smooth={"easeInOutQuint"}
              duration={800}
              delay={60}
            >
              Perks
            </Link>
          </li>
          <li>
            <Link
              to="locations"
              smooth={"easeInOutQuint"}
              duration={800}
              delay={60}
            >
              Location
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={"easeInOutQuint"}
              duration={800}
              delay={60}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="callNow"
              smooth={"easeInOutQuint"}
              duration={800}
              delay={100}
            >
              Call Now
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
