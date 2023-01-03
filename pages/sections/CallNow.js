import React from "react";
import styles from "../../styles/callNow.module.css";

const CallNow = () => {
  return (
    <section className={styles.callNow} id="callNow">
      <div className={styles.retainer}>
        <h2>
          Call to Reserve <br /> Your Suite Now
        </h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore
          molestias, consectetur laudantium natus sapiente libero molestiae
          illum neque, a quam eos voluptatibus commodi autem.
        </p>
        <a href="" className={`${styles.callNowBtn} swiperBtn`}>
          (801) 123-4567
        </a>
      </div>
    </section>
  );
};

export default CallNow;
