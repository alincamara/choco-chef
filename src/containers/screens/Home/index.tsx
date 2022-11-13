import React, { ReactElement } from 'react'
import logoHome from '../../../styles/images/logoColor.png'
import Products from './Products'
import SlideShow from './SlideShow'
import Skills from './Skills'
import Tabs from './Tabs'
import CardsSlider from './CardsSlider'
import './index.css'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

export const Home = (): ReactElement => {
  return (
    <div className="home">
      <div className="topWrapper">
        <div className="logoWrapper">
          <img src={logoHome} className="logoHome" alt="logoHome" />
          <div className="buttonsWrapper">
            <button className="shopNowBtn">Shop Now</button>
            <div className="socialMediaButtons">
              <FaFacebook className="socialIcon" />
              <FaInstagram className="socialIcon" />
              <IoMdMail className="socialIcon" />
            </div>
          </div>
        </div>
        <SlideShow />
      </div>
      <div className="catalog">
        <div className="title">Catalog</div>
        {/* <Tabs /> */}
        <CardsSlider className="cardsS" />
        <Products className="productsS" />
      </div>
      <div className="skillsWrapper">
        <div className="titleAdv">{'Our Advantages'}</div>
        <Skills />
      </div>
    </div>
  )
}

export default Home
