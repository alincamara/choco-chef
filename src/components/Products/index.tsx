import React, { ReactElement } from 'react'
import './index.css'
import Image1 from '../../assets/choux-craquelin.jpg'
import Image2 from '../../assets/apple_pie.png'
import Image3 from '../../assets/choux.png'
import Image4 from '../../assets/banana_bread.png'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Choux au craquelin',
    subtitle: 'Un plus de savoare.',
  },
  {
    id: 2,
    image: Image2,
    title: 'Apple pie',
    subtitle: 'O nota aparte de prospetime',
  },

  {
    id: 3,
    image: Image3,
    title: 'Choux',
    subtitle: 'Vloger at Youtube',
  },

  {
    id: 4,
    image: Image4,
    title: 'Banana bread',
    subtitle: 'Song Writer at Ho Ho Ho',
  },
]

export const Products = (): ReactElement => {
  return (
    <section className="testimonials container section" id="products">
      <h2 className="section__title">Last Products</h2>

      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={0}
        slidesPerView={4}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="card-container">
                <img src={image} alt="" />
                <span className="cardTitle">{title}</span>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Products
