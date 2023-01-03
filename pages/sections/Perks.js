import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import styles from "../../styles/perks.module.css";
import perks from "../../data/perks";
import PerkCard from "../../components/PerkCard";
import perksImg from "../../images/perks.jpg";

const Perks = () => {
  const perkCards = perks.map((obj) => (
    <PerkCard
      key={obj.id}
      id={obj.id}
      title={obj.title}
      description={obj.description}
      styles={styles}
    />
  ));
  return (
    <section className={styles.perks}>
      <div className={styles.retainer}>
        <Image
          src={perksImg}
          alt="man in a red sweater"
          className={styles.image}
        />
        <div className={styles.content}>
          <h2>Enjoy The Perks</h2>
          <div className={styles.cards}>{perkCards}</div>
          <button>Get started</button>
        </div>
      </div>
    </section>
  );
};

export default Perks;
