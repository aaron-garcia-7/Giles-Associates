import React from "react";
import styles from "../../styles/whyUs.module.css";

const WhyUs = () => {
  return (
    <section className={styles.whyUs} id="whyUs">
      <div className={styles.retainer}>
        <h2>
          Why Choose <br /> <em className={styles.em}>Giles & Associates</em>
        </h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          soluta deleniti atque id nemo quia blanditiis saepe aut est placeat
          facilis. Saepe aut, accusamus asperiores eveniet earum doloremque!
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
