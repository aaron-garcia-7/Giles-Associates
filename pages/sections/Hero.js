import React, { useState, useEffect } from "react";
import styles from "../../styles/hero.module.css";
import heroImg from "../../images/hero.jpg";
import Image from "next/image";

const Hero = () => {
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
    transform: `translate(0%, ${offset * 0.1}px)`,
  };
  // End Parallax
  return (
    <section className={styles.hero} id="hero">
      <Image
        src={heroImg}
        alt="man in red sweater smiling against a brick wall"
        className={styles.bgImg}
        style={parallaxStyle}
      />
      <div className={styles.retainer}>
        <div className={styles.contactForm}>
          <div className={styles.formHeader}>
            <h1>Practice Made Perfect</h1>
            <h4>Registration</h4>
            <p>
              Please fill out the form below to get started and{" "}
              <br className={styles.break} />
              we’ll reach out with more information!
            </p>
          </div>
          <form
            name="contact"
            method="post"
            action="/contact"
            className={styles.form}
            netlify="true"
            netlify-honeypot="bot-field"
            hidden
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.formBlock}>
              <input
                type="text"
                name="firstName"
                placeholder=" "
                required
                className={styles.input}
              />
              <label htmlFor="firstName" className={styles.label}>
                First Name
              </label>
            </div>
            <div className={styles.formBlock}>
              <input
                type="text"
                name="lastName"
                placeholder=" "
                required
                className={styles.input}
              />
              <label htmlFor="lastName" className={styles.label}>
                Last Name
              </label>
            </div>
            <div className={styles.formBlock}>
              <input
                type="email"
                name="email"
                placeholder=" "
                required
                className={styles.input}
              />
              <label htmlFor="email" className={styles.label}>
                Email Address
              </label>
            </div>
            <div className={styles.formBlock}>
              <input
                type="tel"
                name="phone"
                placeholder=" "
                required
                className={styles.input}
              />
              <label htmlFor="phone" className={styles.label}>
                Phone Number
              </label>
            </div>
            <select
              name="locationPreference"
              id="locationPreference"
              className={styles.select}
              required
            >
              <option defaultValue>Location of Interest</option>
              <option value="pleasantGrove">Pleasant Grove</option>
              <option value="lehi">Lehi</option>
              <option value="orem">Orem</option>
            </select>
            <button type="submit" className={styles.submit}>
              Request More Info
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
