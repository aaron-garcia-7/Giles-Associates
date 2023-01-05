import { useState, useEffect } from "react";
import Image from "next/image";
import React from "react";
import styles from "../../styles/whyUs.module.css";
import abstractImg from "../../images/abstract2.svg";

const WhyUs = () => {
  // Parallax Effect
  const [offset, setOffset] = useState(0);
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", parallaxScroll);
    return () => window.removeEventListener("scroll", parallaxScroll);
  }, [offset]);

  const parallaxStyle = {
    transform: `translate(-50%, ${offset * 0.06}px)`,
  };
  // End Parallax
  return (
    <section className={styles.whyUs} id="whyUs">
      <div className={styles.retainer}>
        <h2>
          Why Choose <br /> <em className={styles.em}>Practice Made Perfect</em>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          soluta deleniti atque id nemo quia blanditiis saepe aut est placeat
          facilis. Saepe aut, accusamus asperiores eveniet earum doloremque!
        </p>
      </div>
      <Image
        src={abstractImg}
        alt=""
        className={styles.abstract}
        style={parallaxStyle}
      />
    </section>
  );
};

export default WhyUs;
