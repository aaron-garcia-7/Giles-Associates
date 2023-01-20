import React, { useState, useEffect } from "react";
import styles from "../../styles/hero.module.css";
import heroImg from "../../images/hero.jpg";
import Image from "next/image";
import ScrollDown from "../../components/ScrollDown";

const Hero = ({ fromTop }) => {
  // Parallax Effect
  const [offset, setOffset] = useState(0);
  const parallaxScroll = () => {
    setOffset(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", parallaxScroll);
    return () => window.removeEventListener("scroll", parallaxScroll);
  }, []);

  const parallaxStyle = {
    // transform: `translate(0%, ${offset * 0.1}px)`,
    transform: `translate(0%, ${offset * 0.2}px)`,
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
            <h1 className={styles.monterrat}>Practice Made Perfect</h1>
            <h4>
              A Launch Point for Therapists <br className={styles.break} /> in
              private practice
            </h4>
            <p className={styles.altp}>
              Fill out the form below to schedule a call.
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
            <div className={styles.messageDiv}>
              <textarea
                name="availability"
                id=""
                placeholder=" "
                className={styles.textarea}
                required
              ></textarea>
              <label
                htmlFor="availability"
                className={`${styles.label} ${styles.textLabel}`}
              >
                Available Time / Questions
              </label>
            </div>
            <button type="submit" className={styles.submit}>
              Send Inquiry Now
            </button>
          </form>
        </div>
        <ScrollDown fromTop={fromTop} />
      </div>
    </section>
  );
};

export default Hero;
