import React, { ReactElement } from 'react'
import photo1 from '../../../../../styles/images/photo02.jpg'
import './index.css'

interface Props {
  name?: string
  price?: string
  oldPrice?: string
  photo?: string
  onClick?: () => void
}

export const Card = (props: Props): ReactElement => {
  const { name, price, photo, oldPrice, onClick } = props

  const handleCardClick = () => {
    onClick && onClick()
  }

  return (
    <div className="product-card">
      <div className="product-image">
        <span className="discount-tag">50% off</span>
        <img src={photo ? photo : photo1} className="product-thumb" alt="" />
        <button className="card-btn">add to wishlist</button>
      </div>
      <div className="product-info">
        <h2 className="product-brand">{name}</h2>
        {/* <p className="product-short-description">
          a short line about the cloth..
        </p> */}
        <span className="price">{price}</span>
        <span className="actual-price">{oldPrice}</span>
      </div>
    </div>
  )
}

export default Card
