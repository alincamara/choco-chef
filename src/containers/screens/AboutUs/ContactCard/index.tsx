import React, { ReactElement } from 'react'
import join from 'classnames'
import './index.css'

interface Props {
  className?: string
  imageLInk?: string
  title: string
  subtitle: string
  description: string
  descriptionSubtitle: string
}

export const ContactCard = (props: Props): ReactElement => {
  const {
    className,
    title,
    subtitle,
    description,
    descriptionSubtitle,
    imageLInk,
  } = props

  return (
    <div className={join('myCard', className)}>
      <div className="lines"></div>
      <div className="imgbx">
        <img src={imageLInk} className="avatarPhoto" alt="avatarPhoto" />
      </div>
      <div className="content">
        <div className="details">
          <h2>
            {title}
            <span>{subtitle}</span>
          </h2>
          <div className="description">
            <div className="descriptionText">{description}</div>
            <div className="descriptionSubtitle">{descriptionSubtitle}</div>
          </div>
          {/* <div className="actionBtn">
              <button>{'Follow'}</button>
              <button>{'Message'}</button>
            </div> */}
        </div>
      </div>
    </div>
  )
}

export default ContactCard
