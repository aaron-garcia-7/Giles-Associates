import React from "react";
// import { Link } from "react-scroll";
import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.retainer}>
        <h6 className={styles.copyright}>Grovewood Therapy © 2023</h6>
        <div className={styles.contactBlock}>
          <a href="">
            123 Example Dr.
            <br /> Lehi, UT 84043
          </a>
          <a href="">(801) 123-4567</a>
        </div>
        <a href="" className={styles.credits}>
          Made with <FontAwesomeIcon icon={faHeart} className={styles.heart} />{" "}
          by Aaron Garcia
        </a>
      </div>
    </footer>
  );
};

export default Footer;
