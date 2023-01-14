import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'

const PerkCard = ({id, title1, title2, description, icon, styles}) => {
  return (
    <div className={styles.perkCard} id="perks">
        {/* <FontAwesomeIcon icon={icon} className={styles.faIcon}/> */}
        <Image src={icon} alt={icon} className={styles.perksImg}/>
        <div className='text'>
          <h4>{title1}</h4>
          <h4>{title2}</h4>
        </div>
        {/* <p>{description}</p> */}
    </div>
  )
}

export default PerkCard