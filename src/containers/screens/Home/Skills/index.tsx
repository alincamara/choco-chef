import React, { ReactElement } from 'react'
import photo10 from '../../../../styles/images/photo10.jpg'

import './index.css'

export const Skills = (): ReactElement => {
  return (
    <div className="skills">
      <div className="skill">
        <div className="imgWrapper">
          <img src={photo10} className="photo101" alt="photo10" />
        </div>
        <div className="skillTitle">{'Hight Quality'}</div>
      </div>
      <div className="skill">
        <div className="imgWrapper">
          <img src={photo10} className="photo101" alt="photo10" />
        </div>
        <div className="skillTitle">{'Hight Quality'}</div>
      </div>
      <div className="skill">
        <div className="imgWrapper">
          <img src={photo10} className="photo101" alt="photo10" />
        </div>
        <div className="skillTitle">{'Hight Quality'}</div>
      </div>
    </div>
  )
}

export default Skills
