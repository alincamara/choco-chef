import React, { ReactElement } from 'react'
import photo09 from '../../../../styles/images/photo09.jpg'
import photo07 from '../../../../styles/images/photo07.jpg'
import photo08 from '../../../../styles/images/photo08.jpg'
import photo10 from '../../../../styles/images/photo10.jpg'
import Product from './Product'
import './index.css'

export const Products = (): ReactElement => {
  return (
    <div className="products">
      <div className="smallProductsWrapper">
        <Product name="Choux au craquelin" price="$100" />
        <Product name="Apple Pie" price="$50" photo={photo09} />
        <Product name="Cookies" price="$80" photo={photo08} />
        <Product name="Bicolor croisants" price="$45" photo={photo10} />
      </div>
      <Product name="Banana bread" price="$70" bigPhoto photo={photo07} />
    </div>
  )
}

export default Products
