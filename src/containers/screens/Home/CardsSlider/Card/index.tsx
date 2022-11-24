import React, { ReactElement } from 'react'
import photo1 from '../../../../../styles/images/photo02.jpg'
import './index.css'

interface Props {
  name?: string
  price?: string
  photo?: string
  onClick?: () => void
}

export const Card = (props: Props): ReactElement => {
  const { name, price, photo, onClick } = props

  const handleCardClick = () => {
    onClick && onClick()
  }

  return (
    <div className="card" onClick={handleCardClick}>
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

export default Card
