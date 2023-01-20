import React, { ReactElement, useState } from 'react'

import Logo from '../../assets/logo.svg'

import './index.css'

export const Header = (): ReactElement => {
  const [toggle, showMenu] = useState(false)
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          ChocoChef
        </a>

        <div className="nav__menu">
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a href="#reviews" className="nav__link">
                <i className="uil uil-file-alt nav__icon"></i>Reviews
              </a>
            </li>

            <li className="nav__item">
              <a href="#portofolio" className="nav__link">
                <i className="uil uil-scenery nav__icon"></i>Portofolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#blog" className="nav__link">
                <i className="uil uil-briefcase-alt nav__icon"></i>Blog
              </a>
            </li>

            <li className="nav__item">
              <a href="" className="nav__link">
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>
          <i className="uil uil-times nav__close"></i>
        </div>
        <div className="nav__toggle">
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  )
}

export default Header
