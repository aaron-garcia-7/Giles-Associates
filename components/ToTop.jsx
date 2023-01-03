import React from 'react'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ToTop = ({fromTop}) => {

    const activeStyle = {
        opacity: 1,
        pointerEvents: 'all',
        transform: 'translate(0, 0)',
        transitionDelay: '1s',
    }

  return (
        <Link to="top" 
        className="toTop"
        style={fromTop ? activeStyle : null}
        smooth={'easeInOutQuint'}
        duration={800}
        delay={40}
        >
            <FontAwesomeIcon icon={faAngleUp} className="upChevron" />
        </Link>
  )
}

export default ToTop