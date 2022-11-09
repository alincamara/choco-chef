import React, { ReactElement, useState } from 'react'
import photo1 from '../../../../styles/images/photo01.jpg'
import photo2 from '../../../../styles/images/photo02.jpg'
import photo3 from '../../../../styles/images/photo03.jpg'
import photo4 from '../../../../styles/images/photo04.jpg'
import photo5 from '../../../../styles/images/photo05.jpg'
import './index.css'

// interface Props {
//   className: string
// }

export const SlideShow = (): ReactElement => {
  const [selectedPictureId, setSelectedPictureId] = useState('1')

  const handlePhoto1 = () => {
    setSelectedPictureId('1')
  }

  const handlePhoto2 = () => {
    setSelectedPictureId('2')
  }

  const handlePhoto3 = () => {
    setSelectedPictureId('3')
  }

  const handlePhoto4 = () => {
    setSelectedPictureId('4')
  }

  const handlePhoto5 = () => {
    setSelectedPictureId('5')
  }

  return (
    <div className="slideShow">
      <div className="imageWrapper">
        {selectedPictureId === '1' && (
          <img src={photo1} className="pie" alt="pie" />
        )}
        {selectedPictureId === '2' && (
          <img src={photo2} className="pie" alt="pie" />
        )}
        {selectedPictureId === '3' && (
          <img src={photo3} className="pie" alt="pie" />
        )}
        {selectedPictureId === '4' && (
          <img src={photo4} className="pie" alt="pie" />
        )}
        {selectedPictureId === '5' && (
          <img src={photo5} className="pie" alt="pie" />
        )}
      </div>
      <div className="slideNav">
        <div className="circle" onClick={handlePhoto1}>
          <div className="smallCircle" />
        </div>
        <div className="circle" onClick={handlePhoto2}>
          <div className="smallCircle" />
        </div>
        <div className="circle" onClick={handlePhoto3}>
          <div className="smallCircle" />
        </div>
        <div className="circle" onClick={handlePhoto4}>
          <div className="smallCircle" />
        </div>
        <div className="circle" onClick={handlePhoto5}>
          <div className="smallCircle" />
        </div>
      </div>
    </div>
  )
}

export default SlideShow
