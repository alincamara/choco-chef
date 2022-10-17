import React, { ReactElement } from 'react'
import './index.css'

export const Tabs = (): ReactElement => {
  return (
    <div className="tabs">
      <div className="tab">Cakes</div>
      <div className="tab">Cookies</div>
      <div className="tab">Choux</div>
      <div className="tab">Brownies</div>
    </div>
  )
}

export default Tabs
