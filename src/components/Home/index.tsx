import React, { ReactElement } from 'react'

import './index.css'
import Logo from '../../assets/logo.png'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'

export const Home = (): ReactElement => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Logo} alt="" className="home__img" />
        <h1 className="home__name">Choco Chef</h1>
        <span className="home__education">We Design Delicious</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Shop Now
        </a>

        <ScrollDown />
      </div>
    </section>
  )
}

export default Home
