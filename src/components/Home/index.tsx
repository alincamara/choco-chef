import React, { ReactElement } from 'react'

import './index.css'
import Me from '../../assets/avatar-1.svg'
import HeaderSocials from './HeaderSocials'
import ScrollDown from './ScrollDown'
import Shapes from './Shapes'

export const Home = (): ReactElement => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src={Me} alt="" className="home__img" />
        <h1 className="home__name">Alin Camara</h1>
        <span className="home__education">I'm a Front-End developer</span>

        <HeaderSocials />

        <a href="#contact" className="btn">
          Hire Me
        </a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  )
}

export default Home
