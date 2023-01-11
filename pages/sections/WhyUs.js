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
        <h2>Our Offer</h2>
        <p>
          Practice Made Perfect makes it possible to have your own therapy
          practice without facing all of the usual debt and risk associated with
          getting started. Let us provide the furnished, modern office and
          expert mentorship so you can get to what matters most — therapy.
          Please fill out the form above to get started.
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
