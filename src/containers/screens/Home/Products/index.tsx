import React, { ReactElement } from 'react'
import join from 'classnames'
import photo09 from '../../../../styles/images/photo09.jpg'
import photo07 from '../../../../styles/images/photo07.jpg'
import photo08 from '../../../../styles/images/photo08.jpg'
import photo10 from '../../../../styles/images/photo10.jpg'
import Product from './Product'
import './index.css'

interface Props {
  className?: string
}

const handleProduct1Click = () => {
  console.log('click aici.... 1')
}

const handleProduct2Click = () => {
  console.log('click aici....2')
}

const handleProduct3Click = () => {
  console.log('click aici....3')
}

const handleProduct4Click = () => {
  console.log('click aici....4')
}

const handleProduct5Click = () => {
  console.log('click aici....5')
}

export const Products = (props: Props): ReactElement => {
  const { className } = props
  return (
    <div className={join('products', className)}>
      <div className="smallProductsWrapper">
        <Product
          name="Choux au craquelin"
          price="$100"
          onClick={handleProduct1Click}
        />
        <Product
          name="Apple Pie"
          price="$50"
          photo={photo09}
          onClick={handleProduct2Click}
        />
        <Product
          name="Cookies"
          price="$80"
          photo={photo08}
          onClick={handleProduct3Click}
        />
        <Product
          name="Bicolor croisants"
          price="$45"
          photo={photo10}
          onClick={handleProduct4Click}
        />
      </div>
      <Product
        name="Banana bread"
        price="$70"
        bigPhoto
        photo={photo07}
        onClick={handleProduct5Click}
      />
    </div>
  )
}

export default Products
