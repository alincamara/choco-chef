import React, { ReactElement } from 'react'

import './index.css'
import Image1 from '../../assets/service-1.svg'
import Image2 from '../../assets/service-2.svg'
import Image3 from '../../assets/service-3.svg'

const data = [
  {
    id: 1,
    image: Image2,
    title: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  },
  {
    id: 2,
    image: Image3,
    title: 'Photography',
    description:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  },
  {
    id: 3,
    image: Image1,
    title: 'Videography',
    description:
      'Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.',
  },
]

export const Services = (): ReactElement => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map((service) => {
          const { id, image, title, description } = service
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title} </h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services
