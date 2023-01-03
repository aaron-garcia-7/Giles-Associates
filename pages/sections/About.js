import React from "react";
import Image from "next/image";
import aboutImg from "../../images/about.jpg";
import styles from "../../styles/about.module.css";

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.retainer}>
        <article className={styles.aboutText}>
          <h3>Learn More About Us</h3>
          <h2>Giles & Associates</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            provident sint esse at non quas dolor facilis aliquam adipisci
            molestiae maxime doloribus, repellat vitae neque. Voluptates
            perferendis quae qui quas vero, totam sequi commodi officia nihil
            laudantium in eos ea.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            fugiat quis quam rem magnam cumque libero? Nulla cumque, quaerat
            iure aperiam rem quibusdam quidem, delectus illum harum tempore
            facere sapiente tenetur deleniti, consequatur voluptatibus velit
            architecto quis doloribus et? Similique illo voluptates placeat
            delectus omnis porro.
          </p>
        </article>
        <Image
          src={aboutImg}
          alt="man in red sweater"
          className={styles.aboutImg}
        />
      </div>
    </section>
  );
};

export default About;
