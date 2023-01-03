import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faSackDollar, faCouch, faClock } from '@fortawesome/free-solid-svg-icons'

const PerkCard = ({id, title, description, styles}) => {
  return (
    <div className={styles.perkCard}>
        <FontAwesomeIcon icon={id === 1 ? faGift : id === 2 ? faSackDollar : id === 3 ? faCouch : faClock} className={styles.faIcon}/>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default PerkCard