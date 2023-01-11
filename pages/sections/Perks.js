import Image from "next/image";
import React from "react";
import { Link } from "react-scroll";
import styles from "../../styles/perks.module.css";
import perks from "../../data/perks";
import PerkCard from "../../components/PerkCard";
import perksImg from "../../images/perks.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Perks = () => {
  const perkCards = perks.map((obj) => (
    <PerkCard
      key={obj.id}
      id={obj.id}
      title={obj.title}
      description={obj.description}
      icon={obj.icon}
      styles={styles}
    />
  ));
  return (
    <section className={styles.perks} id="perks">
      <div className={styles.retainer}>
        <Image
          src={perksImg}
          alt="man in a red sweater"
          className={styles.image}
        />
        <div className={styles.content}>
          {/* <h2>What We Offer</h2> */}
          <h2>The Benefits</h2>
          <div className={styles.cards}>{perkCards}</div>
          <Link
            to="hero"
            smooth={"easeInOutQuint"}
            duration={800}
            delay={100}
            className="swiperBtn"
          >
            Send Inquiry Now
            <FontAwesomeIcon icon={faChevronRight} className={styles.chevron} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Perks;
