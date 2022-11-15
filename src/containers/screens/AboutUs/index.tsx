import React, { ReactElement } from 'react'
import join from 'classnames'
import kriszto from '../../../styles/images/kriszto.jpg'
import bronto from '../../../styles/images/bronto.jpg'
import ContactCard from './ContactCard'
import './index.css'

interface Props {
  className?: string
}

export const About = (props: Props): ReactElement => {
  const { className } = props

  return (
    <div className={join('about', className)}>
      <ContactCard
        title={'Kriszta Schmidt'}
        subtitle={'Psychologist'}
        description={
          'The more you know yourself, the more patience you have for what you see in others.'
        }
        descriptionSubtitle={'Erik Erikson'}
        imageLInk={kriszto}
      />

      <ContactCard
        title={'Alin Camară'}
        subtitle={'FrontEnd Developer'}
        description={
          'Success consists of going from failure to failure without loss of enthusiasm.'
        }
        descriptionSubtitle={'Winston Churchill'}
        imageLInk={bronto}
      />
    </div>
  )
}

export default About
