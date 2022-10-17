import React, { ReactElement } from 'react'
import pie from '../../../../styles/images/photo01.jpg'
import './index.css'

// interface Props {
//   className: string
// }

export const SlideShow = (): ReactElement => {
  return (
    <div className="slideShow">
      <div className="imageWrapper">
        <img src={pie} className="pie" alt="pie" />
      </div>
      <div className="slideNav">
        <div className="circle">
          <div className="smallCircle" />
        </div>
        <div className="circle">
          <div className="smallCircle" />
        </div>
        <div className="circle">
          <div className="smallCircle" />
        </div>
        <div className="circle">
          <div className="smallCircle" />
        </div>
        <div className="circle">
          <div className="smallCircle" />
        </div>
      </div>
    </div>
  )
}

export default SlideShow
