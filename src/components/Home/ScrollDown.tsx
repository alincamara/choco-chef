import React, { ReactElement } from 'react'

import './index.css'

export const ScrollDown = (): ReactElement => {
  return (
    <div className="scroll__down">
      <a href="#catalog" className="mouse__wrapper">
        <span className="home__scroll-name">Scroll Down</span>
        <span className="mouse">
          <span className="wheel"></span>
        </span>
      </a>
    </div>
  )
}

export default ScrollDown
