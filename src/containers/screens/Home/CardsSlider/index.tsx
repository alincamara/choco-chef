import React, { ReactElement } from 'react'
import photo09 from '../../../../styles/images/photo09.jpg'
import photo08 from '../../../../styles/images/photo08.jpg'
import photo10 from '../../../../styles/images/photo10.jpg'
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa'
import Card from './Card'
import './index.css'

export const Home = (): ReactElement => {
  return (
    <>
      <div className="cardsSlider">
        <Card name="Choux au craquelin" price="$100" />
        <Card name="Apple Pie" price="$50" photo={photo09} />
        <Card name="Cookies" price="$80" photo={photo08} />
        <Card name="Bicolor croisants" price="$45" photo={photo10} />
        <FaChevronCircleRight className="chevron-right" />
        <FaChevronCircleLeft className="chevron-left" />
      </div>
    </>
  )
}

export default Home
