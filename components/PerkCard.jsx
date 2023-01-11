import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PerkCard = ({id, title, description, icon, styles}) => {
  return (
    <div className={styles.perkCard} id="perks">
        <FontAwesomeIcon icon={icon} className={styles.faIcon}/>
        <h4>{title}</h4>
        <p>{description}</p>
    </div>
  )
}

export default PerkCard