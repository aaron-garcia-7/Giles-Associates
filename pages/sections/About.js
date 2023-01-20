import React, { useState, useEffect } from "react";
import Image from "next/image";
import aboutImg from "../../images/about.jpg";
import styles from "../../styles/about.module.css";

const About = () => {
  const [offset, setOffset] = useState(0);

  const parallaxEffect = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", parallaxEffect);
    return () => window.removeEventListener("scroll", parallaxEffect);
  }, []);

  const parallaxStyle = {
    // transform: `translate(0%, ${offset * 0.1}px)`,
    transform: `translate(0%, ${offset * 0.08}px)`,
  };

  return (
    <section className={styles.about} id="about">
      <div className={styles.retainer}>
        <article className={styles.aboutText}>
          {/* <h3>Learn more about</h3> */}
          <h2 className="sectionTitle">About Us</h2>
          {/* <p>
            My name is Geret Giles. I’m a psychologist with a private practice
            in Pleasant Grove. Having built this practice over the years, I know
            how difficult (and expensive) it can be to start your own. I learned
            a lot of lessons the hard way. So, over the last decade I’ve
            developed a model of best practices to help other therapists, like
            me, succeed in building their own practice.
          </p> */}
          <p>
            Dr. Geret Giles successfully built his private therapy practice
            through years of experience. He knows, first hand, the challenges
            that can come with starting a business: How do you generate clients?
            How do you set your fees? What about taxes? He’s learned many
            lessons the hard way. So, he’s curated a model that he deems as the
            essentials—Practice Made Perfect, which is designed to help other
            therapists excel and thrive in private practice.
          </p>
        </article>
        <figure className={styles.aboutFigure}>
          <Image
            src={aboutImg}
            alt="Geret Giles in a white button up"
            className={styles.aboutImg}
            style={parallaxStyle}
          />
        </figure>
      </div>
    </section>
  );
};

export default About;
