import React, { ReactElement } from 'react'
import join from 'classnames'
import photo09 from '../../../../styles/images/photo09.jpg'
import photo08 from '../../../../styles/images/photo08.jpg'
import photo10 from '../../../../styles/images/photo10.jpg'
import photo07 from '../../../../styles/images/photo07.jpg'
import arrow from '../../../../styles/images/arrow.png'
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

  const handleProduct4Click = () => {
    console.log('click aici....4')
  }

  const handleProduct5Click = () => {
    console.log('click aici....4')
  }

  return (
    <section className={join('cardsSlider', className)}>
      <h2 className="product-category">best selling</h2>
      <div className={'cardContainer'}>
        <Card
          name="Choux"
          price="60 lei"
          oldPrice="50 lei"
          onClick={handleProduct1Click}
        />
        <Card
          name="Apple Pie"
          price="40 lei"
          oldPrice="50 lei"
          photo={photo09}
          onClick={handleProduct2Click}
        />
        <Card
          name="Cookies"
          price="20 lei"
          oldPrice="30 lei"
          photo={photo08}
          onClick={handleProduct3Click}
        />
        <Card
          name="Bicolor croisants"
          price="10 lei"
          oldPrice="12 lei"
          photo={photo10}
          onClick={handleProduct4Click}
        />
        <Card
          name="Banana Bread"
          price="15 lei"
          oldPrice="18 lei"
          photo={photo07}
          onClick={handleProduct5Click}
        />
        <button className="pre-btn">
          <img src={arrow} alt="" />
        </button>
        <button className="nxt-btn">
          <img src={arrow} alt="" />
        </button>
      </div>
    </section>
  )
}

export default Home
