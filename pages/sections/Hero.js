import React from "react";
import styles from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.retainer}>
        <div className={styles.contactForm}>
          <div className={styles.formHeader}>
            <h1>Get Started</h1>
            <h4>It’s that simple</h4>
            <p>
              Please fill out the form below to get started and <br />
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
