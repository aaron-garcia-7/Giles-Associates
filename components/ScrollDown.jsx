import React from 'react'
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const ScrollDown = ({fromTop}) => {

    const hiddenStyle = {
        opacity: 0,
        pointerEvents: 'none',
    }

  return (
        <div className="scrollDownDiv">
            <Link to="whyUs" 
            className="scrollDown"
            style={fromTop ? hiddenStyle : null}
            smooth={'easeInOutQuint'}
            duration={1200}
            delay={80}
            >
                Scroll For More
                <FontAwesomeIcon icon={faAngleDown} className="downChevron" />
            </Link>
        </div>
  )
}

export default ScrollDown