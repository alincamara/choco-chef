import React, { ReactElement } from 'react'
import join from 'classnames'
import photo09 from '../../../../styles/images/photo09.jpg'
import photo08 from '../../../../styles/images/photo08.jpg'
import photo10 from '../../../../styles/images/photo10.jpg'
import { FaChevronCircleRight, FaChevronCircleLeft } from 'react-icons/fa'
import Card from './Card'
import './index.css'

interface Props {
  className?: string
}

export const Home = (props: Props): ReactElement => {
  const { className } = props

  const handleProduct1Click = () => {
    console.log('click aici.... 1')
  }

  const handleProduct2Click = () => {
    console.log('click aici....2')
  }

  const handleProduct3Click = () => {
    console.log('click aici....3')
  }

  return (
    <div className={join('cardsSlider', className)}>
      <Card
        name="Choux au craquelin"
        price="$100"
        onClick={handleProduct1Click}
      />
      <Card
        name="Apple Pie"
        price="$50"
        photo={photo09}
        onClick={handleProduct2Click}
      />
      <Card
        name="Cookies"
        price="$80"
        photo={photo08}
        onClick={handleProduct3Click}
      />
      {/* <Card name="Bicolor croisants" price="$45" photo={photo10} /> */}
      <FaChevronCircleRight className="chevron-right" />
      <FaChevronCircleLeft className="chevron-left" />
    </div>
  )
}

export default Home
