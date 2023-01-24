import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles/locations.module.css";
import gallery1 from "../../images/gallery1.jpg";
import gallery2 from "../../images/gallery2.jpg";
import gallery3 from "../../images/gallery3.jpg";
import gallery4 from "../../images/gallery4.jpg";
import abstractImg from "../../images/abstract2.svg";

const Locations = () => {
  // Parallax Effect
  const [offset, setOffset] = useState(0);
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", parallaxScroll);
    return () => window.removeEventListener("scroll", parallaxScroll);
  }, [offset]);

  const parallaxStyle1 = {
    transform: `translate(50%, ${offset * 0.06}px)`,
  };
  const parallaxStyle2 = {
    transform: `translate(-50%, ${offset * 0.06}px)`,
  };
  // End Parallax
  return (
    <section className={styles.locations} id="locations">
      <div className={styles.retainer}>
        <div className={styles.locationsTitle}>
          <h2 className="sectionTitle">Location is Key</h2>
          <p>
            This beautiful office location is just off I-15 Exit 275 in Pleasant
            Grove. It has been an established therapy location for private
            practice since it was built in 2009. It has beautiful views, lots of
            natural light and is fully furnished. Clients who live anywhere from
            Sandy to Payson can get to the office in less than 30 minutes.
          </p>
        </div>
        <div className={styles.gallery}>
          <Image
            src={gallery1}
            alt="Office Entrance"
            className={styles.galleryImg}
          />
          <Image
            src={gallery2}
            alt="Office Entrance"
            className={styles.galleryImg}
          />
          <Image
            src={gallery3}
            alt="Office Lobby"
            className={styles.galleryImg}
          />
          <Image
            src={gallery4}
            alt="Session Room"
            className={styles.galleryImg}
          />
        </div>
        <Link
          to="hero"
          smooth={"easeInOutQuint"}
          duration={800}
          delay={100}
          className={`${styles.locationsBtn} swiperBtn`}
        >
          Send Inquiry Now
          <FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
        </Link>
      </div>
      <Image
        src={abstractImg}
        alt=""
        className={styles.abstract1}
        style={parallaxStyle1}
      />
      <Image
        src={abstractImg}
        alt=""
        className={styles.abstract2}
        style={parallaxStyle2}
      />
    </section>
  );
};

export default Locations;
