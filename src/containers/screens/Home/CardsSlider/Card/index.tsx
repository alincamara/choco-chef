import React, { ReactElement } from 'react'
import photo1 from '../../../../../styles/images/photo02.jpg'
import './index.css'

interface Props {
  name?: string
  price?: string
  photo?: string
}

export const Product = (props: Props): ReactElement => {
  const { name, price, photo } = props
  return (
    <div className="product">
      <div className="photo">
        <img src={photo ? photo : photo1} className="photo1" alt="photo1" />
      </div>
      <div className="info">
        <span>{name}</span>
        <span>{price}</span>
      </div>
    </div>
  )
}

export default Product
