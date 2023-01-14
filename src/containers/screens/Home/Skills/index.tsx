import React, { ReactElement } from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io5'
import * as GiIcons from 'react-icons/gi'
import photo10 from '../../../../styles/images/photo10.jpg'

import './index.css'

export const Skills = (): ReactElement => {
  return (
    <div className="skills">
      <div className="skill">
        <FaIcons.FaHeart className="skillIcons" />
        <div className="skillTitle">{'Pasiune'}</div>
      </div>
      <div className="skill">
        <GiIcons.GiCupcake className="skillIcons" />
        <div className="skillTitle">{'Perseverenta'}</div>
      </div>
      <div className="skill">
        <GiIcons.GiCakeSlice className="skillIcons" />
        <div className="skillTitle">{'Promtitudine'}</div>
      </div>
    </div>
  )
}

export default Skills
