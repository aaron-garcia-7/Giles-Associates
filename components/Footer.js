import React from "react";
import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.retainer}>
        <h6 className={styles.copyright}>Practice Made Perfect © 2023</h6>
        <a
          href="https://goo.gl/maps/8ahSbvoMhkSyWGGTA"
          target="_blank"
          rel="noreferrer"
          className={styles.address}
        >
          233 S. Pleasant Grove Blvd.
          <br /> Pleasant Grove, UT 84062
        </a>
        <a
          href="https://aarongarciacreative.com/"
          target="_blank"
          rel="noreferrer"
          className={styles.credits}
        >
          Made with <FontAwesomeIcon icon={faHeart} className={styles.heart} />
          by Aaron Garcia
        </a>
      </div>
    </footer>
  );
};

export default Footer;
