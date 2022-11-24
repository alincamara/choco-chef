import React, { ReactElement } from 'react'

import photo1 from '../../../../../styles/images/photo02.jpg'
import './index.css'

interface Props {
  name?: string
  price?: string
  bigPhoto?: boolean
  photo?: string
  onClick?: () => void
}

export const Product = (props: Props): ReactElement => {
  const { name, price, photo, bigPhoto, onClick } = props

  const handleProductClick = () => {
    onClick && onClick()
  }

  return (
    <>
      {bigPhoto ? (
        <div className="bigProduct" onClick={handleProductClick}>
          <div className="photo">
            <img
              src={photo ? photo : photo1}
              className="bigPhoto"
              alt="bigPhoto"
            />
          </div>
          <div className="info">
            <span>{name}</span>
            <span>{price}</span>
          </div>
        </div>
      ) : (
        <div className="product" onClick={handleProductClick}>
          <div className="photo">
            <img src={photo ? photo : photo1} className="photo1" alt="photo1" />
          </div>
          <div className="info">
            <span>{name}</span>
            <span>{price}</span>
          </div>
        </div>
      )}
    </>
  )
}

export default Product
