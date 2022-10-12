import React, { ReactElement } from 'react'
import './index.css'

export const Home = (): ReactElement => {
  return (
    <div className="home">
      <div className="topWrapper">
        <div className="logoWrapper">Logo</div>
        <div className="slideShow">Slide Show</div>
      </div>
      <div className="catalog">
        <div className="title">Catalog</div>
        <div className="tabs">Tabs</div>
        <div className="products">Products</div>
      </div>
    </div>
  )
}

export default Home
