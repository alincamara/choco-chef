import React, { ReactElement } from 'react'

import './index.css'

export const HeaderSocials = (): ReactElement => {
  return (
    <div className="home__socials">
      <a
        href="https://www.instagram.com/slimshady9403/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-instagram"></i>
      </a>

      <a
        href="https://www.youtube.com/@alincamara/"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-youtube"></i>
      </a>

      <a
        href="https://www.facebook.com/alincamara"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-facebook"></i>
      </a>
    </div>
  )
}

export default HeaderSocials
