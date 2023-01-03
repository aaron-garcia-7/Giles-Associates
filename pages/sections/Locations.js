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
    transform: `translate(50%, ${offset * 0.04}px)`,
  };
  const parallaxStyle2 = {
    transform: `translate(-50%, ${offset * 0.04}px)`,
  };
  // End Parallax
  return (
    <section className={styles.locations} id="locations">
      <div className={styles.retainer}>
        <div className={styles.locationsTitle}>
          <h2>
            Live The <br />
            Suite Life
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            tempore, perferendis voluptas non itaque ipsum sint doloribus quam
            dolores omnis esse molestias fugiat at magni inventore sapiente
            excepturi et quod sed? Consectetur ipsum ex sapiente deleniti!
          </p>
        </div>
        <div className={styles.gallery}>
          <Image src={gallery1} alt="" className={styles.galleryImg} />
          <Image src={gallery2} alt="" className={styles.galleryImg} />
          <Image src={gallery3} alt="" className={styles.galleryImg} />
          <Image src={gallery4} alt="" className={styles.galleryImg} />
        </div>
        <Link
          to="hero"
          smooth={"easeInOutQuint"}
          duration={800}
          delay={100}
          className={`${styles.locationsBtn} swiperBtn`}
        >
          Get started
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
