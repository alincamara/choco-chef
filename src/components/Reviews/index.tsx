import React, { ReactElement } from 'react'
import './index.css'
import Image1 from '../../assets/avatar-1.svg'
import Image3 from '../../assets/avatar-3.svg'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const data = [
  {
    id: 1,
    image: Image1,
    title: 'Petru Popescu',
    subtitle: 'Product Manager at Sykes',
    comment:
      'Choco Chef truly has a talent for creating mouth-watering pastries and breads that are not only visually appealing but also bursting with flavor.',
  },
  {
    id: 2,
    image: Image3,
    title: 'Tatiana Sarbu',
    subtitle: 'Software Developer at IBM',
    comment:
      'I highly recommend ChocoChef for anyone looking for delicious pastries delivered straight to their door.',
  },

  {
    id: 3,
    image: Image3,
    title: 'Iulia Balaban',
    subtitle: 'Vloger at Youtube',
    comment:
      "I especially loved the chocolate pastries and couldn't stop myself from having one more bite.",
  },

  {
    id: 4,
    image: Image1,
    title: 'Tatiana Sarbu',
    subtitle: 'Song Writer at Ho Ho Ho',
    comment:
      'The pastries arrived on time and were packaged with care to ensure they arrived in perfect condition.',
  },
]

export const Reviews = (): ReactElement => {
  return (
    <section className="testimonials container section" id="reviews">
      <h2 className="section__title">Clients & Reviews</h2>

      <Swiper
        className="testimonials__container grid"
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
      >
        {data.map(({ id, image, title, subtitle, comment }) => {
          return (
            <SwiperSlide className="testimonial__item" key={id}>
              <div className="thumb">
                <img src={image} alt="" />
              </div>
              <h3 className="testimonials__title">{title}</h3>
              <span className="subtitle">{subtitle}</span>
              <div className="comment">{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Reviews
