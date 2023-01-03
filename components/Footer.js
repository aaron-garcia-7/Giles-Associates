import React from "react";
import { Link } from "react-scroll";
import styles from "../styles/footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.retainer}>
        <div className={styles.topFooter}>
          <nav>
            <h4>Navigation</h4>
            <Link
              to="hero"
              smooth={"easeInOutQuint"}
              duration={800}
              delay={100}
            >
              Get Started &gt;
            </Link>
            <Link
              to="whyUs"
              smooth={"easeInOutQuint"}
              duration={800}
              delay={100}
              offset={-60}
            >
              Why Us &gt;
            </Link>
            <Link
              to="perks"
              smooth={"easeInOutQuint"}
              duration={800}
              delay={100}
              offset={-60}
            >
              Perks &gt;
            </Link>
            <Link
              to="locations"
              smooth={"easeInOutQuint"}
              duration={800}
              delay={100}
              offset={-60}
            >
              Locations &gt;
            </Link>
            <Link
              to="about"
              smooth={"easeInOutQuint"}
              duration={800}
              delay={100}
              offset={-60}
            >
              About &gt;
            </Link>
          </nav>
          <aside>
            <h4>Locations</h4>
            <div className={styles.content}>
              <div className={styles.contactBlock}>
                <h5>Lehi, UT</h5>
                <a href="">
                  150 W 400 E, <br /> Lehi, UT 84043
                </a>
                <a href="">Phone: (801) 456-7890</a>
                {/* <div className={styles.social}>
                  <h6>Follow Us</h6>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className={styles.socialIcons}
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={styles.socialIcons}
                  />
                </div> */}
              </div>
              <div className={styles.contactBlock}>
                <h5>Orem, UT</h5>
                <a href="">
                  200 S 500 E, <br /> Orem, UT 84097
                </a>
                <a href="">Phone: (801) 123-4567</a>
                {/* <div className={styles.social}>
                  <h6>Follow Us</h6>
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className={styles.socialIcons}
                  />
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className={styles.socialIcons}
                  />
                </div> */}
              </div>
            </div>
          </aside>
          <div className={styles.socialMedia}>
            <h4>Follow Us</h4>
            <FontAwesomeIcon
              icon={faFacebookF}
              className={styles.socialIcons}
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className={styles.socialIcons}
            />
          </div>
        </div>
        <div className={styles.bottomFooter}>
          <h6>Giles & Associates © 2023</h6>
          <a href="">
            Made with{" "}
            <FontAwesomeIcon icon={faHeart} className={styles.heart} /> by Aaron
            Garcia
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
