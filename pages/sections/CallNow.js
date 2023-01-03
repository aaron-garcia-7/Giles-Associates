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
          molestias, consectetur laudantium natus <br />
          sapiente libero molestiae illum neque, a quam eos voluptatibus commodi
          autem.
        </p>
        <div className={styles.btnsDiv}>
          <a href="" className={styles.btn1}>
            Lehi: (801) 456-7890
          </a>
          <a href="" className={styles.btn2}>
            Orem: (801) 123-4567
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallNow;
