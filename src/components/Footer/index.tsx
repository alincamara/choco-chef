import React, { ReactElement } from 'react'

import './index.css'

export const Footer = (): ReactElement => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Choco Chef</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portofolio" className="footer__link">
              Portofolio
            </a>
          </li>
          <li>
            <a href="#reviews" className="footer__link">
              Reviews
            </a>
          </li>
        </ul>
        <div className="footer__social">
          <a
            href="https://www.facebook.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.pinterest.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-pinterest"></i>
          </a>

          <a
            href="https://www.youtube.com"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-youtube"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; alincamara. All rights reserved
        </span>
      </div>
    </footer>
  )
}

export default Footer
