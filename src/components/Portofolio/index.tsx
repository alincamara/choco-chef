import React, { ReactElement, useState } from 'react'

import './index.css'
import Menu from './Menu'

export const Portofolio = (): ReactElement => {
  const [items, setItems] = useState(Menu)

  const filterItem = (categoryItem: any) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem?.category === categoryItem
    })
    setItems(updatedItems)
  }

  const [toggleState, setToggleState] = useState(0)

  const toggleTab = (index) => {
    setToggleState(index)
  }

  return (
    <section className="work container section" id="portofolio">
      <h2 className="section__title">Recent Works</h2>
      <div className="work__filters">
        <span className="work__item" onClick={() => setItems(Menu)}>
          Everything
        </span>
        <span className="work__item" onClick={() => filterItem('Cakes')}>
          Cakes
        </span>
        <span className="work__item" onClick={() => filterItem('Choux')}>
          Choux
        </span>
        <span className="work__item" onClick={() => filterItem('Croissants')}>
          Croissants
        </span>
        <span className="work__item" onClick={() => filterItem('Gingerbread')}>
          Gingerbread
        </span>
      </div>

      <div className="work__container grid">
        {items.map((elem: any) => {
          const { id, image, title, category, link } = elem
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>

              <span className="work__category">{category}</span>
              <h3 className="work__title" onClick={() => toggleTab(1)}>
                {title}
              </h3>
              <a href={link} className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
      <div
        className={
          toggleState === 1 ? 'services__modal active-modal' : 'services__modal'
        }
      >
        <div className="services__modal-content">
          <i
            className="uil uil-times services__modal-close"
            onClick={() => toggleTab(0)}
          ></i>

          <h3 className="services__modal-title">Ui/Ux Designer</h3>
          <p className="services__modal-description">
            Service with more than r years of experience. Providing quality work
            to clients and companies.
          </p>
          <ul className="service__modal-services grid">
            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">Web page development</p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I create ux element interactions
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I develop the user interface
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I develop the user interface
              </p>
            </li>

            <li className="services__modal-service">
              <i className="uil uil-check-circle services__modal-icon"></i>
              <p className="services__modal-info">
                I develop the user interface
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Portofolio
