import React from "react";
import styles from "../../styles/callNow.module.css";

const CallNow = () => {
  return (
    <section className={styles.callNow} id="callNow">
      <div className={styles.retainer}>
        <h2 className="sectionTitle">Contact Us</h2>
        <p>
          Feel free to contact us for any questions. Our lines are open from
          8:00am to 6:00pm M-F. <br /> We look forward to speaking with you!
        </p>
        <a href="tel:8017854622" className={`${styles.callNowBtn} swiperBtn`}>
          (801) 785-4622
        </a>
      </div>
    </section>
  );
};

export default CallNow;
